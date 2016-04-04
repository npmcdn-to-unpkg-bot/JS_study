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

	function VigenèreAutokeyCipher(key, abc) {
	    var _key = key,
	        _abc = abc,
	        _tempKey,
	        _position = 0,
	        init = function init() {
	        _tempKey = _key;
	        _position = 0;
	    },
	        doStep = function doStep(char, isEncode) {
	        var initIndex = _abc.indexOf(char);
	        var step = _abc.indexOf(_tempKey.charAt(_position));
	        if (initIndex === -1 || step === -1) {
	            return char;
	        }
	        _position++;
	        var newIndex = (_abc.length + initIndex + (isEncode ? step : -1 * step)) % _abc.length;
	        var newChar = _abc.charAt(newIndex);
	        _tempKey += isEncode ? char : newChar;
	        return newChar;
	    };

	    this.encode = function (str) {
	        init();
	        return str.split('').reduce(function (result, item) {
	            return result += doStep(item, true);
	        }, '');
	    };
	    this.decode = function (str) {
	        init();
	        return str.split('').reduce(function (result, item) {
	            return result += doStep(item, false);
	        }, '');
	    };
	}

	var key = 'password';
	var abc = 'abcdefghijklmnopqrstuvwxyz';

	var c = new VigenèreAutokeyCipher(key, abc);

	Test.run([Test.expect(c.encode('codewars')).toEqual('rovwsoiv'), Test.expect(c.decode('laxxhsj')).toEqual('waffles'), Test.expect(c.encode('aaaaaaaapasswordaaaaaaaa')).toEqual('passwordpasswordpassword'), Test.expect(c.decode('passwordpasswordpassword')).toEqual('aaaaaaaapasswordaaaaaaaa')]);

/***/ }
/******/ ]);