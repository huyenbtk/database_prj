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
            console.log(response.data)
            const myArray = response.data;
            const usersdata = JSON.stringify(myArray);
            // sessionStorage.setItem('usersdata',usersdata)
            console.log(usersdata)
            var getdata = JSON.parse(usersdata)
            appendData(getdata);
            function appendData(data) {
                var tbody = document.createElement("tbody");
              
                for (var i = 0; i < data.length; i++) {
                  var tr = document.createElement("tr");
              
                  var td1 = document.createElement("td");
                  td1.textContent = i + 1;
              
                  var td2 = document.createElement("td");
                  td2.textContent = data[i].username;
              
                  var td3 = document.createElement("td");
                  td3.textContent = data[i].email;
              
                  var td4 = document.createElement("td");
                  td4.textContent = data[i].name;
              
                  var td5 = document.createElement("td");
                  td5.textContent = data[i].phone;
              
                  var td6 = document.createElement("td");
                  var button = document.createElement("button");
                  button.textContent = "Delete";
                  td6.appendChild(button);
              
                  tr.appendChild(td1);
                  tr.appendChild(td2);
                  tr.appendChild(td3);
                  tr.appendChild(td4);
                  tr.appendChild(td5);
                  tr.appendChild(td6);
              
                  tbody.appendChild(tr);
                }
              
                var table = document.createElement("table");
                table.appendChild(tbody);
              
                var container = document.getElementById("myTableContainer");
                container.appendChild(table);
              }
        })
        .catch(function (error) {
            // Xử lý lỗi khi yêu cầu gặp sự cố
            console.log(error);
        });
})

// async function displayUsers(users) {
//     const userListContainer = document.getElementById('userList');
//     const userList = document.createElement('ul');
//     userListContainer.appendChild(userList);
//     users.forEach(function (user) {
//         const userItem = document.createElement('li');
//         userItem.textContent = user.name;
//         userList.appendChild(userItem);
//     });
// }
// // cái này lỗi, cần fix lại
// menuicn.addEventListener("click", () => {
//     nav.classList.toggle("navclose");
// })