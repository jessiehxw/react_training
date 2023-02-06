/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ (() => {

eval("\n\nvar rootElement = document.getElementById(\"root\");\nvar root = ReactDOM.createRoot(rootElement);\nfunction App() {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h1\", null, \"hello\"), /*#__PURE__*/React.createElement(\"h1\", null, \"world\"), /*#__PURE__*/React.createElement(\"button\", null, \"button\"), /*#__PURE__*/React.createElement(Person, {\n    name: \"Jack\"\n  }), /*#__PURE__*/React.createElement(Person, {\n    name: \"Jack2\"\n  }));\n}\nfunction Person(_ref) {\n  var name = _ref.name;\n  return /*#__PURE__*/React.createElement(\"div\", null, name);\n}\nroot.render( /*#__PURE__*/React.createElement(App, null));\n\n// jsx syntax - javascript xml syntax\n\n//# sourceURL=webpack://at_day2_babel_web/./lib/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./lib/index.js"]();
/******/ 	
/******/ })()
;