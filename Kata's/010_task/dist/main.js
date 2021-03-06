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

	function permutations(string) {
	    if (string.length <= 1) {
	        return [string];
	    }
	    var result = [];
	    string.split('').forEach(function (char, index, array) {
	        var arrCopy = array.slice();
	        arrCopy.splice(index, 1);
	        result = result.concat(permutations(arrCopy.join('')).map(function (item) {
	            return char + item;
	        }));
	    });
	    return result.filter(function (item, pos, self) {
	        return self.indexOf(item) == pos;
	    });
	}

	Test.run([Test.expect(permutations('ab')).toEqual(['ab', 'ba']), Test.expect(permutations('abc')).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"])]);

/***/ }
/******/ ]);