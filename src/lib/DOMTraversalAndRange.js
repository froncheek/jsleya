/**
@type Node
@const
*/
NodeIterator.prototype.root = 0;
/**
@type Number
@const
*/
NodeIterator.prototype.whatToShow = 0;
/**
@type NodeFilter
@const
*/
NodeIterator.prototype.filter = 0;
/**
@type Boolean
@const
*/
NodeIterator.prototype.expandEntityReferences = 0;
/**
@return Node
*/
NodeIterator.prototype.nextNode = function() {};
/**
@return Node
*/
NodeIterator.prototype.previousNode = function() {};
NodeIterator.prototype.detach = function() {};
NodeIterator = {};

/**
@param {Node} param
@return Number
*/
NodeFilter.prototype.NodeFilter = function(param) {};
NodeFilter = {};

/**
@return Node
*/
TreeWalker.prototype.parentNode = function() {};
/**
@return Node
*/
TreeWalker.prototype.firstChild = function() {};
/**
@return Node
*/
TreeWalker.prototype.lastChild = function() {};
/**
@return Node
*/
TreeWalker.prototype.previousSibling = function() {};
/**
@return Node
*/
TreeWalker.prototype.nextSibling = function() {};
/**
@return Node
*/
TreeWalker.prototype.previousNode = function() {};
/**
@return Node
*/
TreeWalker.prototype.nextNode = function() {};
TreeWalker = {};

/**
@param {Node} root
@param {Number} whatToShow
@param {NodeFilter} filter
@param {Boolean} entityReferenceExpansion
@return NodeIterator
*/
DocumentTraversal.prototype.createNodeIterator = function(root,whatToShow,filter,entityReferenceExpansion) {};
/**
@param {Node} root
@param {Number} whatToShow
@param {NodeFilter} filter
@param {Boolean} entityReferenceExpansion
@return TreeWalker
*/
DocumentTraversal.prototype.createTreeWalker = function(root,whatToShow,filter,entityReferenceExpansion) {};
DocumentTraversal = {};

/**
@type Node
@const
*/
Range.prototype.startContainer = 0;
/**
@type Number
@const
*/
Range.prototype.startOffset = 0;
/**
@type Node
@const
*/
Range.prototype.endContainer = 0;
/**
@type Number
@const
*/
Range.prototype.endOffset = 0;
/**
@type Boolean
@const
*/
Range.prototype.collapsed = 0;
/**
@type Node
@const
*/
Range.prototype.commonAncestorContainer = 0;
/**
@param {Node} refNode
@param {Number} offset
*/
Range.prototype.setStart = function(refNode,offset) {};
/**
@param {Node} refNode
@param {Number} offset
*/
Range.prototype.setEnd = function(refNode,offset) {};
/**
@param {Node} refNode
*/
Range.prototype.setStartBefore = function(refNode) {};
/**
@param {Node} refNode
*/
Range.prototype.setStartAfter = function(refNode) {};
/**
@param {Node} refNode
*/
Range.prototype.setEndBefore = function(refNode) {};
/**
@param {Node} refNode
*/
Range.prototype.setEndAfter = function(refNode) {};
/**
@param {Boolean} toStart
*/
Range.prototype.collapse = function(toStart) {};
/**
@param {Node} refNode
*/
Range.prototype.selectNode = function(refNode) {};
/**
@param {Node} refNode
*/
Range.prototype.selectNodeContents = function(refNode) {};
/**
@param {Number} how
@param {Range} sourceRange
@return Number
*/
Range.prototype.compareBoundaryPoints = function(how,sourceRange) {};
Range.prototype.deleteContents = function() {};
/**
@return DocumentFragment
*/
Range.prototype.extractContents = function() {};
/**
@return DocumentFragment
*/
Range.prototype.cloneContents = function() {};
/**
@param {Node} newNode
*/
Range.prototype.insertNode = function(newNode) {};
/**
@param {Node} newParent
*/
Range.prototype.surroundContents = function(newParent) {};
/**
@return Range
*/
Range.prototype.cloneRange = function() {};
/**
@return String
*/
Range.prototype.toString = function() {};
Range.prototype.detach = function() {};
/**
@browser Gecko
@param {String} tagString
*/
Range.prototype.createContextualFragment = function(tagString) {};
Range = {};

/**
@return Range
*/
DocumentRange.prototype.createRange = function() {};
DocumentRange = {};

/**
@type Number
*/
RangeException.prototype.code = 0;
RangeException = {};

/**
@type Element
@const
*/
Element.prototype.firstElementChild = 0;
/**
@type Element
@const
*/
Element.prototype.lastElementChild = 0;
/**
@type Element
@const
*/
Element.prototype.previousElementSibling = 0;
/**
@type Element
@const
*/
Element.prototype.nextElementSibling = 0;
/**
@type Number
@const
*/
Element.prototype.childElementCount = 0;
Element = {};
