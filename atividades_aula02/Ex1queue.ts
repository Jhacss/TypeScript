import readlinesync = require("readline-sync")
let opcao
import { Queue } from "../fila/Queue"

const fila = new Queue<string>();

do {
    console.log("\n*************************************\n")
    console.log("1 - Adicionar cliente na fila ")
    console.log("2 - listar todos os clientes ")
    console.log("3 - Retirar Cliente da fila ")
    console.log("0 - Sair ")
    console.log("\n**************************************\n")

    opcao = readlinesync.questionInt("Entre com a opcao desejada: ")



    switch (opcao) {
        case 1:
            fila.enqueue(readlinesync.question("digite o nome do cliente: "))
            fila.printQueue()
            console.log("\nO cliente foi adicionado! ")
            
            break;
        case 2:
            console.log("\nNome dos clientes")
            fila.printQueue()
            break;

        case 3:
            fila.dequeue()
            console.log("\nO cliente foi chamado")
            fila.printQueue()
            break;
       
        case 0:
            console.log("O programa foi finalizado!")
            process.exit(0)
            break;
       default :
       console.log("Opcao inválida!")

    } }while(true) 