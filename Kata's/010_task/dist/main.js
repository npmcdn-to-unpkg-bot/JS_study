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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function swap(str, i) {
	    return str.substr(0, i) + str.charAt(i + 1) + str.charAt(i) + str.substr(i + 2);
	}

	var Node = function () {
	    function Node(value) {
	        _classCallCheck(this, Node);

	        var _parent = null;
	        var _children = [];

	        this.value = value;

	        this.setParent = function (parent) {
	            return _parent = parent;
	        };
	        this.getParent = function () {
	            return _parent;
	        };
	        this.addChild = function (child) {
	            return _children.push(child);
	        };
	        this.removeChild = function (index) {
	            return _children.splice(index, 1);
	        };
	        this.setChildren = function (children) {
	            return _children = children;
	        };
	        this.getChildren = function () {
	            return _children;
	        };
	        this.getFirstChild = function () {
	            return _children[0];
	        };
	        this.getChildAfter = function (child) {
	            var index = _children.indexOf(child);
	            return index === -1 ? null : _children[index + 1];
	        };
	    }

	    _createClass(Node, [{
	        key: 'getRoot',
	        value: function getRoot() {
	            var currentNode = this;
	            while (currentNode.parent) {
	                currentNode = currentNode.parent;
	            }
	            return currentNode;
	        }
	    }, {
	        key: 'generateChildren',
	        value: function generateChildren() {
	            var _this = this;

	            var i = 0,
	                len = this.value.length,
	                children = [];
	            while (i < len - 1) {
	                if (this.value[i] != this.value[i + 1]) {
	                    children.push(new Node(swap(this.value, i)));
	                }
	                i++;
	            }
	            children.forEach(function (child) {
	                return child.setParent(_this);
	            });
	            this.setChildren(children);
	        }
	    }, {
	        key: 'getNextNode',
	        value: function getNextNode() {
	            var parent = this.getParent();
	            if (parent && parent.getChildAfter(this)) {
	                return parent.getChildAfter(this);
	            }
	            if (parent && parent.getFirstChild()) {
	                var currentNode = parent.getFirstChild();
	                if (currentNode.getChildren().length) {}
	            }
	            if (this.getChildren()) {}
	            if (parent.getParent()) {
	                return parent.getNextNode();
	            }
	            return null;
	        }
	    }]);

	    return Node;
	}();

	function permutations(string) {
	    var cache = {};
	    var root = new Node(string),
	        currentNode = root;
	    cache[string] = true;

	    while (currentNode) {
	        currentNode.generateChildren();
	        var children = currentNode.getChildren();
	        children.forEach(function (child, index) {
	            if (cache[child.value]) {
	                currentNode.removeChild(index);
	            } else {
	                cache[child.value] = true;
	            }
	        });
	        currentNode = currentNode.getNextNode();
	        // let parent = currentNode.getParent();
	        // if(!parent){
	        //     currentNode = currentNode.getFirstChild();
	        //     continue;
	        // }
	        // if(parent && parent.getChildAfter(currentNode)){
	        //     currentNode = parent.getChildAfter(currentNode);
	        //     continue;
	        // }
	        // if(parent && !parent.getChildAfter(currentNode)){
	        //     // currentNode = parent.getFirstChild();
	        //     // continue;
	        // }
	        // currentNode = false;
	    }
	    debugger;
	    console.log(root);
	    console.log(root.getChildren());
	}

	permutations('abcd');

/***/ }
/******/ ]);