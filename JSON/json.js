/*
 JSON - JavaScript Object Notation
    
    - Formato de dados leve e fácil de ler
    - Padrão de troca e amarzenamento de informações
    - Padrão lógico simples
    - Leve para ser enviado e recebido
    - Simples e fácil de entender
    - Derivado de JavaScript, mas independente da linguagem
    - Suporta tipos de dados primitivos: string, number, boolean, null
    - utiliza o formato de chave-valor

*/

const user = {
  nome: "João",
  idade: 30,
  filhos: null,
  hobbies: ["futebol", "leitura", "viagens"],
  casado: true,
  empresas: {
    EmpresaA: {
      fundada: 2010,
      colaboradores: 51,
    },
    EmpresaB: {
      fundada: 2015,
      colaboradores: 100,
    },
    EmpresaC: {
      fundada: 2020,
      colaboradores: 120,
    },
    EmpresaD: {
      fundada: 2024,
      colaboradores: 34,
    },
  },
};

const userJSON = JSON.stringify(user);

const userJsonToJS = JSON.parse(userJSON);

console.log(userJsonToJS);
