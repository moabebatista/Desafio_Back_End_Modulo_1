function solucao(carta) {
    if(carta.toUpperCase() === "Q" ) {
        console.log("J")
    }
    else if (carta.toUpperCase() === "J") {
        console.log("K")
    }
    else if (carta.toUpperCase() === "K") {
        console.log("A")
    }
    else if (carta.toUpperCase() === "A") {
        console.log(2)
    }
    else if (carta === "2") {
        console.log(3)
    }
    else if (carta === "3") {
        console.log("Q")
    }
}
