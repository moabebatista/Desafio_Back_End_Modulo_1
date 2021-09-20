function solucao(lista) {
    let mediaAritimetica = 0;
  for(let i = 0; i < lista.length; i++) {
      mediaAritimetica += lista[i] / lista.length;
  }
  console.log(mediaAritimetica);
}