(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

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

    // SearchProductName //
    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Đọc dữ liệu từ người dùng nhập vào
        var productName = document.getElementById("searchInput").value;

        // Kiểm tra nếu giá trị tìm kiếm trống, không làm gì cả
        if (!productName.trim()) {
            return;
        }

        // Gửi productName đến server và xử lý phản hồi
        async function sendDataToServer(productName) {
            try {
                const response = await axios.post('/menu', { productName });
                const jsonData = response.data;
                // Do something with the JSON data
                console.log(jsonData);
                window.location.href = "http://localhost:8080/menu/searchProductName=" + productName;
                // Chuyển đổi dữ liệu JSON thành một mảng đối tượng
                // const menuData = JSON.parse(response.data);
            }
            catch (error) {
                console.error(error);
            };
        };
    });



    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });



})(jQuery);