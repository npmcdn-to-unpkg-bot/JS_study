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

	function titleCase(title, minorWords) {
	    var titleArr = title.toLowerCase().split(' '),
	        rulesArr = minorWords ? minorWords.toLowerCase().split(' ') : [];

	    if (titleArr.length === 0) {
	        return '';
	    }

	    return titleArr.map(function (word, index) {
	        return index === 0 || rulesArr.indexOf(word) < 0 ? capitalise(word) : word;
	    }).join(' ');
	}

	function capitalise(word) {
	    return word.charAt(0).toUpperCase() + word.slice(1);
	}

	Test.run([Test.expect(titleCase('')).toBe(''), Test.expect(titleCase('a clash of KINGS', 'a an the of')).toBe('A Clash of Kings'), Test.expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toBe('The Wind in the Willows'), Test.expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox')]);

/***/ }
/******/ ]);