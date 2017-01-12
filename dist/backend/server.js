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
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _koa = __webpack_require__(3);

	var _koa2 = _interopRequireDefault(_koa);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _koaBodyparser = __webpack_require__(5);

	var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

	var _mongodb = __webpack_require__(6);

	var _mongodb2 = _interopRequireDefault(_mongodb);

	var _koaSend = __webpack_require__(7);

	var _koaSend2 = _interopRequireDefault(_koaSend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ObjectID = _mongodb2.default.ObjectID;
	var app = new _koa2.default();

	var db = void 0;
	_mongodb2.default.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017', function (err, database) {
	  if (err) {
	    console.log(err);
	    process.exit(1);
	  }
	  db = database;
	  console.log('database connection ready');

	  var server = app.listen(process.env.PORT || 3000, function () {
	    var port = server.address().port;
	    console.log('running on ', port);
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("koa-bodyparser");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("mongodb");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("koa-send");

/***/ }
/******/ ]);