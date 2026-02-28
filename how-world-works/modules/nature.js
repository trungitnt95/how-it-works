// Nature - Natural systems and environment
const natureData = {
    'climate-system': {
        icon: '🌡️',
        title: 'Hệ Thống Khí Hậu',
        category: 'nature',
        level: 'beginner',
        connections: ['ecosystems', 'energy-sources'],
        simple: `
            <h3>🌡️ Hệ thống khí hậu hoạt động thế nào?</h3>
            <p><strong>Khí hậu</strong> là trạng thái thời tiết trung bình qua nhiều thập kỷ. Hệ thống khí hậu Trái Đất được quyết định bởi sự cân bằng giữa <em>năng lượng nhận được</em> (từ Mặt Trời) và <em>năng lượng tỏa ra</em> (vào vũ trụ).</p>
            <div class="example-box">
                <strong>Hiệu ứng nhà kính (Greenhouse Effect):</strong><br>
                1. Mặt Trời chiếu năng lượng xuống Trái Đất<br>
                2. Trái Đất hấp thụ và phát lại nhiệt (tia hồng ngoại)<br>
                3. Khí nhà kính (CO₂, CH₄, N₂O) giữ lại một phần nhiệt<br>
                4. Giữ Trái Đất ấm ~33°C (không có → -18°C = đóng băng!)<br>
                5. Vấn đề: CON NGƯỜI thải quá nhiều CO₂ → giữ QUÁ NHIỀU nhiệt → nóng lên
            </div>
            <h4>Biến đổi khí hậu bằng con số</h4>
            <ul>
                <li>Nhiệt độ tăng: <strong>+1.1°C</strong> so với thời kỳ tiền công nghiệp</li>
                <li>CO₂: <strong>420 ppm</strong> (cao nhất trong 800,000 năm)</li>
                <li>Nước biển dâng: <strong>+20cm</strong> từ 1900, tăng tốc</li>
                <li>Băng Bắc Cực: giảm <strong>13%/thập kỷ</strong></li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Paris Agreement (2015):</strong> 196 nước cam kết giữ nhiệt độ tăng dưới 2°C, cố gắng dưới 1.5°C. Hiện tại: đang trên đường tăng 2.5-3°C. Thời gian còn lại rất ít.
            </div>
        `,
        detail: `
            <h3>📊 Khí hậu chi tiết</h3>

            <h4>Chu trình Carbon</h4>
            <p>Carbon di chuyển giữa khí quyển, đại dương, đất, sinh vật, và đá:</p>
            <table>
                <tr><th>Nguồn</th><th>Phát thải (GtCO₂/năm)</th><th>Hấp thụ</th></tr>
                <tr><td>Đốt nhiên liệu hóa thạch</td><td>~36</td><td>-</td></tr>
                <tr><td>Phá rừng</td><td>~4</td><td>-</td></tr>
                <tr><td>Đại dương hấp thụ</td><td>-</td><td>~10</td></tr>
                <tr><td>Rừng/đất hấp thụ</td><td>-</td><td>~12</td></tr>
                <tr><td><strong>Còn lại trong khí quyển</strong></td><td colspan="2"><strong>~18 GtCO₂/năm</strong> → tích tụ</td></tr>
            </table>

            <h4>El Niño & La Niña</h4>
            <ul>
                <li><strong>El Niño:</strong> Nước Thái Bình Dương ấm bất thường → hạn hán ở Đông Nam Á, lũ lụt ở Nam Mỹ, nhiệt độ toàn cầu tăng thêm</li>
                <li><strong>La Niña:</strong> Nước lạnh bất thường → mưa nhiều ở Đông Nam Á, hạn ở Nam Mỹ</li>
                <li>Chu kỳ 2-7 năm, ảnh hưởng thời tiết toàn cầu</li>
            </ul>

            <h4>Tipping Points (Điểm không thể quay lại)</h4>
            <div class="warning-box">
                <strong>⚠️ Nếu vượt qua, hệ quả không thể đảo ngược:</strong><br>
                • Tan băng Greenland → nước biển dâng 7m<br>
                • Tan permafrost → giải phóng methane khổng lồ → nóng thêm<br>
                • Rừng Amazon chuyển thành savanna → mất "lá phổi Trái Đất"<br>
                • Dòng hải lưu Gulf Stream suy yếu → châu Âu lạnh đi nghịch lý
            </div>

            <h4>Carbon Footprint</h4>
            <p>Lượng CO₂ mỗi người thải ra/năm:</p>
            <div class="example-box">
                • 🇺🇸 Mỹ: ~15 tấn/người<br>
                • 🇪🇺 EU: ~6 tấn/người<br>
                • 🇨🇳 Trung Quốc: ~8 tấn/người<br>
                • 🇻🇳 Việt Nam: ~3 tấn/người<br>
                • 🇮🇳 Ấn Độ: ~2 tấn/người<br>
                • Mục tiêu bền vững: < 2 tấn/người
            </div>
        `,
        advanced: `
            <h3>🔬 Khí hậu nâng cao</h3>

            <h4>Climate Models & Uncertainty</h4>
            <p>Các mô hình khí hậu (GCM) dự đoán tương lai dựa trên vật lý, hóa học, sinh học. Nhưng có uncertainty lớn vì:</p>
            <ul>
                <li><strong>Clouds:</strong> Mây phản xạ ánh sáng (làm mát) NHƯNG cũng giữ nhiệt (làm nóng) - chưa mô hình hóa chính xác</li>
                <li><strong>Feedback loops:</strong> Băng tan → bề mặt tối hơn → hấp thụ nhiệt nhiều hơn → tan thêm (ice-albedo feedback)</li>
                <li><strong>Human behavior:</strong> Không biết chính sách tương lai</li>
            </ul>

            <h4>RCP & SSP Scenarios</h4>
            <table>
                <tr><th>Kịch bản</th><th>Mô tả</th><th>Nhiệt độ 2100</th></tr>
                <tr><td>SSP1-1.9</td><td>Net zero vào 2050, rất tham vọng</td><td>+1.5°C</td></tr>
                <tr><td>SSP1-2.6</td><td>Giảm mạnh phát thải</td><td>+1.8°C</td></tr>
                <tr><td>SSP2-4.5</td><td>Chính sách trung bình (likely)</td><td>+2.7°C</td></tr>
                <tr><td>SSP5-8.5</td><td>Tiếp tục đốt nhiên liệu hóa thạch</td><td>+4.4°C</td></tr>
            </table>

            <h4>Climate Economics</h4>
            <div class="formula-box">
                Social Cost of Carbon (SCC) ≈ $50-200/tấn CO₂<br>
                = Chi phí thiệt hại mà mỗi tấn CO₂ gây ra cho xã hội
            </div>
            <p>William Nordhaus (Nobel 2018): Dùng carbon tax = SCC để nội hóa externality. Nhưng tranh cãi: discount rate (chiết khấu tương lai) ảnh hưởng lớn đến SCC - Stern Review dùng discount thấp → SCC cao → hành động ngay; Nordhaus dùng discount cao → SCC thấp → hành động chậm hơn.</p>

            <h4>Geoengineering</h4>
            <p>Giải pháp "cực đoan" nếu giảm phát thải không đủ:</p>
            <ul>
                <li><strong>Solar Radiation Management:</strong> Phun aerosol vào stratosphere → phản xạ ánh sáng → làm mát (giống núi lửa)</li>
                <li><strong>Carbon Capture & Storage (CCS):</strong> Hút CO₂ từ khí quyển, chôn dưới đất</li>
                <li><strong>Ocean fertilization:</strong> Bón sắt cho đại dương → tảo phát triển → hấp thụ CO₂</li>
            </ul>

            <div class="example-box">
                <strong>Tragedy of the Commons:</strong> Khí hậu là "của chung" → không ai có incentive giảm phát thải nếu người khác không giảm (free rider problem). Đây là lý do thỏa thuận quốc tế khó thành công - mỗi nước đều muốn nước khác giảm trước.
            </div>
        `
    },
    'ecosystems': {
        icon: '🌿',
        title: 'Hệ Sinh Thái',
        category: 'nature',
        level: 'beginner',
        connections: ['climate-system', 'water-cycle'],
        simple: `
            <h3>🌿 Hệ sinh thái là gì?</h3>
            <p><strong>Hệ sinh thái</strong> là cộng đồng sinh vật sống (thực vật, động vật, vi sinh vật) tương tác với nhau và với môi trường vật lý (nước, đất, không khí) tạo thành một hệ thống hoàn chỉnh.</p>
            <div class="example-box">
                <strong>Chuỗi thức ăn (Food Chain):</strong><br>
                Cỏ → Châu chấu → Ếch → Rắn → Đại bàng<br>
                (Producer → Primary Consumer → Secondary → Tertiary → Apex Predator)
            </div>
            <h4>Đa dạng sinh học (Biodiversity)</h4>
            <ul>
                <li>Trái Đất có khoảng <strong>8.7 triệu loài</strong> (ước tính, mới phát hiện ~1.5 triệu)</li>
                <li>Tốc độ tuyệt chủng hiện tại: <strong>gấp 1,000 lần</strong> tốc độ tự nhiên</li>
                <li><strong>60% động vật hoang dã</strong> đã biến mất trong 50 năm qua (WWF Living Planet Report)</li>
            </ul>
            <h4>Tại sao đa dạng sinh học quan trọng?</h4>
            <ul>
                <li><strong>Thực phẩm:</strong> 75% cây trồng phụ thuộc vào thụ phấn bởi côn trùng</li>
                <li><strong>Y tế:</strong> 50% thuốc hiện đại có nguồn gốc từ thiên nhiên</li>
                <li><strong>Khí hậu:</strong> Rừng hấp thụ CO₂, đất ngập nước lọc nước</li>
                <li><strong>Ổn định:</strong> Hệ sinh thái đa dạng = resilient (phục hồi tốt hơn)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Chúng ta đang ở cuộc tuyệt chủng lần thứ 6</strong> (Holocene extinction) - lần đầu tiên do MỘT loài gây ra (Homo sapiens).
            </div>
        `,
        detail: `
            <h3>📊 Hệ sinh thái chi tiết</h3>

            <h4>Trophic Levels (Bậc dinh dưỡng)</h4>
            <table>
                <tr><th>Bậc</th><th>Vai trò</th><th>Ví dụ</th><th>Năng lượng</th></tr>
                <tr><td>1. Producers</td><td>Quang hợp tạo năng lượng</td><td>Cỏ, tảo, cây</td><td>100%</td></tr>
                <tr><td>2. Primary Consumers</td><td>Ăn cỏ</td><td>Thỏ, hươu, châu chấu</td><td>~10%</td></tr>
                <tr><td>3. Secondary Consumers</td><td>Ăn thịt cấp 1</td><td>Ếch, chuột</td><td>~1%</td></tr>
                <tr><td>4. Tertiary Consumers</td><td>Ăn thịt cấp 2</td><td>Rắn, cú</td><td>~0.1%</td></tr>
                <tr><td>5. Apex Predators</td><td>Đỉnh chuỗi</td><td>Đại bàng, sư tử</td><td>~0.01%</td></tr>
            </table>
            <p><strong>Quy tắc 10%:</strong> Chỉ ~10% năng lượng truyền lên bậc tiếp theo. Đây là lý do ăn chay hiệu quả năng lượng hơn ăn thịt gấp 10 lần.</p>

            <h4>Keystone Species (Loài chủ chốt)</h4>
            <p>Loài có vai trò lớn hơn nhiều so với số lượng của chúng:</p>
            <div class="example-box">
                <strong>Sói ở Yellowstone:</strong> Sói bị tiêu diệt (1926) → hươu quá nhiều → ăn sạch cây non → bờ sông xói mòn → cá giảm → đại bàng giảm. Khi sói được tái du nhập (1995) → hươu giảm → cây mọc lại → sông đổi dòng chảy → TOÀN BỘ hệ sinh thái phục hồi. Đây gọi là "trophic cascade".
            </div>

            <h4>Ecosystem Services (Dịch vụ hệ sinh thái)</h4>
            <ul>
                <li><strong>Provisioning:</strong> Thực phẩm, nước, gỗ, thuốc</li>
                <li><strong>Regulating:</strong> Lọc không khí, lọc nước, thụ phấn, kiểm soát lũ</li>
                <li><strong>Cultural:</strong> Du lịch, tâm linh, giáo dục, thẩm mỹ</li>
                <li><strong>Supporting:</strong> Chu trình dinh dưỡng, tạo đất, quang hợp</li>
            </ul>
            <div class="formula-box">
                Giá trị ecosystem services toàn cầu ước tính: $125-145 nghìn tỷ/năm (lớn hơn GDP toàn cầu!)
            </div>

            <div class="warning-box">
                <strong>⚠️ Phá rừng:</strong> Mỗi năm mất ~10 triệu hectare rừng (= diện tích Hàn Quốc). Nguyên nhân chính: nông nghiệp (soy, palm oil, cattle), khai thác gỗ, đô thị hóa.
            </div>
        `,
        advanced: `
            <h3>🔬 Hệ sinh thái nâng cao</h3>

            <h4>Mass Extinctions (Đại tuyệt chủng)</h4>
            <table>
                <tr><th>Lần</th><th>Thời gian</th><th>Loài mất</th><th>Nguyên nhân</th></tr>
                <tr><td>1. Ordovician</td><td>443 MYA</td><td>85%</td><td>Kỷ băng hà</td></tr>
                <tr><td>2. Devonian</td><td>372 MYA</td><td>75%</td><td>Thiếu oxy đại dương</td></tr>
                <tr><td>3. Permian</td><td>252 MYA</td><td>96%</td><td>Núi lửa siêu lớn (Siberian Traps)</td></tr>
                <tr><td>4. Triassic</td><td>201 MYA</td><td>80%</td><td>Núi lửa + CO₂</td></tr>
                <tr><td>5. Cretaceous</td><td>66 MYA</td><td>76%</td><td>Thiên thạch (Chicxulub)</td></tr>
                <tr><td><strong>6. Holocene</strong></td><td><strong>Hiện tại</strong></td><td><strong>?</strong></td><td><strong>Con người</strong></td></tr>
            </table>

            <h4>Planetary Boundaries (Johan Rockström)</h4>
            <p>9 ranh giới an toàn cho Trái Đất - vượt qua = rủi ro catastrophic:</p>
            <ul>
                <li>✅ Tầng ozone (đã phục hồi nhờ Montreal Protocol)</li>
                <li>⚠️ Biến đổi khí hậu (đang vi phạm)</li>
                <li>❌ Đa dạng sinh học (đã vượt xa ranh giới)</li>
                <li>❌ Chu trình Nitrogen/Phosphorus (ô nhiễm nông nghiệp)</li>
                <li>❌ Thay đổi sử dụng đất (phá rừng)</li>
                <li>⚠️ Nước ngọt, Acid hóa đại dương, Ô nhiễm hóa chất</li>
            </ul>

            <h4>Conservation Strategies</h4>
            <table>
                <tr><th>Chiến lược</th><th>Mô tả</th><th>Ví dụ</th></tr>
                <tr><td>Protected Areas</td><td>Khu bảo tồn (17% đất, 8% biển)</td><td>30x30 target: 30% vào 2030</td></tr>
                <tr><td>Payment for ES</td><td>Trả tiền cho ecosystem services</td><td>Costa Rica: trả nông dân giữ rừng</td></tr>
                <tr><td>Rewilding</td><td>Tái hoang dã - để thiên nhiên tự phục hồi</td><td>Pleistocene Park (Siberia)</td></tr>
                <tr><td>De-extinction</td><td>Hồi sinh loài tuyệt chủng bằng gene editing</td><td>Woolly mammoth project (Colossal)</td></tr>
            </table>

            <div class="example-box">
                <strong>Tragedy of the Commons (Hardin, 1968):</strong> Tài nguyên chung (fisheries, atmosphere, forests) bị khai thác quá mức vì mỗi cá nhân có incentive lấy nhiều nhất có thể. Giải pháp: quyền sở hữu rõ ràng (Coase), quy định tập thể (Ostrom - Nobel 2009), hoặc thuế Pigouvian.
            </div>
        `
    },
    'water-cycle': {
        icon: '💧',
        title: 'Chu Trình Nước',
        category: 'nature',
        level: 'beginner',
        connections: ['ecosystems', 'climate-system'],
        simple: `
            <h3>💧 Chu trình nước hoạt động thế nào?</h3>
            <p>Nước liên tục di chuyển giữa <strong>đại dương, khí quyển, và đất liền</strong> trong một vòng tuần hoàn. Tổng lượng nước trên Trái Đất không đổi - chỉ thay đổi dạng và vị trí.</p>
            <div class="example-box">
                <strong>Các bước:</strong><br>
                1. <strong>Bốc hơi (Evaporation):</strong> Mặt Trời đun nóng → nước biển/sông bốc hơi lên<br>
                2. <strong>Ngưng tụ (Condensation):</strong> Hơi nước lên cao → lạnh → thành mây<br>
                3. <strong>Mưa (Precipitation):</strong> Mây quá nặng → mưa/tuyết rơi xuống<br>
                4. <strong>Chảy tràn (Runoff):</strong> Nước chảy vào sông, suối, ra biển<br>
                5. <strong>Thấm (Infiltration):</strong> Nước thấm vào đất, xuống mạch nước ngầm<br>
                6. Lặp lại...
            </div>
            <h4>Phân bố nước trên Trái Đất</h4>
            <ul>
                <li><strong>97.5%</strong> = Nước mặn (đại dương) → không uống được</li>
                <li><strong>2.5%</strong> = Nước ngọt, trong đó:</li>
                <li>69% = Băng (Bắc/Nam Cực, sông băng)</li>
                <li>30% = Nước ngầm</li>
                <li><strong>< 1%</strong> = Nước mặt (sông, hồ) - nguồn nước ta dùng hàng ngày!</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Thiếu nước:</strong> ~2 tỷ người sống ở vùng thiếu nước. Dự kiến 2025: 2/3 dân số thế giới có thể đối mặt thiếu nước. Nước là "dầu mỏ của thế kỷ 21".
            </div>
        `,
        detail: `
            <h3>📊 Nước chi tiết</h3>

            <h4>Nước ngầm (Groundwater)</h4>
            <p>Nước tích trữ trong các tầng đá ngầm (aquifers). Nhiều thành phố phụ thuộc hoàn toàn vào nước ngầm:</p>
            <table>
                <tr><th>Aquifer</th><th>Vị trí</th><th>Tình trạng</th></tr>
                <tr><td>Ogallala</td><td>Mỹ (Great Plains)</td><td>Giảm 30% - cung cấp cho 30% nông nghiệp Mỹ</td></tr>
                <tr><td>North China Plain</td><td>Trung Quốc</td><td>Sắp cạn - 100 triệu người phụ thuộc</td></tr>
                <tr><td>Ganges-Brahmaputra</td><td>Ấn Độ/Bangladesh</td><td>Khai thác quá mức nghiêm trọng</td></tr>
            </table>
            <div class="warning-box">
                <strong>⚠️ Vấn đề:</strong> Aquifers mất hàng nghìn năm để nạp đầy, nhưng ta khai thác trong vài thập kỷ. Đây là "nợ nước" cho thế hệ tương lai.
            </div>

            <h4>Ô nhiễm nước</h4>
            <ul>
                <li><strong>Nông nghiệp:</strong> Phân bón → nitrate/phosphate → algal bloom → dead zones (vùng chết)</li>
                <li><strong>Công nghiệp:</strong> Kim loại nặng, hóa chất</li>
                <li><strong>Sinh hoạt:</strong> Nước thải chưa xử lý → 80% nước thải toàn cầu không được xử lý</li>
                <li><strong>Microplastics:</strong> Phát hiện trong nước uống, nước mưa, thậm chí trong máu người</li>
            </ul>

            <h4>Virtual Water (Nước ảo)</h4>
            <p>Lượng nước cần để sản xuất một sản phẩm:</p>
            <div class="example-box">
                • 1 kg thịt bò = <strong>15,400 lít</strong> nước<br>
                • 1 kg gạo = <strong>2,500 lít</strong><br>
                • 1 ly cà phê = <strong>140 lít</strong><br>
                • 1 quả trứng = <strong>200 lít</strong><br>
                • 1 chiếc jean = <strong>8,000 lít</strong>
            </div>

            <h4>Desalination (Khử mặn)</h4>
            <p>Biến nước biển thành nước ngọt. Saudi Arabia, Israel, UAE phụ thuộc lớn. Vấn đề: tốn năng lượng, đắt, tạo nước muối thải.</p>
        `,
        advanced: `
            <h3>🔬 Nước nâng cao</h3>

            <h4>Water-Energy-Food Nexus</h4>
            <p>Nước, năng lượng, và thực phẩm liên kết chặt chẽ:</p>
            <ul>
                <li>Nước cần năng lượng để bơm, xử lý, phân phối</li>
                <li>Năng lượng cần nước để làm mát (nhà máy điện, fracking)</li>
                <li>Thực phẩm cần cả nước VÀ năng lượng (tưới tiêu, phân bón, vận chuyển)</li>
                <li>Thay đổi MỘT yếu tố ảnh hưởng cả ba</li>
            </ul>

            <h4>Water Wars?</h4>
            <p>Nước có thể gây xung đột khi các nước chia sẻ nguồn nước:</p>
            <table>
                <tr><th>Xung đột</th><th>Các bên</th><th>Vấn đề</th></tr>
                <tr><td>Sông Nile</td><td>Ethiopia vs Egypt vs Sudan</td><td>Đập GERD (Ethiopia) → giảm nước cho Ai Cập</td></tr>
                <tr><td>Sông Mekong</td><td>Trung Quốc vs VN, Lào, Campuchia, Thái</td><td>Đập thượng nguồn TQ → giảm lưu lượng hạ nguồn</td></tr>
                <tr><td>Sông Jordan</td><td>Israel vs Palestine vs Jordan</td><td>Israel kiểm soát hầu hết nguồn nước</td></tr>
            </table>

            <h4>Climate Change & Water</h4>
            <div class="example-box">
                Biến đổi khí hậu thay đổi chu trình nước:<br>
                • Nhiệt độ tăng → bốc hơi nhiều hơn → mưa dữ dội hơn NHƯNG phân bố không đều<br>
                • Nơi khô càng khô (Trung Đông, châu Phi), nơi ướt càng ướt (Đông Nam Á)<br>
                • Sông băng tan → ngắn hạn: nước nhiều; dài hạn: cạn kiệt (Himalaya cung cấp nước cho 2 tỷ người)
            </div>

            <h4>Water Governance</h4>
            <p>Nước là quyền con người hay hàng hóa? Tranh cãi lớn:</p>
            <ul>
                <li><strong>Public water:</strong> Chính phủ quản lý, giá thấp/miễn phí, nhưng thường kém hiệu quả</li>
                <li><strong>Private water:</strong> Tư nhân quản lý, hiệu quả hơn nhưng giá cao, vấn đề tiếp cận</li>
                <li><strong>UN Resolution 64/292 (2010):</strong> Nước sạch là quyền con người cơ bản</li>
            </ul>

            <div class="formula-box">
                Integrated Water Resources Management (IWRM):<br>
                Quản lý nước tổng hợp xem xét TẤT CẢ stakeholders, TẤT CẢ nguồn nước, TẤT CẢ mục đích sử dụng
            </div>
        `
    },
    'energy-sources': {
        icon: '⚡',
        title: 'Nguồn Năng Lượng',
        category: 'nature',
        level: 'intermediate',
        connections: ['climate-system', 'geopolitics'],
        simple: `
            <h3>⚡ Nguồn năng lượng của thế giới</h3>
            <p>Mọi hoạt động của con người cần <strong>năng lượng</strong>. Câu hỏi lớn nhất thế kỷ 21: Làm sao chuyển từ năng lượng hóa thạch (gây biến đổi khí hậu) sang năng lượng sạch?</p>
            <h4>Cơ cấu năng lượng toàn cầu (2023)</h4>
            <ul>
                <li><strong>Dầu mỏ:</strong> ~31% - giao thông, hóa dầu</li>
                <li><strong>Than:</strong> ~27% - điện, công nghiệp (ô nhiễm nhất)</li>
                <li><strong>Khí tự nhiên:</strong> ~24% - điện, sưởi ấm (sạch hơn than)</li>
                <li><strong>Thủy điện:</strong> ~7%</li>
                <li><strong>Hạt nhân:</strong> ~4%</li>
                <li><strong>Tái tạo (solar, wind, etc.):</strong> ~7% (tăng nhanh nhất)</li>
            </ul>
            <div class="example-box">
                <strong>Sự thật:</strong> ~80% năng lượng thế giới vẫn từ nhiên liệu hóa thạch, giống 30 năm trước. Tái tạo tăng nhanh nhưng nhu cầu năng lượng cũng tăng → tỷ trọng thay đổi chậm.
            </div>
            <div class="tip-box">
                <strong>💡 Năng lượng = Quyền lực:</strong> Ai kiểm soát năng lượng = kiểm soát địa chính trị. Dầu → Trung Đông mạnh. Gas → Nga ảnh hưởng châu Âu. Pin lithium → Chile, DRC quan trọng.
            </div>
        `,
        detail: `
            <h3>📊 Năng lượng chi tiết</h3>

            <h4>So sánh nguồn năng lượng</h4>
            <table>
                <tr><th>Nguồn</th><th>Ưu điểm</th><th>Nhược điểm</th><th>CO₂ (g/kWh)</th></tr>
                <tr><td>Than</td><td>Rẻ, sẵn có</td><td>Ô nhiễm nhất</td><td>~1,000</td></tr>
                <tr><td>Khí</td><td>Sạch hơn than, linh hoạt</td><td>Vẫn phát thải, methane leak</td><td>~500</td></tr>
                <tr><td>Hạt nhân</td><td>Phát thải cực thấp, ổn định</td><td>Chất thải phóng xạ, tai nạn</td><td>~12</td></tr>
                <tr><td>Solar</td><td>Miễn phí, sạch, giá giảm nhanh</td><td>Gián đoạn, cần pin lưu trữ</td><td>~45</td></tr>
                <tr><td>Wind</td><td>Sạch, rẻ ở nơi có gió</td><td>Gián đoạn, ảnh hưởng cảnh quan</td><td>~11</td></tr>
                <tr><td>Thủy điện</td><td>Sạch, lưu trữ năng lượng</td><td>Phá hủy hệ sinh thái sông</td><td>~24</td></tr>
            </table>

            <h4>Energy Transition</h4>
            <p>Chuyển đổi năng lượng là quá trình dài hàng thập kỷ:</p>
            <div class="example-box">
                <strong>Lịch sử chuyển đổi:</strong><br>
                • Gỗ → Than: ~100 năm (1750-1850)<br>
                • Than → Dầu: ~100 năm (1850-1950)<br>
                • Hóa thạch → Tái tạo: đang diễn ra, CẦN nhanh hơn<br>
                • Giá solar giảm 90% trong 10 năm → rẻ hơn than ở hầu hết nơi
            </div>

            <h4>EROI (Energy Return on Investment)</h4>
            <div class="formula-box">
                EROI = Năng lượng thu được / Năng lượng đầu tư
            </div>
            <ul>
                <li>Dầu (1930s): EROI ~100:1 → dễ khai thác</li>
                <li>Dầu (nay): EROI ~15:1 → khó hơn (phải khoan sâu, fracking)</li>
                <li>Solar: EROI ~10-20:1 → đang cải thiện</li>
                <li>Nuclear: EROI ~75:1 → rất hiệu quả</li>
            </ul>

            <h4>Grid Storage (Lưu trữ năng lượng)</h4>
            <p>Thách thức lớn nhất của solar/wind: Mặt Trời không chiếu ban đêm, gió không thổi liên tục. Giải pháp:</p>
            <ul>
                <li><strong>Lithium-ion batteries:</strong> Tesla Megapack, giá giảm 90% từ 2010</li>
                <li><strong>Pumped hydro:</strong> Bơm nước lên cao khi thừa điện, xả xuống khi cần</li>
                <li><strong>Hydrogen:</strong> Dùng điện thừa tách nước → H₂ → đốt khi cần</li>
            </ul>
        `,
        advanced: `
            <h3>🔬 Năng lượng nâng cao</h3>

            <h4>Nuclear: Fission vs Fusion</h4>
            <table>
                <tr><th>Tiêu chí</th><th>Fission (Phân hạch)</th><th>Fusion (Nhiệt hạch)</th></tr>
                <tr><td>Nguyên lý</td><td>Tách hạt nhân nặng (Uranium)</td><td>Hợp hạt nhân nhẹ (Hydrogen → Helium)</td></tr>
                <tr><td>Trạng thái</td><td>Thương mại (~440 lò trên TG)</td><td>Nghiên cứu (ITER, NIF)</td></tr>
                <tr><td>Nhiên liệu</td><td>Uranium (hữu hạn)</td><td>Hydrogen (gần vô hạn)</td></tr>
                <tr><td>Chất thải</td><td>Phóng xạ (nguy hiểm hàng nghìn năm)</td><td>Helium (an toàn)</td></tr>
                <tr><td>Rủi ro</td><td>Meltdown (Chernobyl, Fukushima)</td><td>Không có rủi ro meltdown</td></tr>
            </table>

            <h4>Hydrogen Economy</h4>
            <p>Hydrogen có thể là nhiên liệu tương lai cho vận tải nặng, công nghiệp, lưu trữ:</p>
            <ul>
                <li><strong>Green H₂:</strong> Từ điện tái tạo + điện phân nước (sạch nhất, đắt nhất)</li>
                <li><strong>Blue H₂:</strong> Từ khí tự nhiên + carbon capture (trung gian)</li>
                <li><strong>Grey H₂:</strong> Từ khí tự nhiên, không capture (phổ biến nhất, ô nhiễm)</li>
            </ul>

            <h4>Geopolitics of Energy Transition</h4>
            <div class="example-box">
                Chuyển đổi năng lượng thay đổi bản đồ quyền lực:<br>
                • <strong>Thua:</strong> Saudi Arabia, Russia, OPEC (phụ thuộc dầu/gas)<br>
                • <strong>Thắng:</strong> Trung Quốc (sản xuất 80% solar panels), Chile (lithium), DRC (cobalt)<br>
                • <strong>Rủi ro mới:</strong> "Resource nationalism" cho khoáng sản quan trọng (lithium, cobalt, rare earth)
            </div>

            <h4>Energy Poverty</h4>
            <p>~770 triệu người không có điện. ~2.6 tỷ nấu ăn bằng củi/phân → ô nhiễm trong nhà giết ~3.8 triệu người/năm. Năng lượng sạch ≠ chỉ khí hậu, mà còn = phát triển con người.</p>

            <h4>Jevons Paradox</h4>
            <div class="formula-box">
                Hiệu quả năng lượng tăng → chi phí giảm → tiêu dùng TĂNG → tổng năng lượng dùng KHÔNG giảm
            </div>
            <p>VD: Xe tiết kiệm xăng hơn → lái nhiều hơn → tổng xăng dùng không giảm. Đây là lý do chỉ "hiệu quả" không đủ - cần thay đổi nguồn năng lượng cơ bản.</p>
        `
    },
    'space-earth': {
        icon: '🌏',
        title: 'Trái Đất Trong Vũ Trụ',
        category: 'nature',
        level: 'advanced',
        connections: ['climate-system', 'ecosystems'],
        simple: `
            <h3>🌏 Trái Đất trong vũ trụ</h3>
            <p>Trái Đất không phải "nền tĩnh" - nó là một <strong>hành tinh sống động</strong> trong vũ trụ bao la. Vị trí và chuyển động của Trái Đất ảnh hưởng trực tiếp đến mọi thứ trên bề mặt.</p>
            <h4>Các con số cơ bản</h4>
            <ul>
                <li><strong>Khoảng cách đến Mặt Trời:</strong> ~150 triệu km (8 phút ánh sáng)</li>
                <li><strong>Quay quanh Mặt Trời:</strong> 365.25 ngày → tạo mùa</li>
                <li><strong>Tự quay:</strong> 24 giờ → tạo ngày/đêm</li>
                <li><strong>Trục nghiêng:</strong> 23.5° → tạo 4 mùa</li>
                <li><strong>Tuổi:</strong> ~4.5 tỷ năm</li>
            </ul>
            <div class="example-box">
                <strong>Tại sao có 4 mùa?</strong><br>
                Trục Trái Đất nghiêng 23.5° → khi nghiêng về phía Mặt Trời = mùa hè (ánh sáng trực tiếp, ngày dài). Khi nghiêng xa = mùa đông (ánh sáng xiên, ngày ngắn). Đây là lý do Bắc bán cầu và Nam bán cầu có mùa ngược nhau.
            </div>
            <h4>Mặt Trăng</h4>
            <ul>
                <li>Tạo thủy triều bằng lực hấp dẫn</li>
                <li>Ổn định trục nghiêng Trái Đất (không có Mặt Trăng → trục dao động mạnh → khí hậu hỗn loạn)</li>
                <li>Khoảng cách: ~384,400 km (ngày càng xa 3.8 cm/năm)</li>
            </ul>
            <div class="tip-box">
                <strong>💡 Goldilocks Zone:</strong> Trái Đất nằm trong "vùng sống được" - không quá gần (nóng) không quá xa (lạnh) Mặt Trời → nước ở dạng lỏng → sự sống có thể phát triển.
            </div>
        `,
        detail: `
            <h3>📊 Trái Đất chi tiết</h3>

            <h4>Milankovitch Cycles</h4>
            <p>Biến đổi khí hậu tự nhiên theo chu kỳ thiên văn:</p>
            <table>
                <tr><th>Chu kỳ</th><th>Thời gian</th><th>Ảnh hưởng</th></tr>
                <tr><td>Eccentricity (độ lệch tâm quỹ đạo)</td><td>~100,000 năm</td><td>Khoảng cách Mặt Trời thay đổi 3%</td></tr>
                <tr><td>Obliquity (độ nghiêng trục)</td><td>~41,000 năm</td><td>21.5° - 24.5° → mùa rõ rệt hơn/ít hơn</td></tr>
                <tr><td>Precession (tuế sai)</td><td>~26,000 năm</td><td>Trục quay "lắc" → thay đổi mùa nào gần Mặt Trời nhất</td></tr>
            </table>
            <p>Các chu kỳ này giải thích kỷ băng hà (ice ages) lặp lại ~100,000 năm. Nhưng biến đổi khí hậu hiện tại NHANH hơn nhiều so với Milankovitch → do con người.</p>

            <h4>Asteroids & Comets</h4>
            <ul>
                <li><strong>Chicxulub (66 MYA):</strong> Thiên thạch 10km → xóa sổ khủng long → mở đường cho động vật có vú</li>
                <li><strong>Tunguska (1908):</strong> Thiên thạch nhỏ nổ trên Siberia → phá hủy 2,000 km² rừng</li>
                <li><strong>Chelyabinsk (2013):</strong> Thiên thạch 20m nổ trên Nga → 1,500 người bị thương</li>
                <li><strong>NASA DART (2022):</strong> Lần đầu thay đổi quỹ đạo tiểu hành tinh thành công → planetary defense</li>
            </ul>

            <h4>Hệ Mặt Trời</h4>
            <div class="example-box">
                <strong>Các hành tinh:</strong><br>
                ☿ Mercury → ♀ Venus → 🌍 Earth → ♂ Mars → ♃ Jupiter → ♄ Saturn → ♅ Uranus → ♆ Neptune<br><br>
                • Venus: "anh em song sinh" bị hiệu ứng nhà kính mất kiểm soát → 465°C<br>
                • Mars: khí quyển mỏng, -60°C, NASA/SpaceX muốn colonize<br>
                • Jupiter: "vacuum cleaner" hút thiên thạch → bảo vệ Trái Đất
            </div>

            <h4>Thủy triều</h4>
            <p>Lực hấp dẫn của Mặt Trăng (chủ yếu) và Mặt Trời tạo thủy triều lên/xuống 2 lần/ngày. Spring tides (Trăng tròn/mới) → triều cao nhất. Neap tides (Trăng bán nguyệt) → triều thấp nhất.</p>
        `,
        advanced: `
            <h3>🔬 Vũ trụ nâng cao</h3>

            <h4>Habitability (Khả năng sinh sống)</h4>
            <p>Điều kiện cho sự sống (như ta biết):</p>
            <ul>
                <li><strong>Nước lỏng:</strong> Dung môi cho hóa học sinh học</li>
                <li><strong>Nguồn năng lượng:</strong> Mặt Trời hoặc hóa học (hydrothermal vents)</li>
                <li><strong>Nguyên tố sinh học:</strong> C, H, O, N, P, S (CHONPS)</li>
                <li><strong>Từ trường:</strong> Bảo vệ khỏi bức xạ vũ trụ (Mars mất từ trường → mất khí quyển)</li>
                <li><strong>Mặt Trăng lớn:</strong> Ổn định trục quay</li>
                <li><strong>Sao chủ ổn định:</strong> Mặt Trời không quá bùng nổ</li>
            </ul>

            <h4>Fermi Paradox</h4>
            <div class="formula-box">
                "Nếu vũ trụ quá lớn và cũ, tại sao chúng ta chưa thấy ai?"
            </div>
            <p>Các giải thích:</p>
            <table>
                <tr><th>Giả thuyết</th><th>Giải thích</th></tr>
                <tr><td>Great Filter</td><td>Có rào cản cực khó mà ít văn minh vượt qua (có thể ở trước hoặc SAU chúng ta)</td></tr>
                <tr><td>Rare Earth</td><td>Trái Đất cực kỳ đặc biệt - điều kiện cho sự sống phức tạp rất hiếm</td></tr>
                <tr><td>Zoo Hypothesis</td><td>Họ đang quan sát nhưng không can thiệp</td></tr>
                <tr><td>Dark Forest</td><td>Mọi văn minh im lặng vì sợ bị tiêu diệt (Liu Cixin)</td></tr>
                <tr><td>Distance</td><td>Vũ trụ quá lớn - tín hiệu chưa đến</td></tr>
            </table>

            <h4>Drake Equation</h4>
            <div class="formula-box">
                N = R* × fp × ne × fl × fi × fc × L<br>
                N = số văn minh có thể liên lạc trong Milky Way
            </div>
            <p>Ước tính dao động từ 0 (chỉ có mình ta) đến hàng triệu, tùy giả định.</p>

            <h4>Anthropocene</h4>
            <p>Đề xuất kỷ địa chất mới - kỷ nguyên mà CON NGƯỜI trở thành lực địa chất chính:</p>
            <ul>
                <li>Thay đổi thành phần khí quyển (CO₂)</li>
                <li>Tuyệt chủng hàng loạt do con người</li>
                <li>Phóng xạ từ thử nghiệm hạt nhân (1945+) trong trầm tích</li>
                <li>Plastic trong trầm tích đại dương</li>
                <li>Thay đổi chu trình nitrogen (phân bón)</li>
            </ul>

            <div class="example-box">
                <strong>Pale Blue Dot (Carl Sagan):</strong> Năm 1990, tàu Voyager 1 chụp Trái Đất từ 6 tỷ km - chỉ là một chấm xanh nhạt. Sagan viết: "Hãy nhìn chấm đó. Đó là đây. Đó là nhà. Đó là chúng ta... Hành tinh duy nhất được biết đến có sự sống. Không có nơi nào khác, ít nhất trong tương lai gần, mà loài người có thể di cư đến."
            </div>
        `
    }
};
