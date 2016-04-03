
function generateHashtag (str) {
    if(!str){
        return false;
    }
    var result = str.trim().split(' ').reduce((res, item) => res + item.charAt(0).toUpperCase() + item.slice(1), '#');
    return result.length > 140 ? false : result;
}

Test.run([
    Test.expect(generateHashtag(" Hello there thanks for trying my Kata")).toEqual("#HelloThereThanksForTryingMyKata"),
    Test.expect(generateHashtag(" Hello World ")).toEqual("#HelloWorld")
]);
