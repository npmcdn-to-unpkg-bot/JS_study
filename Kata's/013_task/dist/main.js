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

	"use strict";

	function sumOfDivided(lst) {
	    var max = Math.max(Math.abs(lst[0]), Math.abs(lst[lst.length - 1]));
	    var result = [];
	    var primes = [];

	    var _loop = function _loop(index) {
	        if (!primes.some(function (prime) {
	            return index % prime === 0;
	        })) {
	            primes.push(index);
	            lst.forEach(function (item) {
	                if (item % index === 0) {
	                    var el = result[result.length - 1];
	                    el && el[0] === index ? el[1] += item : result.push([index, item]);
	                }
	            });
	        }
	    };

	    for (var index = 2; index <= max; index++) {
	        _loop(index);
	    }
	    return result;
	}

	Test.run([Test.expect(sumOfDivided([12, 15])).toEqual([[2, 12], [3, 27], [5, 15]]), Test.expect(sumOfDivided([15, 21, 24, 30, 45])).toEqual([[2, 54], [3, 135], [5, 90], [7, 21]])]);

/***/ }
/******/ ]);