(function(){
    {
        var x = 2;
        let y = 3;
        const z = 4;
    }
    if (true) {
        console.log(x); // stampa 2
        console.log(y); // error
        console.log(z); // error
    }
    console.log(x); // stampa 2
    console.log(y); // error
    console.log(z); // error
})();
console.log(x); // error