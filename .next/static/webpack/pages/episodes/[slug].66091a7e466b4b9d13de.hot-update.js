webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/pages/episodes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/episodes/[slug].tsx ***!
  \***************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Episode; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./episode.module.scss */ \"./src/pages/episodes/episode.module.scss\");\n/* harmony import */ var _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_episode_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/italo/\\xC1rea de Trabalho/cursos/nlw#5/podcasternext/src/pages/episodes/[slug].tsx\";\n\n\nvar __N_SSG = true;\nfunction Episode(_ref) {\n  var episode = _ref.episode;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.episode,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _episode_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.thumbnailContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/arrow-left.svg\",\n          alt: \"Voltar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        width: 700,\n        height: 160,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/arrow-left.svg\",\n          alt: \"Voltar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n_c = Episode;\n\nvar _c;\n\n$RefreshReg$(_c, \"Episode\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2VwaXNvZGVzL1tzbHVnXS50c3g/ZjgyMSJdLCJuYW1lcyI6WyJFcGlzb2RlIiwiZXBpc29kZSIsInN0eWxlcyIsInRodW1ibmFpbENvbnRhaW5lciIsInRodW1ibmFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFNQTtBQUVBOztBQWlCZSxTQUFTQSxPQUFULE9BQTRDO0FBQUEsTUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUN6RCxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0QsT0FBdkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUMsMkRBQU0sQ0FBQ0Msa0JBQXZCO0FBQUEsOEJBQ0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFDLGlCQUFUO0FBQTJCLGFBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUUscUVBQUMsaURBQUQ7QUFDRSxhQUFLLEVBQUUsR0FEVDtBQUVFLGNBQU0sRUFBRSxHQUZWO0FBR0UsV0FBRyxFQUFFRixPQUFPLENBQUNHLFNBSGY7QUFJRSxpQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBV0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFDLGlCQUFUO0FBQTJCLGFBQUcsRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDtLQXBCdUJKLE8iLCJmaWxlIjoiLi9zcmMvcGFnZXMvZXBpc29kZXMvW3NsdWddLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1BhdGhzLCBHZXRTdGF0aWNQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHB0QlIgZnJvbSBcImRhdGUtZm5zL2xvY2FsZS9wdC1CUlwiO1xuaW1wb3J0IHsgY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxzL0NvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZ1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZXBpc29kZS5tb2R1bGUuc2Nzc1wiO1xuaW50ZXJmYWNlIEVwaXNvZGUge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIHRodW1ibmFpbDogc3RyaW5nO1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkdXJhdGlvbkFzU3RyaW5nOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBwdWJsaXNoZWRBdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRXBpc29kZVByb3BzIHtcbiAgZXBpc29kZTogRXBpc29kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXBpc29kZSh7IGVwaXNvZGUgfTogRXBpc29kZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcGlzb2RlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGh1bWJuYWlsQ29udGFpbmVyfT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJWb2x0YXJcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgd2lkdGg9ezcwMH1cbiAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICBzcmM9e2VwaXNvZGUudGh1bWJuYWlsfVxuICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hcnJvdy1sZWZ0LnN2Z1wiIGFsdD1cIlZvbHRhclwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRoczogR2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IFtdLFxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IGN0eC5wYXJhbXM7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChgL2VwaXNvZGVzLyR7c2x1Z31gKTtcblxuICBjb25zdCBlcGlzb2RlID0ge1xuICAgIGlkOiBkYXRhLmlkLFxuICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgIHRodW1ibmFpbDogZGF0YS50aHVtYm5haWwsXG4gICAgbWVtYmVyczogZGF0YS5tZW1iZXJzLFxuICAgIHB1Ymxpc2hlZEF0OiBmb3JtYXQocGFyc2VJU08oZGF0YS5wdWJsaXNoZWRfYXQpLCBcImQgTU1NIHl5XCIsIHtcbiAgICAgIGxvY2FsZTogcHRCUixcbiAgICB9KSxcbiAgICBkdXJhdGlvbjogTnVtYmVyKGRhdGEuZmlsZS5kdXJhdGlvbiksXG4gICAgZHVyYXRpb25Bc1N0cmluZzogY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE51bWJlcihkYXRhLmZpbGUuZHVyYXRpb24pKSxcbiAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICB1cmw6IGRhdGEuZmlsZS51cmwsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBlcGlzb2RlIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0LCAvLyAyNCBob3Vyc1xuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/episodes/[slug].tsx\n");

/***/ })

})