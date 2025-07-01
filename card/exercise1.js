var obj1 = {
  valueOfThis: function () {
    return this;
  },
};

var obj2 = {
  valueOfThis: () => {
    return this;
  },
};

console.log(obj1.valueOfThis()); // Should log obj1
console.log(obj2.valueOfThis()); // Should log the global object or undefined in strict mode
obj1.valueOfThis();
obj2.valueOfThis();

function Person(name) {
  this.name = name; // "this" refers to the instance of Person
}
const p = new Person("Lina");
console.log(p.name); // "Lina"


function greet() {
    console.log("Hola " + this.name); // "this" refers to the object that calls the function
  }
  
  const user = { name: "Lina" };
  greet.call(user);  // "Hola Lina"
  greet.apply(user); // "Hola Lina"
  
  const boundGreet = greet.bind(user);
boundGreet();      // "Hola Lina"
  
document.querySelector("button").addEventListener("click", function () {
  console.log(this); // el botón clickeado
});
  