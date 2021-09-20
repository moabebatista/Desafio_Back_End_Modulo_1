function solucao(jogadores) {
    let jogouZero = [];
    let jogouUm = [];
    for(let i = 0; i < jogadores.length; i++) {
        if(jogadores[i].jogada == 0) {
            jogouZero.push(jogadores[i].nome);
        }
        else if(jogadores[i].jogada == 1) {
            jogouUm.push(jogadores[i].nome);
        }
    }
    if(jogouZero.length == 1) {
        console.log(jogouZero.toString());
    }
    else if(jogouUm.length == 1) {
        console.log(jogouUm.toString());
    }
    else {
        console.log("NINGUEM");
    }
}