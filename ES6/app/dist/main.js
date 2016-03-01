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
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	module.exports = __webpack_require__(9);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	console.log('01. Assignment Destructuring');

	var pony = { foo: 'foo from pony' };
	var foo = pony.foo;
	var baz = pony.foo;

	console.log(foo);
	console.log(baz);

	var _test2$key = { test2: 'asd', key: 'key_property' };
	var _test2$key$test = _test2$key.test;
	var test = _test2$key$test === undefined ? 'default value' : _test2$key$test;
	var test2 = _test2$key.test2;
	var test3 = _test2$key.key;

	console.log(test);
	console.log(test2);
	console.log(test3);

	var _ref = [0, 1, 2];
	var a = _ref[0];
	var b = _ref[2];
	var _ref2 = [b, a];
	a = _ref2[0];
	b = _ref2[1];

	console.log(a);
	console.log(b);

	console.log('---------------------------');
	console.log();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	console.log('02. Spread Operator, Rest Parameters');

	function foo(first, second) {
	    console.log(first);
	    console.log(second);

	    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        rest[_key - 2] = arguments[_key];
	    }

	    console.log(rest);
	}

	foo(1, 2, 'asd', false);
	foo.apply(undefined, [1, 2, 'asd', false, {}]);

	console.log([1, 2].concat([3, 4, 5], [6, 7]));

	console.log('---------------------------');
	console.log();

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	console.log('03. Arrow functions');

	var odds = [1, 3, 5, 7, 9, 11];

	var test1 = odds.map(function (v) {
	    return v + 1;
	});
	var test2 = odds.map(function (v, i) {
	    return v + i;
	});
	var test3 = odds.map(function (v) {
	    if (v % 3 === 0) {
	        return v;
	    }
	});

	console.log(test1);
	console.log(test2);
	console.log(test3);

	console.log('---------------------------');
	console.log();

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	console.log('04. Template strings');

	function foo() {
	    return Math.random() * 100;
	}

	var a = 45;
	var str1 = 'Example of template string.\nVariable a = ' + a + '.\nSimple JS expression 3 + 2 * a = ' + (3 + 2 * a) + '.\nFunction call result = ' + foo() + '.';

	console.log(str1);

	console.log('---------------------------');
	console.log();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var _object;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	console.log('05. Object Literals');

	var foo = 'foo variable';
	var prefix = '_';

	var object = (_object = {
	    foo: foo
	}, _defineProperty(_object, prefix + 'property', 'PropertyWithPrefix'), _defineProperty(_object, 'show', function show() {
	    console.log(this);
	}), _object);

	object.show();

	console.log('---------------------------');
	console.log();

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	console.log('06. Classes');

	var A = function () {
	    function A(v) {
	        _classCallCheck(this, A);

	        this.value = v;
	        A.count++;
	    }

	    _createClass(A, [{
	        key: 'getValue',
	        value: function getValue() {
	            return this.value;
	        }
	    }], [{
	        key: 'getCount',
	        value: function getCount() {
	            return A.count;
	        }
	    }]);

	    return A;
	}();

	A.count = 0;

	var B = function (_A) {
	    _inherits(B, _A);

	    function B(v, type) {
	        _classCallCheck(this, B);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(B).call(this, v));

	        _this.type = type;
	        return _this;
	    }

	    return B;
	}(A);

	var aObject = new A(44);
	console.log(aObject);
	console.log(aObject.getValue());
	console.log(A.getCount());
	var bObject = new B(13, 'basic');
	console.log(bObject);
	console.log(A.getCount());

	console.log('---------------------------');
	console.log();

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	console.log('07. Let, Const');

	function f() {
	    var x = 1;
	    console.log(x);
	    {
	        var _x = 2;
	        console.log(_x);
	        {
	            var _x2 = 3;
	            console.log(_x2);
	        }
	    }
	}

	f();

	console.log('---------------------------');
	console.log();

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var _object;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	console.log('08. Symbols');

	var symbol = Symbol('key');
	var globalSymbol = Symbol.for('key');

	console.log(typeof symbol === 'undefined' ? 'undefined' : _typeof(symbol));
	console.log(globalSymbol);
	console.log(Symbol.keyFor(globalSymbol));

	var object = (_object = {}, _defineProperty(_object, symbol, 'local'), _defineProperty(_object, globalSymbol, 'global'), _object);

	console.log(object);
	console.log(object['key']);
	console.log(object[symbol]);
	console.log(object[globalSymbol]);

	console.log('---------------------------');
	console.log();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	console.log('09. Iterators');

	var fibonacci = _defineProperty({}, Symbol.iterator, function () {
	    var pre = 0,
	        cur = 1;
	    return {
	        next: function next() {
	            var _ref = [cur, pre + cur];
	            pre = _ref[0];
	            cur = _ref[1];

	            return { done: false, value: cur };
	        }
	    };
	});

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = fibonacci[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var n = _step.value;

	        // truncate the sequence at 1000
	        if (n > 1000) break;
	        console.log(n);
	    }
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}

	console.log('---------------------------');
	console.log();

/***/ }
/******/ ]);