
function pigIt(str){
    return str.split(' ').map(function(item, index){
        return item.slice(1) + item.charAt(0) + 'ay';
    }).join(' ');
}


Test.run([
    Test.expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay'),
    Test.expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay')
]);