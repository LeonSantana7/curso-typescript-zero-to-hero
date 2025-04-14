"use strict";
/**
 * Arquivo: stringType.ts
 * Descrição: Arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * Referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// -> Exemplo 01 - Single Quotes (Aspas simples)
let nomeCompleto = 'Leon Santana';
console.log(nomeCompleto);
// -> Exemplo 02 - Double Quotes (Aspas duplas)
let funcaoEmpresa = "Desenvolvedor Front End";
console.log(funcaoEmpresa);
// -> Exemplo 03 - Back Tips (String Templates(crase))
let nomeEmpresa = 'Ford';
let dadosFuncionario = `Seja bem vindo(a) ${nomeCompleto}! VocÊ será ${funcaoEmpresa} na empresa  ${nomeEmpresa}!`;
console.log(dadosFuncionario);
