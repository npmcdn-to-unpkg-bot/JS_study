console.log('07. Let, Const');

function f(){
    var x = 1;
    console.log(x);
    {
        let x = 2;
        console.log(x);
        {
            const x = 3;
            console.log(x);
        }
    }
}

f();


console.log('---------------------------');
console.log();