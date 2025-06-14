class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return super.present() + ", it is a " + this.model;
  }
}

let mycar = new Model("Ford", "Mustang");
mycar.show();
