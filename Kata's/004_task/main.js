
function order(words){
    if(!words){
        return '';
    }
    var regexp = /[0-9]/;
    return words.split(' ').sort(function(a,b){
        return a.match(regexp)[0] > b.match(regexp)[0];
    }).join(' ');
}




Test.run([
    Test.expect(order('is2 Thi1s T4est 3a')).toEqual('Thi1s is2 3a T4est'),
    Test.expect(order('4of Fo1r pe6ople g3ood th5e the2')).toEqual('Fo1r the2 g3ood 4of th5e pe6ople'),
    Test.expect(order('')).toEqual('')
]);