
function sumOfDivided(lst) {
    var max = Math.max(Math.abs(lst[0]), Math.abs(lst[lst.length - 1]));
    var result = [];
    var primes = [];
    for(let index = 2; index <= max; index++){
        if(!primes.some(prime => index % prime === 0)){
            primes.push(index);
            lst.forEach(item => {
                if(item % index === 0){
                    let el = result[result.length - 1];
                    el && el[0] === index ? el[1] += item : result.push([index, item]);
                }
            });
        }
    }
    return result;
}


Test.run([
    Test.expect(sumOfDivided([12, 15])).toEqual([ [2, 12], [3, 27], [5, 15] ]),
    Test.expect(sumOfDivided([15,21,24,30,45])).toEqual([ [2, 54], [3, 135], [5, 90], [7, 21] ])
]);
