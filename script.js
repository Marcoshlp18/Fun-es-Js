function mensagem(mensagem1){
  console.log("A mensagem é:", mensagem1);
}
mensagem("Bom Dia!");

function nome(meunome){
  console.log("Meu nome é:", meunome);
}
nome("Marcos");

function sobreMim(nome,idade,musica){
  return `${nome},${idade},${musica}`
}
const dadosMeu = sobreMim("Marcos",18,"Rap");
console.log(dadosMeu);

function filmMsc(filme,musica){
  return `${filme},${musica}`
}
const favoritos = filmMsc("Constantine","Write This Down");
console.log(favoritos);

function triplo(numero){
  return numero * 3;
}
triplo(50);
console.log(triplo(50));
