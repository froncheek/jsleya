/**
@param {String} [sName]
@return XMLHttpRequest
*/
window.ActiveXObject = function(sName) {};

XMLHttpRequest = function() {};
XMLHttpRequest.constructor = 0;
/**
@type Function
*/
Object.defineProperty(XMLHttpRequest, "onreadystatechange", { set: function(value) {} });
/**
@type Number
*/
XMLHttpRequest.prototype.readyState = 0;
/**
@type String
*/
XMLHttpRequest.prototype.responseText = 0;
/**
@type String
*/
XMLHttpRequest.prototype.statusText = 0;
/**
@type Number
*/
XMLHttpRequest.prototype.status = 0;
/**
@type String
*/
XMLHttpRequest.prototype.responseXML = 0;
XMLHttpRequest.prototype.abort = function() {};
/**
@return String
*/
XMLHttpRequest.prototype.getAllResponseHeaders = function() {};
/**
@param {String} headerName
@return String
*/
XMLHttpRequest.prototype.getResponseHeader = function(headerName) {};
/**
@browser Gecko
@param {String} mimeType
*/
XMLHttpRequest.prototype.overrideMimeType = function(mimeType) {};
/**
@param {String} method
@param {String} url
@param {Boolean} [async]
@param {String} [username]
@param {String} [password]
*/
XMLHttpRequest.prototype.open = function(method,url,async,username,password) {};
/**
@param {String|FormData} content
@return void
*/
XMLHttpRequest.prototype.send = function(content) {};
/**
@param {String} label
@param {String} value
@return void
*/
XMLHttpRequest.prototype.setRequestHeader = function(label,value) {};
