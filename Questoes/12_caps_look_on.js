function processData(input) {
    const a = input.slice(0, 1);
    const b = input.slice(1);
    if(input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    }
    else if (a === a.toLowerCase() && b === b.toUpperCase()) {
        console.log(a.toUpperCase() + b.toLowerCase());
    }
    else {
        console.log(input);
    }
}