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

	var _koaSend = __webpack_require__(4);

	var _koaSend2 = _interopRequireDefault(_koaSend);

	var _koaRouter = __webpack_require__(5);

	var _koaRouter2 = _interopRequireDefault(_koaRouter);

	var _koaSocket = __webpack_require__(6);

	var _koaSocket2 = _interopRequireDefault(_koaSocket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	// import mongo from './mongo'


	var app = new _koa2.default();
	var router = new _koaRouter2.default();
	var io = new _koaSocket2.default();

	io.attach(app);
	// io.on('connection', (ctx, data) => {
	//   console.log('connect', data)
	// })

	router.get('/', function () {
	  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _context.next = 2;
	            return (0, _koaSend2.default)(ctx, 'index.html', { root: 'dist/public/' });

	          case 2:
	            return _context.abrupt('return', _context.sent);

	          case 3:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function (_x, _x2) {
	    return _ref.apply(this, arguments);
	  };
	}());
	// router.post('/form-data', async (ctx, next) => {
	//   console.log(ctx)
	//   await next()
	// })

	app.io.on('connection', function () {
	  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, data, next) {
	    return regeneratorRuntime.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.next = 2;
	            return console.log('connect', data);

	          case 2:
	            _context2.next = 4;
	            return next();

	          case 4:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, undefined);
	  }));

	  return function (_x3, _x4, _x5) {
	    return _ref2.apply(this, arguments);
	  };
	}()).use(function () {
	  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
	    var start, ms;
	    return regeneratorRuntime.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            start = new Date();
	            _context3.next = 3;
	            return next();

	          case 3:
	            ms = new Date() - start;

	            console.log(ctx.method + ' ' + ctx.url + ' - ' + ms + 'ms, Status: ' + ctx.response.status);

	          case 5:
	          case 'end':
	            return _context3.stop();
	        }
	      }
	    }, _callee3, undefined);
	  }));

	  return function (_x6, _x7) {
	    return _ref3.apply(this, arguments);
	  };
	}()).use(router.routes()).use(function () {
	  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(ctx, next) {
	    return regeneratorRuntime.wrap(function _callee4$(_context4) {
	      while (1) {
	        switch (_context4.prev = _context4.next) {
	          case 0:
	            _context4.next = 2;
	            return (0, _koaSend2.default)(ctx, ctx.path, { root: 'dist/public/' });

	          case 2:
	          case 'end':
	            return _context4.stop();
	        }
	      }
	    }, _callee4, undefined);
	  }));

	  return function (_x8, _x9) {
	    return _ref4.apply(this, arguments);
	  };
	}());
	// .use(async (ctx, next) => {
	//   return (
	//     ctx.body =
	//     `<form id="main" method="POST" action="form-data">
	//     <input type="text" />
	//     <button type="submit">Enter</button>
	//     </form>
	//     <script type="text/javascript" src="./index.js"></script>`
	//   )
	//   await next()
	// })
	// .use(async (ctx, next) => {
	//   await send(ctx, 'index.html', {root: 'public/'})
	// })

	app.listen(3000, function () {
	  console.log('listening on 3000');
	  // mongo.connect()
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("koa-send");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("koa-router");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("koa-socket");

/***/ }
/******/ ]);