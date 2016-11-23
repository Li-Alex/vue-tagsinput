(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _eventBus = new _vue2.default();
	
	module.exports = __webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(3)
	
	/* script */
	__vue_exports__ = __webpack_require__(7)
	
	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-06243b76"
	
	module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-06243b76&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-06243b76&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tags-input[data-v-06243b76] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.3);\r\n    font-size: 0.75rem;\r\n    padding: 0.1rem 0\n}\n.placeholder[data-v-06243b76] {\r\n    display: inline-block;\r\n    color: #A9A9A9;\r\n    line-height: 2em;\r\n    white-space: nowrap;\n}\r\n", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _templateObject = _taggedTemplateLiteral(['insert'], ['insert']),
	    _templateObject2 = _taggedTemplateLiteral(['activeOther'], ['activeOther']),
	    _templateObject3 = _taggedTemplateLiteral(['active'], ['active']),
	    _templateObject4 = _taggedTemplateLiteral(['remove'], ['remove']);
	
	var _lib = __webpack_require__(8);
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        tags: {
	            type: Array,
	            required: true
	        },
	        placeholder: { type: String },
	        klass: { type: Object, default: function _default() {
	                return _lib.klass;
	            } },
	        insert: { type: Function, default: function _default(text) {
	                return text;
	            } },
	        render: { type: Function, default: function _default(item) {
	                return item;
	            } },
	        readOnly: { type: Function, default: function _default(item) {
	                return false;
	            } },
	        trackBy: { type: String, default: 'index' },
	        validator: [String, Function]
	    },
	    computed: {
	        length: function length() {
	            return this.tags.length;
	        }
	    },
	    mounted: function mounted() {
	        var _this = this;
	
	        debugger;
	        _eventBus.$on([(0, _lib._E)(_templateObject)], function (index, text) {
	            var tag = _this.insert(text);
	            tag && !_this.dedupe(tag) && _this.tags.splice(index, 0, tag);
	        });
	        _eventBus.$on([(0, _lib._E)(_templateObject2)], function (index) {
	            index >= 0 && index <= _this.length && _this.$emit((0, _lib._E)(_templateObject3), index);
	        });
	        _eventBus.$on([(0, _lib._E)(_templateObject4)], 'removeTag');
	    },
	
	    events: {
	        // [_E`insert`](index, text) {
	
	        // },
	        // [_E`activeOther`](index) {
	
	        // },
	        // [_E`remove`]: 'removeTag'
	    },
	    methods: {
	        removeTag: function removeTag(index) {
	            if (index > -1) {
	                var canRM = !this.readOnly(this.tags[index]);
	                canRM && this.tags.splice(index, 1);
	            }
	        },
	        inputLast: function inputLast() {
	            _eventBus.$emit((0, _lib._E)(_templateObject3), this.length);
	        },
	        dedupe: function dedupe(tag) {
	            var _this2 = this;
	
	            if (this.trackBy === 'index') return this.tags.includes(tag);else {
	                var _ret = function () {
	                    var field = tag[_this2.trackBy];
	                    return {
	                        v: _this2.tags.some(function (item) {
	                            return item[_this2.trackBy] === field;
	                        })
	                    };
	                }();
	
	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	        },
	        getText: function getText(item) {
	            return this.render(item);
	        },
	        getRemoveHandle: function getRemoveHandle(item, index) {
	            return this.readOnly(item) ? null : this.removeTag.bind(this, index);
	        },
	        validate: function validate(item) {
	            var _validator = this.validator,
	                validator = _validator === undefined ? function () {
	                return true;
	            } : _validator;
	
	            return typeof validator === 'function' ? validator(item) : new RegExp(validator.toString(), 'g').test(this.render(item));
	        }
	    },
	    components: {
	        tag: __webpack_require__(9),
	        typing: __webpack_require__(14)
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports._E = _E;
	exports.E = E;
	var KEY_CODE = exports.KEY_CODE = {
	    LEFT: 37,
	    RIGHT: 39,
	    TAB: 9,
	    BACKSPACE: 8
	};
	
	//inner event name parser
	function _E(str) {
	    for (var _len = arguments.length, vals = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        vals[_key - 1] = arguments[_key];
	    }
	
	    return '__' + E.apply(undefined, arguments) + '__';
	}
	
	//public event name parser
	function E(str) {
	    return str[0] + '.vue-tagsinput';
	}
	
	var klass = exports.klass = {
	    container: 'tags-input',
	    input: 'input',
	    gap: 'gap',
	    tag: 'tag',
	    placeholder: 'placeholder'
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(10)
	
	/* script */
	__vue_exports__ = __webpack_require__(12)
	
	/* template */
	var __vue_template__ = __webpack_require__(13)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1a0cb046"
	
	module.exports = __vue_exports__


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1a0cb046&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1a0cb046&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tag[data-v-1a0cb046] {\r\n    border: 1px solid #e0e0e0;\r\n    border-radius: 3px;\r\n    color: #858585;\r\n    font-weight: normal;\r\n    font-size: 1.1em;\r\n    padding: 0 0.5ch;\n}\n.tag[invalid][data-v-1a0cb046] {\r\n    border: 1px solid red;\n}\n.remove[data-v-1a0cb046] {\r\n    cursor: pointer;\n}\n.remove[data-v-1a0cb046]::after{\r\n    color: rgba(0, 0, 0, 0.6);\r\n    content: \"\\2A2F\";\r\n    padding-left: 1px;\n}\n.hl-click[data-v-1a0cb046]:hover:active {\r\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\r\n", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        text: {
	            type: String,
	            required: true
	        },
	        remove: {
	            type: Function
	        },
	        valid: { type: Boolean, default: true }
	    },
	    computed: {
	        klass: function klass() {
	            return this.$parent.klass;
	        }
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('span', {
	    class: _vm.klass.tag,
	    attrs: {
	      "invalid": !_vm.valid
	    }
	  }, ["\n    " + _vm._s(_vm.text) + "\n    ", (_vm.remove) ? _vm._h('span', {
	    staticClass: "remove hl-click",
	    on: {
	      "click": _vm.remove
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(15)
	
	/* script */
	__vue_exports__ = __webpack_require__(17)
	
	/* template */
	var __vue_template__ = __webpack_require__(18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1a7680fb"
	
	module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1a7680fb&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./typing.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1a7680fb&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./typing.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, "\ninput.input[data-v-1a7680fb] {\r\n    outline: none;\r\n    box-shadow: none;\r\n    border: none;\r\n    background-color: transparent;\r\n    font-family: monospace;\r\n    padding: 0 0.5ch;\r\n    line-height: 2em;\n}\n.gap[data-v-1a7680fb] {\n}\r\n", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['focus'], ['focus']),
	    _templateObject2 = _taggedTemplateLiteral(['active'], ['active']),
	    _templateObject3 = _taggedTemplateLiteral(['insert'], ['insert']),
	    _templateObject4 = _taggedTemplateLiteral(['blur'], ['blur']),
	    _templateObject5 = _taggedTemplateLiteral(['activeOther'], ['activeOther']),
	    _templateObject6 = _taggedTemplateLiteral(['remove'], ['remove']);
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _lib = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	    props: {
	        index: {
	            type: Number,
	            required: true
	        }
	    },
	    data: function data() {
	        return {
	            typing: false,
	            text: ''
	        };
	    },
	
	    computed: {
	        base: function base() {
	            return this.typing ? 2 : 0;
	        },
	        klass: function klass() {
	            return this.$parent.klass;
	        }
	    },
	    watch: {
	        typing: function typing(val) {
	            var _this = this;
	
	            val && _vue2.default.nextTick(function (_) {
	                var $el = _this.$refs.input;
	                $el.focus();
	                _eventBus.$emit((0, _lib.E)(_templateObject), $el);
	            });
	        }
	    },
	    mounted: function mounted() {
	        var _this2 = this;
	
	        _eventBus.$on([(0, _lib._E)(_templateObject2)], function (index) {
	            _this2.typing = index === _this2.index;
	        });
	    },
	
	    // events: {
	    //     [_E`active`](index) {
	    //         this.typing = index === this.index
	    //     }
	    // },
	    methods: {
	        preventNativeActive: function preventNativeActive(e) {
	            if (!this.typing) e.preventDefault();
	        },
	        begin: function begin() {
	            this.typing = true;
	        },
	        finish: function finish() {
	            var inactive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	            var result = this.text.trim();
	            if (result) {
	                _eventBus.$emit((0, _lib._E)(_templateObject3), this.index, result);
	                this.text = '';
	            }
	            if (inactive === true) {
	                this.typing = false;
	                _eventBus.$emit((0, _lib.E)(_templateObject4), this.$refs.input);
	            }
	        },
	        charLen: function charLen(str) {
	            var charNum = 0;
	            for (var i = 0; i < str.length; ++i) {
	                charNum += str.charCodeAt(i) > 127 ? 2 : 1;
	            }
	            return charNum;
	        },
	        keyPress: function keyPress(e) {
	            var $input = this.$refs.input;
	            var cursor = $input.selectionStart;
	            var valLen = $input.value.length;
	            var key = e.keyCode;
	            var native = false;
	
	            if (key === _lib.KEY_CODE.RIGHT && valLen === 0) {
	                _eventBus.$emit((0, _lib._E)(_templateObject5), this.index + 1);
	            } else if (key === _lib.KEY_CODE.LEFT && valLen === 0) {
	                _eventBus.$emit((0, _lib._E)(_templateObject5), this.index - 1);
	            } else if (key === _lib.KEY_CODE.BACKSPACE && cursor === 0) {
	                _eventBus.$emit((0, _lib._E)(_templateObject6), this.index - 1);
	            } else if (key === _lib.KEY_CODE.TAB) {
	                this.finish(false);
	            } else native = true;
	
	            !native && e.preventDefault();
	        }
	    }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('span', {
	    class: _vm.klass.gap,
	    on: {
	      "click": _vm.begin
	    }
	  }, [_vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.text),
	      expression: "text"
	    }],
	    class: _vm.klass.input,
	    style: ({
	      width: _vm.base + _vm.charLen(_vm.text) + 'ch'
	    }),
	    attrs: {
	      "type": "text",
	      "ref:input": ""
	    },
	    domProps: {
	      "value": _vm._s(_vm.text)
	    },
	    on: {
	      "mousedown": _vm.preventNativeActive,
	      "blur": function($event) {
	        _vm.finish(true)
	      },
	      "keydown": _vm.keyPress,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.text = $event.target.value
	      }
	    }
	  }), " ", (!_vm.typing) ? _vm._t("default") : _vm._e()])
	},staticRenderFns: []}

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    class: _vm.klass.container,
	    on: {
	      "mousedown": function($event) {
	        if ($event.target !== $event.currentTarget) { return; }
	        $event.preventDefault();
	      },
	      "click": function($event) {
	        if ($event.target !== $event.currentTarget) { return; }
	        _vm.inputLast($event)
	      }
	    }
	  }, [_vm._l((_vm.tags), function(item, index) {
	    return [_vm._h('typing', {
	      attrs: {
	        "index": index
	      }
	    }), " ", _vm._h('tag', {
	      attrs: {
	        "text": _vm.getText(item),
	        "remove": _vm.getRemoveHandle(item, index),
	        "valid": _vm.validate(item)
	      }
	    })]
	  }), " ", _vm._h('typing', {
	    attrs: {
	      "index": _vm.length
	    }
	  }, [(_vm.placeholder) ? _vm._h('span', {
	    class: _vm.klass.placeholder
	  }, [_vm._s(_vm.placeholder)]) : _vm._e()])])
	},staticRenderFns: []}

/***/ }
/******/ ])));
//# sourceMappingURL=vue-tagsinput.js.map