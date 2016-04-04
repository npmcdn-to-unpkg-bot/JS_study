
var helloWorld = [];

helloWorld = function () {
    var one   = Object.keys({key:true}).length,
        two   = one + one,
        three = two + one,
        four  = three + one,
        five  = four + one,
        six   = five + one,
        seven = six + one,
        eight = seven + one,
        nine  = eight + one,
        ten   = nine + one;
    return String.fromCharCode(ten * seven + two) +
        String.fromCharCode(ten * ten + one) +
        String.fromCharCode(ten * ten + eight) +
        String.fromCharCode(ten * ten + eight) +
        String.fromCharCode(ten * (ten + one) + one) +
        String.fromCharCode(ten * three + two) +
        String.fromCharCode(ten * eight + seven) +
        String.fromCharCode(ten * (ten + one) + one) +
        String.fromCharCode(ten * (ten + one) + four) +
        String.fromCharCode(ten * ten + eight) +
        String.fromCharCode(ten * ten) +
        String.fromCharCode(ten * three + three);
};

Test.run([
    Test.expect(helloWorld()).toEqual('Hello World!')
]);
