console.log('03. Arrow functions');

var odds = [1, 3, 5, 7, 9, 11];

var test1 = odds.map(v => v + 1);
var test2 = odds.map((v, i) => v + i);
var test3 = odds.map(v => {
    if(v % 3 === 0){
        return v;
    }
});

console.log(test1);
console.log(test2);
console.log(test3);

console.log('---------------------------');
console.log();