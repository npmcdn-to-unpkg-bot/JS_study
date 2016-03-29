/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Utility class for Harshad numbers (also called Niven numbers).
	 *
	 * @namespace Harshad
	 */
	var Harshad = function () {
	    'use strict';

	    var getDigitsArray = function getDigitsArray(number) {
	        return (number + '').split('').map(function (n) {
	            return parseInt(n, 10);
	        });
	    };
	    var getDigitsSum = function getDigitsSum(digitsArray) {
	        return digitsArray.reduce(function (a, b) {
	            return a + b;
	        }, 0);
	    };

	    return {
	        /**
	         * Returns true when the given number is a valid Harshad number.
	         *
	         * @param {Number} number The given number
	         * @returns {Boolean}
	         * @function Harshad.isValid
	         */
	        isValid: function isValid(number) {
	            if (number <= 0) {
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
	        getNext: function getNext(number) {
	            do {
	                number++;
	            } while (!this.isValid(number));
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
	        getSerie: function getSerie(count, start) {
	            if (count <= 0) {
	                return false;
	            }
	            start = start || 0;
	            var serie = [];
	            while (serie.length < count) {
	                start = this.getNext(start);
	                serie.push(start);
	            }
	            return serie;
	        }
	    };
	}();

	Test.run([Test.expect(Harshad.isValid(-5)).toBe(false), Test.expect(Harshad.isValid(15)).not().toBe(true), Test.expect(Harshad.getNext(121)).toBe(126)]);

/***/ }
/******/ ]);