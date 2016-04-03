
function solution(input, markers){
    if(!input){
        return false;
    }
    return input.split('\n').map(function(item){
        var index = 0;
        markers.some((marker) => index = item.indexOf(marker) + 1);
        return index ? item.substring(0, index - 2) : item;
    }).join('\n');
}

Test.run([
    Test.expect(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])).toEqual("apples, pears\ngrapes\nbananas")
]);
