function isUsernameOrEmailExists(username, email) {
    // Lấy dữ liệu từ local storage
    const usersData = JSON.parse(localStorage.getItem("usersData")) || [];

    // Kiểm tra xem tên người dùng hoặc email đã tồn tại trong dữ liệu hay chưa
    return usersData.some(user => user.username === username || user.email === email);
}
function signup() {
    const username = document.getElementById("username").value;
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;
    const pass2 = document.getElementById("pass2").value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const gender = document.querySelector(".gender").value;

    // Kiểm tra xem tên người dùng hoặc email đã tồn tại trong local storage hay chưa
    if (isUsernameOrEmailExists(username, user)) {
        alert("Tên người dùng hoặc email đã tồn tại. Vui lòng sử dụng thông tin khác.");
        return;
    }

    var flag = false;
    if (user.length > 7 && username.length < 17 && pass.length > 3 && pass2 === pass) {
        flag = true;
    }

    if (flag) {
        // Thêm thông tin người dùng vào mảng dữ liệu
        const userData = {
            username: username,
            email: user,
            password: pass,
            day: day,
            month: month,
            year: year,
            gender: gender
        };

        // Lấy dữ liệu từ local storage (nếu có) và thêm thông tin mới vào mảng
        const usersData = JSON.parse(localStorage.getItem("usersData")) || [];
        usersData.push(userData);

        // Lưu lại mảng dữ liệu vào local storage
        localStorage.setItem("usersData", JSON.stringify(usersData));

        alert("Đăng kí thành công, quay lại trang đăng nhập!");
        window.location.href = "sigin.html";
    }
}