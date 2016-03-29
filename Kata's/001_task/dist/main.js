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

	function findOutlier(integers) {
	    if (!(integers && integers.length >= 3)) {
	        return null;
	    }
	    var temp = integers.slice(0, 3),
	        remainder,
	        parityOutlier;

	    if (isOdd(temp[0] + temp[1])) {
	        //First and Second elements in array has different parity
	        parityOutlier = isSameParity(temp[2], temp[0]) ? temp[1] : temp[0];
	    } else {
	        remainder = 1 - getRemainder(temp[0]);
	        integers.some(function (elem) {
	            if (getRemainder(elem) === remainder) {
	                parityOutlier = elem;
	                return true;
	            }
	            return false;
	        });
	    }

	    return parityOutlier;
	}

	function getRemainder(number) {
	    return Math.abs(number % 2);
	}
	function isOdd(number) {
	    return getRemainder(number) === 1;
	}
	function isEven(number) {
	    return getRemainder(number) === 0;
	}
	function isSameParity(a, b) {
	    return getRemainder(a) === getRemainder(b);
	}

	//findOutlier([0, 1, 2]);
	findOutlier([2, 6, 8, 10, 3]);

/***/ }
/******/ ]);