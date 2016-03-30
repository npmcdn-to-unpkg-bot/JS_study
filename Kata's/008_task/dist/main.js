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

	function sierpinski(n) {
	    if (n === 0) {
	        return 'L';
	    }
	    var strPart = sierpinski(n - 1);
	    return strPart + '\n' + strPart.split('\n').map(function (value) {
	        return value + Array(Math.pow(2, n) - value.length).join(' ') + ' ' + value;
	    }).join('\n');
	}

	Test.run([function () {
	    var level0 = 'L';
	    return [Test.expect(sierpinski(0)).toBe(level0)];
	}(), function () {
	    var level1 = ['L', 'L L'].join('\n');
	    return [Test.expect(sierpinski(1)).toBe(level1)];
	}(), function () {
	    var level2 = ['L', 'L L', 'L   L', 'L L L L'].join('\n');
	    return [Test.expect(sierpinski(2)).toBe(level2)];
	}(), function () {
	    var level3 = ['L', 'L L', 'L   L', 'L L L L', 'L       L', 'L L     L L', 'L   L   L   L', 'L L L L L L L L'].join('\n');
	    return [Test.expect(sierpinski(3)).toBe(level3)];
	}()].reduce(function (a, b) {
	    return a.concat(b);
	}));

/***/ }
/******/ ]);