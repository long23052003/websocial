function signin()
{
    const user_name=document.getElementById("user_name");
    const password=document.getElementById("password");
    if
    ((localStorage.getItem("user")==user_name.value)&&(localStorage.getItem("pass") == password.value))
    {
        localStorage.setItem("signincheck", "true");
        alert("Đăng nhập thành công!");
        window.location = "index.html";
    }
    else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}