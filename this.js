/*
    THIS

    this em inglês significa "este" ou "isto", e é usado para se referir ao objeto atual em que o código está sendo executado. Em JavaScript, o valor de `this` pode variar dependendo do contexto em que é usado.

    No JavaScrript, o this faz referência ao objeto que está executando o código. O valor de `this` é determinado por como uma função é chamada, e não onde ela é definida.

    Node => module.exprerts // true, no Node.js, `this` refere-se ao objeto `module.exports`
    Web => window // true, no navegador, `this` refere-se ao objeto `window`

    Escopo:
    => Global: -> Quando começarmos a escrever nossa aplicação..
    No contexto global, `this` se refere ao objeto global. No navegador, esse objeto é o `window`, enquanto no Node.js é o `global`.

    => Local -> Por exemplo, dentro de uma função, o `this` pode se referir ao objeto que chamou a função ou ao objeto global, dependendo de como a função foi chamada.

*/

// const name = "Maria"; // Exemplo de variável escopo global

// function myName () {
//     const myName = "Maria"; // Variável escopo local
// }

// console.log(this === module.exports);

const person = {
  name: "João",
  age: 30,
  talk: function () {
    console.log(this.age);
  },
};

function myFunction() {
  this.console.log("this é o objeto global ou o objeto que chamou a função");
}

myFunction();

// person.talk(); // Chama o método talk do objeto person
