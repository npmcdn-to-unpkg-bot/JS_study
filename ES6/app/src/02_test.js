console.log('02. Spread Operator, Rest Parameters');

function foo(first, second, ...rest){
    console.log(first);
    console.log(second);
    console.log(rest);
}

foo(1, 2, 'asd', false);
foo(...[1, 2, 'asd', false, {}]);

console.log([1, 2, ...[3, 4, 5], 6, 7]);


console.log('---------------------------');
console.log();
