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

    // Sign in
    // document.getElementById('signin-button').addEventListener('click', function () {
    //     axios.post('/api/signin', {
    //         // Thêm dữ liệu cần gửi trong yêu cầu (nếu cần)
    //         username: 'myusername',
    //         password: 'mypassword'
    //     })
    //         .then(function (response) {
    //             // Xử lý phản hồi thành công
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             // Xử lý lỗi
    //             console.error(error);
    //         });
    // });
    document.getElementById('signin-button').addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn hành vi gửi biểu mẫu mặc định

        // Lấy giá trị từ các trường input
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Tạo đối tượng dữ liệu để gửi đi
        var data = {
            email: email,
            password: password
        };

        axios.post('/login', data)
            .then(function (response) {
                // Xử lý phản hồi thành công từ máy chủ
                console.log(response.data);
                // Thực hiện các hành động tiếp theo, ví dụ: chuyển hướng người dùng đến trang chính, hiển thị thông báo, vv.
                window.location.href = '/home'; // Thay '/home' bằng đường dẫn của trang chủ
            })
            .catch(function (error) {
                // Xử lý lỗi từ máy chủ hoặc yêu cầu
                console.error(error);
                // Hiển thị thông báo lỗi cho người dùng hoặc thực hiện các hành động khác
                var errorMessage = document.getElementById('error-message-signin');
                errorMessage.textContent = 'Đăng nhập không thành công. Vui lòng kiểm tra email và mật khẩu của bạn.';
                errorMessage.style.display = 'block';
            })
    });
// Sign up botton
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của biểu mẫu

    // Lấy dữ liệu từ biểu mẫu
    var userName = document.getElementById('user-name').value;
    var email = document.getElementById('email').value;
    var fullName = document.getElementById('full-name').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('password_cf').value;

    // Kiểm tra sự khớp giữa mật khẩu và mật khẩu xác nhận
    if (password !== confirmPassword) {
        // Hiển thị thông báo lỗi
        var errorMessage = document.getElementById('error-message-cfpw');
        errorMessage.textContent = 'Mật khẩu không khớp. Vui lòng kiểm tra lại.';
        errorMessage.style.display = 'block';
        return; // Kết thúc xử lý khi có lỗi
    }

    // Tạo đối tượng dữ liệu để gửi đi
    var data = {
        userName: userName,
        email: email,
        fullName: fullName,
        phone: phone,
        password: password
    };

    // Gửi yêu cầu POST đến máy chủ bằng Axios
    axios.post('/signup', data)
        .then(function (response) {
            // Xử lý phản hồi thành công từ máy chủ
            console.log(response.data);
            // Thực hiện các hành động tiếp theo, ví dụ: chuyển hướng người dùng đến trang chủ, hiển thị thông báo, vv.
        })
        .catch(function (error) {
            // Xử lý lỗi từ máy chủ hoặc yêu cầu
            console.error(error);
            // Hiển thị thông báo lỗi cho người dùng hoặc thực hiện các hành động khác
        });
});

// Facts counter
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});


// Modal Video
$(document).ready(function () {
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
});


// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});
})(jQuery);

