
function Digit(value) {
    return function(op){
        return op ? op.doMath(value) : value;
    };
}
function Operator(handler) {
    var self = this;
    self.operand = 0;
    self.doMath = function(operand){
        return handler(operand, self.operand);
    };
    return function(number) {
        self.operand = number;
        return self;
    };
}

var plus        = new Operator(function(a,b){ return a + b; });
var minus       = new Operator(function(a,b){ return a - b; });
var times       = new Operator(function(a,b){ return a * b; });
var dividedBy   = new Operator(function(a,b){ return a / b; });

var zero    = new Digit(0);
var one     = new Digit(1);
var two     = new Digit(2);
var three   = new Digit(3);
var four    = new Digit(4);
var five    = new Digit(5);
var six     = new Digit(6);
var seven   = new Digit(7);
var eight   = new Digit(8);
var nine    = new Digit(9);


Test.run([
    Test.expect( seven( times( five() ) ) ).toBe(35),
    Test.expect( five( plus( three( times( five() ) ) ) ) ).toBe(20),
    Test.expect( four( plus( nine() ) ) ).toBe(13),
    Test.expect( eight( minus( three() ) ) ).toBe(5),
    Test.expect( six( dividedBy( two() ) ) ).toBe(3)
]);
