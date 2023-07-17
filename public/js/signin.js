// Sign in //
document.getElementById('signin-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var data = {
        email: email,
        password: password
    };

    axios.post('/users/signin', data)
    
        .then(function (response) {
            console.log(response.data);
            window.location.href = "http://localhost:8080/";
        })
        .catch(function (error) {
            // Xử lý lỗi từ máy chủ hoặc yêu cầu
            console.error(error);
            var errorMessage = document.getElementById('error-message-signin');
            errorMessage.textContent = 'Login unsuccessful. Please check your email and password.';
            errorMessage.style.display = 'block';
        })
});
