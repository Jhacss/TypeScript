import readlinesync = require("readline-sync")

import { Stack } from "../pilha/Stack";

const pilha = new Stack<string>()
let continuar = true
let opcao
let nomelivro

while (continuar) {
    console.log("\n*************************************\n")
    console.log("1 - Adicionar o livro na pilha ")
    console.log("2 - listar todos os livros ")
    console.log("3 - Retirar o livro da pilha ")
    console.log("0 - Sair ")
    console.log("\n**************************************\n")

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ")

    switch (opcao) {
        case 1:
            nomelivro = readlinesync.question("escreva o nome do livro: ")
            pilha.push(nomelivro)
            pilha.printStack()
            break;

        case 2:
            pilha.printStack()
            break;

        case 3:
            nomelivro = pilha.pop()
            pilha.printStack()
            console.log(`${nomelivro} retirado da pilha!`)
            break;

        case 0:
            
            (continuar = false)
            console.log("programa finalizado!")
    }
    
}






