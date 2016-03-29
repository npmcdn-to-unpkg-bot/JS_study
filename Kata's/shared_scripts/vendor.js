
var Test = (function(object){

    var Logger = {

    };

    var Expect = function(initValue){
        this.description = 'expect(' + initValue + ')';
        this.initValue = initValue;
        this.notOperatorsCount = 0;
    };
    Expect.prototype = {
        not: function(){
            this.description += '.not()';
            this.notOperatorsCount++;
            return this;
        },
        toBe: function(expectedVal) {
            this.description += '.toBe(' + expectedVal + ')';
            return this.getResult(this.initValue === expectedVal);
        },
        toEqual: function(expectedVal) {
            this.description += '.toEqual(' + expectedVal + ')';
            return this.getResult(this.initValue == expectedVal);
        },
        getResult: function(condition) {
            this.testResult = (this.notOperatorsCount % 2 === 0) ? condition : !condition;
            return this.resolve();
        },
        resolve: function() {
            var testResultObject = {
                success: this.testResult,
                description: this.description
            };
            if(this.testResult){
                this.log('success', testResultObject.description);
            }else{
                this.log('fail', testResultObject.description);
            }
            return testResultObject;
        },
        log: function(status, msg) {
            switch(status){
                case 'success':
                    console.log('success');
                    break;
                case 'fail':
                    console.warn('Error in test:', msg);
                    break;
            }
        }
    };

    var _run = function(tests){
        tests.every(function(singleTest){
            return singleTest.success;
        });
    };
    var _expect = function(value){
        return new Expect(value);
    };

    return {
        run: _run,
        expect: _expect,




        describe: '',
        it: '',

        assertEquals: '',
        assertNotEquals: '',
        assertSimilar: '',
        assertNotSimilar: '',
        expectError: '',
        expectNoError: ''
    }
})(window);