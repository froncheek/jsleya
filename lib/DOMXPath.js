/**
@browser Gecko
@type Number
*/
XPathException.prototype.code = 0;
XPathException = {};

/**
@browser Gecko
@param {String} expression
@param {XPathNSResolver} resolver
@return XPathExpression
*/
XPathEvaluator.prototype.createExpression = function(expression,resolver) {};
/**
@browser Gecko
@param {Node} nodeResolver
@return XPathNSResolver
*/
XPathEvaluator.prototype.createNSResolver = function(nodeResolver) {};
/**
@browser Gecko
@param {String} expression
@param {Node} contextNode
@param {XPathNSResolver} resolver
@param {Number} type
@param {Object} result
@return Object
*/
XPathEvaluator.prototype.evaluate = function(expression,contextNode,resolver,type,result) {};
XPathEvaluator = {};

/**
@browser Gecko
@param {Node} contextNode
@param {Number} type
@param {Object} result
@return Object
*/
XPathExpression.prototype.evaluate = function(contextNode,type,result) {};
XPathExpression = {};

/**
@browser Gecko
@param {String} prefix
@return String
*/
XPathNSResolver.prototype.lookupNamespaceURI = function(prefix) {};
XPathNSResolver = {};

/**
@browser Gecko
@type Number
*/
XPathResult.prototype.resultType = 0;
/**
@browser Gecko
@type Number
*/
XPathResult.prototype.numberValue = 0;
/**
@browser Gecko
@type String
*/
XPathResult.prototype.stringValue = 0;
/**
@browser Gecko
@type Boolean
*/
XPathResult.prototype.booleanValue = 0;
/**
@browser Gecko
@type Node
*/
XPathResult.prototype.singleNodeValue = 0;
/**
@browser Gecko
@type Boolean
*/
XPathResult.prototype.invalidIteratorState = 0;
/**
@browser Gecko
@type Number
*/
XPathResult.prototype.snapshotLength = 0;
/**
@browser Gecko
@type Number
*/
XPathResult.ORDERED_NODE_SNAPSHOT_TYPE = 7;
/**
@browser Gecko
@type Number
*/
XPathResult.ORDERED_NODE_ITERATOR_TYPE = 5;
/**
@browser Gecko
@type Number
*/
XPathResult.ANY_TYPE = 0;
/**
@browser Gecko
@type Number
*/
XPathResult.BOOLEAN_TYPE = 3;
/**
@browser Gecko
@type Number
*/
XPathResult.NUMBER_TYPE = 1;
/**
@browser Gecko
@type Number
*/
XPathResult.STRING_TYPE = 2;
/**
@browser Gecko
@type Number
*/
XPathResult.FIRST_ORDERED_NODE_TYPE = 9;
/**
@browser Gecko
@type Number
*/
XPathResult.ANY_UNORDERED_NODE_TYPE = 8;
/**
@browser Gecko
@type Number
*/
XPathResult.UNORDERED_NODE_ITERATOR_TYPE = 4;
/**
@browser Gecko
@type Number
*/
XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE = 6;
/**
@browser Gecko
@return Node
*/
XPathResult.prototype.iterateNext = function() {};
/**
@browser Gecko
@param {Number} index
@return Node
*/
XPathResult.prototype.snapshotItem = function(index) {};
XPathResult = {};

/**
@browser Gecko
@type Element
@const
*/
XPathNamespace.prototype.ownerElement = 0;
XPathNamespace.prototype = new Node();
XPathNamespace = {};
