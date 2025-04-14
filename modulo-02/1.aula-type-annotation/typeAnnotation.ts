/**
 * Arquivo: typeAnnotation.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * Referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */


// ==> Variáveis [Type Annotations]
let nome: string = 'Leon Santana';
console.log(nome);

// ==> Arrays [Type Annotations]
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);

// ==> Objetos [Type Annotations]
let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = { nome: 'Ford', ano: 2020, preco: 100000 };
console.log(carro);

// ==> Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumero(2, 5));
