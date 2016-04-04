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

	function add(a, b) {
	    if (isNaN(+a) || isNaN(+b)) {
	        return false;
	    }
	    var lenDiff = a.length - b.length;
	    a = lenDiff < 0 ? Array(1 - lenDiff).join('0') + a : a;
	    b = lenDiff > 0 ? Array(1 + lenDiff).join('0') + b : b;
	    return a.split('').reduceRight(function (result, item, index) {
	        var sum = +item + +result.array[index] + result.temp,
	            temp = Math.floor(sum / 10);
	        sum -= temp * 10;
	        result.array[index] = sum;
	        index === 0 && temp && result.array.unshift(temp);
	        return {
	            array: result.array,
	            temp: temp
	        };
	    }, {
	        array: b.split(''),
	        temp: 0
	    }).array.join('');
	}

	Test.run([Test.expect(add("123", "321")).toEqual("444"), Test.expect(add("11", "99")).toEqual("110")]);

/***/ }
/******/ ]);