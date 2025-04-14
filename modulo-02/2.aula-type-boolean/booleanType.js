"use strict";
/**
 * Arquivo: booleanType.ts
 * Descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Boolean'
 * Referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
// ==> Exemplo 02
let concluido = false;
if (!concluido) {
    console.log('Tarefa foi concluída com sucesso!');
}
else {
    console.log('Tarefa Pendente!');
}
