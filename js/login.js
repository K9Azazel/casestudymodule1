
function checkuserpassword() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if ((user === 'quanpham') && (pass ==='123')) {
        location.replace("http://localhost:63342/casestudy/carts.html?_ijt=tafd6ts0tmm0h5n2705b88e87k&_ij_reload=RELOAD_ON_SAVE");
    }
    else {
        alert("Tài khoản hoặc mật khẩu của bạn không đúng")
    }
}