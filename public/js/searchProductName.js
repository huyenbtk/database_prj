document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    // Đọc dữ liệu từ người dùng nhập vào
    var productname = document.getElementById("searchInput").value;
    // Kiểm tra nếu giá trị tìm kiếm trống, không làm gì cả
    if (!productname.trim()) {
        return;
    }
    else {
        // Gửi productName đến server và xử lý phản hồi
        // async function sendDataToServer() {
        //     try {
        console.log(productname)
        axios.post('/menu/api/searchProductName', {productname})
            .then(function (response) {
            // Do something with the JSON data
            console.log(response.data);
            // var productdata = response.data;
            const myArray = response.data;
            const productdata = JSON.stringify(myArray);
            sessionStorage.setItem('productdata',productdata)
            console.log(productdata)
            window.location.href = "http://localhost:8080/menu/searchProductName";
            })
            .catch(function (error) {
                // Xử lý lỗi từ máy chủ hoặc yêu cầu
                console.error(error);
            var errorMessage = document.getElementById('error-message-search');
            errorMessage.textContent = 'Have no data';
            errorMessage.style.display = 'block';
        });
    };
    // sendDataToServer();
});