console.log('04. Template strings');

function foo(){
    return Math.random() * 100;
}

var a = 45;
var str1 = `Example of template string.
Variable a = ${a}.
Simple JS expression 3 + 2 * a = ${3 + 2 * a}.
Function call result = ${foo()}.`;

console.log(str1);

console.log('---------------------------');
console.log();