//Where it writes

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__:animal
};

rabbit.eat();

alert(rabbit.full);//true
