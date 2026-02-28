// Multi Account Strategy
const multiAccountData = {
    'multi-account-strategy': {
        icon: '👥',
        title: 'Chiến Lược Multi Account',
        category: 'accounts',
        level: 'intermediate',
        connections: ['email-management', 'browser-profiles', 'free-tiers'],
        simple: `
            <h3>👥 Tại sao cần nhiều tài khoản?</h3>
            <p>Mỗi dịch vụ AI có <strong>free tier giới hạn</strong>. Nhiều tài khoản giúp bạn tận dụng tối đa các dịch vụ miễn phí.</p>
            <h4>Lợi ích</h4>
            <ul>
                <li>🆓 Tăng quota sử dụng miễn phí</li>
                <li>🔄 Backup khi tài khoản chính bị limit</li>
                <li>🧪 Test các tính năng khác nhau</li>
                <li>📊 Phân chia workspace theo dự án</li>
            </ul>
        `,
        detail: `
            <h3>📊 Chiến lược quản lý</h3>
            <h4>Phân loại tài khoản</h4>
            <table>
                <tr><th>Loại</th><th>Mục đích</th><th>Ưu tiên</th></tr>
                <tr><td>Tài khoản chính</td><td>Công việc quan trọng</td><td>Cao</td></tr>
                <tr><td>Tài khoản phụ</td><td>Thử nghiệm, test</td><td>Trung bình</td></tr>
                <tr><td>Tài khoản dự phòng</td><td>Backup khi cần</td><td>Thấp</td></tr>
            </table>
            <h4>Quản lý hiệu quả</h4>
            <ul>
                <li>Dùng password manager (Bitwarden miễn phí)</li>
                <li>Ghi chú rõ mục đích mỗi tài khoản</li>
                <li>Set calendar nhắc gia hạn trial</li>
            </ul>
            <div class="warning-box">
                ⚠️ Luôn đọc ToS của dịch vụ. Một số dịch vụ cấm multi-account.
            </div>
        `,
        advanced: `
            <h3>🎓 Hệ thống Multi-Account</h3>
            <h4>Automation Setup</h4>
            <ul>
                <li>Spreadsheet theo dõi tất cả accounts</li>
                <li>Auto-rotate giữa các tài khoản</li>
                <li>Monitor usage limits tự động</li>
            </ul>
            <h4>Bảo mật</h4>
            <ul>
                <li>Mỗi account dùng email riêng</li>
                <li>Password unique cho mỗi account</li>
                <li>Enable 2FA khi có thể</li>
                <li>Không link các accounts với nhau</li>
            </ul>
        `
    },
    'email-management': {
        icon: '📧',
        title: 'Quản Lý Email',
        category: 'accounts',
        level: 'beginner',
        connections: ['multi-account-strategy', 'browser-profiles'],
        simple: `
            <h3>📧 Quản lý email cho AI accounts</h3>
            <p>Cần nhiều email để đăng ký nhiều dịch vụ AI khác nhau.</p>
            <h4>Cách tạo email</h4>
            <ul>
                <li>📬 <strong>Gmail:</strong> Tạo nhiều tài khoản Google</li>
                <li>📮 <strong>Outlook:</strong> Email Microsoft miễn phí</li>
                <li>🔀 <strong>Gmail alias:</strong> yourname+ai1@gmail.com</li>
                <li>🌐 <strong>ProtonMail:</strong> Email bảo mật</li>
            </ul>
        `,
        detail: `
            <h3>📊 Chiến lược email</h3>
            <h4>Gmail Alias Trick</h4>
            <p>Gmail bỏ qua dấu "+" nên bạn có thể dùng:</p>
            <div class="example-box">
                yourname+chatgpt@gmail.com<br>
                yourname+claude@gmail.com<br>
                yourname+midjourney@gmail.com<br>
                → Tất cả về cùng inbox yourname@gmail.com
            </div>
            <h4>Tổ chức email</h4>
            <ul>
                <li>Tạo labels/folders cho mỗi dịch vụ AI</li>
                <li>Filter tự động theo sender</li>
                <li>Tắt notification không cần thiết</li>
            </ul>
            <div class="tip-box">
                💡 Một số dịch vụ nhận ra Gmail alias - trong trường hợp đó cần email riêng biệt.
            </div>
        `,
        advanced: `
            <h3>🎓 Email nâng cao</h3>
            <h4>Custom Domain Email</h4>
            <p>Mua domain riêng để tạo unlimited email:</p>
            <ul>
                <li>Cloudflare Email Routing (miễn phí)</li>
                <li>Catch-all: mọi @yourdomain.com về 1 inbox</li>
                <li>ai1@domain.com, ai2@domain.com, etc.</li>
            </ul>
            <h4>Temporary Email</h4>
            <p>Dùng cho dịch vụ không quan trọng:</p>
            <ul>
                <li>Guerrilla Mail</li>
                <li>TempMail</li>
            </ul>
            <div class="warning-box">
                ⚠️ Không dùng temp email cho account quan trọng - sẽ mất quyền recovery.
            </div>
        `
    },
    'browser-profiles': {
        icon: '🌐',
        title: 'Browser Profiles',
        category: 'accounts',
        level: 'intermediate',
        connections: ['multi-account-strategy', 'vpn-proxy', 'email-management'],
        simple: `
            <h3>🌐 Browser Profiles</h3>
            <p>Dùng <strong>nhiều profile trình duyệt</strong> để đăng nhập nhiều tài khoản cùng lúc.</p>
            <h4>Cách làm</h4>
            <ul>
                <li>🔵 <strong>Chrome Profiles:</strong> Click avatar → Add profile</li>
                <li>🟠 <strong>Firefox Containers:</strong> Multi-Account Containers addon</li>
                <li>🟢 <strong>Edge Profiles:</strong> Tương tự Chrome</li>
            </ul>
        `,
        detail: `
            <h3>📊 Setup Browser Profiles</h3>
            <h4>Chrome Multi-Profile</h4>
            <ol>
                <li>Mở Chrome → Click avatar góc phải</li>
                <li>Add another profile</li>
                <li>Đặt tên: "AI Work", "AI Test", etc.</li>
                <li>Mỗi profile có cookies, history riêng</li>
            </ol>
            <h4>Firefox Multi-Account Containers</h4>
            <p>Ưu điểm: Nhiều "container" trong 1 cửa sổ browser.</p>
            <table>
                <tr><th>Container</th><th>Dùng cho</th></tr>
                <tr><td>Personal</td><td>ChatGPT account chính</td></tr>
                <tr><td>Work</td><td>Claude work account</td></tr>
                <tr><td>Testing</td><td>Thử dịch vụ mới</td></tr>
            </table>
        `,
        advanced: `
            <h3>🎓 Advanced Browser Setup</h3>
            <h4>Anti-Detect Browsers</h4>
            <p>Browsers chuyên dụng tạo fingerprint riêng cho mỗi profile:</p>
            <ul>
                <li>Mỗi profile có user agent khác</li>
                <li>Canvas fingerprint khác</li>
                <li>Timezone, language riêng</li>
            </ul>
            <h4>Browser Extensions hữu ích</h4>
            <ul>
                <li><strong>Cookie Editor:</strong> Quản lý cookies</li>
                <li><strong>User-Agent Switcher:</strong> Đổi user agent</li>
                <li><strong>Tab Suspender:</strong> Tiết kiệm RAM</li>
            </ul>
        `
    },
    'vpn-proxy': {
        icon: '🔒',
        title: 'VPN & Proxy',
        category: 'accounts',
        level: 'advanced',
        connections: ['browser-profiles', 'multi-account-strategy'],
        simple: `
            <h3>🔒 VPN & Proxy</h3>
            <p><strong>VPN</strong> thay đổi IP của bạn, giúp truy cập dịch vụ AI bị chặn theo vùng.</p>
            <h4>Khi nào cần VPN?</h4>
            <ul>
                <li>Dịch vụ AI chưa hỗ trợ Việt Nam</li>
                <li>Muốn truy cập giá rẻ hơn ở region khác</li>
                <li>Bảo vệ privacy khi dùng AI</li>
            </ul>
        `,
        detail: `
            <h3>📊 VPN cho AI</h3>
            <h4>VPN khuyên dùng</h4>
            <table>
                <tr><th>VPN</th><th>Giá</th><th>Ưu điểm</th></tr>
                <tr><td>Windscribe</td><td>Free 10GB/th</td><td>Đủ cho casual use</td></tr>
                <tr><td>ProtonVPN</td><td>Free unlimited</td><td>Bảo mật cao</td></tr>
                <tr><td>NordVPN</td><td>~$4/th</td><td>Nhanh, nhiều server</td></tr>
            </table>
            <h4>Lưu ý</h4>
            <ul>
                <li>Một số dịch vụ AI block VPN</li>
                <li>VPN miễn phí có thể chậm</li>
                <li>Chọn server gần để giảm lag</li>
            </ul>
        `,
        advanced: `
            <h3>🎓 Advanced Networking</h3>
            <h4>Residential Proxy</h4>
            <p>IP giống người dùng thật, khó bị detect:</p>
            <ul>
                <li>Xoay IP tự động theo thời gian</li>
                <li>Mỗi session có IP khác</li>
                <li>Đắt hơn VPN thường</li>
            </ul>
            <h4>Self-hosted VPN</h4>
            <p>Tự setup VPN server trên VPS:</p>
            <ul>
                <li>WireGuard: Nhanh, nhẹ</li>
                <li>OpenVPN: Linh hoạt</li>
                <li>Outline VPN: Dễ setup</li>
            </ul>
            <div class="tip-box">
                💡 VPS ở Singapore hoặc Nhật cho tốc độ tốt nhất từ Việt Nam.
            </div>
        `
    }
};
