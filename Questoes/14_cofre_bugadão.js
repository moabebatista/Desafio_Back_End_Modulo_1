function processData(input) {
    const linhas = input.trim().split("\n");
    const a = linhas[0].split('');
    let b = linhas[1].split('');
    const c = [];
    for(let i = 0; i < a.length; i++) {
        let d = b.indexOf(a[i]);
        if(d !== -1) {
            c.push(a[i]);
            b = b.slice(d)
        }
    }
    if(a.join('') === c.join('')) {
        console.log("SIM");
    }
    else {
        console.log("NAO");
    }
}
