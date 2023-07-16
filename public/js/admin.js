function showMembers() {
    // Hiển thị nội dung danh sách thành viên
    document.getElementById("members").style.display = "block";
    document.getElementById("revenue").style.display = "none";
  }
  
  function showRevenue() {
    // Hiển thị nội dung doanh thu
    document.getElementById("members").style.display = "none";
    document.getElementById("revenue").style.display = "block";
  }
  
  function logout() {
    // Thực hiện đăng xuất
    // Chuyển đến trang đăng nhập, hoặc xử lý logic logout
    alert("Bạn đã đăng xuất thành công!");
  }
  