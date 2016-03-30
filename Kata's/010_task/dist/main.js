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

	function swap(str, i, j) {
	    return str.substr(0, i) + str.charAt(j) + str.charAt(i) + str.substr(j + 1);
	}

	function permutations(string) {
	    // var items = string.split('').filter( (item, i, ar) => ar.indexOf(item) === i );
	    // var m = string.length, n = items.length;
	    //
	    // console.log(items);
	    var index = 0,
	        temp_str = '';
	    var length = string.length;
	    var isEnd = false;
	    var cache = {};

	    index = length - 2;
	    while (!isEnd) {
	        temp_str = swap(string, index, index + 1);
	        if (!cache[temp_str]) {
	            cache[temp_str] = true;
	            string = temp_str;
	            index = length - 2;
	        } else {
	            index--;
	            if (index == 0) {
	                isEnd = true;
	            }
	        }
	    }

	    console.log(cache);
	}

	permutations('aaabbb');

/***/ }
/******/ ]);