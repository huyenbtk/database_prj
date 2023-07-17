// Sign in //
document.getElementById('signin-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var data = {
        email: email,
        password: password
    };
    console.log(data)

    axios.post('/users/signin', data)
        .then(function (response) {
            console.log(response.data);
            // Lấy thông tin cần truyền qua đường dẫn
            var id = response.data.id.id;
            var name = response.data.id.name;
            var accessToken = response.data.accessToken;
            // admin token

            // Lưu trữ name trong localStorage
            sessionStorage.setItem('id', id);
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('accessToken', accessToken);
            window.location.href = "http://localhost:8080/booking/bookingpage";
        })
        .catch(function (error) {
            // Xử lý lỗi từ máy chủ hoặc yêu cầu
            console.error(error);
            var errorMessage = document.getElementById('error-message-signin');
            errorMessage.textContent = 'Login unsuccessful. Please check your email and password.';
            errorMessage.style.display = 'block';
        })
    });
