console.log('01. Assignment Destructuring');

var pony = { foo: 'foo from pony' };
var {foo} = pony;
var {foo: baz} = pony;
console.log(foo);
console.log(baz);

var { test='default value', test2, key: test3 } = { test2: 'asd', key: 'key_property' };
console.log(test);
console.log(test2);
console.log(test3);

var [a,, b] = [0, 1, 2];
[a, b] = [b, a];
console.log(a);
console.log(b);


console.log('---------------------------');
console.log();