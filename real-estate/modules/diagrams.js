// Bất Động Sản - Sơ đồ Mermaid
// Mỗi key là nguồn Mermaid thô, được app.js chèn vào <pre class="mermaid"> khi render chủ điểm.

const reDiagrams = {
    're-cycle': `flowchart LR
    A["1. Phục hồi<br/>Giá đáy, giao dịch thưa<br/>Người mua ở thực quay lại"] --> B["2. Tăng trưởng<br/>Tín dụng nới, dự án mới<br/>Giá tăng đều"]
    B --> C["3. Bùng nổ / Đầu cơ<br/>Ai cũng nói về nhà đất<br/>Giá rời xa thu nhập"]
    C --> D["4. Suy thoái<br/>Tín dụng siết, thanh khoản mất<br/>Giá giảm, dự án đắp chiếu"]
    D --> A
    C -.->|"Chất xúc tác:<br/>lãi suất tăng"| D
    style A fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style B fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style C fill:#5c4415,stroke:#f6b73c,color:#fdf3e0
    style D fill:#5a2530,stroke:#f05d5e,color:#fbe9ec`,

    're-credit': `flowchart TD
    NHTW["Ngân hàng trung ương<br/>hạ lãi suất điều hành"] --> NHTM["Ngân hàng thương mại<br/>vốn rẻ hơn, room tín dụng mở"]
    NHTM --> VAY["Người mua vay được<br/>nhiều tiền hơn"]
    VAY --> CAU["Sức cầu có khả năng<br/>thanh toán tăng"]
    CAU --> GIA["Giá nhà tăng"]
    GIA --> TS["Nhà làm tài sản thế chấp<br/>được định giá cao hơn"]
    TS --> NHTM
    GIA --> KV["Kỳ vọng 'giá còn tăng'<br/>kéo thêm người đầu cơ"]
    KV --> CAU
    CUNG["Cung nhà mới<br/>mất 2-5 năm mới ra hàng"] -.->|"độ trễ"| GIA
    style NHTW fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style GIA fill:#5c4415,stroke:#f6b73c,color:#fdf3e0
    style KV fill:#5a2530,stroke:#f05d5e,color:#fbe9ec
    style CUNG fill:#2b2f33,stroke:#8f9ba3,color:#e6ebee`,

    're-buy-flow': `flowchart TD
    B1["1. Xác định ngân sách thật<br/>vốn tự có + khả năng trả nợ"] --> B2["2. Sơ duyệt khoản vay<br/>biết trần vay trước khi đi xem"]
    B2 --> B3["3. Chọn khu vực & xem nhà"]
    B3 --> B4["4. Kiểm tra pháp lý<br/>sổ, quy hoạch, tranh chấp, thế chấp"]
    B4 -->|"Sạch"| B5["5. Đàm phán giá & điều khoản"]
    B4 -->|"Có vấn đề"| B3
    B5 --> B6["6. Đặt cọc<br/>hợp đồng ghi rõ điều kiện & phạt cọc"]
    B6 --> B7["7. Thẩm định giá & giải ngân"]
    B7 --> B8["8. Công chứng hợp đồng mua bán"]
    B8 --> B9["9. Nộp thuế phí, sang tên, nhận nhà"]
    style B4 fill:#5c4415,stroke:#f6b73c,color:#fdf3e0
    style B6 fill:#5a2530,stroke:#f05d5e,color:#fbe9ec
    style B9 fill:#1f4b3f,stroke:#48c774,color:#eaf6f0`,

    're-cashflow': `flowchart LR
    TT["Tiền thuê thu được<br/>(gross rent)"] --> TR{"Trừ chi phí"}
    TR --> C1["Tỷ lệ trống<br/>(vacancy)"]
    TR --> C2["Phí quản lý,<br/>bảo trì, sửa chữa"]
    TR --> C3["Thuế, bảo hiểm,<br/>phí dịch vụ"]
    C1 --> NOI["NOI<br/>Thu nhập hoạt động ròng"]
    C2 --> NOI
    C3 --> NOI
    NOI --> TG{"Trừ trả góp<br/>ngân hàng"}
    TG --> DT["Dòng tiền ròng<br/>vào túi bạn"]
    NOI -.->|"NOI / Giá mua"| CAP["Cap rate"]
    style NOI fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style DT fill:#1f4b3f,stroke:#48c774,color:#eaf6f0
    style CAP fill:#5c4415,stroke:#f6b73c,color:#fdf3e0`,

    're-legal-vn': `flowchart TD
    ND["Toàn dân<br/>(sở hữu đất đai)"] --> NN["Nhà nước<br/>đại diện chủ sở hữu"]
    NN -->|"giao đất / cho thuê đất<br/>công nhận quyền sử dụng"| QSD["Quyền sử dụng đất<br/>của người dân & doanh nghiệp"]
    QSD --> GCN["Giấy chứng nhận<br/>QSD đất & tài sản gắn liền<br/>(sổ đỏ / sổ hồng)"]
    GCN --> Q1["Chuyển nhượng"]
    GCN --> Q2["Cho thuê"]
    GCN --> Q3["Thế chấp"]
    GCN --> Q4["Thừa kế, tặng cho"]
    NN -.->|"thu hồi vì mục đích<br/>quốc phòng, công cộng,<br/>phát triển KT-XH"| QSD
    style ND fill:#2b2f33,stroke:#8f9ba3,color:#e6ebee
    style NN fill:#274a63,stroke:#5dade2,color:#e8f2f8
    style GCN fill:#1f4b3f,stroke:#48c774,color:#eaf6f0`
};
