// class productManagement {
//     constructor(array) {
//         this.Product = array;
//     }
let a= [new sanPham("Áo phông 1","Quần dài","Áo T-Shirt 2","Giày 2","Áo T-Shirt 3","tất 1","Đồng hồ","Đồng hồ 2","Giày 3","Giày 4","Quần 3")]
    function showList () {
        let content = "";
        for (let i = 0; i < a.length; i++) {
            content+= "    <div class=\"col-4\">\n" +
                "      <img src='"+a[i].img+"'>\n" +
                "      <h4>"+a[i].name+"</h4>\n" +
                "      <p>"+a[i].price+"</p>\n" +
                "    </div>"
        }
        document.getElementById("demo").innerHTML = content;
    }
