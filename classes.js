/* CLASSEES */

// const person = {
//   name: "John",
//   age: 30,
//   talk: function () {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   },
// };

class Person {
  constructor(name, age) {
    console.log(`Hello, I'm ${name}`);

    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const newPerson = new Person("Jhon", 30);
newPerson.talk();
