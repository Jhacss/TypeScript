import readlinesync = require('readline-sync')
import {colors} from "./../utill/Cores"
let numero1: number;
let numero2: number;
let opcao
do {

   menu()

    opcao = readlinesync.questionInt()

    if (opcao === 0) {
        about()
        process.exit(0)
    }


    switch (opcao) {
        case 1:
            // Desestruturação do Objeto
            [numero1, numero2] = obterNumeros();
            console.log(`${numero1} + ${numero2} = ${somar(numero1, numero2)}`)
            break;
        case 2:
            [numero1, numero2] = obterNumeros();
            console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`)
            break;
        case 3:
            [numero1, numero2] = obterNumeros();
            console.log(`${numero1} X ${numero2} = ${multiplicar(numero1, numero2)}`)
            break;
        case 4:
            [numero1, numero2] = obterNumeros();
            let resultado = dividir(numero1, numero2);

            if(resultado !== null)
                console.log(`${numero1} / ${numero2} = ${resultado}`)
            else
            console.log("não existe divisão por zero!")

            break;
        default:
            console.log("opcao inválida!")
    }
} while (true)

    function menu(): void{
        console.log(colors.bg.green, colors.fg.green,"*******************************************")
    console.log("*              Calculadora                *")
    console.log("*******************************************")
    console.log("*              1 - somar                  *")
    console.log("*              2 - subtrair               *")
    console.log("*              3 - multiplicar            *")
    console.log("*              4 - dividir                *")
    console.log("*              0 - sair                   *")
    console.log("*******************************************")
    console.log("digite a opcao desejada: ", colors.reset)
    }

function obterNumeros(): [number, number] {
    const numero1 = readlinesync.questionFloat('Digite o primeiro numero: ')
    const numero2 = readlinesync.questionFloat('Digite o segundo numero: ')
    return [numero1, numero2]
}

function somar(numero1: number, numero2: number): number {
    return numero1 + numero2
}

function subtrair (numero1: number, numero2: number): number {
    return numero1 - numero2
}

function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2
}

function dividir (numero1: number, numero2: number): number | null {
    let divisao = numero1 / numero2
    return (divisao !== Infinity ? divisao : null)
}

function about(){
    console.log("Criado por João Henrique.")
}