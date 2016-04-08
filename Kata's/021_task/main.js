/////////////////////////////////////////////////////////////////
function Maybe () {
    Object.freeze(this);
}

/////////////////////////////////////////////////////////////////
function Just (x) {
    this.toString = function () { return "Just " + x.toString(); };
    this.just = x;
    Object.freeze(this);
}
Just.prototype = new Maybe();

/////////////////////////////////////////////////////////////////
function Nothing () {
    this.toString = function () { return "Nothing"; };
    Object.freeze(this);
}
Nothing.prototype = new Maybe();

/////////////////////////////////////////////////////////////////
Maybe.unit = function (x) {
    return x ? new Just(x) : new Nothing();
};
Maybe.bind = function (f) {
    return function(value){
        switch(true){
            case value instanceof Just: return f(value); break;
            case value instanceof Nothing: return new Nothing(); break;
            default: throw new Error('bind error');
        }
    };
};
Maybe.lift = function (f) {
    return function(value){
        try{
            return new Just( f(value.just) );
        }catch(e){
            return new Nothing();
        }
    };
};
Maybe.do = function(m) {
    var fns = Array.prototype.slice.call(arguments, 1);
    return fns.reduce(function(prevValue, currentValue){
        return currentValue(m);
    }, m);
};

var test1 = Maybe.unit(5) instanceof Maybe;

var mDup = Maybe.lift( function (s) { return  s+s; } );
var bmDup = Maybe.bind(mDup);
var test2 = bmDup(new Nothing);
var test3 = bmDup(new Just("abc"));

function nonnegative(x) {
    if (isNaN(x) || 0 <= x) {
        return x;
    } else {
        throw "Argument " + x + " must be non-negative";
    }
}
var mNonnegative = Maybe.lift(nonnegative);
var test4 = mNonnegative(2);
var test5 = mNonnegative(-1);
var test6 = mNonnegative(undefined);

var mTrim = Maybe.lift( function (s) { return s.replace(/\s+$/, ''); } );
var test7 = Maybe.do( Maybe.unit(3), mDup, mTrim, mDup );

console.log(test1);     // => true
console.log(test2);     // => new Nothing
console.log(test3);     // => new Just("abcabc")
console.log(test4);     // => new Just 2
console.log(test5);     // => new Nothing
console.log(test6);     // => new Just undefined
console.log(test7);     // => new Just "abc abcabc abc"