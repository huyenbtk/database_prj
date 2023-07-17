let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})



// Lắng nghe sự kiện click trên tùy chọn "Users"
const usersOption = document.querySelector('.option1');
usersOption.addEventListener('click', function() {
    // Gọi yêu cầu Axios để lấy dữ liệu từ nguồn dữ liệu
    axios.get('/admin/userlist')
        .then(function (response) {
            // Xử lý dữ liệu khi nhận được phản hồi thành công từ API
            const users = response.data;
            displayUsers(users);
            console.log(users); // Hoặc thực hiện các thao tác khác với dữ liệu users
            



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


