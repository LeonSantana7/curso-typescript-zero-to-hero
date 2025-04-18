/**
 * Arquivo: numberBigints.ts
 * Descrição: Arquivo responsável por ensinar conceitos básicos sobre 'Tipo number e bigint'
 * Referência: <number> https://www.typescriptlang.org/docs/handbook/basic-types.html#number
 * Referência: <bigint> https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// -> Exemplos: number

let num1: number = 23.0;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b110001;

console.log(`Number - Ponto Flutuante ...: ${num1}`);
console.log(`${typeof(num1)}`); // confirmando tipo
console.log(`Number - Hexadecimal ...: ${num2}`);
console.log(`Number - Octal ...: ${num3}`);
console.log(`Number - Binario ...: ${num4}`);

console.log("----------------------------------------------------------------------------------");

// -> Exemplos: bigInt

let big1: bigint = 9007199254740991n;
let big2: bigint = 0b1000000000000000000000000000000000000011n;
let big3: bigint = 0x200000000000000000n;
let big4: bigint = 0o400000000000000000n;

console.log(`Bigint ...: ${big1}`);
console.log(`Bigint - Binário ...: ${big2}`);
console.log(`Bigint - Hexadecimal ...: ${big3}`);
console.log(`Bigint - Octal...: ${big4}`);