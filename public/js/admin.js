let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");
// const Swal = require("sweetalert2")


document.addEventListener('DOMContentLoaded', function() {
    const revenueOption = document.querySelector('.option2');
    revenueOption.addEventListener('click', function() {
        alert("Tính năng này đang được phát triển. Sẽ sớm có sẵn!");
    });
});

// Lắng nghe sự kiện click trên tùy chọn "Users"
const usersOption = document.querySelector('.option1');
usersOption.addEventListener('click', function() {
    // Gọi yêu cầu Axios để lấy dữ liệu từ nguồn dữ liệu
    axios.get('/admin/userlist')
        .then(function (response) {
            c
        })
        .catch(function (error) {
            // Xử lý lỗi khi yêu cầu gặp sự cố
            console.log(error);
        });
})

async function displayUsers(users) {
    const userListContainer = document.getElementById('userList');
    const userList = document.createElement('ul');
    userListContainer.appendChild(userList);
    users.forEach(function (user) {
        const userItem = document.createElement('li');
        userItem.textContent = user.name;
        userList.appendChild(userItem);
    });
}
// cái này lỗi, cần fix lại
menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})