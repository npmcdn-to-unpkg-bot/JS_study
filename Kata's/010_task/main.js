
function permutations(string) {
    if(string.length <= 1){
        return [string];
    }
    var result = [];
    string.split('').forEach((char, index, array) => {
        var arrCopy = array.slice();
        arrCopy.splice(index, 1);
        result = result.concat( permutations(arrCopy.join('') ).map((item) => char + item) );
    });
    return result.filter((item, pos, self) => self.indexOf(item) == pos);
}


Test.run([
    Test.expect(permutations('ab')).toEqual(['ab', 'ba']),
    Test.expect(permutations('abc')).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"])
]);