webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"./node_modules/rc-slider/es/index.js\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/PlayerContext */ \"./src/contexts/PlayerContext.tsx\");\n/* harmony import */ var _utils_ConvertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/ConvertDurationToTimeString */ \"./src/utils/ConvertDurationToTimeString.ts\");\n\n\nvar _jsxFileName = \"/home/italo/\\xC1rea de Trabalho/cursos/nlw#5/podcasternext/src/components/Player/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Player() {\n  _s();\n\n  var _usePlayer = Object(_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__[\"usePlayer\"])(),\n      episodeList = _usePlayer.episodeList,\n      currentEpisodeIndex = _usePlayer.currentEpisodeIndex,\n      isPlaying = _usePlayer.isPlaying,\n      isLooping = _usePlayer.isLooping,\n      togglePlayer = _usePlayer.togglePlayer,\n      toggleLoop = _usePlayer.toggleLoop,\n      toggleShuffle = _usePlayer.toggleShuffle,\n      isShuffle = _usePlayer.isShuffle,\n      setIsPlayerState = _usePlayer.setIsPlayerState,\n      hasPrevious = _usePlayer.hasPrevious,\n      hasNext = _usePlayer.hasNext,\n      playNext = _usePlayer.playNext,\n      playPrevious = _usePlayer.playPrevious,\n      clearPlayerState = _usePlayer.clearPlayerState;\n\n  var episode = episodeList[currentEpisodeIndex];\n  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!audioRef.current) {\n      return;\n    }\n\n    if (isPlaying) {\n      audioRef.current.play();\n    } else {\n      audioRef.current.pause();\n    }\n  }, [isPlaying]);\n\n  function setupProgressListener() {\n    audioRef.current.currentTime = 0;\n    audioRef.current.addEventListener(\"timeupdate\", function () {\n      setProgress(audioRef.current.currentTime);\n    });\n  }\n\n  function handleSeek(amount) {\n    audioRef.current.currentTime = amount;\n    setProgress(amount);\n  }\n\n  function handleEpisodeEnded() {\n    if (hasNext) {\n      playNext();\n    } else {\n      clearPlayerState();\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.playerContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/playing.svg\",\n        alt: \"Tocando agora\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: [\"Tocando agora\", episode === null || episode === void 0 ? void 0 : episode.title]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this), episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.currentEpisode,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        width: 592,\n        height: 592,\n        src: episode.thumbnail,\n        objectFit: \"cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: episode.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: episode.members\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.emptyPlayer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n        children: \"Selecione um podcast para ouvir\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: !episode ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.empty : \"\",\n      children: [episode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"audio\", {\n        ref: audioRef,\n        src: episode.url,\n        loop: isLooping,\n        onEnded: handleEpisodeEnded,\n        onPlay: function onPlay() {\n          return setIsPlayerState(true);\n        },\n        onPause: function onPause() {\n          return setIsPlayerState(false);\n        },\n        autoPlay: true,\n        onLoadedData: setupProgressListener\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.progress,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: Object(_utils_ConvertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__[\"convertDurationToTimeString\"])(Math.floor(progress))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.slider,\n          children: episode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rc_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            max: episode.duration,\n            value: progress,\n            trackStyle: {\n              backgroundColor: \"#04d361\"\n            },\n            railStyle: {\n              backgroundColor: \"#9f75ff\"\n            },\n            handleStyle: {\n              borderColor: '\"#04d361\"',\n              borderWidth: 4\n            },\n            onChange: handleSeek\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 15\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.emptySlider\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: episode ? Object(_utils_ConvertDurationToTimeString__WEBPACK_IMPORTED_MODULE_7__[\"convertDurationToTimeString\"])(episode.duration) : \"00:00:00\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.buttons,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: toggleShuffle,\n          disabled: !episode || episodeList.length <= 1,\n          className: isShuffle ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.isActive : \"\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/shuffle.svg\",\n            alt: \"Embaralhar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playPrevious,\n          disabled: !episode || !hasPrevious,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-previous.svg\",\n            alt: \"Tocar anterior\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.playButton,\n          disabled: !episode,\n          onClick: togglePlayer,\n          children: isPlaying ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/pause.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 149,\n            columnNumber: 15\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play.svg\",\n            alt: \"Tocar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 151,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: playNext,\n          disabled: !episode || !hasNext,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/play-next.svg\",\n            alt: \"Tocar pr\\xF3xima\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 160,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 155,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: toggleLoop,\n          className: isLooping ? _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.isActive : \"\",\n          disabled: !episode,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/repeat.svg\",\n            alt: \"Repetir\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 169,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Player, \"gUuSjtCco6EdiensOH1EV/NCe9c=\", false, function () {\n  return [_contexts_PlayerContext__WEBPACK_IMPORTED_MODULE_6__[\"usePlayer\"]];\n});\n\n_c = Player;\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL2luZGV4LnRzeD82ODJkIl0sIm5hbWVzIjpbIlBsYXllciIsInVzZVBsYXllciIsImVwaXNvZGVMaXN0IiwiY3VycmVudEVwaXNvZGVJbmRleCIsImlzUGxheWluZyIsImlzTG9vcGluZyIsInRvZ2dsZVBsYXllciIsInRvZ2dsZUxvb3AiLCJ0b2dnbGVTaHVmZmxlIiwiaXNTaHVmZmxlIiwic2V0SXNQbGF5ZXJTdGF0ZSIsImhhc1ByZXZpb3VzIiwiaGFzTmV4dCIsInBsYXlOZXh0IiwicGxheVByZXZpb3VzIiwiY2xlYXJQbGF5ZXJTdGF0ZSIsImVwaXNvZGUiLCJhdWRpb1JlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJwbGF5IiwicGF1c2UiLCJzZXR1cFByb2dyZXNzTGlzdGVuZXIiLCJjdXJyZW50VGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTZWVrIiwiYW1vdW50IiwiaGFuZGxlRXBpc29kZUVuZGVkIiwic3R5bGVzIiwicGxheWVyQ29udGFpbmVyIiwidGl0bGUiLCJjdXJyZW50RXBpc29kZSIsInRodW1ibmFpbCIsIm1lbWJlcnMiLCJlbXB0eVBsYXllciIsImVtcHR5IiwidXJsIiwiY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nIiwiTWF0aCIsImZsb29yIiwic2xpZGVyIiwiZHVyYXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiZW1wdHlTbGlkZXIiLCJidXR0b25zIiwibGVuZ3RoIiwiaXNBY3RpdmUiLCJwbGF5QnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRU8sU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLG1CQWdCbkJDLHlF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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJjLXNsaWRlclwiO1xuXG5pbXBvcnQgXCJyYy1zbGlkZXIvYXNzZXRzL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgdXNlUGxheWVyIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1BsYXllckNvbnRleHRcIjtcbmltcG9ydCB7IGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlscy9Db252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXllcigpIHtcbiAgY29uc3Qge1xuICAgIGVwaXNvZGVMaXN0LFxuICAgIGN1cnJlbnRFcGlzb2RlSW5kZXgsXG4gICAgaXNQbGF5aW5nLFxuICAgIGlzTG9vcGluZyxcbiAgICB0b2dnbGVQbGF5ZXIsXG4gICAgdG9nZ2xlTG9vcCxcbiAgICB0b2dnbGVTaHVmZmxlLFxuICAgIGlzU2h1ZmZsZSxcbiAgICBzZXRJc1BsYXllclN0YXRlLFxuICAgIGhhc1ByZXZpb3VzLFxuICAgIGhhc05leHQsXG4gICAgcGxheU5leHQsXG4gICAgcGxheVByZXZpb3VzLFxuICAgIGNsZWFyUGxheWVyU3RhdGUsXG4gIH0gPSB1c2VQbGF5ZXIoKTtcblxuICBjb25zdCBlcGlzb2RlID0gZXBpc29kZUxpc3RbY3VycmVudEVwaXNvZGVJbmRleF07XG4gIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFhdWRpb1JlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzUGxheWluZykge1xuICAgICAgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgICB9XG4gIH0sIFtpc1BsYXlpbmddKTtcblxuICBmdW5jdGlvbiBzZXR1cFByb2dyZXNzTGlzdGVuZXIoKSB7XG4gICAgYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IDA7XG5cbiAgICBhdWRpb1JlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsICgpID0+IHtcbiAgICAgIHNldFByb2dyZXNzKGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VlayhhbW91bnQ6IG51bWJlcikge1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSBhbW91bnQ7XG4gICAgc2V0UHJvZ3Jlc3MoYW1vdW50KTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVFcGlzb2RlRW5kZWQoKSB7XG4gICAgaWYgKGhhc05leHQpIHtcbiAgICAgIHBsYXlOZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFyUGxheWVyU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQ29udGFpbmVyfT5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxpbWcgc3JjPVwiL3BsYXlpbmcuc3ZnXCIgYWx0PVwiVG9jYW5kbyBhZ29yYVwiIC8+XG4gICAgICAgIDxzdHJvbmc+VG9jYW5kbyBhZ29yYXtlcGlzb2RlPy50aXRsZX08L3N0cm9uZz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAge2VwaXNvZGUgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VycmVudEVwaXNvZGV9PlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgd2lkdGg9ezU5Mn1cbiAgICAgICAgICAgIGhlaWdodD17NTkyfVxuICAgICAgICAgICAgc3JjPXtlcGlzb2RlLnRodW1ibmFpbH1cbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdHJvbmc+e2VwaXNvZGUudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgPHNwYW4+e2VwaXNvZGUubWVtYmVyc308L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eVBsYXllcn0+XG4gICAgICAgICAgPHN0cm9uZz5TZWxlY2lvbmUgdW0gcG9kY2FzdCBwYXJhIG91dmlyPC9zdHJvbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9eyFlcGlzb2RlID8gc3R5bGVzLmVtcHR5IDogXCJcIn0+XG4gICAgICAgIHtlcGlzb2RlICYmIChcbiAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgIHJlZj17YXVkaW9SZWZ9XG4gICAgICAgICAgICBzcmM9e2VwaXNvZGUudXJsfVxuICAgICAgICAgICAgbG9vcD17aXNMb29waW5nfVxuICAgICAgICAgICAgb25FbmRlZD17aGFuZGxlRXBpc29kZUVuZGVkfVxuICAgICAgICAgICAgb25QbGF5PXsoKSA9PiBzZXRJc1BsYXllclN0YXRlKHRydWUpfVxuICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gc2V0SXNQbGF5ZXJTdGF0ZShmYWxzZSl9XG4gICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgb25Mb2FkZWREYXRhPXtzZXR1cFByb2dyZXNzTGlzdGVuZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzfT5cbiAgICAgICAgICA8c3Bhbj57Y29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKE1hdGguZmxvb3IocHJvZ3Jlc3MpKX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJ9PlxuICAgICAgICAgICAge2VwaXNvZGUgPyAoXG4gICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICBtYXg9e2VwaXNvZGUuZHVyYXRpb259XG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2dyZXNzfVxuICAgICAgICAgICAgICAgIHRyYWNrU3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMwNGQzNjFcIiB9fVxuICAgICAgICAgICAgICAgIHJhaWxTdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzlmNzVmZlwiIH19XG4gICAgICAgICAgICAgICAgaGFuZGxlU3R5bGU9e3sgYm9yZGVyQ29sb3I6ICdcIiMwNGQzNjFcIicsIGJvcmRlcldpZHRoOiA0IH19XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlZWt9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5U2xpZGVyfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtlcGlzb2RlXG4gICAgICAgICAgICAgID8gY29udmVydER1cmF0aW9uVG9UaW1lU3RyaW5nKGVwaXNvZGUuZHVyYXRpb24pXG4gICAgICAgICAgICAgIDogXCIwMDowMDowMFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNodWZmbGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGUgfHwgZXBpc29kZUxpc3QubGVuZ3RoIDw9IDF9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2lzU2h1ZmZsZSA/IHN0eWxlcy5pc0FjdGl2ZSA6IFwiXCJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc2h1ZmZsZS5zdmdcIiBhbHQ9XCJFbWJhcmFsaGFyXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17cGxheVByZXZpb3VzfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlIHx8ICFoYXNQcmV2aW91c31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LXByZXZpb3VzLnN2Z1wiIGFsdD1cIlRvY2FyIGFudGVyaW9yXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlCdXR0b259XG4gICAgICAgICAgICBkaXNhYmxlZD17IWVwaXNvZGV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQbGF5ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzUGxheWluZyA/IChcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGF1c2Uuc3ZnXCIgYWx0PVwiVG9jYXJcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvcGxheS5zdmdcIiBhbHQ9XCJUb2NhclwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtwbGF5TmV4dH1cbiAgICAgICAgICAgIGRpc2FibGVkPXshZXBpc29kZSB8fCAhaGFzTmV4dH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wbGF5LW5leHQuc3ZnXCIgYWx0PVwiVG9jYXIgcHLDs3hpbWFcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVMb29wfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0xvb3BpbmcgPyBzdHlsZXMuaXNBY3RpdmUgOiBcIlwifVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFlcGlzb2RlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL3JlcGVhdC5zdmdcIiBhbHQ9XCJSZXBldGlyXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Player/index.tsx\n");

/***/ })

})