/**
 * Ex. 01
 */
//A program that prints a copy of its
(function a(){console.log('('+a+')();');})();


/**
 * Ex. 02
 */
//A function that records calls to a spied function (ES 5)
function functionSpy(func) {
    var proxyFunc = function() {
        proxyFunc._callCount += 1;
        proxyFunc.callsHistory.push(arguments);
        return func.apply(null, arguments);
    };

    Object.defineProperty(proxyFunc, '_callCount', {value: 0, writable: true});
    Object.defineProperty(proxyFunc, 'callsHistory', {value: [], writable: true});
    return proxyFunc;
}
function getMax(a, b, c) {
    return Math.max(a, b, c);
}

getMax = functionSpy(getMax);
console.log('First call parameters:', getMax.callsHistory[0]);  //First call parameters: undefined
getMax(4,2,7);
console.log('First call parameters:', getMax.callsHistory[0]);  //First call parameters: [4,2,7]


/**
 * Ex. 03
 */
//A usage of Proxy API (ES 6)
var noSuchPropertyze = function(obj) {
    var handler = {
        get: (target, name, receiver) => {
            if(name in target) return target[name];
            else throw new Error('Not found: ' + name);
        }
    };
    return new Proxy(obj, handler);
};
var myObj = {
    a: 1,
    b: 'nice'
};

myObj = noSuchPropertyze(myObj);
console.log(myObj.b);                       // nice
//console.log(myObj.nonExistingProperty);     // Error


/**
 * Ex. 04
 */
//A usage of Proxy API (ES 6)
var to = (function closure() {
    var functionsProvider = {
        double: n => n*2,
        pow: n => n*n
    };
    return function toImplementation(value) {
        var pipe = [];
        var handler = {
            get(target, fnName, receiver) {
                if(fnName in target){
                    pipe.push(target[fnName]);
                    return receiver;
                }
                if(fnName === 'get') {
                    return pipe.reduce(function(val, fn){ return fn(val); }, value);
                }
                throw Error('Method: ' + fnName + ' is not supported yet.');
            }
        };
        return new Proxy(functionsProvider, handler);
    };
})();

console.log(to(3).double.pow.get);          //36
to().triple = function(n) {return n*3;};
console.log(to(4).triple.get);              //12


