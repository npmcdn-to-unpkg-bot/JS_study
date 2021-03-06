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

	function Digit(value) {
	    return function (op) {
	        return op ? op.doMath(value) : value;
	    };
	}
	function Operator(handler) {
	    var self = this;
	    self.operand = 0;
	    self.doMath = function (operand) {
	        return handler(operand, self.operand);
	    };
	    return function (number) {
	        self.operand = number;
	        return self;
	    };
	}

	var plus = new Operator(function (a, b) {
	    return a + b;
	});
	var minus = new Operator(function (a, b) {
	    return a - b;
	});
	var times = new Operator(function (a, b) {
	    return a * b;
	});
	var dividedBy = new Operator(function (a, b) {
	    return a / b;
	});

	var zero = new Digit(0);
	var one = new Digit(1);
	var two = new Digit(2);
	var three = new Digit(3);
	var four = new Digit(4);
	var five = new Digit(5);
	var six = new Digit(6);
	var seven = new Digit(7);
	var eight = new Digit(8);
	var nine = new Digit(9);

	Test.run([Test.expect(seven(times(five()))).toBe(35), Test.expect(five(plus(three(times(five()))))).toBe(20), Test.expect(four(plus(nine()))).toBe(13), Test.expect(eight(minus(three()))).toBe(5), Test.expect(six(dividedBy(two()))).toBe(3)]);

/***/ }
/******/ ]);