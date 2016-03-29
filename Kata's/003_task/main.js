/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
    'use strict';

    var getDigitsArray = function ( number ) {
        return (number + '').split('').map(function(n){ return parseInt(n, 10); });
    };
    var getDigitsSum = function ( digitsArray ) {
        return digitsArray.reduce(function(a, b){ return a + b; }, 0);
    };


    return {
        /**
         * Returns true when the given number is a valid Harshad number.
         *
         * @param {Number} number The given number
         * @returns {Boolean}
         * @function Harshad.isValid
         */
        isValid: function( number ) {
            if(number <= 0) {
                return false;
            }
            var digitsArray = getDigitsArray(number),
                digitsSum = getDigitsSum(digitsArray);
            return number % digitsSum === 0;
        },
        /**
         * Gets the next Harshad number after the given number.
         *
         * @param {Number} number The given number
         * @returns {Number}
         * @function Harshad.getNext
         */
        getNext: function( number ) {
            do {
                number++;
            } while( !this.isValid(number) );
            return number;
        },
        /**
         * Returns the suite of Harshad numbers, starting after a given number.
         *
         * @param {Number} count The number of elements to return
         * @param {Number} start The number after which the serie should start;
         *  defaults to 0
         * @returns {Array}
         * @function Harshad.getSerie
         */
        getSerie: function( count, start ) {
            if(count <= 0) {
                return false;
            }
            start = start || 0;
            var serie = [];
            while( serie.length < count ) {
                start = this.getNext(start);
                serie.push(start);
            }
            return serie;
        }
    };

} () );






Test.run([
    Test.expect(Harshad.isValid(-5)).toBe(false),
    Test.expect(Harshad.isValid(15)).not().toBe(true),
    Test.expect(Harshad.getNext(121)).toBe(126)
]);
