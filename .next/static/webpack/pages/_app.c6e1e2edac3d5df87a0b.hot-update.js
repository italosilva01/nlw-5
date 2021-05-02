webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/PlayerContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/PlayerContext.tsx ***!
  \****************************************/
/*! exports provided: PlayerContext, PlayerContextProvider, usePlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContext\", function() { return PlayerContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerContextProvider\", function() { return PlayerContextProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usePlayer\", function() { return usePlayer; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/italo/\\xC1rea de Trabalho/cursos/nlw#5/podcasternext/src/contexts/PlayerContext.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\nvar PlayerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({}); //defini o tipo de dados que o contexto irá usar\n\nfunction PlayerContextProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      episodeList = _useState[0],\n      setEpisodeList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      currentEpisodeIndex = _useState2[0],\n      setCurrentEpisodeIndex = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isPlaying = _useState3[0],\n      setIsPlaying = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isLooping = _useState4[0],\n      setIsLooping = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isShuffle = _useState5[0],\n      setIsShuffle = _useState5[1];\n\n  function play(episode) {\n    setEpisodeList([episode]);\n    setCurrentEpisodeIndex(0);\n    setIsPlaying(true);\n  }\n\n  function playList(list, index) {\n    setEpisodeList(list);\n    setCurrentEpisodeIndex(index);\n    setIsPlaying(true);\n  }\n\n  function togglePlayer() {\n    setIsPlaying(!isPlaying);\n  }\n\n  function clearPlayerState() {\n    setEpisodeList([]);\n    setCurrentEpisodeIndex(0);\n  }\n\n  function toggleLoop() {\n    setIsLooping(!isLooping);\n  }\n\n  function toggleShuffle() {\n    setIsShuffle(!isShuffle);\n  }\n\n  function setIsPlayerState(state) {\n    setIsPlaying(state);\n  }\n\n  var hasNext = isShuffle || currentEpisodeIndex + 1 < episodeList.length;\n  var hasPrevious = currentEpisodeIndex > 0;\n\n  function playNext() {\n    if (isShuffle) {\n      var nextEpisodeIndex = Math.floor(Math.random() * episodeList.length);\n      setCurrentEpisodeIndex(nextEpisodeIndex);\n    } else if (hasNext) {\n      setCurrentEpisodeIndex(currentEpisodeIndex + 1);\n    }\n  }\n\n  function playPrevious() {\n    if (hasPrevious) {\n      setCurrentEpisodeIndex(currentEpisodeIndex - 1);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(PlayerContext.Provider, {\n    value: {\n      episodeList: episodeList,\n      currentEpisodeIndex: currentEpisodeIndex,\n      play: play,\n      playList: playList,\n      isPlaying: isPlaying,\n      togglePlayer: togglePlayer,\n      setIsPlayerState: setIsPlayerState,\n      playPrevious: playPrevious,\n      playNext: playNext,\n      hasNext: hasNext,\n      hasPrevious: hasPrevious,\n      toggleLoop: toggleLoop,\n      isLooping: isLooping,\n      isShuffle: isShuffle,\n      toggleShuffle: toggleShuffle,\n      clearPlayerState: clearPlayerState\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 5\n  }, this);\n}\n\n_s(PlayerContextProvider, \"ihG1aQF2m8G4bxLCaBDr0Vg4XM0=\");\n\n_c = PlayerContextProvider;\nvar usePlayer = function usePlayer() {\n  _s2();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(PlayerContext);\n};\n\n_s2(usePlayer, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PlayerContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1BsYXllckNvbnRleHQudHN4PzE3NzIiXSwibmFtZXMiOlsiUGxheWVyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQbGF5ZXJDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiZXBpc29kZUxpc3QiLCJzZXRFcGlzb2RlTGlzdCIsImN1cnJlbnRFcGlzb2RlSW5kZXgiLCJzZXRDdXJyZW50RXBpc29kZUluZGV4IiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwiaXNMb29waW5nIiwic2V0SXNMb29waW5nIiwiaXNTaHVmZmxlIiwic2V0SXNTaHVmZmxlIiwicGxheSIsImVwaXNvZGUiLCJwbGF5TGlzdCIsImxpc3QiLCJpbmRleCIsInRvZ2dsZVBsYXllciIsImNsZWFyUGxheWVyU3RhdGUiLCJ0b2dnbGVMb29wIiwidG9nZ2xlU2h1ZmZsZSIsInNldElzUGxheWVyU3RhdGUiLCJzdGF0ZSIsImhhc05leHQiLCJsZW5ndGgiLCJoYXNQcmV2aW91cyIsInBsYXlOZXh0IiwibmV4dEVwaXNvZGVJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInBsYXlQcmV2aW91cyIsInVzZVBsYXllciIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUE4Qk8sSUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQW5DLEMsQ0FBOEQ7O0FBRTlELFNBQVNDLHFCQUFULE9BRXdCO0FBQUE7O0FBQUEsTUFEN0JDLFFBQzZCLFFBRDdCQSxRQUM2Qjs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDdEJDLFdBRHNCO0FBQUEsTUFDVEMsY0FEUzs7QUFBQSxtQkFFeUJGLHNEQUFRLENBQUMsQ0FBRCxDQUZqQztBQUFBLE1BRXRCRyxtQkFGc0I7QUFBQSxNQUVEQyxzQkFGQzs7QUFBQSxtQkFHS0osc0RBQVEsQ0FBQyxL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LFNBQVk7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDcEMsYUFBRCxDQUFoQjtBQUFBLENBQWxCOztJQUFNbUMsUyIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9QbGF5ZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRpdGxlIH0gZnJvbSBcIm5vZGU6cHJvY2Vzc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRXBpc29kZSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1lbWJlcnM6IHN0cmluZztcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIHVybDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUGxheWVyQ29udGV4dERhdGEge1xuICBlcGlzb2RlTGlzdDogRXBpc29kZVtdO1xuICBjdXJyZW50RXBpc29kZUluZGV4OiBudW1iZXI7XG4gIGlzUGxheWluZzogYm9vbGVhbjtcbiAgaXNMb29waW5nOiBib29sZWFuO1xuICBpc1NodWZmbGU6IGJvb2xlYW47XG4gIGhhc05leHQ6IGJvb2xlYW47XG4gIGhhc1ByZXZpb3VzOiBib29sZWFuO1xuICBwbGF5OiAoZXBpc29kZTogRXBpc29kZSkgPT4gdm9pZDtcbiAgc2V0SXNQbGF5ZXJTdGF0ZTogKHN0YXRlOiBib29sZWFuKSA9PiB2b2lkO1xuICBwbGF5TGlzdDogKGxpc3Q6IEVwaXNvZGVbXSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgcGxheVByZXZpb3VzOiAoKSA9PiB2b2lkO1xuICBwbGF5TmV4dDogKCkgPT4gdm9pZDtcbiAgdG9nZ2xlUGxheWVyOiAoKSA9PiB2b2lkO1xuICB0b2dnbGVTaHVmZmxlOiAoKSA9PiB2b2lkO1xuICB0b2dnbGVMb29wOiAoKSA9PiB2b2lkO1xufVxuaW50ZXJmYWNlIHBsYXllckNvbnRleHRQcm92aWRlclByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cbmV4cG9ydCBjb25zdCBQbGF5ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQbGF5ZXJDb250ZXh0RGF0YSk7IC8vZGVmaW5pIG8gdGlwbyBkZSBkYWRvcyBxdWUgbyBjb250ZXh0byBpcsOhIHVzYXJcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllckNvbnRleHRQcm92aWRlcih7XG4gIGNoaWxkcmVuLFxufTogcGxheWVyQ29udGV4dFByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2VwaXNvZGVMaXN0LCBzZXRFcGlzb2RlTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjdXJyZW50RXBpc29kZUluZGV4LCBzZXRDdXJyZW50RXBpc29kZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNMb29waW5nLCBzZXRJc0xvb3BpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTaHVmZmxlLCBzZXRJc1NodWZmbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHBsYXkoZXBpc29kZTogRXBpc29kZSkge1xuICAgIHNldEVwaXNvZGVMaXN0KFtlcGlzb2RlXSk7XG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleCgwKTtcbiAgICBzZXRJc1BsYXlpbmcodHJ1ZSk7XG4gIH1cbiAgZnVuY3Rpb24gcGxheUxpc3QobGlzdDogRXBpc29kZVtdLCBpbmRleDogbnVtYmVyKSB7XG4gICAgc2V0RXBpc29kZUxpc3QobGlzdCk7XG4gICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChpbmRleCk7XG4gICAgc2V0SXNQbGF5aW5nKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUGxheWVyKCkge1xuICAgIHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhclBsYXllclN0YXRlKCkge1xuICAgIHNldEVwaXNvZGVMaXN0KFtdKTtcbiAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KDApO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUxvb3AoKSB7XG4gICAgc2V0SXNMb29waW5nKCFpc0xvb3BpbmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU2h1ZmZsZSgpIHtcbiAgICBzZXRJc1NodWZmbGUoIWlzU2h1ZmZsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJc1BsYXllclN0YXRlKHN0YXRlOiBib29sZWFuKSB7XG4gICAgc2V0SXNQbGF5aW5nKHN0YXRlKTtcbiAgfVxuICBjb25zdCBoYXNOZXh0ID0gaXNTaHVmZmxlIHx8IGN1cnJlbnRFcGlzb2RlSW5kZXggKyAxIDwgZXBpc29kZUxpc3QubGVuZ3RoO1xuICBjb25zdCBoYXNQcmV2aW91cyA9IGN1cnJlbnRFcGlzb2RlSW5kZXggPiAwO1xuXG4gIGZ1bmN0aW9uIHBsYXlOZXh0KCkge1xuICAgIGlmIChpc1NodWZmbGUpIHtcbiAgICAgIGNvbnN0IG5leHRFcGlzb2RlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlcGlzb2RlTGlzdC5sZW5ndGgpO1xuXG4gICAgICBzZXRDdXJyZW50RXBpc29kZUluZGV4KG5leHRFcGlzb2RlSW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoaGFzTmV4dCkge1xuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4ICsgMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGxheVByZXZpb3VzKCkge1xuICAgIGlmIChoYXNQcmV2aW91cykge1xuICAgICAgc2V0Q3VycmVudEVwaXNvZGVJbmRleChjdXJyZW50RXBpc29kZUluZGV4IC0gMSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGxheWVyQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZXBpc29kZUxpc3QsXG4gICAgICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gICAgICAgIHBsYXksXG4gICAgICAgIHBsYXlMaXN0LFxuICAgICAgICBpc1BsYXlpbmcsXG4gICAgICAgIHRvZ2dsZVBsYXllcixcbiAgICAgICAgc2V0SXNQbGF5ZXJTdGF0ZSxcbiAgICAgICAgcGxheVByZXZpb3VzLFxuICAgICAgICBwbGF5TmV4dCxcbiAgICAgICAgaGFzTmV4dCxcbiAgICAgICAgaGFzUHJldmlvdXMsXG4gICAgICAgIHRvZ2dsZUxvb3AsXG4gICAgICAgIGlzTG9vcGluZyxcbiAgICAgICAgaXNTaHVmZmxlLFxuICAgICAgICB0b2dnbGVTaHVmZmxlLFxuICAgICAgICBjbGVhclBsYXllclN0YXRlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9QbGF5ZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlUGxheWVyID0gKCkgPT4gdXNlQ29udGV4dChQbGF5ZXJDb250ZXh0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/PlayerContext.tsx\n");

/***/ })

})