const Swal = require("sweetalert2");

document.addEventListener('DOMContentLoaded', function() {
    const revenueOption = document.querySelector('.option2');
    revenueOption.addEventListener('click', function() {
        Swal.fire({
            title: 'Tính năng đang được phát triển',
            text: 'Sẽ sớm có sẵn!',
            icon: 'info',
            confirmButtonText: 'OK'
        });
    });
});