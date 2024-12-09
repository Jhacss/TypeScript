import readlinesync = require("readline-sync")
let encontrar = 0
const numeros: number[] =[2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
encontrar = readlinesync.questionInt("Digite o numero que deseja encontrar: ")
let posicao = -1
for( let i = 0; i < numeros.length; i++){
    if (numeros[i] === encontrar) {
        posicao = i
        break       
}
}
    if (posicao !== -1){
        console.log(`O número ${encontrar}  foi encontrado na posicao ${posicao} `)
       }else{
        console.log(`O numero ${encontrar} não foi encontrado! `)
       }
    

    
