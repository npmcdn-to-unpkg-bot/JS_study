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

	var helloWorld = [];

	helloWorld = function helloWorld() {
	    var one = Object.keys({ key: true }).length,
	        two = one + one,
	        three = two + one,
	        four = three + one,
	        five = four + one,
	        six = five + one,
	        seven = six + one,
	        eight = seven + one,
	        nine = eight + one,
	        ten = nine + one;
	    return String.fromCharCode(ten * seven + two) + String.fromCharCode(ten * ten + one) + String.fromCharCode(ten * ten + eight) + String.fromCharCode(ten * ten + eight) + String.fromCharCode(ten * (ten + one) + one) + String.fromCharCode(ten * three + two) + String.fromCharCode(ten * eight + seven) + String.fromCharCode(ten * (ten + one) + one) + String.fromCharCode(ten * (ten + one) + four) + String.fromCharCode(ten * ten + eight) + String.fromCharCode(ten * ten) + String.fromCharCode(ten * three + three);
	};

	Test.run([Test.expect(helloWorld()).toEqual('Hello World!')]);

/***/ }
/******/ ]);