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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Ex. 01
	 */
	//A program that prints a copy of its
	(function a() {
	    console.log('(' + a + ')();');
	})();

	/**
	 * Ex. 02
	 */
	//A function that records calls to a spied function (ES 5)
	function functionSpy(func) {
	    var proxyFunc = function proxyFunc() {
	        proxyFunc._callCount += 1;
	        proxyFunc.callsHistory.push(arguments);
	        return func.apply(null, arguments);
	    };

	    Object.defineProperty(proxyFunc, '_callCount', { value: 0, writable: true });
	    Object.defineProperty(proxyFunc, 'callsHistory', { value: [], writable: true });
	    return proxyFunc;
	}
	function getMax(a, b, c) {
	    return Math.max(a, b, c);
	}

	getMax = functionSpy(getMax);
	console.log('First call parameters:', getMax.callsHistory[0]); //First call parameters: undefined
	getMax(4, 2, 7);
	console.log('First call parameters:', getMax.callsHistory[0]); //First call parameters: [4,2,7]

	/**
	 * Ex. 03
	 */
	//A usage of Proxy API (ES 6)
	var noSuchPropertyze = function noSuchPropertyze(obj) {
	    var handler = {
	        get: function get(target, name, receiver) {
	            if (name in target) return target[name];else throw new Error('Not found: ' + name);
	        }
	    };
	    return new Proxy(obj, handler);
	};
	var myObj = {
	    a: 1,
	    b: 'nice'
	};

	myObj = noSuchPropertyze(myObj);
	console.log(myObj.b); // nice
	//console.log(myObj.nonExistingProperty);     // Error

	/**
	 * Ex. 04
	 */
	//A usage of Proxy API (ES 6)
	var to = function closure() {
	    var functionsProvider = {
	        double: function double(n) {
	            return n * 2;
	        },
	        pow: function pow(n) {
	            return n * n;
	        }
	    };
	    return function toImplementation(value) {
	        var pipe = [];
	        var handler = {
	            get: function get(target, fnName, receiver) {
	                if (fnName in target) {
	                    pipe.push(target[fnName]);
	                    return receiver;
	                }
	                if (fnName === 'get') {
	                    return pipe.reduce(function (val, fn) {
	                        return fn(val);
	                    }, value);
	                }
	                throw Error('Method: ' + fnName + ' is not supported yet.');
	            }
	        };
	        return new Proxy(functionsProvider, handler);
	    };
	}();

	console.log(to(3).double.pow.get); //36
	to().triple = function (n) {
	    return n * 3;
	};
	console.log(to(4).triple.get); //12

/***/ },
/* 2 */
/***/ function(module, exports) {

	throw new Error("The node API for `babel` has been moved to `babel-core`.");


/***/ }
/******/ ]);