// Bất Động Sản - Công cụ tính toán
// Công thức trả góp đều (PMT) dùng chung với money/app.js:1409
(function (global) {
    'use strict';

    // ----- Helpers -----
    function num(id, fallback) {
        const el = document.getElementById(id);
        if (!el) return fallback;
        const v = parseFloat(String(el.value).replace(/,/g, ''));
        return Number.isFinite(v) ? v : fallback;
    }

    function clamp(v, min, max) {
        if (!Number.isFinite(v)) return min;
        return Math.min(Math.max(v, min), max);
    }

    // Định dạng theo quy ước tiếng Việt: dấu phẩy là dấu thập phân.
    function fmtVND(v) {
        if (!Number.isFinite(v)) return '—';
        const neg = v < 0;
        const a = Math.abs(v);
        const dec = x => x.toFixed(2).replace(/0+$/, '').replace(/\.$/, '').replace('.', ',');
        let s;
        if (a >= 1e9) s = dec(a / 1e9) + ' tỷ';
        else if (a >= 1e6) s = dec(a / 1e6) + ' triệu';
        else if (a >= 1e3) s = Math.round(a / 1e3).toLocaleString('vi-VN') + ' nghìn';
        else s = Math.round(a).toLocaleString('vi-VN') + ' đ';
        return (neg ? '−' : '') + s;
    }

    function fmtPct(v, digits) {
        if (!Number.isFinite(v)) return '—';
        return v.toFixed(digits === undefined ? 2 : digits) + '%';
    }

    // Khoản trả góp đều hàng tháng. r = lãi suất tháng (thập phân), n = số tháng.
    function pmt(principal, r, n) {
        if (!(principal > 0) || !(n > 0)) return 0;
        if (r <= 0) return principal / n;
        const f = Math.pow(1 + r, n);
        return principal * r * f / (f - 1);
    }

    // Nghịch đảo PMT: với khoản trả góp cho trước, vay được tối đa bao nhiêu.
    function loanFromPayment(payment, r, n) {
        if (!(payment > 0) || !(n > 0)) return 0;
        if (r <= 0) return payment * n;
        const f = Math.pow(1 + r, n);
        return payment * (f - 1) / (r * f);
    }

    // Dư nợ còn lại sau k tháng trả góp đều.
    function balanceAfter(principal, r, n, k) {
        if (!(principal > 0) || !(n > 0)) return 0;
        if (k >= n) return 0;
        if (r <= 0) return principal * (1 - k / n);
        const f = Math.pow(1 + r, n);
        const fk = Math.pow(1 + r, k);
        return principal * (f - fk) / (f - 1);
    }

    function row(label, value, cls) {
        return `<div class="result-item${cls ? ' ' + cls : ''}"><span class="result-label">${label}</span><span class="result-value">${value}</span></div>`;
    }

    function bindRange(id, outId, format) {
        const input = document.getElementById(id);
        const out = document.getElementById(outId);
        if (!input || !out) return;
        const sync = () => { out.textContent = format(input.value); };
        input.addEventListener('input', sync);
        sync();
    }

    // ===== Công cụ 1: Máy tính vay mua nhà =====
    const loanTool = {
        id: 'may-tinh-vay',
        icon: '🏦',
        title: 'Máy Tính Vay Mua Nhà',
        intro: 'Nhập giá nhà và điều kiện vay để biết khoản trả góp hàng tháng, tổng lãi phải trả, và lịch trả nợ theo từng năm. Công cụ cũng chạy sẵn kịch bản lãi suất tăng thêm 3 điểm phần trăm — kịch bản rất đáng cân nhắc vì phần lớn khoản vay mua nhà tại Việt Nam là lãi suất thả nổi.',
        html: `
<div class="tool-grid">
    <label class="tool-field">
        <span>Giá nhà (đồng)</span>
        <input type="number" id="loanPrice" value="3000000000" min="0" step="100000000">
    </label>
    <label class="tool-field">
        <span>Vốn tự có: <b id="loanDownOut">30%</b></span>
        <input type="range" id="loanDown" value="30" min="0" max="100" step="5">
    </label>
    <label class="tool-field">
        <span>Lãi suất: <b id="loanRateOut">11%/năm</b></span>
        <input type="range" id="loanRate" value="11" min="0" max="25" step="0.5">
    </label>
    <label class="tool-field">
        <span>Kỳ hạn: <b id="loanYearsOut">20 năm</b></span>
        <input type="range" id="loanYears" value="20" min="1" max="35" step="1">
    </label>
</div>
<button class="tool-btn" id="loanRun">🚀 Tính khoản vay</button>
<div class="tool-result" id="loanResult"></div>`,
        init() {
            bindRange('loanDown', 'loanDownOut', v => `${v}%`);
            bindRange('loanRate', 'loanRateOut', v => `${v}%/năm`);
            bindRange('loanYears', 'loanYearsOut', v => `${v} năm`);
            const btn = document.getElementById('loanRun');
            if (btn) btn.addEventListener('click', loanTool.run);
            loanTool.run();
        },
        run() {
            const out = document.getElementById('loanResult');
            if (!out) return;

            const price = Math.max(0, num('loanPrice', 0));
            const downPct = clamp(num('loanDown', 30), 0, 100);
            const ratePct = clamp(num('loanRate', 11), 0, 100);
            const years = clamp(num('loanYears', 20), 1, 50);

            if (price <= 0) {
                out.innerHTML = `<div class="tool-empty">Hãy nhập giá nhà lớn hơn 0.</div>`;
                return;
            }

            const down = price * downPct / 100;
            const loan = price - down;
            const n = Math.round(years * 12);
            const r = ratePct / 100 / 12;

            if (loan <= 0) {
                out.innerHTML = `<div class="tool-note">Bạn mua bằng 100% vốn tự có — không phát sinh khoản vay hay tiền lãi. Đừng quên dự trù thêm khoảng 10% giá trị cho thuế, phí và sửa chữa (xem chủ điểm "Chi phí ẩn khi mua nhà").</div>`;
                return;
            }

            const monthly = pmt(loan, r, n);
            const total = monthly * n;
            const interest = total - loan;

            // Kịch bản căng thẳng: lãi suất tăng 3 điểm phần trăm
            const rStress = (ratePct + 3) / 100 / 12;
            const monthlyStress = pmt(loan, rStress, n);

            // Lịch trả nợ theo năm
            let sched = '';
            const step = years > 12 ? 5 : 1;
            for (let y = step; y <= years; y += step) {
                const k = Math.min(Math.round(y * 12), n);
                const bal = balanceAfter(loan, r, n, k);
                const paid = monthly * k;
                const principalPaid = loan - bal;
                sched += `<tr><td>Năm ${y}</td><td>${fmtVND(paid)}</td><td>${fmtVND(principalPaid)}</td><td>${fmtVND(paid - principalPaid)}</td><td>${fmtVND(bal)}</td></tr>`;
            }
            if (years % step !== 0) {
                const bal = 0;
                const paid = monthly * n;
                sched += `<tr><td>Năm ${years}</td><td>${fmtVND(paid)}</td><td>${fmtVND(loan)}</td><td>${fmtVND(paid - loan)}</td><td>${fmtVND(bal)}</td></tr>`;
            }

            out.innerHTML = `
${row('Vốn tự có cần có', fmtVND(down))}
${row('Số tiền vay', fmtVND(loan))}
${row('Trả góp hàng tháng', fmtVND(monthly), 'highlight')}
${row('Tổng tiền lãi phải trả', fmtVND(interest))}
${row('Tổng phải trả cho ngân hàng', fmtVND(total))}
${row('Tiền lãi so với số tiền vay', fmtPct(interest / loan * 100, 0))}
<div class="warning-box"><strong>Kịch bản lãi suất tăng 3 điểm phần trăm (lên ${(ratePct + 3).toFixed(1)}%/năm):</strong>
khoản trả góp thành <strong>${fmtVND(monthlyStress)}/tháng</strong> — tăng ${fmtVND(monthlyStress - monthly)}/tháng,
tương đương +${fmtPct((monthlyStress / monthly - 1) * 100, 0)}.
Hãy tự hỏi bạn có trả nổi con số này không, vì phần lớn khoản vay mua nhà tại Việt Nam là lãi suất thả nổi sau giai đoạn ưu đãi ngắn.</div>
<div class="tool-table-wrap"><table class="tool-table">
<tr><th>Mốc</th><th>Đã trả</th><th>Trong đó trả gốc</th><th>Trong đó trả lãi</th><th>Dư nợ còn lại</th></tr>
${sched}
</table></div>
<div class="tool-note">Chưa bao gồm thuế, phí, bảo hiểm khoản vay và chi phí sửa chữa. Dự trù thêm khoảng 10% giá trị căn nhà cho các khoản này.</div>`;
        }
    };

    // ===== Công cụ 2: Thuê vs Mua =====
    const rentBuyTool = {
        id: 'thue-vs-mua',
        icon: '⚖️',
        title: 'Thuê vs Mua',
        intro: 'So sánh tài sản ròng của bạn theo hai kịch bản: mua nhà, hoặc đi thuê và đầu tư phần vốn cùng phần tiền chênh lệch hàng tháng. Công cụ tìm <strong>năm hòa vốn</strong> — thời điểm mua nhà bắt đầu có lợi hơn thuê.',
        html: `
<div class="tool-grid">
    <label class="tool-field"><span>Giá nhà (đồng)</span><input type="number" id="rbPrice" value="3000000000" min="0" step="100000000"></label>
    <label class="tool-field"><span>Tiền thuê tương đương (đồng/tháng)</span><input type="number" id="rbRent" value="10000000" min="0" step="1000000"></label>
    <label class="tool-field"><span>Vốn tự có: <b id="rbDownOut">30%</b></span><input type="range" id="rbDown" value="30" min="10" max="100" step="5"></label>
    <label class="tool-field"><span>Lãi suất vay: <b id="rbRateOut">11%/năm</b></span><input type="range" id="rbRate" value="11" min="0" max="25" step="0.5"></label>
    <label class="tool-field"><span>Kỳ hạn vay: <b id="rbYearsOut">20 năm</b></span><input type="range" id="rbYears" value="20" min="5" max="35" step="1"></label>
    <label class="tool-field"><span>Nhà tăng giá: <b id="rbGrowthOut">6%/năm</b></span><input type="range" id="rbGrowth" value="6" min="-5" max="20" step="0.5"></label>
    <label class="tool-field"><span>Giá thuê tăng: <b id="rbRentGrowthOut">4%/năm</b></span><input type="range" id="rbRentGrowth" value="4" min="0" max="15" step="0.5"></label>
    <label class="tool-field"><span>Lợi suất đầu tư nếu không mua: <b id="rbInvestOut">6%/năm</b></span><input type="range" id="rbInvest" value="6" min="0" max="20" step="0.5"></label>
    <label class="tool-field"><span>Chi phí sở hữu: <b id="rbOwnCostOut">1,2%/năm</b></span><input type="range" id="rbOwnCost" value="1.2" min="0" max="5" step="0.1"></label>
    <label class="tool-field"><span>Thuế phí lúc mua: <b id="rbBuyCostOut">3%</b></span><input type="range" id="rbBuyCost" value="3" min="0" max="12" step="0.5"></label>
    <label class="tool-field"><span>Chi phí lúc bán: <b id="rbSellCostOut">4%</b></span><input type="range" id="rbSellCost" value="4" min="0" max="12" step="0.5"></label>
    <label class="tool-field"><span>Phân tích trong: <b id="rbHorizonOut">25 năm</b></span><input type="range" id="rbHorizon" value="25" min="3" max="40" step="1"></label>
</div>
<button class="tool-btn" id="rbRun">⚖️ So sánh</button>
<div class="tool-result" id="rbResult"></div>`,
        init() {
            bindRange('rbDown', 'rbDownOut', v => `${v}%`);
            bindRange('rbRate', 'rbRateOut', v => `${v}%/năm`);
            bindRange('rbYears', 'rbYearsOut', v => `${v} năm`);
            bindRange('rbGrowth', 'rbGrowthOut', v => `${v}%/năm`);
            bindRange('rbRentGrowth', 'rbRentGrowthOut', v => `${v}%/năm`);
            bindRange('rbInvest', 'rbInvestOut', v => `${v}%/năm`);
            bindRange('rbOwnCost', 'rbOwnCostOut', v => `${String(v).replace('.', ',')}%/năm`);
            bindRange('rbBuyCost', 'rbBuyCostOut', v => `${String(v).replace('.', ',')}%`);
            bindRange('rbSellCost', 'rbSellCostOut', v => `${String(v).replace('.', ',')}%`);
            bindRange('rbHorizon', 'rbHorizonOut', v => `${v} năm`);
            const btn = document.getElementById('rbRun');
            if (btn) btn.addEventListener('click', rentBuyTool.run);
            rentBuyTool.run();
        },
        run() {
            const out = document.getElementById('rbResult');
            if (!out) return;

            const price = Math.max(0, num('rbPrice', 0));
            const rent0 = Math.max(0, num('rbRent', 0));
            const downPct = clamp(num('rbDown', 30), 0, 100);
            const ratePct = clamp(num('rbRate', 11), 0, 100);
            const loanYears = clamp(num('rbYears', 20), 1, 50);
            const growthPct = clamp(num('rbGrowth', 6), -50, 100);
            const rentGrowthPct = clamp(num('rbRentGrowth', 4), 0, 100);
            const investPct = clamp(num('rbInvest', 6), 0, 100);
            const ownCostPct = clamp(num('rbOwnCost', 1.2), 0, 20);
            const buyCostPct = clamp(num('rbBuyCost', 3), 0, 30);
            const sellCostPct = clamp(num('rbSellCost', 4), 0, 30);
            const horizon = clamp(num('rbHorizon', 25), 1, 50);

            if (price <= 0 || rent0 <= 0) {
                out.innerHTML = `<div class="tool-empty">Hãy nhập giá nhà và tiền thuê lớn hơn 0.</div>`;
                return;
            }

            const down = price * downPct / 100;
            const buyCost = price * buyCostPct / 100;
            const loan = price - down;
            const n = Math.round(loanYears * 12);
            const r = ratePct / 100 / 12;
            const monthly = pmt(loan, r, n);

            const gM = Math.pow(1 + growthPct / 100, 1 / 12) - 1;
            const rgM = Math.pow(1 + rentGrowthPct / 100, 1 / 12) - 1;
            const iM = Math.pow(1 + investPct / 100, 1 / 12) - 1;

            // Người thuê khởi đầu với số vốn mà người mua đã bỏ ra
            let renterPot = down + buyCost;
            let buyerPot = 0;
            let homeValue = price;
            let rent = rent0;
            let cumInterest = 0;
            let cumOwnCost = 0;
            let cumRent = 0;
            let breakEvenYear = null;
            const rows = [];

            const totalMonths = Math.round(horizon * 12);
            for (let m = 1; m <= totalMonths; m++) {
                const bal = balanceAfter(loan, r, n, Math.min(m - 1, n));
                const interestM = m <= n ? bal * r : 0;
                const payM = m <= n ? monthly : 0;
                const ownCostM = homeValue * (ownCostPct / 100) / 12;

                cumInterest += interestM;
                cumOwnCost += ownCostM;
                cumRent += rent;

                const buyerOutflow = payM + ownCostM;
                const renterOutflow = rent;
                const diff = buyerOutflow - renterOutflow;

                // Bên nào chi ít hơn thì đầu tư phần chênh lệch
                renterPot = renterPot * (1 + iM) + (diff > 0 ? diff : 0);
                buyerPot = buyerPot * (1 + iM) + (diff < 0 ? -diff : 0);

                homeValue = homeValue * (1 + gM);
                rent = rent * (1 + rgM);

                if (m % 12 === 0) {
                    const y = m / 12;
                    const balEnd = balanceAfter(loan, r, n, Math.min(m, n));
                    const buyNW = homeValue * (1 - sellCostPct / 100) - balEnd + buyerPot;
                    const rentNW = renterPot;
                    if (breakEvenYear === null && buyNW >= rentNW) breakEvenYear = y;
                    const isMark = y <= 3 || y % 5 === 0 || y === horizon;
                    if (isMark) {
                        rows.push(`<tr class="${buyNW >= rentNW ? 'row-buy' : 'row-rent'}"><td>Năm ${y}</td><td>${fmtVND(buyNW)}</td><td>${fmtVND(rentNW)}</td><td>${buyNW >= rentNW ? 'Mua lợi hơn' : 'Thuê lợi hơn'}</td></tr>`);
                    }
                }
            }

            const finalBal = balanceAfter(loan, r, n, Math.min(totalMonths, n));
            const buyNWFinal = homeValue * (1 - sellCostPct / 100) - finalBal + buyerPot;
            const rentNWFinal = renterPot;
            const gap = buyNWFinal - rentNWFinal;

            const verdict = breakEvenYear === null
                ? `<div class="warning-box"><strong>Trong ${horizon} năm phân tích, thuê nhà và đầu tư phần chênh lệch cho kết quả tốt hơn.</strong> Với bộ giả định này, mua nhà chưa hòa vốn. Hãy thử tăng tốc độ tăng giá nhà, giảm lãi suất vay, hoặc kéo dài thời gian phân tích để xem điều gì làm thay đổi kết luận.</div>`
                : `<div class="tip-box"><strong>Điểm hòa vốn: năm thứ ${breakEvenYear}.</strong> Nếu bạn giữ căn nhà lâu hơn ${breakEvenYear} năm, mua có lợi hơn thuê với bộ giả định này. Nếu bạn có khả năng phải chuyển đi sớm hơn, thuê là lựa chọn hợp lý hơn về mặt tài chính.</div>`;

            out.innerHTML = `
${row('Trả góp hàng tháng (năm đầu)', fmtVND(monthly))}
${row('Tiền thuê hàng tháng (năm đầu)', fmtVND(rent0))}
${row('Chênh lệch dòng tiền tháng đầu', fmtVND(monthly + price * (ownCostPct / 100) / 12 - rent0))}
${verdict}
<div class="tool-table-wrap"><table class="tool-table">
<tr><th>Mốc</th><th>Tài sản ròng nếu MUA</th><th>Tài sản ròng nếu THUÊ</th><th>Kết luận</th></tr>
${rows.join('')}
</table></div>
${row(`Chênh lệch sau ${horizon} năm`, (gap >= 0 ? 'Mua hơn ' : 'Thuê hơn ') + fmtVND(Math.abs(gap)), 'highlight')}
${row('Tổng tiền thuê đã trả', fmtVND(cumRent))}
${row('Tổng tiền lãi ngân hàng đã trả', fmtVND(cumInterest))}
${row('Tổng chi phí sở hữu đã trả', fmtVND(cumOwnCost))}
<div class="tool-note"><strong>Cách công cụ này tính:</strong> người thuê khởi đầu với đúng số vốn mà người mua đã bỏ ra (vốn tự có + thuế phí), đem đầu tư ở mức lợi suất bạn chọn. Mỗi tháng, bên nào chi ít hơn thì đầu tư phần chênh lệch. Tài sản ròng của người mua = giá trị nhà (đã trừ chi phí bán) − dư nợ + khoản đầu tư tích lũy.<br>
<strong>Lưu ý:</strong> kết quả rất nhạy với giả định về tốc độ tăng giá nhà và lợi suất đầu tư. Hãy thử vài kịch bản thay vì tin một con số. Công cụ cũng không định lượng được giá trị của sự ổn định khi sở hữu nhà, hay sự linh hoạt khi đi thuê — đó là những yếu tố thật mà bạn phải tự cân nhắc.</div>`;
        }
    };

    // ===== Công cụ 3: ROI cho thuê & dòng tiền =====
    const roiTool = {
        id: 'roi-cho-thue',
        icon: '📊',
        title: 'ROI Cho Thuê & Dòng Tiền',
        intro: 'Tính tỷ suất cho thuê gộp và ròng, thu nhập hoạt động ròng (NOI), dòng tiền hàng tháng thực nhận, lợi suất trên vốn tự có, và tỷ lệ bao phủ nợ (DSCR) — bộ chỉ số mà nhà đầu tư chuyên nghiệp dùng để đánh giá một tài sản cho thuê.',
        html: `
<div class="tool-grid">
    <label class="tool-field"><span>Giá mua (đồng)</span><input type="number" id="roiPrice" value="3000000000" min="0" step="100000000"></label>
    <label class="tool-field"><span>Tiền thuê (đồng/tháng)</span><input type="number" id="roiRent" value="10000000" min="0" step="500000"></label>
    <label class="tool-field"><span>Thuế phí lúc mua: <b id="roiBuyCostOut">3%</b></span><input type="range" id="roiBuyCost" value="3" min="0" max="12" step="0.5"></label>
    <label class="tool-field"><span>Sửa chữa, nội thất ban đầu (đồng)</span><input type="number" id="roiSetup" value="150000000" min="0" step="10000000"></label>
    <label class="tool-field"><span>Tỷ lệ trống: <b id="roiVacancyOut">8%</b></span><input type="range" id="roiVacancy" value="8" min="0" max="50" step="1"></label>
    <label class="tool-field"><span>Phí quản lý, bảo trì: <b id="roiOpexOut">15%</b> doanh thu</span><input type="range" id="roiOpex" value="15" min="0" max="60" step="1"></label>
    <label class="tool-field"><span>Thuế cho thuê: <b id="roiTaxOut">10%</b> doanh thu</span><input type="range" id="roiTax" value="10" min="0" max="30" step="0.5"></label>
    <label class="tool-field"><span>Vay ngân hàng: <b id="roiLtvOut">0%</b> giá mua</span><input type="range" id="roiLtv" value="0" min="0" max="80" step="5"></label>
    <label class="tool-field"><span>Lãi suất vay: <b id="roiRateOut">11%/năm</b></span><input type="range" id="roiRate" value="11" min="0" max="25" step="0.5"></label>
    <label class="tool-field"><span>Kỳ hạn vay: <b id="roiYearsOut">20 năm</b></span><input type="range" id="roiYears" value="20" min="1" max="35" step="1"></label>
</div>
<button class="tool-btn" id="roiRun">📊 Tính hiệu quả</button>
<div class="tool-result" id="roiResult"></div>`,
        init() {
            bindRange('roiBuyCost', 'roiBuyCostOut', v => `${String(v).replace('.', ',')}%`);
            bindRange('roiVacancy', 'roiVacancyOut', v => `${v}%`);
            bindRange('roiOpex', 'roiOpexOut', v => `${v}%`);
            bindRange('roiTax', 'roiTaxOut', v => `${String(v).replace('.', ',')}%`);
            bindRange('roiLtv', 'roiLtvOut', v => `${v}%`);
            bindRange('roiRate', 'roiRateOut', v => `${v}%/năm`);
            bindRange('roiYears', 'roiYearsOut', v => `${v} năm`);
            const btn = document.getElementById('roiRun');
            if (btn) btn.addEventListener('click', roiTool.run);
            roiTool.run();
        },
        run() {
            const out = document.getElementById('roiResult');
            if (!out) return;

            const price = Math.max(0, num('roiPrice', 0));
            const rent = Math.max(0, num('roiRent', 0));
            const buyCostPct = clamp(num('roiBuyCost', 3), 0, 30);
            const setup = Math.max(0, num('roiSetup', 0));
            const vacancyPct = clamp(num('roiVacancy', 8), 0, 100);
            const opexPct = clamp(num('roiOpex', 15), 0, 100);
            const taxPct = clamp(num('roiTax', 10), 0, 100);
            const ltvPct = clamp(num('roiLtv', 0), 0, 100);
            const ratePct = clamp(num('roiRate', 11), 0, 100);
            const years = clamp(num('roiYears', 20), 1, 50);

            if (price <= 0 || rent <= 0) {
                out.innerHTML = `<div class="tool-empty">Hãy nhập giá mua và tiền thuê lớn hơn 0.</div>`;
                return;
            }

            const grossYear = rent * 12;
            const grossYield = grossYear / price * 100;

            const vacancyLoss = grossYear * vacancyPct / 100;
            const effective = grossYear - vacancyLoss;
            const opex = effective * opexPct / 100;
            const tax = effective * taxPct / 100;
            const noi = effective - opex - tax;

            const buyCost = price * buyCostPct / 100;
            const totalInvested = price + buyCost + setup;
            const netYield = noi / totalInvested * 100;
            const capRate = noi / price * 100;

            const loan = price * ltvPct / 100;
            const equity = totalInvested - loan;
            const n = Math.round(years * 12);
            const r = ratePct / 100 / 12;
            const monthlyDebt = pmt(loan, r, n);
            const annualDebt = monthlyDebt * 12;

            const cashFlow = noi - annualDebt;
            const cashOnCash = equity > 0 ? cashFlow / equity * 100 : NaN;
            const dscr = annualDebt > 0 ? noi / annualDebt : Infinity;

            let dscrNote = '';
            if (annualDebt > 0) {
                if (dscr < 1) {
                    dscrNote = `<div class="warning-box"><strong>DSCR = ${dscr.toFixed(2)} — dưới 1.</strong> Tài sản này không tự nuôi nổi khoản vay: bạn phải bù <strong>${fmtVND(-cashFlow / 12)}/tháng</strong> từ tiền túi. Đó vẫn có thể là quyết định hợp lý nếu bạn hiểu rõ và đủ khả năng bù trong nhiều năm — nhưng hãy gọi đúng tên nó: bạn đang trợ cấp cho một khoản cược vào tăng giá, không phải đầu tư lấy dòng tiền.</div>`;
                } else if (dscr < 1.25) {
                    dscrNote = `<div class="warning-box"><strong>DSCR = ${dscr.toFixed(2)} — vừa đủ, không có đệm.</strong> Chỉ cần một hai tháng trống hoặc một đợt sửa chữa lớn là dòng tiền âm. Ngân hàng thường mong muốn mức từ 1,25 trở lên.</div>`;
                } else {
                    dscrNote = `<div class="tip-box"><strong>DSCR = ${dscr.toFixed(2)} — có đệm an toàn.</strong> Tài sản tạo đủ thu nhập để trả nợ kèm khoảng dự phòng cho biến động.</div>`;
                }
            }

            let yieldNote = '';
            if (grossYield < 3) {
                yieldNote = `<div class="warning-box"><strong>Tỷ suất gộp ${fmtPct(grossYield)} là rất thấp.</strong> Phần lớn giá bạn trả đến từ kỳ vọng tăng giá, không phải từ giá trị sử dụng. Hãy so con số này với lãi suất tiền gửi ngân hàng và tự hỏi vì sao mình vẫn tiếp tục — nếu câu trả lời là "vì tin giá sẽ tăng", đó là một cược, và bạn nên biết rõ điều đó.</div>`;
            } else if (grossYield > 9) {
                yieldNote = `<div class="warning-box"><strong>Tỷ suất gộp ${fmtPct(grossYield)} cao bất thường.</strong> Cap rate cao là một câu hỏi, không phải một cơ hội — luôn có lý do. Hãy kiểm tra: giá thuê hiện tại có bền vững không, khu vực có đang mất dân hoặc mất nguồn việc làm không, tài sản có cần sửa lớn không, pháp lý có vấn đề gì không.</div>`;
            }

            out.innerHTML = `
<div class="tool-section-title">Vốn bỏ ra</div>
${row('Giá mua', fmtVND(price))}
${row('Thuế, phí lúc mua', fmtVND(buyCost))}
${row('Sửa chữa, nội thất ban đầu', fmtVND(setup))}
${row('Tổng vốn đầu tư', fmtVND(totalInvested))}
${row('Vay ngân hàng', fmtVND(loan))}
${row('Vốn tự có thực bỏ ra', fmtVND(equity), 'highlight')}

<div class="tool-section-title">Từ tiền thuê đến NOI</div>
${row('Tiền thuê tiềm năng cả năm', fmtVND(grossYear))}
${row(`− Thất thu do trống (${vacancyPct}%)`, fmtVND(-vacancyLoss))}
${row('= Doanh thu thực nhận', fmtVND(effective))}
${row(`− Phí quản lý, bảo trì (${opexPct}%)`, fmtVND(-opex))}
${row(`− Thuế cho thuê (${String(taxPct).replace('.', ',')}%)`, fmtVND(-tax))}
${row('= NOI (thu nhập hoạt động ròng)', fmtVND(noi), 'highlight')}

<div class="tool-section-title">Các chỉ số</div>
${row('Tỷ suất cho thuê gộp', fmtPct(grossYield))}
${row('Cap rate (NOI ÷ giá mua)', fmtPct(capRate))}
${row('Tỷ suất ròng (NOI ÷ tổng vốn đầu tư)', fmtPct(netYield))}
${row('Trả nợ ngân hàng cả năm', fmtVND(-annualDebt))}
${row('Dòng tiền ròng cả năm', fmtVND(cashFlow), 'highlight')}
${row('Dòng tiền ròng mỗi tháng', fmtVND(cashFlow / 12), 'highlight')}
${row('Lợi suất trên vốn tự có (cash-on-cash)', Number.isFinite(cashOnCash) ? fmtPct(cashOnCash) : '—')}
${dscrNote}
${yieldNote}
<div class="tool-note"><strong>Đọc kết quả:</strong> tỷ suất gộp là con số môi giới hay nói; tỷ suất ròng và dòng tiền mới là con số bạn thực sự nhận. Chênh lệch giữa hai bên thường là 25–40%.<br>
Lưu ý rằng dòng tiền chưa phải toàn bộ lợi ích: phần trả gốc hàng tháng đang tích lũy tài sản cho bạn, và tài sản có thể tăng giá. Nhưng cả hai đều không chắc chắn — trong khi dòng tiền âm thì chắc chắn và phải trả bằng tiền thật mỗi tháng.<br>
<em>Ngưỡng doanh thu phải nộp thuế và tỷ lệ thuế cho thuê được quy định trong văn bản pháp luật và có thể thay đổi — hãy kiểm tra quy định hiện hành.</em></div>`;
        }
    };

    // ===== Công cụ 4: Khả năng chi trả =====
    const affordTool = {
        id: 'kha-nang-mua',
        icon: '🎯',
        title: 'Tôi Mua Được Nhà Bao Nhiêu',
        intro: 'Đi ngược lại từ thu nhập và số vốn bạn có, ra mức giá nhà tối đa hợp lý. Công cụ tính theo <strong>hai ràng buộc song song</strong> — khả năng trả nợ hàng tháng và số vốn tự có — rồi lấy con số nhỏ hơn, đúng cách ngân hàng làm. Nó cũng đưa ra một mức khuyến nghị thận trọng hơn mức ngân hàng duyệt.',
        html: `
<div class="tool-grid">
    <label class="tool-field"><span>Thu nhập ròng cả hộ (đồng/tháng)</span><input type="number" id="afIncome" value="50000000" min="0" step="5000000"></label>
    <label class="tool-field"><span>Đang trả nợ khác (đồng/tháng)</span><input type="number" id="afDebt" value="0" min="0" step="1000000"></label>
    <label class="tool-field"><span>Tiền mặt hiện có (đồng)</span><input type="number" id="afCash" value="900000000" min="0" step="100000000"></label>
    <label class="tool-field"><span>Giữ lại làm quỹ dự phòng (đồng)</span><input type="number" id="afBuffer" value="150000000" min="0" step="50000000"></label>
    <label class="tool-field"><span>Ngân hàng áp DTI: <b id="afDtiOut">55%</b></span><input type="range" id="afDti" value="55" min="30" max="70" step="5"></label>
    <label class="tool-field"><span>Cho vay tối đa (LTV): <b id="afLtvOut">70%</b></span><input type="range" id="afLtv" value="70" min="30" max="90" step="5"></label>
    <label class="tool-field"><span>Lãi suất sau ưu đãi: <b id="afRateOut">11%/năm</b></span><input type="range" id="afRate" value="11" min="1" max="25" step="0.5"></label>
    <label class="tool-field"><span>Kỳ hạn vay: <b id="afYearsOut">20 năm</b></span><input type="range" id="afYears" value="20" min="5" max="35" step="1"></label>
    <label class="tool-field"><span>Thuế phí + sửa chữa ban đầu: <b id="afCostOut">8%</b> giá nhà</span><input type="range" id="afCost" value="8" min="0" max="20" step="1"></label>
</div>
<button class="tool-btn" id="afRun">🎯 Tính mức giá phù hợp</button>
<div class="tool-result" id="afResult"></div>`,
        init() {
            bindRange('afDti', 'afDtiOut', v => `${v}%`);
            bindRange('afLtv', 'afLtvOut', v => `${v}%`);
            bindRange('afRate', 'afRateOut', v => `${v}%/năm`);
            bindRange('afYears', 'afYearsOut', v => `${v} năm`);
            bindRange('afCost', 'afCostOut', v => `${v}%`);
            const b = document.getElementById('afRun');
            if (b) b.addEventListener('click', affordTool.run);
            affordTool.run();
        },
        run() {
            const out = document.getElementById('afResult');
            if (!out) return;

            const income = Math.max(0, num('afIncome', 0));
            const debt = Math.max(0, num('afDebt', 0));
            const cash = Math.max(0, num('afCash', 0));
            const buffer = Math.max(0, num('afBuffer', 0));
            const dtiPct = clamp(num('afDti', 55), 1, 100);
            const ltvPct = clamp(num('afLtv', 70), 1, 95);
            const ratePct = clamp(num('afRate', 11), 0, 100);
            const years = clamp(num('afYears', 20), 1, 50);
            const costPct = clamp(num('afCost', 8), 0, 50);

            if (income <= 0) {
                out.innerHTML = `<div class="tool-empty">Hãy nhập thu nhập lớn hơn 0.</div>`;
                return;
            }

            const usableCash = Math.max(0, cash - buffer);
            const n = Math.round(years * 12);
            const r = ratePct / 100 / 12;
            const ltv = ltvPct / 100;
            const cost = costPct / 100;

            // Ràng buộc 1: khả năng trả nợ hàng tháng
            const capacityBank = Math.max(0, income * dtiPct / 100 - debt);
            const loanFromIncome = loanFromPayment(capacityBank, r, n);
            const priceFromIncome = ltv > 0 ? loanFromIncome / ltv : 0;

            // Ràng buộc 2: vốn tự có. Tiền mặt phải phủ phần không vay được + thuế phí.
            const priceFromCash = usableCash / ((1 - ltv) + cost);

            const maxPrice = Math.min(priceFromIncome, priceFromCash);
            const binding = priceFromIncome <= priceFromCash ? 'thu nhập' : 'vốn tự có';

            // Mức khuyến nghị: trả góp không quá 40% thu nhập ròng
            const capacitySafe = Math.max(0, income * 0.40 - debt);
            const loanSafe = loanFromPayment(capacitySafe, r, n);
            const priceSafeIncome = ltv > 0 ? loanSafe / ltv : 0;
            const safePrice = Math.min(priceSafeIncome, priceFromCash);

            const loanAtMax = maxPrice * ltv;
            const payAtMax = pmt(loanAtMax, r, n);
            const loanAtSafe = safePrice * ltv;
            const payAtSafe = pmt(loanAtSafe, r, n);

            // Kiểm tra chịu đựng: lãi suất +3 điểm phần trăm
            const rStress = (ratePct + 3) / 100 / 12;
            const payStressMax = pmt(loanAtMax, rStress, n);
            const payStressSafe = pmt(loanAtSafe, rStress, n);
            const stressShareMax = income > 0 ? payStressMax / income * 100 : 0;

            out.innerHTML = `
<div class="tool-section-title">Ngân hàng có thể duyệt tới</div>
${row('Giá nhà tối đa', fmtVND(maxPrice), 'highlight')}
${row('Trong đó vay ngân hàng', fmtVND(loanAtMax))}
${row('Tiền mặt phải bỏ ra', fmtVND(maxPrice * ((1 - ltv) + cost)))}
${row('Trả góp hàng tháng', fmtVND(payAtMax))}
${row('Chiếm bao nhiêu thu nhập', fmtPct(income > 0 ? payAtMax / income * 100 : 0, 0))}
${row('Ràng buộc chặn bạn lại', binding === 'thu nhập' ? 'Khả năng trả nợ' : 'Vốn tự có')}

<div class="tool-section-title">Mức khuyến nghị thận trọng</div>
${row('Giá nhà nên nhắm tới', fmtVND(safePrice), 'highlight')}
${row('Trong đó vay ngân hàng', fmtVND(loanAtSafe))}
${row('Tiền mặt phải bỏ ra', fmtVND(safePrice * ((1 - ltv) + cost)))}
${row('Trả góp hàng tháng', fmtVND(payAtSafe))}
${row('Chiếm bao nhiêu thu nhập', fmtPct(income > 0 ? payAtSafe / income * 100 : 0, 0))}

<div class="warning-box"><strong>Kiểm tra chịu đựng — lãi suất tăng lên ${(ratePct + 3).toFixed(1)}%/năm:</strong><br>
• Ở mức ngân hàng duyệt: trả góp thành <strong>${fmtVND(payStressMax)}/tháng</strong>, chiếm <strong>${fmtPct(stressShareMax, 0)}</strong> thu nhập.<br>
• Ở mức khuyến nghị: trả góp thành <strong>${fmtVND(payStressSafe)}/tháng</strong>, chiếm <strong>${fmtPct(income > 0 ? payStressSafe / income * 100 : 0, 0)}</strong> thu nhập.<br>
${stressShareMax > 55 ? 'Con số đầu tiên là lý do không nên vay tối đa: một cú tăng lãi suất bình thường sẽ chiếm phần lớn thu nhập của bạn.' : ''}</div>

<div class="tool-note"><strong>Vì sao có hai con số:</strong> ngân hàng tính theo công thức của họ và không biết gì về chi phí sinh hoạt, kế hoạch sinh con, hay rủi ro nghề nghiệp của bạn. Mức khuyến nghị giữ khoản trả góp dưới 40% thu nhập ròng — đủ đệm để sống sót qua một đợt tăng lãi suất hoặc một giai đoạn thu nhập giảm mà không phải bán nhà.<br>
Đừng quên giữ quỹ dự phòng riêng: khoản đó là thứ quyết định bạn có bị ép bán ở đáy chu kỳ hay không.</div>`;
        }
    };

    // ===== Công cụ 5: Thuế & phí chuyển nhượng =====
    const feeTool = {
        id: 'thue-phi-gd',
        icon: '🧾',
        title: 'Thuế & Phí Chuyển Nhượng',
        intro: 'Liệt kê các khoản thuế, phí phải nộp khi sang tên một bất động sản, tách rõ bên mua và bên bán chịu khoản nào. Dùng để biết tổng tiền thật cần chuẩn bị, và để đàm phán xem ai chịu khoản nào.',
        html: `
<div class="tool-grid">
    <label class="tool-field"><span>Giá chuyển nhượng (đồng)</span><input type="number" id="feePrice" value="3000000000" min="0" step="100000000"></label>
    <label class="tool-field"><span>Giá theo bảng giá đất, nếu cao hơn (đồng)</span><input type="number" id="feeTable" value="0" min="0" step="100000000"></label>
    <label class="tool-field"><span>Thuế TNCN: <b id="feePitOut">2%</b></span><input type="range" id="feePit" value="2" min="0" max="5" step="0.5"></label>
    <label class="tool-field"><span>Lệ phí trước bạ: <b id="feeRegOut">0,5%</b></span><input type="range" id="feeReg" value="0.5" min="0" max="3" step="0.1"></label>
    <label class="tool-field"><span>Phí công chứng ước tính (đồng)</span><input type="number" id="feeNotary" value="8000000" min="0" step="1000000"></label>
    <label class="tool-field"><span>Phí môi giới: <b id="feeAgentOut">1,5%</b></span><input type="range" id="feeAgent" value="1.5" min="0" max="5" step="0.5"></label>
    <label class="tool-field"><span>Phí thẩm định, hồ sơ, cấp giấy (đồng)</span><input type="number" id="feeAdmin" value="3000000" min="0" step="500000"></label>
    <label class="tool-field"><span>Bên bán được miễn thuế TNCN?</span>
        <select id="feeExempt"><option value="0">Không</option><option value="1">Có (nhà ở duy nhất / người thân)</option></select></label>
    <label class="tool-field"><span>Bên mua chịu luôn thuế TNCN?</span>
        <select id="feeWho"><option value="0">Không — bên bán chịu</option><option value="1">Có — đã thỏa thuận</option></select></label>
</div>
<button class="tool-btn" id="feeRun">🧾 Tính thuế phí</button>
<div class="tool-result" id="feeResult"></div>`,
        init() {
            bindRange('feePit', 'feePitOut', v => `${String(v).replace('.', ',')}%`);
            bindRange('feeReg', 'feeRegOut', v => `${String(v).replace('.', ',')}%`);
            bindRange('feeAgent', 'feeAgentOut', v => `${String(v).replace('.', ',')}%`);
            const b = document.getElementById('feeRun');
            if (b) b.addEventListener('click', feeTool.run);
            ['feeExempt', 'feeWho'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('change', feeTool.run);
            });
            feeTool.run();
        },
        run() {
            const out = document.getElementById('feeResult');
            if (!out) return;

            const price = Math.max(0, num('feePrice', 0));
            const table = Math.max(0, num('feeTable', 0));
            const pitPct = clamp(num('feePit', 2), 0, 100);
            const regPct = clamp(num('feeReg', 0.5), 0, 100);
            const notary = Math.max(0, num('feeNotary', 0));
            const agentPct = clamp(num('feeAgent', 1.5), 0, 100);
            const admin = Math.max(0, num('feeAdmin', 0));
            const exempt = (document.getElementById('feeExempt') || {}).value === '1';
            const buyerPaysPit = (document.getElementById('feeWho') || {}).value === '1';

            if (price <= 0) {
                out.innerHTML = `<div class="tool-empty">Hãy nhập giá chuyển nhượng lớn hơn 0.</div>`;
                return;
            }

            // Giá tính thuế lấy theo mức cao hơn giữa giá hợp đồng và bảng giá đất
            const taxBase = Math.max(price, table);
            const usedTable = table > price;

            const pit = exempt ? 0 : taxBase * pitPct / 100;
            const reg = taxBase * regPct / 100;
            const agent = price * agentPct / 100;

            const buyerItems = [
                ['Lệ phí trước bạ', reg],
                ['Phí thẩm định, hồ sơ, cấp giấy', admin],
                ['Phí công chứng (phần bên mua)', notary / 2]
            ];
            if (buyerPaysPit) buyerItems.push(['Thuế TNCN (đã thỏa thuận bên mua chịu)', pit]);

            const sellerItems = [
                ['Phí môi giới', agent],
                ['Phí công chứng (phần bên bán)', notary / 2]
            ];
            if (!buyerPaysPit) sellerItems.push([exempt ? 'Thuế TNCN (được miễn)' : 'Thuế thu nhập cá nhân', pit]);

            const buyerTotal = buyerItems.reduce((a, x) => a + x[1], 0);
            const sellerTotal = sellerItems.reduce((a, x) => a + x[1], 0);
            const grandTotal = buyerTotal + sellerTotal;

            out.innerHTML = `
${usedTable ? `<div class="warning-box"><strong>Giá tính thuế lấy theo bảng giá đất (${fmtVND(table)}) vì cao hơn giá ghi trong hợp đồng.</strong> Đây là cách cơ quan thuế xác định căn cứ tính thuế: lấy mức cao hơn giữa hai con số.</div>` : ''}
${exempt ? `<div class="tip-box"><strong>Đã áp dụng miễn thuế thu nhập cá nhân.</strong> Hãy chuẩn bị hồ sơ chứng minh đủ điều kiện và xác nhận với cơ quan thuế trước khi giao dịch — nếu không thuộc diện miễn, khoản ${fmtVND(taxBase * pitPct / 100)} sẽ phát sinh.</div>` : ''}

<div class="tool-section-title">Bên mua chịu</div>
${buyerItems.map(x => row(x[0], fmtVND(x[1]))).join('')}
${row('Tổng bên mua', fmtVND(buyerTotal), 'highlight')}
${row('Tương đương', fmtPct(buyerTotal / price * 100) + ' giá nhà')}

<div class="tool-section-title">Bên bán chịu</div>
${sellerItems.map(x => row(x[0], fmtVND(x[1]))).join('')}
${row('Tổng bên bán', fmtVND(sellerTotal), 'highlight')}
${row('Tương đương', fmtPct(sellerTotal / price * 100) + ' giá nhà')}

<div class="tool-section-title">Tổng chi phí giao dịch</div>
${row('Cả hai bên cộng lại', fmtVND(grandTotal), 'highlight')}
${row('Tương đương', fmtPct(grandTotal / price * 100) + ' giá nhà')}
${row('Người mua cần chuẩn bị', fmtVND(price + buyerTotal), 'highlight')}

<div class="tool-note"><strong>Ai chịu khoản nào là thỏa thuận, không phải luật bất di bất dịch.</strong> Theo thông lệ bên bán chịu thuế thu nhập cá nhân và bên mua chịu lệ phí trước bạ, nhưng hai bên có thể thỏa thuận khác — và đây thường là điểm đàm phán dễ đạt hơn so với xin giảm giá bán, dù giá trị tài chính là như nhau.<br><br>
<em>Các mức thuế suất và phí ở đây là giá trị mặc định phổ biến tại thời điểm viết, có thể chỉnh lại bằng các thanh trượt. Thuế suất, cách xác định giá tính thuế và các trường hợp miễn giảm được quy định trong văn bản pháp luật và có thể thay đổi — hãy kiểm tra quy định hiện hành hoặc hỏi cơ quan thuế, công chứng cho giao dịch cụ thể của bạn.</em></div>`;
        }
    };

    // ===== Công cụ 6: So sánh khoản vay giữa các ngân hàng =====
    const compareTool = {
        id: 'so-sanh-vay',
        icon: '⚖️',
        title: 'So Sánh Khoản Vay Ngân Hàng',
        intro: 'Ngân hàng quảng cáo lãi suất ưu đãi năm đầu, nhưng thứ quyết định 18 năm còn lại là <strong>biên độ</strong> cộng vào lãi suất cơ sở. Công cụ này so tổng số tiền thực trả trong 5 năm đầu của ba phương án — cách so sánh duy nhất có ý nghĩa.',
        html: `
<div class="tool-grid">
    <label class="tool-field"><span>Số tiền vay (đồng)</span><input type="number" id="cmpLoan" value="2000000000" min="0" step="100000000"></label>
    <label class="tool-field"><span>Kỳ hạn: <b id="cmpYearsOut">20 năm</b></span><input type="range" id="cmpYears" value="20" min="5" max="35" step="1"></label>
    <label class="tool-field"><span>Lãi suất cơ sở hiện tại: <b id="cmpBaseOut">8,5%/năm</b></span><input type="range" id="cmpBase" value="8.5" min="3" max="15" step="0.5"></label>
</div>
<div class="tool-table-wrap"><table class="tool-table" id="cmpInputs">
<tr><th>Ngân hàng</th><th>Lãi ưu đãi (%)</th><th>Ưu đãi (tháng)</th><th>Biên độ (%)</th><th>Phí ban đầu (triệu)</th></tr>
<tr><td>A</td>
    <td><input type="number" id="cmpR1" value="6.5" step="0.1" min="0"></td>
    <td><input type="number" id="cmpM1" value="6" step="1" min="0"></td>
    <td><input type="number" id="cmpS1" value="4" step="0.1" min="0"></td>
    <td><input type="number" id="cmpF1" value="25" step="1" min="0"></td></tr>
<tr><td>B</td>
    <td><input type="number" id="cmpR2" value="7.5" step="0.1" min="0"></td>
    <td><input type="number" id="cmpM2" value="12" step="1" min="0"></td>
    <td><input type="number" id="cmpS2" value="3.5" step="0.1" min="0"></td>
    <td><input type="number" id="cmpF2" value="20" step="1" min="0"></td></tr>
<tr><td>C</td>
    <td><input type="number" id="cmpR3" value="8.5" step="0.1" min="0"></td>
    <td><input type="number" id="cmpM3" value="24" step="1" min="0"></td>
    <td><input type="number" id="cmpS3" value="3" step="0.1" min="0"></td>
    <td><input type="number" id="cmpF3" value="15" step="1" min="0"></td></tr>
</table></div>
<button class="tool-btn" id="cmpRun">⚖️ So sánh 5 năm đầu</button>
<div class="tool-result" id="cmpResult"></div>`,
        init() {
            bindRange('cmpYears', 'cmpYearsOut', v => `${v} năm`);
            bindRange('cmpBase', 'cmpBaseOut', v => `${String(v).replace('.', ',')}%/năm`);
            const b = document.getElementById('cmpRun');
            if (b) b.addEventListener('click', compareTool.run);
            compareTool.run();
        },
        run() {
            const out = document.getElementById('cmpResult');
            if (!out) return;

            const loan = Math.max(0, num('cmpLoan', 0));
            const years = clamp(num('cmpYears', 20), 1, 50);
            const basePct = clamp(num('cmpBase', 8.5), 0, 50);

            if (loan <= 0) {
                out.innerHTML = `<div class="tool-empty">Hãy nhập số tiền vay lớn hơn 0.</div>`;
                return;
            }

            const n = Math.round(years * 12);
            const banks = [1, 2, 3].map(i => ({
                name: 'Ngân hàng ' + String.fromCharCode(64 + i),
                promo: clamp(num('cmpR' + i, 0), 0, 50),
                months: clamp(num('cmpM' + i, 0), 0, n),
                spread: clamp(num('cmpS' + i, 0), 0, 50),
                fee: Math.max(0, num('cmpF' + i, 0)) * 1e6
            }));

            const results = banks.map(b => {
                const afterPct = basePct + b.spread;
                // Giai đoạn ưu đãi: trả góp tính theo lãi ưu đãi trên kỳ hạn gốc
                const rPromo = b.promo / 100 / 12;
                const payPromo = pmt(loan, rPromo, n);
                let paid = 0, interest = 0, bal = loan;
                const promoMonths = Math.min(b.months, 60);
                for (let m = 1; m <= promoMonths; m++) {
                    const int = bal * rPromo;
                    interest += int; paid += payPromo; bal = bal + int - payPromo;
                }
                // Sau ưu đãi: tính lại trả góp trên dư nợ còn lại và số kỳ còn lại
                const rAfter = afterPct / 100 / 12;
                const remain = n - promoMonths;
                const payAfter = remain > 0 ? pmt(bal, rAfter, remain) : 0;
                for (let m = promoMonths + 1; m <= 60; m++) {
                    const int = bal * rAfter;
                    interest += int; paid += payAfter; bal = bal + int - payAfter;
                }
                return {
                    ...b, afterPct, payPromo, payAfter,
                    paid5y: paid + b.fee, interest5y: interest, balance5y: bal,
                    total5y: paid + b.fee
                };
            });

            const best = results.reduce((a, b) => (b.total5y < a.total5y ? b : a));
            const worst = results.reduce((a, b) => (b.total5y > a.total5y ? b : a));

            const rows = results.map(r => `<tr class="${r === best ? 'row-buy' : ''}">
                <td>${r.name}${r === best ? ' ✓' : ''}</td>
                <td>${r.promo.toFixed(1).replace('.', ',')}% / ${r.months} tháng</td>
                <td>${r.afterPct.toFixed(1).replace('.', ',')}%</td>
                <td>${fmtVND(r.payPromo)}</td>
                <td>${fmtVND(r.payAfter)}</td>
                <td>${fmtVND(r.interest5y)}</td>
                <td>${fmtVND(r.total5y)}</td></tr>`).join('');

            const gap = worst.total5y - best.total5y;
            const lowestPromo = results.reduce((a, b) => (b.promo < a.promo ? b : a));
            const promoMisleading = lowestPromo !== best;

            out.innerHTML = `
<div class="tool-table-wrap"><table class="tool-table">
<tr><th>Ngân hàng</th><th>Ưu đãi</th><th>Lãi sau ưu đãi</th><th>Trả góp kỳ ưu đãi</th><th>Trả góp sau đó</th><th>Lãi 5 năm</th><th>Tổng trả 5 năm</th></tr>
${rows}
</table></div>
${row('Phương án rẻ nhất trong 5 năm', best.name, 'highlight')}
${row('Chênh lệch so với phương án đắt nhất', fmtVND(gap), 'highlight')}

${promoMisleading ? `<div class="warning-box"><strong>Chú ý: ngân hàng có lãi ưu đãi thấp nhất (${lowestPromo.name}, ${lowestPromo.promo.toFixed(1).replace('.', ',')}%) <em>không</em> phải phương án rẻ nhất.</strong> Đây chính là điều mà con số quảng cáo che đi: sau vài tháng ưu đãi, thứ quyết định là biên độ — và bạn sống với biên độ đó trong toàn bộ thời gian còn lại của khoản vay.</div>` : `<div class="tip-box">Với bộ tham số này, ngân hàng có ưu đãi tốt nhất cũng là phương án rẻ nhất trong 5 năm. Hãy thử tăng biên độ của ngân hàng đó lên để thấy con số đảo chiều nhanh thế nào.</div>`}

<div class="tool-note"><strong>Cách dùng công cụ này khi đi hỏi ngân hàng:</strong> hỏi đúng bốn con số cho mỗi nơi — lãi ưu đãi, số tháng ưu đãi, <strong>biên độ</strong>, và tổng các loại phí ban đầu. Câu hỏi quan trọng nhất là <em>"khách vay từ hai năm trước hiện đang trả lãi suất bao nhiêu?"</em> — con số đó cho bạn biết lãi suất cơ sở thực tế để điền vào ô phía trên.<br>
Tính toán giả định lãi suất cơ sở giữ nguyên trong 5 năm; thực tế nó biến động, nhưng vì nó áp dụng cho cả ba ngân hàng nên phép <em>so sánh</em> vẫn có giá trị.</div>`;
        }
    };

    // ===== Công cụ 7: Trả nợ trước hạn =====
    const prepayTool = {
        id: 'tra-truoc-han',
        icon: '✂️',
        title: 'Trả Nợ Trước Hạn',
        intro: 'Trả thêm gốc mỗi tháng hoặc một khoản lớn khi có thưởng sẽ tiết kiệm bao nhiêu tiền lãi, và rút ngắn khoản vay được bao lâu? Công cụ tính cả phí phạt trả trước hạn để ra con số lợi ích ròng.',
        html: `
<div class="tool-grid">
    <label class="tool-field"><span>Dư nợ hiện tại (đồng)</span><input type="number" id="ppLoan" value="2000000000" min="0" step="100000000"></label>
    <label class="tool-field"><span>Số năm còn lại: <b id="ppYearsOut">18 năm</b></span><input type="range" id="ppYears" value="18" min="1" max="35" step="1"></label>
    <label class="tool-field"><span>Lãi suất: <b id="ppRateOut">11%/năm</b></span><input type="range" id="ppRate" value="11" min="0" max="25" step="0.5"></label>
    <label class="tool-field"><span>Trả thêm mỗi tháng (đồng)</span><input type="number" id="ppExtra" value="3000000" min="0" step="1000000"></label>
    <label class="tool-field"><span>Trả một lần ngay bây giờ (đồng)</span><input type="number" id="ppLump" value="0" min="0" step="50000000"></label>
    <label class="tool-field"><span>Phí phạt trả trước hạn: <b id="ppFeeOut">2%</b> phần trả thêm</span><input type="range" id="ppFee" value="2" min="0" max="5" step="0.5"></label>
    <label class="tool-field"><span>Phí phạt chỉ áp dụng trong: <b id="ppFeeYearsOut">5 năm</b> đầu</span><input type="range" id="ppFeeYears" value="5" min="0" max="10" step="1"></label>
</div>
<button class="tool-btn" id="ppRun">✂️ Tính tiết kiệm</button>
<div class="tool-result" id="ppResult"></div>`,
        init() {
            bindRange('ppYears', 'ppYearsOut', v => `${v} năm`);
            bindRange('ppRate', 'ppRateOut', v => `${v}%/năm`);
            bindRange('ppFee', 'ppFeeOut', v => `${String(v).replace('.', ',')}%`);
            bindRange('ppFeeYears', 'ppFeeYearsOut', v => `${v} năm`);
            const b = document.getElementById('ppRun');
            if (b) b.addEventListener('click', prepayTool.run);
            prepayTool.run();
        },
        run() {
            const out = document.getElementById('ppResult');
            if (!out) return;

            const loan = Math.max(0, num('ppLoan', 0));
            const years = clamp(num('ppYears', 18), 1, 50);
            const ratePct = clamp(num('ppRate', 11), 0, 100);
            const extra = Math.max(0, num('ppExtra', 0));
            const lump = Math.max(0, Math.min(num('ppLump', 0), loan));
            const feePct = clamp(num('ppFee', 2), 0, 100);
            const feeYears = clamp(num('ppFeeYears', 5), 0, 50);

            if (loan <= 0) {
                out.innerHTML = `<div class="tool-empty">Hãy nhập dư nợ lớn hơn 0.</div>`;
                return;
            }
            if (extra <= 0 && lump <= 0) {
                out.innerHTML = `<div class="tool-note">Hãy nhập số tiền trả thêm hàng tháng hoặc khoản trả một lần để xem mức tiết kiệm.</div>`;
                return;
            }

            const n = Math.round(years * 12);
            const r = ratePct / 100 / 12;
            const basePay = pmt(loan, r, n);

            // Kịch bản gốc
            const baseInterest = basePay * n - loan;

            // Kịch bản trả thêm
            let bal = loan - lump;
            let interest = 0, months = 0, prepaid = lump;
            const maxMonths = n + 12;
            while (bal > 0.5 && months < maxMonths) {
                months++;
                const int = bal * r;
                interest += int;
                let principal = basePay - int + extra;
                if (principal <= 0) break; // trả góp không đủ bù lãi
                if (principal > bal) principal = bal;
                if (months * 1 <= n) prepaid += Math.min(extra, Math.max(0, bal - (basePay - int)));
                bal -= principal;
            }

            const monthsSaved = n - months;
            const interestSaved = baseInterest - interest;

            // Phí phạt: chỉ tính trên phần trả vượt trong giai đoạn còn bị phạt
            const feeMonths = Math.min(months, feeYears * 12);
            const extraInFeeWindow = lump + extra * feeMonths;
            const penalty = extraInFeeWindow * feePct / 100;
            const netSaved = interestSaved - penalty;

            const verdict = netSaved > 0
                ? `<div class="tip-box"><strong>Có lợi: tiết kiệm ròng ${fmtVND(netSaved)}</strong> sau khi trừ phí phạt ${fmtVND(penalty)}. Với mỗi đồng trả thêm, bạn đang "kiếm" được mức lợi suất bằng đúng lãi suất vay ${ratePct}%/năm — cao hơn hầu hết các kênh gửi tiết kiệm, và không có rủi ro.</div>`
                : `<div class="warning-box"><strong>Chưa có lợi: phí phạt ${fmtVND(penalty)} lớn hơn phần lãi tiết kiệm được ${fmtVND(interestSaved)}.</strong> Hãy cân nhắc đợi qua giai đoạn bị phạt phí, hoặc trả thêm với số tiền lớn hơn để phần tiết kiệm vượt qua phí cố định.</div>`;

            out.innerHTML = `
${row('Trả góp hiện tại', fmtVND(basePay))}
${row('Trả góp mới (gồm phần trả thêm)', fmtVND(basePay + extra))}

<div class="tool-section-title">Kết quả</div>
${row('Trả xong sau', `${Math.floor(months / 12)} năm ${months % 12} tháng`, 'highlight')}
${row('Rút ngắn được', monthsSaved > 0 ? `${Math.floor(monthsSaved / 12)} năm ${monthsSaved % 12} tháng` : 'không đáng kể', 'highlight')}
${row('Tổng lãi nếu giữ nguyên', fmtVND(baseInterest))}
${row('Tổng lãi nếu trả thêm', fmtVND(interest))}
${row('Tiền lãi tiết kiệm được', fmtVND(interestSaved), 'highlight')}
${row(`Phí phạt trả trước hạn (${String(feePct).replace('.', ',')}% trong ${feeYears} năm đầu)`, fmtVND(-penalty))}
${row('Lợi ích ròng', fmtVND(netSaved), 'highlight')}
${verdict}

<div class="tool-note"><strong>Trước khi trả thêm, hãy kiểm tra ba điều với ngân hàng:</strong><br>
1. <strong>Phí phạt trả trước hạn</strong> là bao nhiêu, áp dụng trong mấy năm đầu, và tính trên số tiền trả thêm hay trên dư nợ.<br>
2. <strong>Phần trả thêm có được ghi nhận vào gốc</strong> ngay không, hay bị treo tới kỳ sau.<br>
3. <strong>Trả thêm làm giảm khoản trả góp hay rút ngắn kỳ hạn?</strong> Rút ngắn kỳ hạn tiết kiệm lãi nhiều hơn; giảm khoản trả góp cho bạn dòng tiền thoáng hơn. Nhiều ngân hàng cho bạn chọn.<br><br>
<strong>Và một câu hỏi quan trọng hơn:</strong> đừng dùng quỹ dự phòng để trả nợ trước hạn. Tiền đã trả vào khoản vay rất khó lấy lại; quỹ dự phòng mới là thứ giữ bạn khỏi phải bán nhà khi có biến cố.</div>`;
        }
    };

    // ===== Công cụ 8: Kế hoạch tiết kiệm mua nhà =====
    const saveTool = {
        id: 'tiet-kiem-mua-nha',
        icon: '🐖',
        title: 'Bao Lâu Thì Đủ Tiền Mua Nhà',
        intro: 'Tính xem với mức tiết kiệm hiện tại, bao lâu nữa bạn đủ vốn tự có — có tính tới việc <strong>giá nhà cũng đang tăng trong lúc bạn tiết kiệm</strong>. Đây là yếu tố mà hầu hết mọi người bỏ qua, và nó là lý do mục tiêu cứ lùi xa dần.',
        html: `
<div class="tool-grid">
    <label class="tool-field"><span>Giá nhà nhắm tới hiện nay (đồng)</span><input type="number" id="svPrice" value="3000000000" min="0" step="100000000"></label>
    <label class="tool-field"><span>Đang có (đồng)</span><input type="number" id="svHave" value="300000000" min="0" step="50000000"></label>
    <label class="tool-field"><span>Tiết kiệm được mỗi tháng (đồng)</span><input type="number" id="svMonthly" value="15000000" min="0" step="1000000"></label>
    <label class="tool-field"><span>Cần vốn tự có: <b id="svDownOut">30%</b></span><input type="range" id="svDown" value="30" min="10" max="100" step="5"></label>
    <label class="tool-field"><span>Cộng thuế phí: <b id="svCostOut">8%</b> giá nhà</span><input type="range" id="svCost" value="8" min="0" max="20" step="1"></label>
    <label class="tool-field"><span>Giá nhà tăng: <b id="svGrowthOut">6%/năm</b></span><input type="range" id="svGrowth" value="6" min="-5" max="20" step="0.5"></label>
    <label class="tool-field"><span>Tiền tiết kiệm sinh lời: <b id="svRateOut">6%/năm</b></span><input type="range" id="svRate" value="6" min="0" max="20" step="0.5"></label>
    <label class="tool-field"><span>Tiết kiệm tăng mỗi năm: <b id="svRaiseOut">5%</b></span><input type="range" id="svRaise" value="5" min="0" max="20" step="1"></label>
</div>
<button class="tool-btn" id="svRun">🐖 Tính thời gian</button>
<div class="tool-result" id="svResult"></div>`,
        init() {
            bindRange('svDown', 'svDownOut', v => `${v}%`);
            bindRange('svCost', 'svCostOut', v => `${v}%`);
            bindRange('svGrowth', 'svGrowthOut', v => `${v}%/năm`);
            bindRange('svRate', 'svRateOut', v => `${v}%/năm`);
            bindRange('svRaise', 'svRaiseOut', v => `${v}%`);
            const b = document.getElementById('svRun');
            if (b) b.addEventListener('click', saveTool.run);
            saveTool.run();
        },
        run() {
            const out = document.getElementById('svResult');
            if (!out) return;

            const price0 = Math.max(0, num('svPrice', 0));
            const have = Math.max(0, num('svHave', 0));
            let monthly = Math.max(0, num('svMonthly', 0));
            const downPct = clamp(num('svDown', 30), 0, 100);
            const costPct = clamp(num('svCost', 8), 0, 50);
            const growthPct = clamp(num('svGrowth', 6), -50, 100);
            const ratePct = clamp(num('svRate', 6), 0, 100);
            const raisePct = clamp(num('svRaise', 5), 0, 100);

            if (price0 <= 0) {
                out.innerHTML = `<div class="tool-empty">Hãy nhập giá nhà lớn hơn 0.</div>`;
                return;
            }

            const need = (downPct + costPct) / 100;
            const gM = Math.pow(1 + growthPct / 100, 1 / 12) - 1;
            const rM = Math.pow(1 + ratePct / 100, 1 / 12) - 1;

            let pot = have, price = price0, months = 0;
            const cap = 50 * 12;
            const marks = [];
            while (pot < price * need && months < cap) {
                months++;
                pot = pot * (1 + rM) + monthly;
                price = price * (1 + gM);
                if (months % 12 === 0) {
                    monthly = monthly * (1 + raisePct / 100);
                    if (months <= 120 || months % 60 === 0) {
                        marks.push(`<tr><td>Năm ${months / 12}</td><td>${fmtVND(pot)}</td><td>${fmtVND(price * need)}</td><td>${fmtPct(price * need > 0 ? pot / (price * need) * 100 : 0, 0)}</td></tr>`);
                    }
                }
            }

            const reached = months < cap;
            const y = Math.floor(months / 12), m = months % 12;

            // So sanh: neu gia nha khong tang
            let pot2 = have, months2 = 0, monthly2 = Math.max(0, num('svMonthly', 0));
            const target0 = price0 * need;
            while (pot2 < target0 && months2 < cap) {
                months2++;
                pot2 = pot2 * (1 + rM) + monthly2;
                if (months2 % 12 === 0) monthly2 = monthly2 * (1 + raisePct / 100);
            }
            const diffMonths = months - months2;

            out.innerHTML = `
${row('Vốn tự có cần có hiện nay', fmtVND(price0 * need), 'highlight')}
${row('Đang có', fmtVND(have))}
${row('Còn thiếu', fmtVND(Math.max(0, price0 * need - have)))}

<div class="tool-section-title">Kết quả</div>
${reached
    ? row('Đủ tiền sau', `${y} năm ${m} tháng`, 'highlight')
    : row('Đủ tiền sau', 'trên 50 năm — chưa khả thi với mức tiết kiệm này', 'highlight')}
${reached ? row('Khi đó giá nhà đã thành', fmtVND(price)) : ''}
${reached ? row('Vốn tự có cần lúc đó', fmtVND(price * need)) : ''}

${marks.length ? `<div class="tool-table-wrap"><table class="tool-table">
<tr><th>Mốc</th><th>Tiền tích lũy</th><th>Vốn cần lúc đó</th><th>Đạt bao nhiêu</th></tr>
${marks.join('')}</table></div>` : ''}

${reached && diffMonths > 0 ? `<div class="warning-box"><strong>Giá nhà tăng ${growthPct}%/năm làm bạn mất thêm ${Math.floor(diffMonths / 12)} năm ${diffMonths % 12} tháng.</strong> Nếu giá đứng yên, bạn đã đủ tiền sau ${Math.floor(months2 / 12)} năm ${months2 % 12} tháng. Đây là lý do mục tiêu mua nhà có cảm giác cứ lùi xa dần dù bạn vẫn tiết kiệm đều — bạn đang chạy đua với một đích đang di chuyển.</div>` : ''}

${!reached ? `<div class="warning-box"><strong>Với các giả định này, mục tiêu không đạt được.</strong> Giá nhà tăng nhanh hơn tốc độ bạn tích lũy. Ba hướng xử lý thực tế: hạ mục tiêu xuống một phân khúc hoặc khu vực khác; tăng mạnh mức tiết kiệm hàng tháng; hoặc chấp nhận vay với tỷ lệ vốn tự có thấp hơn và trả góp cao hơn. Hãy thử điều chỉnh các thanh trượt để xem yếu tố nào tạo khác biệt lớn nhất.</div>` : ''}

<div class="tool-note"><strong>Cách dùng công cụ này để ra quyết định:</strong> thử đổi từng thanh trượt một và xem cái nào rút ngắn thời gian nhiều nhất. Với phần lớn mọi người, <em>tăng số tiền tiết kiệm hàng tháng</em> có tác dụng mạnh hơn nhiều so với tìm nơi gửi tiền lãi cao hơn. Và <em>hạ mục tiêu giá nhà</em> có tác dụng mạnh hơn cả hai — vì nó vừa giảm số tiền cần vừa giảm tốc độ mục tiêu chạy xa.<br><br>
Lưu ý: đây là mô hình đơn giản hóa. Nó giả định bạn tiết kiệm đều và giá nhà tăng đều — cả hai đều không đúng trong thực tế. Hãy dùng nó để so sánh các lựa chọn, đừng dùng để dự báo một ngày cụ thể.</div>`;
        }
    };

    // ===== Công cụ 9: Định giá theo thu nhập =====
    const valueTool = {
        id: 'dinh-gia-thu-nhap',
        icon: '📐',
        title: 'Định Giá Theo Phương Pháp Thu Nhập',
        intro: 'Đi ngược từ tiền thuê ra <strong>giá trị hợp lý</strong> của một bất động sản cho thuê, theo đúng cách nhà đầu tư chuyên nghiệp định giá. Dùng để kiểm tra xem mức giá đang được chào có hợp lý so với dòng tiền nó tạo ra hay không.',
        html: `
<div class="tool-grid">
    <label class="tool-field"><span>Tiền thuê (đồng/tháng)</span><input type="number" id="dvRent" value="10000000" min="0" step="500000"></label>
    <label class="tool-field"><span>Giá đang được chào (đồng)</span><input type="number" id="dvAsk" value="3000000000" min="0" step="100000000"></label>
    <label class="tool-field"><span>Tỷ lệ trống: <b id="dvVacOut">8%</b></span><input type="range" id="dvVac" value="8" min="0" max="50" step="1"></label>
    <label class="tool-field"><span>Chi phí vận hành: <b id="dvOpexOut">25%</b> doanh thu</span><input type="range" id="dvOpex" value="25" min="0" max="70" step="1"></label>
    <label class="tool-field"><span>Cap rate thị trường: <b id="dvCapOut">5%</b></span><input type="range" id="dvCap" value="5" min="1" max="15" step="0.25"></label>
</div>
<button class="tool-btn" id="dvRun">📐 Định giá</button>
<div class="tool-result" id="dvResult"></div>`,
        init() {
            bindRange('dvVac', 'dvVacOut', v => `${v}%`);
            bindRange('dvOpex', 'dvOpexOut', v => `${v}%`);
            bindRange('dvCap', 'dvCapOut', v => `${String(v).replace('.', ',')}%`);
            const b = document.getElementById('dvRun');
            if (b) b.addEventListener('click', valueTool.run);
            valueTool.run();
        },
        run() {
            const out = document.getElementById('dvResult');
            if (!out) return;

            const rent = Math.max(0, num('dvRent', 0));
            const ask = Math.max(0, num('dvAsk', 0));
            const vacPct = clamp(num('dvVac', 8), 0, 100);
            const opexPct = clamp(num('dvOpex', 25), 0, 100);
            const capPct = clamp(num('dvCap', 5), 0.01, 100);

            if (rent <= 0) {
                out.innerHTML = `<div class="tool-empty">Hãy nhập tiền thuê lớn hơn 0.</div>`;
                return;
            }

            const gross = rent * 12;
            const effective = gross * (1 - vacPct / 100);
            const noi = effective * (1 - opexPct / 100);
            const value = noi / (capPct / 100);

            // Bang do nhay theo cap rate
            const caps = [capPct - 1, capPct - 0.5, capPct, capPct + 0.5, capPct + 1].filter(c => c > 0);
            const sens = caps.map(c => {
                const v = noi / (c / 100);
                return `<tr class="${Math.abs(c - capPct) < 1e-9 ? 'row-buy' : ''}">
                    <td>${c.toFixed(2).replace(/0+$/, '').replace(/\.$/, '').replace('.', ',')}%</td>
                    <td>${fmtVND(v)}</td>
                    <td>${ask > 0 ? fmtPct((v / ask - 1) * 100, 0) : '—'}</td></tr>`;
            }).join('');

            let verdict = '';
            if (ask > 0) {
                const impliedCap = noi / ask * 100;
                const diff = (value / ask - 1) * 100;
                if (diff < -20) {
                    verdict = `<div class="warning-box"><strong>Giá chào cao hơn khoảng ${fmtPct(-diff, 0)} so với giá trị theo dòng tiền.</strong> Ở mức giá đó, cap rate thực chỉ còn ${fmtPct(impliedCap)} — nghĩa là bạn đang trả một phần đáng kể cho <em>kỳ vọng tăng giá</em>, không phải cho thu nhập tài sản tạo ra. Điều đó có thể hợp lý nếu khu vực thực sự có triển vọng, nhưng hãy gọi đúng tên khoản cược đó.</div>`;
                } else if (diff > 20) {
                    verdict = `<div class="warning-box"><strong>Giá chào thấp hơn khoảng ${fmtPct(diff, 0)} so với giá trị theo dòng tiền — cap rate thực lên tới ${fmtPct(impliedCap)}.</strong> Cap rate cao bất thường là một câu hỏi, không phải một cơ hội. Hãy kiểm tra: tiền thuê hiện tại có bền vững không, hợp đồng thuê còn bao lâu, khu vực có đang mất dân hay mất nguồn việc làm không, tài sản có cần sửa lớn không, pháp lý có vấn đề gì không.</div>`;
                } else {
                    verdict = `<div class="tip-box"><strong>Giá chào nằm trong khoảng hợp lý</strong> so với dòng tiền tài sản tạo ra, với cap rate thực ${fmtPct(impliedCap)}. Bước tiếp theo là kiểm tra xem giả định về tiền thuê và tỷ lệ trống của bạn có sát thực tế khu vực hay không.</div>`;
                }
            }

            out.innerHTML = `
<div class="tool-section-title">Từ tiền thuê đến NOI</div>
${row('Tiền thuê cả năm', fmtVND(gross))}
${row(`− Thất thu do trống (${vacPct}%)`, fmtVND(-(gross - effective)))}
${row(`− Chi phí vận hành (${opexPct}%)`, fmtVND(-(effective - noi)))}
${row('= NOI', fmtVND(noi), 'highlight')}

<div class="tool-section-title">Giá trị</div>
<div class="formula-box">Giá trị = NOI ÷ Cap rate = ${fmtVND(noi)} ÷ ${String(capPct).replace('.', ',')}%</div>
${row('Giá trị hợp lý theo dòng tiền', fmtVND(value), 'highlight')}
${ask > 0 ? row('Giá đang được chào', fmtVND(ask)) : ''}
${ask > 0 ? row('Chênh lệch', fmtVND(value - ask) + ` (${fmtPct((value / ask - 1) * 100, 0)})`, 'highlight') : ''}
${ask > 0 ? row('Cap rate thực ở giá chào', fmtPct(noi / ask * 100)) : ''}
${verdict}

<div class="tool-section-title">Độ nhạy theo cap rate</div>
<div class="tool-table-wrap"><table class="tool-table">
<tr><th>Cap rate</th><th>Giá trị tương ứng</th><th>So với giá chào</th></tr>
${sens}
</table></div>

<div class="tool-note"><strong>Hãy chú ý bảng độ nhạy.</strong> Cap rate chỉ nhích 1 điểm phần trăm mà giá trị đổi rất nhiều — đây là cơ chế toán học khiến bất động sản đầu tư cực kỳ nhạy với lãi suất. Khi lãi suất tăng, nhà đầu tư đòi cap rate cao hơn, NOI thì không tăng ngay, nên thứ duy nhất có thể điều chỉnh là giá.<br><br>
<strong>Cap rate thị trường lấy ở đâu:</strong> hỏi các tài sản tương tự trong khu vực đã giao dịch — lấy tiền thuê ròng chia giá bán. Nếu không có dữ liệu, hãy dùng lãi suất tiền gửi kỳ hạn 12 tháng làm mốc tham chiếu tối thiểu và cộng thêm phần bù rủi ro.</div>`;
        }
    };

    global.reTools = [loanTool, affordTool, rentBuyTool, roiTool, valueTool, compareTool, prepayTool, saveTool, feeTool];
    global.reToolsHelpers = { pmt, loanFromPayment, balanceAfter, fmtVND };
})(window);
