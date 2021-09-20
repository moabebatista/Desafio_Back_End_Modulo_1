function processData(input) {
    let distanciaMaxima = 0;
    let novoArray = [];
    
    let coordenadas = input.split("\n").filter(x => x !== '').slice(1);
    
    coordenadas.forEach(x => novoArray.push(x.split(" ")));
    
    function distancia(a, b) {
        let a1 = parseFloat(a[0]) - parseFloat(b[0]);
        let a2 = parseFloat(a[1]) - parseFloat(b[1]);
        return Math.sqrt(a1**2 + a2**2);
    }
    
    novoArray.forEach( x => {
        novoArray.forEach( y => {
            if(distancia(x, y) > distanciaMaxima) {
                distanciaMaxima = distancia(x, y);
            }
        })
    })
    console.log(distanciaMaxima);
}