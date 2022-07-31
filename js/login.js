
function checkUser(user,pass) {
    if ((user === 'quanpham') && (pass ==='123')) {
        return  true;
    }
}
function checkuserpassword() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (checkUser(user,pass)) {
        location.replace("carts.html");
    }
    else {
        alert("Tài khoản hoặc mật khẩu của bạn không đúng")
    }
}