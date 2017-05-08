module.exports =
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var todosCreate = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./todos-create.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var todosReadAll = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./todos-read-all.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var todosReadOne = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./todos-read-one.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var todosUpdate = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./todos-update.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var todosDelete = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./todos-delete.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	module.exports.create = function (event, context, callback) {
	  todosCreate(event, function (error, result) {
	    var response = {
	      statusCode: 200,
	      headers: {
	        "Access-Control-Allow-Origin": "*"
	      },
	      body: JSON.stringify(result)
	    };

	    context.succeed(response);
	  });
	};

	module.exports.readAll = function (event, context, callback) {
	  todosReadAll(event, function (error, result) {
	    var response = {
	      statusCode: 200,
	      headers: {
	        "Access-Control-Allow-Origin": "*"
	      },
	      body: JSON.stringify(result)
	    };

	    context.succeed(response);
	  });
	};

	module.exports.readOne = function (event, context, callback) {
	  todosReadOne(event, function (error, result) {
	    var response = {
	      statusCode: 200,
	      headers: {
	        "Access-Control-Allow-Origin": "*"
	      },
	      body: JSON.stringify(result)
	    };

	    context.succeed(response);
	  });
	};

	module.exports.update = function (event, context, callback) {
	  todosUpdate(event, function (error, result) {
	    var response = {
	      statusCode: 200,
	      headers: {
	        "Access-Control-Allow-Origin": "*"
	      },
	      body: JSON.stringify(result)
	    };

	    context.succeed(response);
	  });
	};

	module.exports.delete = function (event, context, callback) {
	  todosDelete(event, function (error, result) {
	    var response = {
	      statusCode: 200,
	      headers: {
	        "Access-Control-Allow-Origin": "*"
	      },
	      body: JSON.stringify(result)
	    };

	    context.succeed(response);
	  });
	};
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;

/***/ })
/******/ ]);