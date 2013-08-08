/**
@param {Object} object
@return Boolean
*/
Object.isExtensible = function(object) {};
/**
@param {Object} obj
@return void
*/
Object.preventExtensions = function(obj) {};
/**
@param {Object} obj
@param {String} prop
@return Object
*/
Object.getOwnPropertyDescriptor = function(obj,prop) {};
/**
@param {Object} obj
@param {String} prop
@param {Object} desc
@return void
*/
Object.defineProperty = function(obj,prop,desc) {};
/**
@param {Object} obj
@param {Object} props
@return void
*/
Object.defineProperties = function(obj,props) {};
/**
@param {Object} obj
@return Array
*/
Object.keys = function(obj) {};
/**
@param {Object} obj
@return Array
*/
Object.getOwnPropertyNames = function(obj) {};
/**
@param {Object} proto
@param {Object} [props]
@return void
*/
Object.create = function(proto,props) {};
/**
@param {Object} obj
@return Object
*/
Object.getPrototypeOf = function(obj) {};
/**
@param {Object} obj
@return void
*/
Object.seal = function(obj) {};
/**
@param {Object} obj
@return Boolean
*/
Object.isSealed = function(obj) {};
/**
@param {Object} obj
@return void
*/
Object.freeze = function(obj) {};
/**
@param {Object} obj
@return Boolean
*/
Object.isFrozen = function(obj) {};

/**
@param {Function} callback
@param {Object} [initialValue]
@return Object
*/
Array.prototype.reduce = function(callback,initialValue) {};
/**
@param {Function} callback
@param {Object} [initialValue]
@return Object
*/
Array.prototype.reduceRight = function(callback,initialValue) {};
/**
@param {Object} searchElement
@param {int} [fromIndex]
@return int
*/
Array.prototype.indexOf = function(searchElement,fromIndex) {};
/**
@param {Object} searchElement
@param {int} [fromIndex]
@return int
*/
Array.prototype.lastIndexOf = function(searchElement,fromIndex) {};
/**
@param {Function} callback
@param {Object} [thisObject]
@return boolean
*/
Array.prototype.every = function(callback,thisObject) {};
/**
@param {Function} callback
@param {Object} [thisObject]
@return Array
*/
Array.prototype.filter = function(callback,thisObject) {};
/**
@param {Function} callback
@param {Object} [thisObject]
@return void
*/
Array.prototype.forEach = function(callback,thisObject) {};
/**
@param {Function} callback
@param {Object} [thisObject]
@return Array
*/
Array.prototype.map = function(callback,thisObject) {};
/**
@param {Function} callback
@param {Object} [thisObject]
@return Boolean
*/
Array.prototype.some = function(callback,thisObject) {};
/**
@param {Object} object
@return Boolean
*/
Array.prototype.isArray = function(object) {};

/**
@return String
*/
String.prototype.trim = function() {};
/**
@return String
*/
String.prototype.toJSON = function() {};

/**
@return String
*/
Date.prototype.toISOString = function() {};

/**
@param thisArg
@param {...*} [arg]
*/
Function.prototype.bind = function(thisArg,arg) {};

JSON = function() {};
JSON.constructor = 0;
/**
@param {Object} value
@param {Function} [replacer]
@param {Number|String} [space]
*/
JSON.stringify = function(value,replacer,space) {};
/**
@param {String} jsonString
*/
JSON.parse = function(jsonString) {};
JSON.prototype = new Object();
