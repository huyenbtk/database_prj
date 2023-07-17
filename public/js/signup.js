document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var userName = document.getElementById('user-name').value;
    var email = document.getElementById('email').value;
    var fullName = document.getElementById('full-name').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password-cf').value;

    if (password !== confirmPassword) {
        var errorMessage = document.getElementById('error-message-cfpw');
        errorMessage.textContent = 'Please check Confirm Password.';
        errorMessage.style.display = 'block';
        return;
    }

    var data = {
        username: userName,
        email: email,
        name: fullName,
        phone: phone,
        password: password
    };

    axios.post('/users/signup', data)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
});
