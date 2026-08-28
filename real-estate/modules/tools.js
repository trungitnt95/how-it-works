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

    global.reTools = [loanTool, rentBuyTool, roiTool];
    global.reToolsHelpers = { pmt, balanceAfter, fmtVND };
})(window);
