webpackHotUpdate_N_E("pages/episodes/[slug]",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/italo/\\xC1rea de Trabalho/cursos/nlw#5/podcasternext/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({}); //defini o tipo de dados que o contexto irá usar\n\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffle = _useState5[0],\n      setIsShuffle = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlayer() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function clearPlayerState() {\n    setEpisodeList([]);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function toggleShuffle() {\n    setIsShuffle(!isShuffle);\n  }\n\n  function setIsPlayerState(state) {\n    setIsPlaying(state);\n  }\n\n  var hasNext = isShuffle || currentEpisodeIndex + 1 < episodeList.length;\n  var hasPrevious = currentEpisodeIndex > 0;\n\n  function playNext() {\n    if (isShuffle) {\n      var nextEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      isPlaying: isPlaying,\n      togglePlayer: togglePlayer,\n      setIsPlayerState: setIsPlayerState,\n      playPrevious: playPrevious,\n      playNext: playNext,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop,\n      isLooping: isLooping,\n      isShuffle: isShuffle,\n      toggleShuffle: toggleShuffle\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"ihG1aQF2m8G4bxLCaBDr0Vg4XM0=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxlIiwic2V0SXNTaHVmZmxlIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXllciIsImNsZWFyUGxheWVyU3RhdGUiLCJ0b2dnbGVMb29wIiwidG9nZ2xlU2h1ZmZsZSIsInNldElzUGxheWVyU3RhdGUiLCJzdGF0ZSIsImhhc05leHQiLCJsZW5ndGgiLCJoYXNQcmV2aW91cyIsInBsYXlOZXh0IiwibmV4dEVwaXNvZGVJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYXlQcmV2aW91cyIsInVzZVBsYXllciIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUE4Qk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DLEMsQ0FBOEQ7O0FBRTlELFNBQVNDLHFCQUFULE9BRXdCO0FBQUE7O0FBQUEsTUFEN0JDLFFBQzZCLFFBRDdCQSxRQUM2Qjs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDdEJDLFdBRHNCO0FBQUEsTUFDVEMsY0FEUzs7QUFBQSxtQkFFeUJGLHNEQUFRLENBQUMsQ0FBRCxDQUZqQztBQUFBLE1BRXRCRyxtQkFGc0I7QUFBQSxNQUVEQyxzQkFGQzs7QUFBQSxtQkFHS0osc0RBQVEsQ0FBQyxL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bEI7O0lBQU1tQyxTIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGl0bGUgfSBmcm9tIFwibm9kZTpwcm9jZXNzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBFcGlzb2RlIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgbWVtYmVyczogc3RyaW5nO1xuICB0aHVtYm5haWw6IHN0cmluZztcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgdXJsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQbGF5ZXJDb250ZXh0RGF0YSB7XG4gIGVwaXNvZGVMaXN0OiBFcGlzb2RlW107XG4gIGN1cnJlbnRFcGlzb2RlSW5kZXg6IG51bWJlcjtcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xuICBpc0xvb3Bpbmc6IGJvb2xlYW47XG4gIGlzU2h1ZmZsZTogYm9vbGVhbjtcbiAgaGFzTmV4dDogYm9vbGVhbjtcbiAgaGFzUHJldmlvdXM6IGJvb2xlYW47XG4gIHBsYXk6IChlcGlzb2RlOiBFcGlzb2RlKSA9PiB2b2lkO1xuICBzZXRJc1BsYXllclN0YXRlOiAoc3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIHBsYXlMaXN0OiAobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBwbGF5UHJldmlvdXM6ICgpID0+IHZvaWQ7XG4gIHBsYXlOZXh0OiAoKSA9PiB2b2lkO1xuICB0b2dnbGVQbGF5ZXI6ICgpID0+IHZvaWQ7XG4gIHRvZ2dsZVNodWZmbGU6ICgpID0+IHZvaWQ7XG4gIHRvZ2dsZUxvb3A6ICgpID0+IHZvaWQ7XG59XG5pbnRlcmZhY2UgcGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuZXhwb3J0IGNvbnN0IFBsYXllckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFBsYXllckNvbnRleHREYXRhKTsgLy9kZWZpbmkgbyB0aXBvIGRlIGRhZG9zIHF1ZSBvIGNvbnRleHRvIGlyw6EgdXNhclxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWVyQ29udGV4dFByb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG59OiBwbGF5ZXJDb250ZXh0UHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbZXBpc29kZUxpc3QsIHNldEVwaXNvZGVMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2N1cnJlbnRFcGlzb2RlSW5kZXgsIHNldEN1cnJlbnRFcGlzb2RlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvb3BpbmcsIHNldElzTG9vcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1NodWZmbGUsIHNldElzU2h1ZmZsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gcGxheShlcGlzb2RlOiBFcGlzb2RlKSB7XG4gICAgc2V0RXBpc29kZUxpc3QoW2VwaXNvZGVdKTtcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgfVxuICBmdW5jdGlvbiBwbGF5TGlzdChsaXN0OiBFcGlzb2RlW10sIGluZGV4OiBudW1iZXIpIHtcbiAgICBzZXRFcGlzb2RlTGlzdChsaXN0KTtcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KGluZGV4KTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQbGF5ZXIoKSB7XG4gICAgc2V0SXNQbGF5aW5nKCFpc1BsYXlpbmcpO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyUGxheWVyU3RhdGUoKSB7XG4gICAgc2V0RXBpc29kZUxpc3QoW10pO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUxvb3AoKSB7XG4gICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU2h1ZmZsZSgpIHtcbiAgICBzZXRJc1NodWZmbGUoIWlzU2h1ZmZsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJc1BsYXllclN0YXRlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgc2V0SXNQbGF5aW5nKHN0YXRlKTtcbiAgfVxuICBjb25zdCBoYXNOZXh0ID0gaXNTaHVmZmxlIHx8IGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxIDwgZXBpc29kZUxpc3QubGVuZ3RoO1xuICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xuXG4gIGZ1bmN0aW9uIHBsYXlOZXh0KCkge1xuICAgIGlmIChpc1NodWZmbGUpIHtcbiAgICAgIGNvbnN0IG5leHRFcGlzb2RlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcGlzb2RlTGlzdC5sZW5ndGgpO1xuXG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRFcGlzb2RlSW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoaGFzTmV4dCkge1xuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCkge1xuICAgIGlmIChoYXNQcmV2aW91cykge1xuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZXBpc29kZUxpc3QsXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gICAgICAgIHBsYXksXG4gICAgICAgIHBsYXlMaXN0LFxuICAgICAgICBpc1BsYXlpbmcsXG4gICAgICAgIHRvZ2dsZVBsYXllcixcbiAgICAgICAgc2V0SXNQbGF5ZXJTdGF0ZSxcbiAgICAgICAgcGxheVByZXZpb3VzLFxuICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgaGFzUHJldmlvdXMsXG4gICAgICAgIHRvZ2dsZUxvb3AsXG4gICAgICAgIGlzTG9vcGluZyxcbiAgICAgICAgaXNTaHVmZmxlLFxuICAgICAgICB0b2dnbGVTaHVmZmxlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})