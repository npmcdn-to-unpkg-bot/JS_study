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

	/**
	 * Number:
	 *      S...N   -> n = Number(...)      //n > 0
	 *      T...N   -> n = Number(...)      //n < 0
	 *      SN = TN -> n = 0
	 *      N       -> ERROR
	 *
	 *      ...     -> S == 0, T == 1
	 *
	 *      valid : parseInt(n)
	 */

	/**
	 * Label:
	 *      T...TS...S...N  -> l = Label(...)   //T...TS...S - any number of T and S
	 *
	 *      Labels must be unique.
	 *      l Command(Label l) = Command(Label l) l
	 */

	/**
	 * Stack Manipulation:
	 *      SS      {void}  (number)    -> push(number);
	 *      STS     {void}  (number)    ->
	 *      STN     {void}  (number)    ->
	 *      SNS     {void}  ( )         -> a = pop(); push(a); push(a);
	 *      SNT     {void}  ( )         -> a = pop(); b = pop(); push(a); push(b);
	 *      SNN     {void}  ( )         -> a = pop();
	 *
	 * Arithmetic:
	 *      TSSS    {void}  ( )         -> a = pop(); b = pop(); push(b+a);
	 *      TSST    {void}  ( )         -> a = pop(); b = pop(); push(b-a);
	 *      TSSN    {void}  ( )         -> a = pop(); b = pop(); push(b*a);
	 *      TSTS    {void}  ( )         -> a = pop(); b = pop(); push(Math.floor(b/a));     //a === 0 -> ERROR
	 *      TSTT    {void}  ( )         -> a = pop(); b = pop(); push(b%a);                 //a === 0 -> ERROR
	 *
	 * Heap Access:
	 *      TTS     {void}  ( )         -> a = pop(), b = pop(), HEAP[b] = a
	 *      TTT     {void}  ( )         -> a = pop(), push(HEAP[a])
	 *
	 * Input/Output:
	 *      TNSS    {char}  ( )         -> return pop()
	 *      TNST    {number}( )         -> return pop()
	 *      TNTS    {void}  ( )         -> a = readChar(), b = pop(), HEAP[b] = ASCII(a)
	 *      TNTT    {void}  ( )         -> a = readNumber(), b = pop(), HEAP[b] = a
	 *
	 * Flow Control:
	 *      NSS     {void}  (label)     ->
	 *      NST     {void}  (label)     ->
	 *      NSN     {void}  (label)     ->
	 *      NTS     {void}  (label)     ->
	 *      NTT     {void}  (label)     ->
	 *      NTN     {void}  ( )         ->
	 *      NNN     {void}  ( )         -> exit()
	 *
	 */

	Array.prototype.savePop = function () {
	    if (this.length === 0) {
	        throw new Error('Stack is empty');
	    }
	    return this.pop();
	};

	function getNumber(arr) {
	    var number, multiplier;
	    switch (arr[0]) {
	        case ' ':
	            multiplier = 1;break;
	        case '\t':
	            multiplier = -1;break;
	        case '\n':
	            throw new Error("Invalid Number");
	    }
	    number = parseInt(arr.slice(1, arr.indexOf('\n')).reduce(function (prev, value, index) {
	        return prev += value == ' ' ? '0' : '1';
	    }, '0'), 2);
	    if (isNaN(number)) {
	        throw new Error("Invalid Number");
	    }
	    number *= multiplier;
	    arr.splice(0, number === 0 ? 3 : Math.floor(Math.log(Math.abs(number)) / Math.log(2)) + 3);
	    return number;
	}

	var StackCtrl = {
	    // Push n onto the stack.
	    ' ': function _(state) {
	        state.stack.push(getNumber(state.arr));
	        return state;
	    },
	    // Duplicate the nth value from the top of the stack.
	    '\t ': function _(state) {
	        var n = getNumber(state.arr),
	            index = state.stack.length - n - 1;
	        if (n < 0 || n >= state.stack.length) {
	            throw new Error('Out of range');
	        }
	        state.stack.push(state.stack[index]);
	        return state;
	    },
	    // Discard the top n values below the top of the stack from the stack.
	    '\t\n': function _(state) {
	        var n = getNumber(state.arr),
	            top = state.stack.savePop();
	        if (n < 0 || n >= state.stack.length) {
	            state.stack = [top];
	        } else {
	            state.stack.splice(state.stack.length - n, state.stack.length);
	            state.stack.push(top);
	        }
	        return state;
	    },
	    // Duplicate the top value on the stack.
	    '\n ': function _(state) {
	        var a = state.stack.savePop();
	        state.stack.push(a);
	        state.stack.push(a);
	        return state;
	    },
	    // Swap the top two value on the stack.
	    '\n\t': function _(state) {
	        var a = state.stack.savePop(),
	            b = state.stack.savePop();
	        state.stack.push(a);
	        state.stack.push(b);
	        return state;
	    },
	    // Discard the top value on the stack.
	    '\n\n': function _(state) {
	        state.stack.savePop();
	        return state;
	    }
	};
	var MathCtrl = {
	    '  ': function _(state) {
	        var a = state.stack.savePop(),
	            b = state.stack.savePop();
	        state.stack.push(b + a);
	        return state;
	    },
	    ' \t': function _(state) {
	        var a = state.stack.savePop(),
	            b = state.stack.savePop();
	        state.stack.push(b - a);
	        return state;
	    },
	    ' \n': function _(state) {
	        var a = state.stack.savePop(),
	            b = state.stack.savePop();
	        state.stack.push(b * a);
	        return state;
	    },
	    '\t ': function _(state) {
	        var a = state.stack.savePop(),
	            b = state.stack.savePop();
	        if (a == 0) {
	            throw new Error('Arithmetic error');
	        }
	        state.stack.push(Math.floor(b / a));
	        return state;
	    },
	    '\t\t': function _(state) {
	        var a = state.stack.savePop(),
	            b = state.stack.savePop();
	        if (a == 0) {
	            throw new Error('Arithmetic error');
	        }
	        var remainder = b % a,
	            multiplier = a / Math.abs(a);
	        if (remainder * multiplier < 0) {
	            remainder += a;
	        }
	        state.stack.push(remainder);
	        return state;
	    }
	};
	var HeapCtrl = {
	    ' ': function _(state) {
	        var a = state.stack.savePop(),
	            b = state.stack.savePop();
	        state.heap[b] = a;
	        return state;
	    },
	    '\t': function _(state) {
	        var a = state.stack.savePop();
	        if (typeof state.heap[a] === 'undefined') {
	            throw new Error('Value does not exist');
	        }
	        state.stack.push(state.heap[a]);
	        return state;
	    }
	};
	var IOCtrl = {
	    '  ': function _(state) {
	        var value = state.stack.savePop();
	        state.output += String.fromCharCode(value);
	        return state;
	    },
	    ' \t': function _(state) {
	        var value = state.stack.savePop();
	        state.output += value;
	        return state;
	    },
	    '\t ': function _(state) {
	        var a = getNumber(state.arr);
	        var b = state.stack.savePop();
	        state.heap[b] = a;
	        return state;
	    },
	    '\t\t': function _(state) {
	        var a = getNumber(state.arr);
	        var b = state.stack.savePop();
	        state.heap[b] = a;
	        return state;
	    }
	};
	var FlowCtrl = {
	    ' ': function _(state, label) {},
	    ' \t': function _(state, label) {},
	    ' \n': function _(state, label) {},
	    '\t ': function _(state, label) {},
	    '\t\t': function _(state, label) {},
	    '\t\n': function _(state) {},
	    '\n\n': function _(state) {
	        return state;
	    }
	};

	var prefixes = {
	    ' ': StackCtrl,
	    '\t ': MathCtrl,
	    '\t\t': HeapCtrl,
	    '\t\n': IOCtrl,
	    '\n': FlowCtrl
	};

	var getCurrentCtrl = function getCurrentCtrl(arr) {
	    var index = 0,
	        key = arr[index];
	    while (!prefixes[key]) {
	        key += arr[++index];
	    }
	    return prefixes[arr.splice(0, index + 1).join('')];
	};
	var getCurrentMethod = function getCurrentMethod(arr, ctrl) {
	    var index = 0,
	        key = arr[index];
	    while (!ctrl[key]) {
	        key += arr[++index];
	    }
	    return ctrl[arr.splice(0, index + 1).join('')];
	};

	function whitespace(code, input) {
	    if (!code) {
	        throw new Error('Unclean termination');
	    }
	    var output = '',
	        stack = [],
	        heap = {};
	    var arr = code.split('').filter(function (value) {
	        return [' ', '\t', '\n'].indexOf(value) !== -1;
	    });
	    while (arr.length) {
	        var currentCtrl = getCurrentCtrl(arr);
	        var currentMethod = getCurrentMethod(arr, currentCtrl);
	        var result = currentMethod({ stack: stack, heap: heap, output: output, arr: arr });
	        stack = result.stack;
	        heap = result.heap;
	        output = result.output;
	        arr = result.arr;
	    }
	    return output;
	}

	Test.run([Test.expect(whitespace("   \t\n\t\n \t\n\n\n")).toEqual("1"), Test.expect(whitespace("   \t \n\t\n \t\n\n\n")).toEqual("2"), Test.expect(whitespace("   \t\t\n\t\n \t\n\n\n")).toEqual("3"), Test.expect(whitespace("    \n\t\n \t\n\n\n")).toEqual("0"), Test.expect(whitespace("   \t\n   \t \n   \t\t\n \t  \t \n\t\n \t\n\n\n")).toEqual("1"), Test.expect(whitespace("   \t\t\n   \t \n   \t\n   \t  \n   \t\t \n   \t \t\n   \t\t\t\n \n\t \t\n \t\t\n\t\n \t\t\n \t\t\n \t\t\n \t\n\n\n")).toEqual("5123")]);

/***/ }
/******/ ]);