const quizCategories = [
    { id: 'overview', label: '🧭 Tổng quan' },
    { id: 'banking', label: '🏦 Ngân hàng' },
    { id: 'policy', label: '🏛️ Chính sách' },
    { id: 'business', label: '🏭 Doanh nghiệp' },
    { id: 'personal', label: '👥 Cá nhân' },
    { id: 'markets', label: '📈 Thị trường' },
    { id: 'risk', label: '🛡️ Rủi ro' },
    { id: 'global', label: '🌍 Quốc tế' },
    { id: 'modern', label: '⚡ Hiện đại' }
];

const componentQuizCategoryMap = {
    'central-bank': 'policy',
    'commercial-bank': 'banking',
    'government': 'policy',
    'business': 'business',
    'individual': 'personal',
    'foreign': 'global',
    'stock-exchange': 'markets',
    'investment-fund': 'markets',
    'consumer-finance': 'banking',
    'shadow-banking': 'banking',
    'bond-market': 'markets',
    'real-estate': 'markets',
    'commodity': 'markets',
    'forex': 'global',
    'insurance': 'risk',
    'pension-fund': 'risk',
    'credit-rating': 'risk',
    'fintech': 'modern',
    'crypto': 'modern',
    'startup': 'modern',
    'labor-market': 'overview',
    'supply-chain': 'overview'
};

const componentRoleFocus = {
    'central-bank': {
        answer: 'Điều tiết thanh khoản, lãi suất và ổn định tiền tệ',
        explanation: 'Ngân hàng trung ương không bán hàng hóa cho nền kinh tế; họ điều khiển “giá sỉ của tiền”, kỳ vọng lạm phát và thanh khoản của cả hệ thống.'
    },
    'commercial-bank': {
        answer: 'Biến tiền gửi thành tín dụng và xử lý thanh toán hằng ngày',
        explanation: 'Ngân hàng thương mại đứng giữa tiết kiệm và vay nợ. Họ nhận tiền gửi, cho vay và giữ nhịp thanh toán của nền kinh tế.'
    },
    'government': {
        answer: 'Thu thuế, chi tiêu công và phát hành nợ công',
        explanation: 'Chính phủ vừa hút tiền về qua thuế vừa bơm tiền ra qua đầu tư công, lương, trợ cấp và phát hành trái phiếu khi thâm hụt.'
    },
    'business': {
        answer: 'Biến vốn thành hàng hóa, dịch vụ, lương và lợi nhuận',
        explanation: 'Doanh nghiệp là mắt xích chuyển vốn tài chính thành hoạt động sản xuất, bán hàng, trả lương và tạo dòng tiền thật.'
    },
    'individual': {
        answer: 'Tạo thu nhập, tiêu dùng, tiết kiệm và đầu tư tài sản',
        explanation: 'Người dân là nơi chính sách cuối cùng đi tới: lương, chi tiêu, tiết kiệm, nợ vay và tích lũy tài sản đều tập trung ở hộ gia đình.'
    },
    'foreign': {
        answer: 'Mang vốn, thương mại và ngoại tệ ra vào nền kinh tế',
        explanation: 'Khối quốc tế kết nối nền kinh tế trong nước với FDI, xuất nhập khẩu, kiều hối, nợ ngoại tệ và biến động tỷ giá.'
    },
    'stock-exchange': {
        answer: 'Định giá cổ phiếu và tạo thanh khoản cho vốn cổ phần',
        explanation: 'Sàn chứng khoán giúp doanh nghiệp gọi vốn cổ phần và giúp nhà đầu tư mua bán lại phần sở hữu với thanh khoản cao hơn.'
    },
    'investment-fund': {
        answer: 'Gom vốn của nhiều người để phân bổ vào danh mục',
        explanation: 'Quỹ đầu tư không tạo tài sản mới; họ là bộ máy gom vốn, chọn tài sản, tái cân bằng và quản trị rủi ro hộ nhà đầu tư.'
    },
    'consumer-finance': {
        answer: 'Cấp tín dụng bán lẻ như thẻ, trả góp và BNPL',
        explanation: 'Công ty tài chính tiêu dùng tập trung vào các khoản vay nhỏ, nhanh, lãi cao và rất phụ thuộc vào chất lượng chấm điểm tín dụng.'
    },
    'shadow-banking': {
        answer: 'Cho vay ngoài hệ ngân hàng chính thức với rủi ro cao hơn',
        explanation: 'Shadow banking thường ít bị giám sát hơn, vốn vào kém ổn định hơn và dựa mạnh vào tài sản thế chấp hoặc quyền đòi nợ.'
    },
    'bond-market': {
        answer: 'Huy động và giao dịch vốn nợ trung dài hạn',
        explanation: 'Thị trường trái phiếu là nơi các tổ chức phát hành “giấy nợ” để vay tiền từ nhà đầu tư thay vì chỉ dựa vào ngân hàng.'
    },
    'real-estate': {
        answer: 'Lưu trữ giá trị, cung cấp chỗ ở và làm tài sản thế chấp',
        explanation: 'Bất động sản vừa là tài sản sử dụng, vừa là tài sản đầu cơ, đồng thời cũng là tài sản bảo đảm rất quan trọng của hệ tín dụng.'
    },
    'commodity': {
        answer: 'Định giá nguyên liệu đầu vào và tài sản phòng thủ như vàng',
        explanation: 'Hàng hóa tác động trực tiếp lên chi phí sản xuất, lạm phát và tâm lý thị trường, đặc biệt với dầu, vàng và kim loại công nghiệp.'
    },
    'forex': {
        answer: 'Định giá ngoại tệ và hỗ trợ phòng hộ tỷ giá',
        explanation: 'Forex là nơi các đồng tiền được trao đổi, giúp thanh toán quốc tế và khóa trước rủi ro tỷ giá cho doanh nghiệp, ngân hàng.'
    },
    'insurance': {
        answer: 'Chuyển rủi ro của số ít sang quỹ phí của số đông',
        explanation: 'Bảo hiểm gom phí đều đặn từ nhiều người để chi trả cho số ít trường hợp gặp tổn thất lớn hoặc hiếm gặp.'
    },
    'pension-fund': {
        answer: 'Biến đóng góp hiện tại thành thu nhập hưu trí dài hạn',
        explanation: 'Quỹ hưu trí lấy tiền đóng góp hôm nay, đầu tư dài hạn và đổi thành dòng tiền ổn định cho người nghỉ hưu trong tương lai.'
    },
    'credit-rating': {
        answer: 'Đánh giá xác suất trả nợ và ảnh hưởng chi phí vốn',
        explanation: 'Tổ chức xếp hạng không cho vay trực tiếp, nhưng đánh giá của họ ảnh hưởng mạnh tới lãi suất và khả năng huy động vốn.'
    },
    'fintech': {
        answer: 'Giảm ma sát giao dịch và phân phối tài chính qua công nghệ',
        explanation: 'Fintech làm nhanh hơn, rẻ hơn, tiện hơn ở khâu thanh toán, định danh, đối soát, chấm điểm hoặc phân phối dịch vụ tài chính.'
    },
    'crypto': {
        answer: 'Tạo hệ tài sản số, thanh khoản số và ứng dụng phi tập trung',
        explanation: 'Crypto không chỉ là đầu cơ; nó còn là lớp tài sản số, stablecoin, thanh khoản on-chain và các giao thức tài chính mới.'
    },
    'startup': {
        answer: 'Đổi vốn mạo hiểm lấy tăng trưởng và khả năng mở rộng tương lai',
        explanation: 'Startup thường chưa có tài sản cứng hay lợi nhuận lớn; giá trị của nó nằm ở sản phẩm, dữ liệu, tốc độ học hỏi và khả năng scale.'
    },
    'labor-market': {
        answer: 'Kết nối cung-cầu lao động, quyết định lương và việc làm trong nền kinh tế',
        explanation: 'Thị trường lao động là nơi doanh nghiệp tìm người, người tìm việc. Lương và tỷ lệ thất nghiệp phản ánh sức khỏe thật của nền kinh tế.'
    },
    'supply-chain': {
        answer: 'Vận chuyển hàng hóa từ nguyên liệu đến tay người tiêu dùng qua nhiều mắt xích',
        explanation: 'Chuỗi cung ứng là hệ mạch máu của nền kinh tế thực. Khi đứt gãy, giá tăng và sản xuất đình trệ dù tiền vẫn dư thừa.'
    }
};

