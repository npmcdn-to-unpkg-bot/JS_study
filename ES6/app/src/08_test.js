console.log('08. Symbols');

var symbol = Symbol('key');
var globalSymbol = Symbol.for('key');

console.log(typeof symbol);
console.log(globalSymbol);
console.log(Symbol.keyFor(globalSymbol));

var object = {
    [symbol]: 'local',
    [globalSymbol]: 'global'
};

console.log(object);
console.log(object['key']);
console.log(object[symbol]);
console.log(object[globalSymbol]);


console.log('---------------------------');
console.log();