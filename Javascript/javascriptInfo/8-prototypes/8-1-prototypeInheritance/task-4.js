//why two hamsters are full

let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

speedy.eat('apple');
alert(speedy.stomach); // apple

alert(lazy.stomach); //apple, all hamsters share a single stomach. eat(food) is called on the prototype
