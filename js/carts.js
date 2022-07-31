let giohang = new Array() ;

function addProduct(x) {
    let img = x.parentElement.children;
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let price = document.getElementById("number").value;
    let sp = new Array(img, name, number,price);

    giohang.push(sp);
    showCountsp();
}

function showCountsp() {
    document.getElementById("countsp").innerHTML = giohang.length
}

function showmycart() {
    let ttgh ="";
    for (let i = 0; i<giohang.length;i++){
        let tt = giohang[i][2] * giohang[i][3]
        ttgh+= <tr>
            '<td>'+ (i+1) +'</td>' +
            '<td>'<img src="'+giohang[i][0]+'">'</td>' +

            '<td>'<p>'+giohang[i][1]+'</p>'</td>' +
            '<td>'<small>'+giohang[i][2]+'</small>'</td>' +
            '<td>'<br>'</td>' +
            '<div>' +tt + '</div>'
            '<td>'<a href="">Remove</a>'</td>' +
        </tr>

}
        ttgh += '
function showcarts() {
    let x = document.getElementById("showcart");
    if (x.style.display == "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block"
    }
}