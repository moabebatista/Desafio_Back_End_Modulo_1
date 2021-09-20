function solucao(precos) {
    let soma = 0;
    let itemComDesconto = precos[0];
    for(let i = 0; i < precos.length; i++) {
        soma += precos[i];
    }
    if(precos.length < 3) {
        console.log(soma)
    }
    else {
        for(let i = 0; i < precos.length; i++) {
            if(precos[i] < itemComDesconto) {
                itemComDesconto = precos[i];
            }
        }
        console.log(soma - (itemComDesconto * 0.5));
    }
}