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

	/**
	 *   -----------------
	 * 8 | | | | | | | | |
	 *   -----------------
	 * 7 | | | | | | | | |
	 *   -----------------
	 * 6 | | | | |x| |x| |
	 *   -----------------
	 * 5 | | | |x| | | |x|
	 *   -----------------
	 * 4 | | | | | |K| | |
	 *   -----------------
	 * 3 | | | |x| | | |x|
	 *   -----------------
	 * 2 | | | | |x| |x| |
	 *   -----------------
	 * 1 | | | | | | | | |
	 *   -----------------
	 *    1 2 3 4 5 6 7 8
	 */

	function canReach(from, to, movements) {
	    var squares = knightEngine(from, movements);
	    return squares.some(function (sq) {
	        return sq[0] === to[0] && sq[1] === to[1];
	    });
	}

	function moveKnight(from) {
	    var result = [];
	    if (from[0] + 2 <= 8) {
	        from[1] + 1 <= 8 && result.push([from[0] + 2, from[1] + 1]);
	        from[1] - 1 >= 1 && result.push([from[0] + 2, from[1] - 1]);
	    }
	    if (from[0] + 1 <= 8) {
	        from[1] + 2 <= 8 && result.push([from[0] + 1, from[1] + 2]);
	        from[1] - 2 >= 1 && result.push([from[0] + 1, from[1] - 2]);
	    }
	    if (from[0] - 1 <= 8) {
	        from[1] + 2 <= 8 && result.push([from[0] - 1, from[1] + 2]);
	        from[1] - 2 >= 1 && result.push([from[0] - 1, from[1] - 2]);
	    }
	    if (from[0] - 2 <= 8) {
	        from[1] + 1 <= 8 && result.push([from[0] - 2, from[1] + 1]);
	        from[1] - 1 >= 1 && result.push([from[0] - 2, from[1] - 1]);
	    }
	    return result;
	}

	function moveKnightRandom(from) {
	    var squares = moveKnight(from);
	    return squares[Math.floor(Math.random() * squares.length)];
	}

	function moveKnightFromArray(fromPositions) {
	    return fromPositions.reduce(function (prev, from) {
	        return prev.concat(moveKnight(from));
	    }, []);
	}

	function compose() {
	    for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
	        functions[_key] = arguments[_key];
	    }

	    return function (value) {
	        return functions.reduceRight(function (prev, fn) {
	            return fn(prev);
	        }, value);
	    };
	}

	function bind(f) {
	    return function (values) {
	        return values.reduce(function (prev, v) {
	            return prev.concat(f(v));
	        }, []);
	    };
	}

	function unit(value) {
	    return [value];
	}

	function knightEngine(from, movements) {
	    var currentMove = unit;
	    for (var i = 0; i < movements; i++) {
	        currentMove = compose(bind(moveKnight), currentMove);
	    }
	    return currentMove(from);
	}

	console.log(knightEngine([6, 2], 1));
	console.log(knightEngine([6, 2], 2));
	console.log(knightEngine([6, 2], 3));

/***/ }
/******/ ]);