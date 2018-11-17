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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size */ \"./src/size.js\");\n/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_size__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst sliders = document.querySelector('.vertical-measures');\nconst horizontals = document.querySelector('.horizontal-measures');\nconst size = document.querySelector('#get-size-btn');\n\nsliders.addEventListener('input', _slider__WEBPACK_IMPORTED_MODULE_1__[\"setMeasures\"]);\nhorizontals.addEventListener('input', _slider__WEBPACK_IMPORTED_MODULE_1__[\"setMeasures\"]);\nsize.addEventListener('click', _size__WEBPACK_IMPORTED_MODULE_2__[\"getSize\"]);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCB7c2V0TWVhc3VyZXN9IGZyb20gJy4vc2xpZGVyJztcbmltcG9ydCB7Z2V0U2l6ZX0gZnJvbSAnLi9zaXplJztcblxuY29uc3Qgc2xpZGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52ZXJ0aWNhbC1tZWFzdXJlcycpO1xuY29uc3QgaG9yaXpvbnRhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9yaXpvbnRhbC1tZWFzdXJlcycpO1xuY29uc3Qgc2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZXQtc2l6ZS1idG4nKTtcblxuc2xpZGVycy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHNldE1lYXN1cmVzKTtcbmhvcml6b250YWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2V0TWVhc3VyZXMpO1xuc2l6ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldFNpemUpO1xuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/size.js":
/*!*********************!*\
  !*** ./src/size.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const getSize = () => {\n  const res = [];\n  const arr = document.getElementsByClassName('slider-output');\n  const tbody = document.getElementById('results-table').getElementsByTagName('tbody')[0];\n  tbody.innerHTML = '';\n\n  for (const elem of arr) {\n    switchMeasures(elem, res); \n  }\n\n  for (const row of res) {\n    createRow(tbody, row.type, row.size);\n  }\n};\n\nconst getSizeValue = v => {\n  let res;\n\n  if (v >= 50 && v < 100) {\n    res = 'S';\n  } else if (v >= 100 && v < 150) {\n    res = 'M';\n  } else if (v >= 150 && v < 200) {\n    res = 'L';\n  } else if (v >= 200 && v <= 246) {\n    res = 'XL';\n  } else {\n    res = '';\n  }\n\n  return res;\n};\n\nconst switchMeasures = (elem, res) => {\n  const v = parseInt(elem.innerHTML);\n\n  switch (elem.id) {\n    case 'chest':\n      res.push({\n        type: 'Shirt',\n        size: getSizeValue(v)\n      });\n      break;\n\n    case 'waist':\n      res.push({\n        type: 'Shirt',\n        size: getSizeValue(v)\n      });\n      break;\n\n    case 'hip':\n      res.push({\n        type: 'Shirt',\n        size: getSizeValue(v)\n      });\n      break;\n\n    case 'height':\n      res.push({\n        type: 'Tuxedo',\n        size: getSizeValue(v)\n      });\n      break;\n\n    case 'sleeve':\n      res.push({\n        type: 'T-Shirt',\n        size: getSizeValue(v)\n      });\n      break;\n\n    case 'inseam':\n      res.push({\n        type: 'Trousers',\n        size: getSizeValue(v)\n      });\n  }\n};\n\nconst createRow = (table, type, size) => {\n  const row = table.insertRow(-1);\n  row.className = 'row';\n  const cell1 = row.insertCell(0);\n  const cell2 = row.insertCell(1);\n  cell1.className = 'type';\n  cell1.innerHTML = type;\n  cell2.innerHTML = size;\n};\n\nmodule.exports.getSize = getSize;\nmodule.exports.getSizeValue = getSizeValue;\nmodule.exports.switchMeasures = switchMeasures;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2l6ZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaXplLmpzP2ZmMGIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgcmVzID0gW107XG4gIGNvbnN0IGFyciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlci1vdXRwdXQnKTtcbiAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cy10YWJsZScpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0Ym9keScpWzBdO1xuICB0Ym9keS5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyKSB7XG4gICAgc3dpdGNoTWVhc3VyZXMoZWxlbSwgcmVzKTsgXG4gIH1cblxuICBmb3IgKGNvbnN0IHJvdyBvZiByZXMpIHtcbiAgICBjcmVhdGVSb3codGJvZHksIHJvdy50eXBlLCByb3cuc2l6ZSk7XG4gIH1cbn07XG5cbmNvbnN0IGdldFNpemVWYWx1ZSA9IHYgPT4ge1xuICBsZXQgcmVzO1xuXG4gIGlmICh2ID49IDUwICYmIHYgPCAxMDApIHtcbiAgICByZXMgPSAnUyc7XG4gIH0gZWxzZSBpZiAodiA+PSAxMDAgJiYgdiA8IDE1MCkge1xuICAgIHJlcyA9ICdNJztcbiAgfSBlbHNlIGlmICh2ID49IDE1MCAmJiB2IDwgMjAwKSB7XG4gICAgcmVzID0gJ0wnO1xuICB9IGVsc2UgaWYgKHYgPj0gMjAwICYmIHYgPD0gMjQ2KSB7XG4gICAgcmVzID0gJ1hMJztcbiAgfSBlbHNlIHtcbiAgICByZXMgPSAnJztcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBzd2l0Y2hNZWFzdXJlcyA9IChlbGVtLCByZXMpID0+IHtcbiAgY29uc3QgdiA9IHBhcnNlSW50KGVsZW0uaW5uZXJIVE1MKTtcblxuICBzd2l0Y2ggKGVsZW0uaWQpIHtcbiAgICBjYXNlICdjaGVzdCc6XG4gICAgICByZXMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdTaGlydCcsXG4gICAgICAgIHNpemU6IGdldFNpemVWYWx1ZSh2KVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3dhaXN0JzpcbiAgICAgIHJlcy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ1NoaXJ0JyxcbiAgICAgICAgc2l6ZTogZ2V0U2l6ZVZhbHVlKHYpXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaGlwJzpcbiAgICAgIHJlcy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ1NoaXJ0JyxcbiAgICAgICAgc2l6ZTogZ2V0U2l6ZVZhbHVlKHYpXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgIHJlcy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ1R1eGVkbycsXG4gICAgICAgIHNpemU6IGdldFNpemVWYWx1ZSh2KVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3NsZWV2ZSc6XG4gICAgICByZXMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdULVNoaXJ0JyxcbiAgICAgICAgc2l6ZTogZ2V0U2l6ZVZhbHVlKHYpXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaW5zZWFtJzpcbiAgICAgIHJlcy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ1Ryb3VzZXJzJyxcbiAgICAgICAgc2l6ZTogZ2V0U2l6ZVZhbHVlKHYpXG4gICAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlUm93ID0gKHRhYmxlLCB0eXBlLCBzaXplKSA9PiB7XG4gIGNvbnN0IHJvdyA9IHRhYmxlLmluc2VydFJvdygtMSk7XG4gIHJvdy5jbGFzc05hbWUgPSAncm93JztcbiAgY29uc3QgY2VsbDEgPSByb3cuaW5zZXJ0Q2VsbCgwKTtcbiAgY29uc3QgY2VsbDIgPSByb3cuaW5zZXJ0Q2VsbCgxKTtcbiAgY2VsbDEuY2xhc3NOYW1lID0gJ3R5cGUnO1xuICBjZWxsMS5pbm5lckhUTUwgPSB0eXBlO1xuICBjZWxsMi5pbm5lckhUTUwgPSBzaXplO1xufTtcblxubW9kdWxlLmV4cG9ydHMuZ2V0U2l6ZSA9IGdldFNpemU7XG5tb2R1bGUuZXhwb3J0cy5nZXRTaXplVmFsdWUgPSBnZXRTaXplVmFsdWU7XG5tb2R1bGUuZXhwb3J0cy5zd2l0Y2hNZWFzdXJlcyA9IHN3aXRjaE1lYXN1cmVzOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/size.js\n");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: setMeasures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMeasures\", function() { return setMeasures; });\nconst changeOutput = slider => {\n  const output = document.getElementById(slider.id.split('-')[0]);\n  output.innerHTML = slider.value + ' cm';\n};\n\nconst setMeasures = e => {\n  if (e.target !== e.currentTarget) {\n    const changedSlider = e.target;\n    changeOutput(changedSlider);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpZGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlci5qcz9hZGI4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoYW5nZU91dHB1dCA9IHNsaWRlciA9PiB7XG4gIGNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlci5pZC5zcGxpdCgnLScpWzBdKTtcbiAgb3V0cHV0LmlubmVySFRNTCA9IHNsaWRlci52YWx1ZSArICcgY20nO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldE1lYXN1cmVzID0gZSA9PiB7XG4gIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgY29uc3QgY2hhbmdlZFNsaWRlciA9IGUudGFyZ2V0O1xuICAgIGNoYW5nZU91dHB1dChjaGFuZ2VkU2xpZGVyKTtcbiAgfVxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slider.js\n");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/ZTVjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/index.scss\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });