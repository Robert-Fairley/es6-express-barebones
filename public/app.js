/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/components/Counter.js":
/*!******************************************!*\
  !*** ./src/client/components/Counter.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Component2 = __webpack_require__(/*! ./primitives/Component */ \"./src/client/components/primitives/Component.js\");\n\nvar _Component3 = _interopRequireDefault(_Component2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * @class Counter\n * @classdesc A basic counter to demonstrate front end javascript\n */\nvar Counter = function (_Component) {\n    _inherits(Counter, _Component);\n\n    /**\n     * @constructor\n     * @param {object} props Properties object. Contains a default name. Override for different greeting. \n     */\n    function Counter() {\n        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'World' };\n\n        _classCallCheck(this, Counter);\n\n        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));\n\n        _this.hello = 'Hello, ' + props.name + '!';\n        _this.state = { count: 0 };\n        return _this;\n    }\n\n    /**\n     * @method increasecount\n     * @desc Increase the counter by one\n     * @param {Event} event \n     * @param {HTMLElement} _count \n     */\n\n\n    _createClass(Counter, [{\n        key: 'increaseCount',\n        value: function increaseCount(event, _count) {\n            this.state.count += 1;\n            _count.innerText = this.state.count;\n        }\n\n        /**\n         * @method decreaseCount\n         * @desc Decrease the counter by one\n         * @param {Event} event \n         * @param {HTMLElement} _count \n         */\n\n    }, {\n        key: 'decreaseCount',\n        value: function decreaseCount(event, _count) {\n            this.state.count -= 1;\n            _count.innerText = this.state.count;\n        }\n\n        /**\n         * @method render\n         * @desc Mount the component to the provided container, or falling back onto a default\n         * @param {HTMLElement} _componentContainer \n         */\n\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var _componentContainer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('#root');\n\n            var container = document.createElement('div');\n            var count = document.createElement('div');\n            var controls = document.createElement('div');\n            var message = document.createElement('div');\n            var btnUp = document.createElement('button');\n            var btnDn = document.createElement('button');\n\n            /** Set up **/\n            container.classList.add('counter');\n            count.classList.add('count');\n            controls.classList.add('controls');\n            message.classList.add('message');\n\n            btnUp.innerText = '++';\n            btnDn.innerText = '--';\n            message.innerText = this.hello;\n            count.innerText = this.state.count;\n\n            /** Set up actions */\n            btnUp.addEventListener('click', function (e) {\n                return _this2.increaseCount(e, count);\n            });\n            btnDn.addEventListener('click', function (e) {\n                return _this2.decreaseCount(e, count);\n            });\n\n            /** Assemble Elements */\n            controls.appendChild(btnUp);\n            controls.appendChild(btnDn);\n\n            container.appendChild(message);\n            container.appendChild(count);\n            container.appendChild(controls);\n\n            /** Mount the app to the component container */\n            _componentContainer.appendChild(container);\n        }\n    }]);\n\n    return Counter;\n}(_Component3.default);\n\nexports.default = Counter;\n\n//# sourceURL=webpack:///./src/client/components/Counter.js?");

/***/ }),

/***/ "./src/client/components/primitives/Component.js":
/*!*******************************************************!*\
  !*** ./src/client/components/primitives/Component.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * @class Component\n * @classdesc Primitive component containing universal component methods.\n */\nvar Component = function () {\n  /**\n   * @constructor\n   * @desc Provides a default name, otherwise applies the passed name to a class-wide variable\n   * @param {object} props \n   */\n  function Component() {\n    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'Unnamed Component' };\n\n    _classCallCheck(this, Component);\n\n    this.name = props.name;\n  }\n\n  /**\n   * @method getName\n   * @static\n   * @desc Get the name of the component\n   * @returns {string} this.name\n   */\n\n\n  _createClass(Component, null, [{\n    key: 'getName',\n    value: function getName() {\n      return this.name;\n    }\n  }]);\n\n  return Component;\n}();\n\nexports.default = Component;\n\n//# sourceURL=webpack:///./src/client/components/primitives/Component.js?");

/***/ }),

/***/ "./src/client/config/index.js":
/*!************************************!*\
  !*** ./src/client/config/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\n * @constant Config\n * @desc A collection of application defaults or global variables and constants\n * \n * @property {HTMLElement} APP_ROOT The root element of the application where any sub-components will be mounted\n */\nvar Config = {\n  APP_ROOT: document.querySelector('#root')\n};\n\nexports.default = Config;\n\n//# sourceURL=webpack:///./src/client/config/index.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/client/config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _Counter = __webpack_require__(/*! ./components/Counter */ \"./src/client/components/Counter.js\");\n\nvar _Counter2 = _interopRequireDefault(_Counter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/** Instantiate the counter component */\nvar counter = new _Counter2.default({ name: 'Counter' });\n\n/** Mount the component to the page */\ncounter.render(_config2.default.APP_ROOT);\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ })

/******/ });