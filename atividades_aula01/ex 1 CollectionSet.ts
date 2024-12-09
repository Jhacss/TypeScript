import readlinesync = require("readline-sync")

let numerosSet: Set <number> = new Set<number>();
let contador = 0
for(let i = 0; i < 10; i++){
const numero = readlinesync.questionInt("Digite 10 valores sem repetir nenhum: ")
numerosSet.add(numero)
    }

    const numerosArray = Array.from(numerosSet);

    for (let i = 0; i < numerosArray.length; i++) {
      console.log(`${contador}: ${numerosArray[i]}`);
      contador++;
    }
    


