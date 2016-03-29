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

	function order(words) {
	    if (!words) {
	        return '';
	    }
	    var regexp = /[0-9]/;
	    return words.split(' ').sort(function (a, b) {
	        return a.match(regexp)[0] > b.match(regexp)[0];
	    }).join(' ');
	}

	Test.run([Test.expect(order('is2 Thi1s T4est 3a')).toEqual('Thi1s is2 3a T4est'), Test.expect(order('4of Fo1r pe6ople g3ood th5e the2')).toEqual('Fo1r the2 g3ood 4of th5e pe6ople'), Test.expect(order('')).toEqual('')]);

/***/ }
/******/ ]);