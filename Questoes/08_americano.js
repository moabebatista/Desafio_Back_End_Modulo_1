function solucao(numeros) {
    let soma = 0;
    for(let i = 0; i < numeros.length; i++) {
      soma += numeros[i];
   }
   if(numeros.length < soma) {
     for(let i = 0; soma > numeros.length; i--) {
      soma -= numeros.length;
     }
     console.log(soma);
   }
   else {
     console.log(numeros.length);
   }
    
}