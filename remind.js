
    document.getElementById("sendButton").addEventListener("click", function() {

        var inputField = document.getElementById("reminderInput");

        if (inputField.value.trim() !== "") {
            inputField.value = "Đã gửi thành công!";  // Hiển thị thông báo trong ô nhập
            inputField.style.color = "green";  // Chuyển màu chữ sang xanh
            setTimeout(() => {
                inputField.value = ""; // Xóa nội dung sau 3 giây
                inputField.style.color = "black"; // Trả lại màu chữ bình thường
            }, 3000);
        } else {
            alert("Vui lòng nhập lời nhắc trước khi gửi!");
        }
    });