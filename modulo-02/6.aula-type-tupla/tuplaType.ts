/**
 * Arquivo: tuplaType.ts
 * Descrição: Arquivo responsável por ensinar conceitos básicos sobre 'Tipo tupla'
 * Referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */


// Exemplo 01 - Uso simples de Tuplas em Typescript

let pessoa: [string, string, number];

pessoa = ["Leon", "Desenvolvedor", 27];
console.log(pessoa);


// Exemplo 02 - Acessando valor da Tupla
let pessoa1: [string, string, number];

pessoa1 = ["Leon", "Desenvolvedor", 27];
console.log(pessoa1[1]);

// Exemplo 03 - Outra forma de usar Tupla no Typescript (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] =["Leon", "Desenvolvedor", 27];
console.log(pessoa2[0]);

// Exemplo 04 - Usando Tuplas com Spread Operator
 // O spread operator (...string[]) permite que a tupla aceite múltiplos strings após o primeiro elemento
 let listaDeFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
 console.log(...listaDeFrutas);


// Exemplo 05 - Lista Heterogênea de Tupla

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaDeFrutas];
console.log(listaFrutas2);

// Exemplo 06 - Uso de função com Tuplas


// Exemplo 07 - Labeled Tuples com Spread Operator numa função