"use strict";
/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Variáveis [Type Annotations]
let nome = 'Leon Santana';
console.log(nome);
// ==> Arrays [Type Annotations]
let animais = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa'];
console.log(animais);
// ==> Objetos [Type Annotations]
let carro;
carro = { nome: 'Ford', ano: 2020, preco: 100000 };
console.log(carro);
// ==> Functions [Type Annotation]
function multiplicarNumero(num1, num2) {
    return num1 * num2;
}
console.log(multiplicarNumero(2, 5));
