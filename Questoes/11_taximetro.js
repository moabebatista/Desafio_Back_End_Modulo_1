function solucao(min, km) {
    let valor = 0;
    if(km < 10 && min < 20) {
        valor = (min * 50) + (km * 70);
       }
    else if(km > 10 && min < 20) {
        valor = (min * 50) + (((km - 10) * 50) + (10 * 70));
    }
    else if(km < 10 && min > 20) {
        valor = (((min - 20) * 30) + (20 * 50)) + (km * 70);
    }
    else {
        valor = (((min - 20) * 30) + (20 * 50)) + (((km - 10) * 50) + (10 * 70));
    }
    console.log(Math.round(valor))
}   