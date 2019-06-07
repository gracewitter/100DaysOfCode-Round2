//Working with prototype

let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // true from rabbit

delete rabbit.jumps;

alert( rabbit.jumps ); // null from animal

delete rabbit.jumps;

alert( rabbit.jumps ); // null no such property anymore
