function solucao(min, max, valores) {
    let valoresAutorizados = [];
      for(let i = 0; i < valores.length; i++) {
          if(valores[i] >= min && valores[i] <= max) {
              valoresAutorizados.push(valores[i]);
          }
      }
      console.log(valoresAutorizados);
}
  