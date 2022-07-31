class Product {

    constructor (img,name,price) {
        this.img = img;
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getImg() {
        return this.img;
    }
    setImg(img) {
        this.img = img
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    sanPham(img,name,price) {

      this.img = img;
      this.name = name;
      this.price = price;

    }

}