// SearchProductName //
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Đọc dữ liệu từ người dùng nhập vào
    var productName = document.getElementById("searchInput").value;

    // Kiểm tra nếu giá trị tìm kiếm trống, không làm gì cả
    if (!productName.trim()) {
        return;
    }
    else{
    // Gửi productName đến server và xử lý phản hồi
    async function sendDataToServer(productName) {
        try {
            const response = await axios.post('/menu/searchProductName=', { productName });
            const jsonData = response.data;
            // Do something with the JSON data
            console.log(jsonData);
            window.location.href = "http://localhost:8080/";
            // Chuyển đổi dữ liệu JSON thành một mảng đối tượng
            // const menuData = JSON.parse(response.data);
        }
        catch (error) {
            console.error(error);
            var errorMessage = document.getElementById('error-message-search');
                errorMessage.textContent = 'Have not';
                errorMessage.style.display = 'block';
        };
    };
    }
});