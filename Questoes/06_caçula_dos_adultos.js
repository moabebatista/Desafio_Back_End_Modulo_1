function solucao(lista) {
    let novaLista = [];
    for(let i = 0; i < lista.length; i++) {
        if(lista[i] >= 18) {
            novaLista.push(lista[i]);
        }
    }
    if (novaLista.length > 0) {
      let maisJovemPermitido = novaLista[0];
      for(let i = 0; i < novaLista.length; i++){
      if(novaLista[i] < maisJovemPermitido) {
        maisJovemPermitido = novaLista[i];
        }
    }
    console.log(maisJovemPermitido);
    }
    else {
    console.log("CRESCA E APARECA");
    }
}