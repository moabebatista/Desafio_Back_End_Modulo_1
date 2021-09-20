function solucao(texto) {
    const array = texto.trim().split(" ");
    let contadorDePalavras = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] !== "") {
           contadorDePalavras.push(array[i]);
           }
    }
    console.log(contadorDePalavras.length);
}