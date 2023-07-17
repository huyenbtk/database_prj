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
        // console.log(productname)
        axios.post('/menu/api/searchProductName', productname)
            .then(function (response) {
            // Do something with the JSON data
            console.log(response.data);
            var productdata = response.data;
            // window.location.href = "http://localhost:8080/menu/searchProductName";
            appendData(productdata);
            function appendData(data) {
                var mainContainer = document.getElementById("myData");
                for (var i = 0; i < data.length; i++) {
                    var divCol = document.createElement("div");
                    divCol.className = "col-lg-6";

                    var divMain = document.createElement("div");
                    divMain.className = "d-flex align-items-center";

                    var img = document.createElement("img");
                    img.className = "flex-shrink-0 img-fluid rounded";
                    img.src = "/image/" + data[i].Category + "/" + data[i].Image + ".jpg";
                    img.alt = "";
                    img.style.width = "80px";

                    var divText = document.createElement("div");
                    divText.className = "w-100 d-flex flex-column text-start ps-4";

                    var h5Title = document.createElement("h5");
                    h5Title.className = "d-flex justify-content-between border-bottom pb-2";
                    var spanTitle = document.createElement("span");
                    spanTitle.innerText = data[i].Name;
                    var spanPrice = document.createElement("span");
                    spanPrice.className = "text-primary";
                    spanPrice.innerText = data[i].Price + "đ";

                    var h5Info = document.createElement("h5");
                    var smallInfo = document.createElement("small");
                    smallInfo.className = "fst-italic";
                    smallInfo.innerText = data[i].Info;

                    h5Title.appendChild(spanTitle);
                    h5Title.appendChild(spanPrice);
                    h5Info.appendChild(smallInfo);
                    divText.appendChild(h5Title);
                    // divText.appendChild(h5Info);
                    divMain.appendChild(img);
                    divMain.appendChild(divText);
                    divCol.appendChild(divMain);

                    mainContainer.appendChild(divCol);
                }
            }
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