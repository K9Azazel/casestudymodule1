class productManagement {
    constructor(array) {
        this.Product = array;
    }
    showList () {
        let sp = "";
            sp = <div class="col-4">
            sp = <div class="col-4"><img width="150px" height="100px" src="images/product-1.jpg" + this.Product[1].img + '">;
            sp = this.Product[1].name;
                sp = this.Product[1].price;
                sp = </div>
                sp = </div>
        }

        document.getElementById("list").innerHTML = sp;
    }