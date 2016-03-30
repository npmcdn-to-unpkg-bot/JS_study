
function sierpinski(n) {
    if(n === 0){
        return 'L';
    }
    var strPart = sierpinski(n-1);
    return strPart + '\n' + strPart.split('\n').map((value) => value + Array(Math.pow(2, n) - value.length).join(' ') + ' ' + value).join('\n');
}

Test.run(
    [
        (function(){
            var level0 = 'L';
            return [Test.expect(sierpinski(0)).toBe(level0)];
        })(),

        (function(){
            var level1 = [
                'L',
                'L L'
            ].join('\n');
            return [Test.expect(sierpinski(1)).toBe(level1)];
        })(),

        (function(){
            var level2 = [
                'L',
                'L L',
                'L   L',
                'L L L L'
            ].join('\n');
            return [Test.expect(sierpinski(2)).toBe(level2)];
        })(),

        (function(){
            var level3 = [
                'L',
                'L L',
                'L   L',
                'L L L L',
                'L       L',
                'L L     L L',
                'L   L   L   L',
                'L L L L L L L L'
            ].join('\n');
            return [Test.expect(sierpinski(3)).toBe(level3)];
        })()

    ].reduce( (a, b) => a.concat(b) )
);