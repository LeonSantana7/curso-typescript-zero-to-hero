/**
 * Arquivo: arrayType.ts
 * Descrição: Arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * Referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// -> Exemplo 01 - Uso de colchetes:

let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);

// -> Exemplo 02 - Array Object (Objeto Array):  (Preferêncial)
let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);


// -> Exemplo 03 - Adicionando mais strings com método 'push'

let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
// Adiciona um valor no final da lista
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Italiano');
console.log(idiomas);

// -> Exemplo 04 - Identificar tamanho do array - método 'length'

let idiomas1: Array<string> = [
    'Português', 'Inglês', 'Espanhol', 'Francês'
];
console.log(idiomas1.length);

// -> Exeomplo 05 - Exemplo de Array com Spread Operator

let listaNumeros: Array<number> = [
    0, 1, 2, 3, 4, 5,
];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);

 // -> Exemplo 06 - Exemplo de Array com laço de iteração

 let linguagensArray: string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');

 function funcaoLinguagens(linguagens:string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
 }

 funcaoLinguagens(linguagensArray);