function q(id, cat, question, options, answer, explanation) {
    return { id, cat, question, options, answer, explanation };
}

function placeCorrectOption(questionId, correct, distractors) {
    const seed = Array.from(questionId).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const insertIndex = seed % 4;
    const options = distractors.slice(0, 3);
    options.splice(insertIndex, 0, correct);
    return { options, answer: insertIndex };
}

function buildRoleQuestions() {
    const roleIds = Object.keys(componentRoleFocus);

    return roleIds.map((componentId) => {
        const correct = componentRoleFocus[componentId];
        const title = componentData[componentId].title;
        const category = componentQuizCategoryMap[componentId] || 'overview';
        const sameCategory = roleIds
            .filter((id) => id !== componentId && componentQuizCategoryMap[id] === category)
            .map((id) => componentRoleFocus[id].answer);
        const otherCategories = roleIds
            .filter((id) => id !== componentId && componentQuizCategoryMap[id] !== category)
            .map((id) => componentRoleFocus[id].answer);
        const distractors = [...sameCategory, ...otherCategories].filter((value, index, arr) => arr.indexOf(value) === index);
        const placed = placeCorrectOption(`role-${componentId}`, correct.answer, distractors);

        return {
            id: `role-${componentId}`,
            cat: category,
            question: `Vai trò trung tâm của "${title}" trong hệ thống tiền tệ là gì?`,
            options: placed.options,
            answer: placed.answer,
            explanation: `${correct.explanation}`
        };
    });
}

function buildAssetQuestions() {
    return Object.entries(assetStructureData).map(([componentId, structure]) => {
        const title = componentData[componentId].title;
        const category = componentQuizCategoryMap[componentId] || 'overview';
        const sortedItems = [...structure.items].sort((a, b) => b.share - a.share);
        const correctItem = sortedItems[0];
        const distractors = structure.items
            .filter((item) => item.label !== correctItem.label)
            .map((item) => item.label);
        const placed = placeCorrectOption(`asset-${componentId}`, correctItem.label, distractors);

        return {
            id: `asset-${componentId}`,
            cat: category,
            question: `Trong cơ cấu tài sản điển hình của "${title}", khoản nào thường chiếm tỷ trọng lớn nhất?`,
            options: placed.options,
            answer: placed.answer,
            explanation: `${correctItem.label} thường đứng đầu vì ${correctItem.detail.toLowerCase()}`
        };
    });
}

