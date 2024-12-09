const cores: Set<string> = new Set<string>();


cores.add("azul");
cores.add("verde");
cores.add("amarelo");
cores.add("branco");
cores.add("laranja");


for (const cor of cores) {
    console.log(cor);
  }


let setOrdenado: Array<string> = Array.from(cores).sort();

console.log("\ncores ordenadas\n")

for (let i = 0; i < setOrdenado.length; i++) {
    console.table(setOrdenado[i]);
}
