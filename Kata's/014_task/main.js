
function add(a, b) {
    if(isNaN(+a) || isNaN(+b)){
        return false;
    }
    var lenDiff = a.length - b.length;
    a = (lenDiff < 0) ? Array(1 - lenDiff).join('0') + a : a;
    b = (lenDiff > 0) ? Array(1 + lenDiff).join('0') + b : b;
    return a.split('').reduceRight((result, item, index) => {
        let sum = +item + +result.array[index] + result.temp,
            temp = Math.floor(sum/10);
        sum -= temp*10;
        result.array[index] = sum;
        index === 0 && temp && result.array.unshift(temp);
        return {
            array: result.array,
            temp: temp
        }
    }, {
        array: b.split(''),
        temp: 0
    }).array.join('');
}


Test.run([
    Test.expect(add("123", "321")).toEqual("444"),
    Test.expect(add("11", "99")).toEqual("110")
]);
