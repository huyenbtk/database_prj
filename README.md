# database_prj
#  Hello các bạn
mình sẽ hướng dẫn luồng xử lý cho từng cá nhân, sau đây là nội dung hướng dẫn cũng như các yêu cầu về project

1. [Luồng git](#gitflow)
2. [Cách chạy project](#run)
3. [sau khi fix](#fixed )

## 1. Luồng git<div id='gitflow'></div>
- Thực hiện trên cửa sổ terminal, tại folder nào đó cũng được, miễn là đừng loạn :v
- Thực hiện câu lệnh git clone từ main của prj về<br>
`git clone https://github.com/huyenbtk/database_prj.git`
- tạo nhánh riêng cho mình ở máy của cá nhân, và để ý luôn thực hiện trên nhánh ấy của mình<br>
`git checkout -b <tên nhánh>`
tên nhánh yêu cầu Tên_sửa_phần_nào, Eng Vne Jpn đều được,
- Chạy project [Cách chạy project](#run)
- <b>Thực hiện công việc cần làm của mình</b>, những phần không phải của mình thì đừng thay đổi gì nhé
- Sau khi chỉnh sửa thông tin, chỉ cần CTRL+S để save lại rồi ra browser F5 hay refresh lại là được
- Sau khi hoàn thành công việc của mình, thực hiện add và commit<br>
`git add . `<br>
`git commit -m "Tên của commit"`
- Yêu cầu tên commit phải miêu tả rõ được việc đã làm
- Sau đó push lên repo, sẽ có 2 trường hợp
  - Lần đầu push thì dùng câu lệnh thêm `-u` như dưới<br>
    `git push -u origin <tên nhánh>`
  - những lần khác chỉ cần `git push`
- Để ý xem nhóm trưởng nhắc pull code như nào, nếu có nhắc pull, trước tiên cần check xem nhánh ở máy tính cá nhân mình có phải nhánh của mình (để tránh trường hợp máy cá nhân đang ở nhánh main rồi pull) không, rồi thực hiện: `git pull origin main`
## 2. Cách chạy project <div id='run'></div>
## 3. Last thing <div id='fixed'></div>
- sau khi push, nhớ lên link git của mình để xem tạo branch chưa, có commit mới chưa, rồi liên hệ vào nhóm với nhóm trưởng để cập nhật tiến độ công việc