const curatedQuizQuestions = [
    q(
        'overview-01',
        'overview',
        'Tiền mới thường đi vào nền kinh tế thực qua mắt xích nào trước?',
        ['Ngân hàng thương mại', 'Sàn chứng khoán', 'Người lao động', 'Doanh nghiệp xuất khẩu'],
        0,
        'Trong thực tế, ngân hàng trung ương thường bơm thanh khoản vào hệ ngân hàng trước. Từ đó tín dụng mới lan sang doanh nghiệp, hộ gia đình và thị trường tài sản.'
    ),
    q(
        'overview-02',
        'overview',
        'Vì sao giá tài sản có thể tăng nhanh hơn tiền lương khi tiền rẻ?',
        ['Vì tín dụng rẻ làm đòn bẩy và chiết khấu dòng tiền hấp dẫn hơn', 'Vì lương luôn bị nhà nước giữ cố định', 'Vì doanh nghiệp ngừng trả lương', 'Vì thuế thu nhập bị xóa bỏ hoàn toàn'],
        0,
        'Khi lãi suất thấp, nhà đầu tư sẵn sàng trả giá cao hơn cho tài sản tương lai và dùng đòn bẩy nhiều hơn. Lương thường điều chỉnh chậm hơn giá tài sản.'
    ),
    q(
        'overview-03',
        'overview',
        'Chuỗi nào mô tả gần đúng vòng tuần hoàn tiền cơ bản?',
        ['Ngân hàng -> Doanh nghiệp -> Người dân -> Ngân hàng/Chính phủ', 'Người dân -> Ngân hàng trung ương -> Công ty bảo hiểm -> Startup', 'Chính phủ -> Crypto -> Doanh nghiệp -> Vàng', 'Quốc tế -> Fintech -> Bất động sản -> Hưu trí'],
        0,
        'Tiền thường đi từ hệ ngân hàng sang doanh nghiệp và hộ gia đình, rồi quay lại qua tiết kiệm, trả nợ và thuế.'
    ),
    q(
        'overview-04',
        'overview',
        'Yếu tố nào quyết định mạnh việc tiền bơm ra có biến thành lạm phát hay không?',
        ['Nhu cầu vay, tốc độ quay vòng tiền và khả năng cung ứng hàng hóa', 'Màu thẻ ATM của người dân', 'Giá cổ phiếu của một công ty riêng lẻ', 'Số máy ATM trong thành phố'],
        0,
        'Tiền chỉ gây áp lực lạm phát mạnh khi nó thực sự được vay ra, chi tiêu mạnh và gặp nền cung không đáp ứng kịp.'
    ),
    q(
        'overview-05',
        'overview',
        'Lãi suất thực âm thường khiến điều gì xảy ra dễ hơn?',
        ['Tiền gửi kém hấp dẫn và dòng tiền dễ chạy sang tài sản rủi ro', 'Nợ công tự biến mất', 'Lạm phát chắc chắn bằng 0', 'Doanh nghiệp không cần vốn lưu động'],
        0,
        'Nếu lãi danh nghĩa thấp hơn lạm phát, người nắm tiền mặt hoặc tiền gửi bị mất sức mua và thường đi tìm tài sản có khả năng tăng nhanh hơn.'
    ),
    q(
        'banking-01',
        'banking',
        'Tăng tỷ lệ dự trữ bắt buộc thường làm điều gì?',
        ['Giảm khả năng cho vay và làm tiền nhân lên chậm hơn', 'Tăng ngay giá vàng thế giới', 'Xóa nợ cho hộ gia đình', 'Làm mọi khoản vay trở thành nợ xấu'],
        0,
        'Khi ngân hàng phải giữ lại nhiều dự trữ hơn, phần tiền có thể đem cho vay giảm xuống và money multiplier cũng giảm.'
    ),
    q(
        'banking-02',
        'banking',
        'Rủi ro lớn nhất của việc “huy động ngắn, cho vay dài” là gì?',
        ['Sốc thanh khoản khi người gửi rút tiền nhanh hơn tài sản thu về', 'Doanh nghiệp tự động tăng lợi nhuận', 'Lạm phát biến mất hoàn toàn', 'Tỷ giá luôn ổn định hơn'],
        0,
        'Ngân hàng có thể còn tài sản trên sổ sách nhưng vẫn kẹt tiền mặt nếu người gửi đòi tiền ngay trong khi khoản cho vay còn rất dài hạn.'
    ),
    q(
        'banking-03',
        'banking',
        'Nếu bạn trả thẻ tín dụng mỗi tháng thấp hơn tiền lãi phát sinh, điều gì xảy ra?',
        ['Dư nợ tiếp tục tăng dần', 'Thẻ tự động chuyển thành gửi tiết kiệm', 'Ngân hàng phải hoàn tiền cho bạn', 'Mọi khoản phí bị xóa bỏ'],
        0,
        'Khi khoản trả hàng tháng không đủ bù lãi, số nợ còn lại không giảm mà còn phình ra theo thời gian.'
    ),
    q(
        'banking-04',
        'banking',
        'Trong vay mua nhà, tài sản thế chấp thường là gì?',
        ['Chính căn nhà hoặc quyền tài sản gắn với khoản vay', 'Lương hưu của người vay', 'Số điểm tín dụng của hàng xóm', 'Vé máy bay khứ hồi'],
        0,
        'Khoản vay thế chấp lấy chính bất động sản làm tài sản bảo đảm. Vì thế ngân hàng rất quan tâm pháp lý và giá trị thanh lý của tài sản đó.'
    ),
    q(
        'banking-05',
        'banking',
        'Vì sao shadow banking thường rủi ro hơn ngân hàng thương mại?',
        ['Vì giám sát yếu hơn và nguồn vốn thường kém ổn định hơn', 'Vì luôn có dự trữ bắt buộc cao hơn', 'Vì chỉ cho chính phủ vay', 'Vì không liên quan đến lãi suất'],
        0,
        'Shadow banking thường hoạt động ở vùng xám, ít lớp đệm vốn và thanh khoản hơn, nên dễ sốc khi thị trường tài sản đảo chiều.'
    ),
    q(
        'banking-06',
        'banking',
        'Tỷ lệ nợ xấu tăng mạnh thường báo hiệu điều gì?',
        ['Chất lượng tài sản tín dụng đang xấu đi và lợi nhuận tương lai bị đe dọa', 'Ngân hàng đang an toàn hơn trước', 'Tiền gửi sẽ tăng ngay lập tức', 'Lãi suất thực đang âm'],
        0,
        'Nợ xấu cao buộc ngân hàng phải trích lập dự phòng nhiều hơn, ăn vào lợi nhuận và làm suy yếu khả năng cho vay mới.'
    ),
    q(
        'banking-07',
        'banking',
        'Bảo hiểm tiền gửi giúp ích điều gì nhất cho hệ thống ngân hàng?',
        ['Giảm nguy cơ hoảng loạn rút tiền hàng loạt của người gửi nhỏ lẻ', 'Tăng giá cổ phiếu mọi công ty niêm yết', 'Xóa hết chênh lệch lãi suất', 'Làm dự trữ ngoại hối tăng ngay'],
        0,
        'Khi người gửi tin rằng tiền gửi nhỏ của họ được bảo vệ ở mức nhất định, xác suất xảy ra bank run thường giảm xuống.'
    ),
    q(
        'policy-01',
        'policy',
        'Chính phủ thường làm gì khi chi tiêu nhiều hơn thu ngân sách?',
        ['Phát hành trái phiếu hoặc tăng vay nợ', 'Tự động in tiền mặt không giới hạn cho dân', 'Ngừng mọi chi tiêu công', 'Bán toàn bộ dự trữ vàng hộ gia đình'],
        0,
        'Thâm hụt ngân sách thường được tài trợ bằng phát hành trái phiếu hoặc các hình thức vay khác, chứ không phải cứ in tiền trực tiếp.'
    ),
    q(
        'policy-02',
        'policy',
        'QE tác động lên thị trường chủ yếu bằng cách nào?',
        ['Mua tài sản để tăng dự trữ hệ thống và kéo lợi suất xuống', 'Tăng thuế VAT ngay lập tức', 'Buộc mọi doanh nghiệp trả cổ tức', 'Cấm ngân hàng cho vay mua nhà'],
        0,
        'QE làm ngân hàng và nhà đầu tư nắm nhiều dự trữ hơn, đồng thời hỗ trợ giá trái phiếu và giảm lợi suất dài hạn.'
    ),
    q(
        'policy-03',
        'policy',
        'Khi cầu quá nóng và lạm phát tăng do chi tiêu mạnh, công cụ nào trực diện nhất để làm nguội?',
        ['Tăng lãi suất điều hành hoặc hút bớt thanh khoản', 'Giảm chuẩn tín dụng đại trà', 'Tăng mua tài sản quy mô lớn', 'Trợ giá mọi loại tài sản rủi ro'],
        0,
        'Tăng lãi suất và siết thanh khoản làm chi phí vốn tăng, từ đó hãm bớt vay mượn, chi tiêu và đầu cơ.'
    ),
    q(
        'policy-04',
        'policy',
        'Loại chi tiêu công nào thường tạo tác động tích cực dài hạn mạnh nhất?',
        ['Đầu tư hạ tầng và nâng năng suất', 'Tăng chi tiêu lễ hội ngắn hạn', 'Mua vào tài sản đầu cơ cho ngân sách', 'Trợ giá vô thời hạn cho tiêu dùng xa xỉ'],
        0,
        'Hạ tầng tốt giúp giảm chi phí logistics, tăng năng suất lao động và nâng khả năng tạo thu nhập trong nhiều năm sau.'
    ),
    q(
        'policy-05',
        'policy',
        'Giảm thuế sẽ kích thích kinh tế mạnh hơn khi nào?',
        ['Khi hộ gia đình và doanh nghiệp sẵn sàng tiêu hoặc đầu tư số tiền được giữ lại', 'Khi mọi người quyết định giữ nguyên toàn bộ số tiền đó trong két', 'Khi ngân hàng trung ương cấm cho vay', 'Khi thương mại quốc tế dừng hoàn toàn'],
        0,
        'Giảm thuế chỉ tạo lực đẩy lớn khi tiền ở lại trong khu vực tư được chuyển thành chi tiêu, đầu tư hoặc tuyển dụng mới.'
    ),
    q(
        'policy-06',
        'policy',
        'Can thiệp tỷ giá của ngân hàng trung ương thường dùng công cụ nào?',
        ['Dự trữ ngoại hối', 'Thuế tiêu thụ đặc biệt', 'Lương tối thiểu vùng', 'Khoản vay tiêu dùng tín chấp'],
        0,
        'Muốn bán ra hoặc mua vào ngoại tệ để làm dịu biến động tỷ giá, ngân hàng trung ương cần dự trữ ngoại hối đủ mạnh.'
    ),
    q(
        'business-01',
        'business',
        'Doanh thu tăng nhưng tiền mặt giảm có thể do nguyên nhân nào?',
        ['Phải thu và tồn kho tăng nhanh hơn tốc độ thu tiền', 'Mọi khách hàng đều trả trước bằng tiền mặt', 'Lãi suất về 0 ngay lập tức', 'Công ty không còn chi phí lương'],
        0,
        'Báo cáo doanh thu có thể đẹp trong khi tiền thật chưa về, đặc biệt khi công ty bán chịu nhiều hoặc ôm tồn kho lớn.'
    ),
    q(
        'business-02',
        'business',
        'Doanh nghiệp có chi phí cố định cao thường chịu đặc điểm gì?',
        ['Lợi nhuận biến động mạnh khi doanh thu thay đổi', 'Không bao giờ cần vốn lưu động', 'Luôn chống được lạm phát', 'Không bị ảnh hưởng bởi lãi suất'],
        0,
        'Khi định phí lớn, doanh thu chỉ cần giảm nhẹ cũng đủ làm lợi nhuận co rất mạnh vì chi phí không giảm tương ứng.'
    ),
    q(
        'business-03',
        'business',
        'Lợi nhuận giữ lại nghĩa là gì?',
        ['Phần lợi nhuận không chia hết mà để lại tái đầu tư', 'Tiền vay mới từ ngân hàng trung ương', 'Khoản thuế được hoàn của nhân viên', 'Toàn bộ chi phí đã được xóa bỏ'],
        0,
        'Giữ lại lợi nhuận là cách doanh nghiệp tự tài trợ tăng trưởng mà không cần vay thêm hoặc phát hành thêm cổ phiếu ngay.'
    ),
    q(
        'business-04',
        'business',
        'Một doanh nghiệp xuất khẩu có thể vẫn bị đau khi đồng nội tệ yếu đi nếu điều gì đúng?',
        ['Đầu vào và nợ vay của họ cũng phụ thuộc mạnh vào ngoại tệ', 'Họ hoàn toàn không có chi phí sản xuất', 'Họ không cần dòng tiền ngắn hạn', 'Họ không bán hàng ra nước ngoài'],
        0,
        'Xuất khẩu hưởng lợi tỷ giá chỉ khi phần chi phí nhập khẩu và nghĩa vụ nợ ngoại tệ không phình quá nhanh so với doanh thu.'
    ),
    q(
        'business-05',
        'business',
        'Tồn kho tăng nhanh hơn doanh số thường báo hiệu điều gì?',
        ['Tiền đang bị giam trong hàng hóa và rủi ro tiêu thụ chậm tăng lên', 'Doanh nghiệp chắc chắn lãi cao hơn', 'Khách hàng đã thanh toán hết', 'Nợ vay không còn quan trọng'],
        0,
        'Tồn kho lớn có thể là chuẩn bị tăng trưởng, nhưng nếu kéo dài thì thường làm đè dòng tiền và tăng nguy cơ giảm giá hàng hóa.'
    ),
    q(
        'personal-01',
        'personal',
        'Quỹ dự phòng khẩn cấp nên ưu tiên đặt ở đâu?',
        ['Kênh thanh khoản cao và rủi ro thấp', 'Tài sản đầu cơ biến động mạnh', 'Khoản góp vốn khóa 10 năm', 'Hàng hóa khó bán'],
        0,
        'Quỹ dự phòng tồn tại để bạn dùng ngay khi có biến cố, nên thanh khoản và độ an toàn quan trọng hơn lợi suất tối đa.'
    ),
    q(
        'personal-02',
        'personal',
        '“Giàu tài sản nhưng nghèo tiền mặt” nghĩa là gì?',
        ['Tài sản chủ yếu nằm ở dạng kém thanh khoản như nhà đất nhưng tiền dùng ngay lại ít', 'Có rất nhiều tiền mặt nhưng không có tài sản nào', 'Không có thu nhập lao động', 'Không phải nộp bất kỳ loại thuế nào'],
        0,
        'Nhiều hộ gia đình trông rất giàu trên giấy vì nhà đất tăng giá nhưng lại dễ hụt tiền nếu gặp cú sốc chi tiêu hoặc mất việc.'
    ),
    q(
        'personal-03',
        'personal',
        'Ví dụ nào gần với “nợ tốt” hơn?',
        ['Vay mua tài sản có khả năng tạo dòng tiền hoặc giữ giá trị lâu dài', 'Vay tiêu dùng lãi cao để mua hàng không tạo thu nhập', 'Ứng tiền mặt thẻ tín dụng để cá cược', 'Mua trả góp nhiều món nhỏ chỉ vì khuyến mại'],
        0,
        'Nợ tốt không có nghĩa là an toàn tuyệt đối, mà là khoản vay gắn với tài sản hoặc hoạt động có cơ hội tạo giá trị bền hơn chi phí vốn.'
    ),
    q(
        'personal-04',
        'personal',
        'Nếu lợi suất danh nghĩa 7% nhưng lạm phát 9%, kết luận gần đúng là gì?',
        ['Lợi suất thực âm, sức mua vẫn giảm', 'Bạn chắc chắn giàu hơn', 'Khoản đầu tư không có rủi ro', 'Ngân hàng trung ương phải giảm dự trữ bắt buộc ngay'],
        0,
        'Lợi suất danh nghĩa cao chưa đủ. Điều quan trọng là sau khi trừ lạm phát, sức mua của tài sản tăng hay giảm.'
    ),
    q(
        'personal-05',
        'personal',
        'Đa dạng hóa danh mục có lợi chính vì điều gì?',
        ['Giảm rủi ro tập trung vào một tài sản hoặc một kịch bản xấu duy nhất', 'Bảo đảm mọi năm đều có lãi', 'Làm lãi suất tiền gửi tự tăng', 'Xóa hoàn toàn biến động giá'],
        0,
        'Đa dạng hóa không triệt tiêu rủi ro, nhưng giúp một cú sập ở một tài sản không phá hủy toàn bộ danh mục của bạn.'
    ),
    q(
        'markets-01',
        'markets',
        'Lợi suất trái phiếu tăng thường kéo theo điều gì ở giá trái phiếu đang lưu hành?',
        ['Giá giảm', 'Giá tăng tương ứng', 'Giá không đổi tuyệt đối', 'Giá chuyển thành tiền mặt'],
        0,
        'Giá trái phiếu và lợi suất di chuyển ngược chiều nhau. Lợi suất mới cao hơn làm trái phiếu cũ với coupon thấp kém hấp dẫn hơn.'
    ),
    q(
        'markets-02',
        'markets',
        'Khi cổ phiếu được mua bán trên thị trường thứ cấp, tiền có đi vào công ty phát hành mỗi lần giao dịch không?',
        ['Không, phần lớn là nhà đầu tư mua bán lại với nhau', 'Có, mọi giao dịch đều chảy vào công ty', 'Có, nhưng chỉ khi giá giảm', 'Chỉ chảy vào ngân hàng trung ương'],
        0,
        'Doanh nghiệp nhận tiền trực tiếp ở thị trường sơ cấp như IPO hoặc phát hành thêm. Thị trường thứ cấp chủ yếu tạo thanh khoản và định giá.'
    ),
    q(
        'markets-03',
        'markets',
        'Cap rate trong bất động sản gần đúng là gì?',
        ['Thu nhập cho thuê ròng chia cho giá trị tài sản', 'Giá nhà chia cho lương tháng', 'Tiền vay chia cho số người thuê', 'Thuế trước bạ chia cho giá nội thất'],
        0,
        'Cap rate là cách nhìn nhanh xem tài sản BĐS đang tạo dòng tiền cho thuê tốt đến mức nào so với giá mua.'
    ),
    q(
        'markets-04',
        'markets',
        'Giá hàng hóa đầu vào tăng mạnh thường lan sang lạm phát qua kênh nào?',
        ['Chi phí sản xuất và logistics tăng rồi phản ánh vào giá bán', 'Tiền gửi tiết kiệm tự động biến mất', 'Mọi khoản vay đều bị xóa', 'Thị trường chứng khoán dừng giao dịch vĩnh viễn'],
        0,
        'Khi doanh nghiệp phải trả nhiều hơn cho năng lượng, vận tải, kim loại hoặc nông sản, một phần chi phí thường được chuyển sang người tiêu dùng.'
    ),
    q(
        'markets-05',
        'markets',
        'ETF khác với việc mua một cổ phiếu riêng lẻ chủ yếu ở điểm nào?',
        ['ETF thường đại diện cho một rổ tài sản thay vì một công ty đơn lẻ', 'ETF luôn không có phí', 'ETF không thể giảm giá', 'ETF không chịu ảnh hưởng của lãi suất'],
        0,
        'Mua ETF là mua nhiều tài sản trong cùng một sản phẩm. Điều này giúp đa dạng hóa tốt hơn so với đặt cược vào một mã riêng lẻ.'
    ),
    q(
        'markets-06',
        'markets',
        'Khi một trái phiếu bị hạ xếp hạng tín dụng, điều gì thường xảy ra nhất?',
        ['Chi phí vay tăng và giá trái phiếu chịu áp lực giảm', 'Coupon cũ tự động tăng ngay', 'Rủi ro tín dụng biến mất', 'Trái phiếu được chuyển thành cổ phiếu miễn phí'],
        0,
        'Hạ hạng tín nhiệm báo hiệu rủi ro trả nợ cao hơn, nên nhà đầu tư thường đòi lợi suất cao hơn và giá trái phiếu giảm.'
    ),
    q(
        'markets-07',
        'markets',
        'Vàng thường được chú ý mạnh hơn khi nào?',
        ['Khi thị trường phòng thủ trước lạm phát, khủng hoảng hoặc bất ổn lớn', 'Khi mọi khoản nợ đều giảm về 0', 'Khi doanh nghiệp tăng tuyển dụng mạnh', 'Khi không còn giao dịch ngoại tệ'],
        0,
        'Vàng thường được xem là tài sản trú ẩn khi niềm tin vào tiền giấy, hệ thống tài chính hoặc môi trường địa chính trị xấu đi.'
    ),
    q(
        'risk-01',
        'risk',
        'Vì sao công ty bảo hiểm thường đầu tư phần lớn quỹ phí vào tài sản khá an toàn?',
        ['Vì họ còn phải sẵn sàng chi trả quyền lợi và bồi thường khi sự kiện xảy ra', 'Vì pháp luật cấm mọi loại lợi nhuận', 'Vì họ không có nghĩa vụ gì trong tương lai', 'Vì cổ phiếu luôn bị cấm tuyệt đối'],
        0,
        'Quỹ phí bảo hiểm không phải tiền “rảnh”. Đó là tiền có thể phải trả ra trong tương lai nên doanh nghiệp phải ưu tiên tính an toàn và khả năng chi trả.'
    ),
    q(
        'risk-02',
        'risk',
        'Quỹ hưu trí cần tài sản kỳ hạn dài vì lý do gì?',
        ['Vì nghĩa vụ chi trả của quỹ cũng kéo dài nhiều năm hoặc nhiều thập kỷ', 'Vì quỹ hưu trí không bao giờ chi tiền mặt', 'Vì người nghỉ hưu chỉ nhận tiền bằng vàng', 'Vì lạm phát không còn tồn tại sau khi nghỉ hưu'],
        0,
        'Tài sản và nghĩa vụ cần “khớp nhịp”. Nếu quỹ hưu trí chỉ nắm tài sản quá ngắn hạn, họ sẽ khó bảo toàn giá trị cho nghĩa vụ rất dài.'
    ),
    q(
        'risk-03',
        'risk',
        'Tái bảo hiểm có vai trò chính gì?',
        ['Chia sẻ tổn thất lớn để công ty bảo hiểm gốc không bị sốc quá mạnh', 'Làm giá cổ phiếu công nghệ tăng', 'Xóa bỏ mọi điều khoản loại trừ', 'Biến phí bảo hiểm thành thuế'],
        0,
        'Tái bảo hiểm là lớp đệm thứ hai. Nó giúp bảo hiểm gốc không phải tự ôm toàn bộ thiệt hại khi xảy ra tổn thất quá lớn.'
    ),
    q(
        'risk-04',
        'risk',
        'Underwriting profit nghĩa gần nhất là gì?',
        ['Phí thu từ nghiệp vụ bảo hiểm lớn hơn chi trả bồi thường và chi phí liên quan', 'Lợi nhuận do giá cổ phiếu tăng', 'Tiền gửi ngân hàng tăng trưởng', 'Thu nhập từ bán bất động sản'],
        0,
        'Underwriting profit cho biết bảo hiểm có kiếm được tiền từ chính nghiệp vụ bảo hiểm hay không, trước khi tính đến thu nhập đầu tư.'
    ),
    q(
        'global-01',
        'global',
        'Vì sao FDI thường ổn định hơn dòng vốn đầu cơ ngắn hạn?',
        ['Vì FDI gắn với nhà máy, nhân sự và tài sản sản xuất thực', 'Vì FDI không bao giờ cần lợi nhuận', 'Vì FDI không chịu ảnh hưởng pháp lý', 'Vì FDI luôn được chính phủ bảo lãnh toàn bộ'],
        0,
        'FDI thường đi cùng tài sản cố định và kế hoạch dài hạn. Dòng vốn nóng thì có thể vào nhanh và rút ra cũng rất nhanh theo lãi suất hoặc tâm lý.'
    ),
    q(
        'global-02',
        'global',
        'USD mạnh lên thường làm ai chịu áp lực rõ hơn?',
        ['Đơn vị nhập khẩu và người vay ngoại tệ nhưng thu nội tệ', 'Người không dùng bất kỳ hàng nhập khẩu nào', 'Doanh nghiệp không có chi phí nào', 'Các quỹ hưu trí trong nước không đầu tư gì'],
        0,
        'USD mạnh làm hàng nhập đắt hơn và tăng gánh nặng trả nợ ngoại tệ đối với người có dòng tiền chủ yếu bằng nội tệ.'
    ),
    q(
        'global-03',
        'global',
        'Thặng dư thương mại nghĩa là gì?',
        ['Xuất khẩu lớn hơn nhập khẩu trong kỳ', 'Nhập khẩu lớn hơn xuất khẩu trong kỳ', 'Nợ công giảm về 0', 'Tất cả doanh nghiệp đều có lãi'],
        0,
        'Thặng dư thương mại phản ánh nền kinh tế bán ra nước ngoài nhiều hơn mua vào, thường hỗ trợ dòng ngoại tệ đi vào.'
    ),
    q(
        'global-04',
        'global',
        'Hợp đồng kỳ hạn ngoại tệ (forward) hữu ích nhất để làm gì?',
        ['Khóa trước tỷ giá cho một giao dịch tương lai', 'Xóa nợ vay hiện hữu', 'Bảo đảm lợi nhuận chứng khoán', 'Biến ngoại tệ thành vàng vật chất'],
        0,
        'Doanh nghiệp dùng forward để biết gần chắc sẽ đổi tiền ở mức nào trong tương lai, từ đó giảm bất định khi lập kế hoạch.'
    ),
    q(
        'global-05',
        'global',
        'Kiều hối hỗ trợ nền kinh tế nội địa bằng cách nào rõ nhất?',
        ['Bơm thêm ngoại tệ và tăng thu nhập khả dụng cho hộ gia đình', 'Làm mọi loại thuế biến mất', 'Thay thế hoàn toàn FDI', 'Xóa lạm phát khỏi nền kinh tế'],
        0,
        'Kiều hối vừa mang ngoại tệ vào vừa tăng sức mua của hộ gia đình, nên có tác động rõ đến tiêu dùng, xây dựng và tiết kiệm.'
    ),
    q(
        'modern-01',
        'modern',
        'Giá trị lớn nhất của fintech trong dòng tiền là gì?',
        ['Giảm ma sát của giao dịch và phân phối tài chính', 'Xóa toàn bộ rủi ro tín dụng', 'Bảo đảm mọi startup đều có lãi', 'Biến mọi khoản vay thành vốn chủ sở hữu'],
        0,
        'Fintech làm nhanh hơn, dễ dùng hơn và rẻ hơn ở nhiều khâu, nhưng rủi ro tài chính và vận hành vẫn phải được quản trị cẩn thận.'
    ),
    q(
        'modern-02',
        'modern',
        'Vì sao stablecoin là mắt xích rất quan trọng trong hệ crypto?',
        ['Vì nó là lớp thanh khoản và settlement cho rất nhiều giao dịch', 'Vì nó luôn tăng giá mạnh hơn BTC', 'Vì nó không bao giờ có rủi ro đối tác', 'Vì nó tự động thay thế tiền pháp định ở mọi nơi'],
        0,
        'Rất nhiều giao dịch, vay mượn và định giá trong crypto bám vào stablecoin. Nếu stablecoin trục trặc, thanh khoản toàn hệ có thể chao đảo.'
    ),
    q(
        'modern-03',
        'modern',
        'Runway của startup là gì?',
        ['Thời gian công ty còn sống được với lượng tiền hiện có ở mức burn hiện tại', 'Giá trị thương hiệu sau IPO', 'Tỷ lệ tăng trưởng người dùng hằng ngày', 'Số vòng gọi vốn đã hoàn tất'],
        0,
        'Runway cho biết startup còn bao lâu trước khi phải gọi thêm vốn, cắt giảm chi phí hoặc đạt hòa vốn.'
    ),
    q(
        'modern-04',
        'modern',
        'Một token hứa lãi quá cao thường nên được hiểu như thế nào trước tiên?',
        ['Phần thưởng đó đang bù cho một rủi ro hoặc mô hình chưa chắc bền vững', 'Đó chắc chắn là lợi nhuận miễn phí', 'Rủi ro thanh khoản đã biến mất', 'Nhà đầu tư không cần đọc cơ chế hoạt động nữa'],
        0,
        'Lợi nhuận rất cao hiếm khi miễn phí. Nó thường phản ánh đòn bẩy, thanh khoản mỏng, trợ giá hoặc rủi ro mô hình lớn.'
    ),
    q(
        'modern-05',
        'modern',
        'BNPL về bản chất gần nhất là gì?',
        ['Một dạng tín dụng tiêu dùng ngắn hạn', 'Một hình thức gửi tiết kiệm', 'Một loại trái phiếu chính phủ', 'Một công cụ xếp hạng tín nhiệm'],
        0,
        'Buy Now Pay Later chỉ thay đổi giao diện người dùng; cốt lõi vẫn là cấp tín dụng và quản trị rủi ro trả chậm.'
    ),
    q(
        'modern-06',
        'modern',
        'Rủi ro lớn nhất của self-custody trong crypto là gì?',
        ['Mất khóa riêng có thể đồng nghĩa mất quyền truy cập tài sản', 'Không còn biến động giá', 'Token tự chuyển thành tiền mặt', 'Sàn tập trung phải hoàn tiền cho bạn'],
        0,
        'Tự giữ tài sản giúp bớt phụ thuộc sàn, nhưng cũng khiến trách nhiệm bảo mật chuyển hoàn toàn sang người dùng.'
    ),
    // ==================== ECONOMICS (15) ====================
    q(
        'econ-01',
        'policy',
        'Lạm phát do chi phí đẩy (cost-push) thường bắt nguồn từ đâu?',
        ['Giá nguyên liệu hoặc chuỗi cung ứng đứt gãy', 'Người dân tiêu quá nhiều tiền', 'Ngân hàng trung ương in thêm tiền', 'Thị trường chứng khoán tăng mạnh'],
        0,
        'Lạm phát chi phí đẩy xảy ra khi chi phí sản xuất tăng (nguyên liệu, vận tải, lương) buộc doanh nghiệp phải tăng giá bán.'
    ),
    q(
        'econ-02',
        'policy',
        'Đường Phillips nguyên bản mô tả mối quan hệ gì?',
        ['Nghịch: thất nghiệp thấp thường đi cùng lạm phát cao', 'Thuận: lạm phát cao luôn đi cùng thất nghiệp cao', 'Không có quan hệ giữa lạm phát và thất nghiệp', 'Lãi suất luôn bằng tỷ lệ lạm phát'],
        0,
        'Phillips (1958) nhận thấy khi thất nghiệp thấp, lương tăng nhanh hơn → chi phí lên → giá tăng. Tuy nhiên mối quan hệ này không ổn định trong mọi giai đoạn.'
    ),
    q(
        'econ-03',
        'overview',
        'NAIRU là gì?',
        ['Tỷ lệ thất nghiệp mà dưới đó lạm phát có xu hướng tăng nhanh', 'Lãi suất tối thiểu của ngân hàng trung ương', 'Tỷ lệ dự trữ bắt buộc tối thiểu', 'Chỉ số đo năng suất lao động quốc gia'],
        0,
        'Non-Accelerating Inflation Rate of Unemployment: nếu thất nghiệp thực tế thấp hơn NAIRU, áp lực lương và giá sẽ tăng dần.'
    ),
    q(
        'econ-04',
        'overview',
        'Unit Labor Cost (chi phí lao động đơn vị) tăng nhanh hơn năng suất có nghĩa gì?',
        ['Doanh nghiệp phải tăng giá hoặc chấp nhận giảm lợi nhuận', 'Nền kinh tế nhất định sẽ suy thoái ngay lập tức', 'Thất nghiệp sẽ giảm về 0', 'Lạm phát sẽ tự biến mất'],
        0,
        'Khi lương tăng nhanh hơn sản lượng trên đầu người, chi phí sản xuất mỗi đơn vị hàng hóa tăng, tạo áp lực giá kéo dài.'
    ),
    q(
        'econ-05',
        'overview',
        'Cung-cầu trong kinh tế: khi cung giảm mạnh mà cầu không đổi thì giá sẽ?',
        ['Tăng', 'Giảm', 'Không đổi', 'Phụ thuộc vào chính phủ'],
        0,
        'Khi cung co lại (thiếu hàng, đứt gãy chuỗi cung ứng) mà cầu vẫn giữ nguyên, giá cân bằng phải tăng để phân bổ hàng hóa khan hiếm.'
    ),
    q(
        'econ-06',
        'overview',
        'Bullwhip Effect trong chuỗi cung ứng là gì?',
        ['Biến động nhỏ ở bán lẻ bị khuếch đại lớn dần khi truyền ngược về nhà sản xuất', 'Hàng hóa bị hư hỏng trong quá trình vận chuyển', 'Giá luôn giảm ở cuối chuỗi', 'Nhà sản xuất luôn dự báo đúng cầu'],
        0,
        'Mỗi mắt xích chuỗi cung ứng thường đặt hàng nhiều hơn cần thiết "cho chắc", tích lũy sai lệch lớn dần ở đầu nguồn.'
    ),
    q(
        'econ-07',
        'policy',
        'Vì sao NHTW thường phải chờ 12-18 tháng để thấy tác động đầy đủ của thay đổi lãi suất?',
        ['Vì chính sách tiền tệ truyền dẫn qua nhiều kênh với độ trễ khác nhau', 'Vì ngân hàng thương mại luôn phớt lờ NHTW', 'Vì doanh nghiệp có thể chống lại chính sách', 'Vì lạm phát chỉ xảy ra vào cuối năm'],
        0,
        'Thay đổi lãi suất phải đi qua kênh tín dụng, kênh tỷ giá, kênh tài sản và kênh kỳ vọng. Mỗi kênh có độ trễ riêng, nên hiệu lực tổng hợp mất nhiều tháng.'
    ),
    q(
        'econ-08',
        'overview',
        'GDP thực khác GDP danh nghĩa ở điểm gì?',
        ['GDP thực đã loại bỏ ảnh hưởng của lạm phát', 'GDP thực luôn lớn hơn GDP danh nghĩa', 'GDP danh nghĩa tính theo ngoại tệ', 'Không có sự khác biệt nào'],
        0,
        'GDP danh nghĩa tính theo giá hiện hành, GDP thực đã điều chỉnh lạm phát nên phản ánh sản lượng thật sự thay đổi bao nhiêu.'
    ),
    q(
        'econ-09',
        'overview',
        'Chỉ số PMI dưới 50 cho thấy điều gì?',
        ['Sản xuất đang thu hẹp so với tháng trước', 'Nền kinh tế chắc chắn suy thoái', 'Lạm phát đã biến mất', 'Xuất khẩu đang tăng mạnh'],
        0,
        'PMI (Purchasing Managers Index) trên 50 = mở rộng, dưới 50 = thu hẹp. Nó dựa trên khảo sát đơn hàng mới, sản lượng, tồn kho, giao hàng và việc làm.'
    ),
    q(
        'econ-10',
        'overview',
        'Năng suất lao động tăng bền vững giúp gì cho nền kinh tế?',
        ['Cho phép lương tăng mà không tạo lạm phát', 'Luôn làm thất nghiệp giảm về 0', 'Xóa bỏ hoàn toàn chu kỳ kinh tế', 'Khiến NHTW không cần can thiệp'],
        0,
        'Khi mỗi giờ làm việc tạo ra nhiều giá trị hơn, doanh nghiệp có thể trả lương cao hơn mà vẫn giữ giá bán ổn định.'
    ),
    q(
        'econ-11',
        'policy',
        'Stagflation (đình lạm) là khi nào?',
        ['Lạm phát cao đi cùng tăng trưởng thấp và thất nghiệp cao', 'Lạm phát và tăng trưởng đều rất cao', 'Giảm phát kéo dài', 'Thất nghiệp bằng 0% nhưng GDP giảm'],
        0,
        'Stagflation là kịch bản khó nhất cho chính sách: thắt chặt tiền tệ chống lạm phát sẽ đè thêm tăng trưởng, nới lỏng thì lạm phát thêm nóng.'
    ),
    q(
        'econ-12',
        'overview',
        'Khi đồng nội tệ mất giá 20%, giá hàng nhập khẩu chịu ảnh hưởng như thế nào?',
        ['Tăng vì cần nhiều nội tệ hơn để mua cùng lượng hàng', 'Giảm vì xuất khẩu thuận lợi hơn', 'Không đổi vì giá thế giới như cũ', 'Giảm vì NHTW can thiệp'],
        0,
        'Nội tệ yếu đi trực tiếp làm tăng giá hàng nhập tính bằng đồng nội tệ, góp phần vào lạm phát nhập khẩu.'
    ),
    q(
        'econ-13',
        'overview',
        'Tỷ lệ tham gia lực lượng lao động khác tỷ lệ thất nghiệp ở điểm gì?',
        ['Nó đo cả những người đã từ bỏ tìm việc mà thất nghiệp chính thức không đếm', 'Hai chỉ số luôn cho kết quả giống nhau', 'Chỉ áp dụng cho khu vực công', 'Không liên quan đến thị trường lao động'],
        0,
        'Thất nghiệp chính thức chỉ đếm người đang tìm việc. Tỷ lệ tham gia đo cả những người nản chí rời khỏi lực lượng lao động.'
    ),
    q(
        'econ-14',
        'overview',
        'Baltic Dry Index đo gì?',
        ['Giá cước vận tải hàng rời bằng đường biển', 'Lượng cá đánh bắt ở Biển Baltic', 'Tỷ lệ thất nghiệp ngành hàng hải', 'GDP các nước vùng Baltic'],
        0,
        'BDI phản ánh chi phí vận chuyển nguyên liệu thô (quặng sắt, than, ngũ cốc) bằng đường biển, là chỉ báo sớm cho hoạt động thương mại và sản xuất toàn cầu.'
    ),
    q(
        'econ-15',
        'policy',
        'Vì sao việc làm thường phục hồi chậm hơn GDP sau suy thoái?',
        ['Vì doanh nghiệp chờ chắc chắn cầu đã ổn mới dám tuyển lại', 'Vì GDP luôn sai', 'Vì người lao động không muốn đi làm', 'Vì chính phủ cấm tuyển dụng'],
        0,
        'Khi GDP bắt đầu tăng trở lại, doanh nghiệp thường tận dụng giờ làm thêm và cải thiện năng suất trước; chỉ tuyển mới khi thật sự cần.'
    )
];

const quizQuestionBank = [
    ...curatedQuizQuestions,
    ...buildRoleQuestions(),
    ...buildAssetQuestions()
];
