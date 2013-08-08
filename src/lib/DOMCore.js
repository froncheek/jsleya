/**
@param {String} features
*/
DOMImplementationRegistry.prototype.getDOMImplementation = function(features) {};
/**
@param {String} features
*/
DOMImplementationRegistry.prototype.getDOMImplementationList = function(features) {};
DOMImplementationRegistry = {};

/**
@type Number
*/
DOMException.prototype.code = 0;
DOMException = {};

/**
@type Number
@const
*/
DOMStringList.prototype.length = 0;
/**
@param {Number} index
@return String
*/
DOMStringList.prototype.item = function(index) {};
/**
@param {String} str
@return Boolean
*/
DOMStringList.prototype.contains = function(str) {};
DOMStringList = {};

/**
@type Number
@const
*/
NameList.prototype.length = 0;
/**
@param {Number} index
@return String
*/
NameList.prototype.getName = function(index) {};
/**
@param {Number} index
@return String
*/
NameList.prototype.getNamespaceURI = function(index) {};
/**
@param {String} str
@return Boolean
*/
NameList.prototype.contains = function(str) {};
/**
@param {String} namespaceURI
@param {String} name
@return Boolean
*/
NameList.prototype.containsNS = function(namespaceURI,name) {};
NameList = {};

/**
@type Number
@const
*/
DOMImplementationList.prototype.length = 0;
/**
@param {Number} index
@return DOMImplementation
*/
DOMImplementationList.prototype.item = function(index) {};
DOMImplementationList = {};

/**
@param {String} features
@return DOMImplementation
*/
DOMImplementationSource.prototype.getDOMImplementation = function(features) {};
/**
@param {String} features
@return DOMImplementationList
*/
DOMImplementationSource.prototype.getDOMImplementationList = function(features) {};
DOMImplementationSource = {};

/**
@param {String} feature
@param {String} version
@return Boolean
*/
DOMImplementation.prototype.hasFeature = function(feature,version) {};
/**
@param {String} qualifiedName
@param {String} publicId
@param {String} systemId
@return DocumentType
*/
DOMImplementation.prototype.createDocumentType = function(qualifiedName,publicId,systemId) {};
/**
@param {String} namespaceURI
@param {String} qualifiedName
@param {DocumentType} doctype
@return Document
*/
DOMImplementation.prototype.createDocument = function(namespaceURI,qualifiedName,doctype) {};
/**
@param {String} feature
@param {String} version
@return Object
*/
DOMImplementation.prototype.getFeature = function(feature,version) {};
DOMImplementation = {};

DocumentFragment.prototype = new Node();
DocumentFragment = {};

/**
@type DocumentType
@const
*/
Document.prototype.doctype = 0;
/**
@type DOMImplementation
@const
*/
Document.prototype.implementation = 0;
/**
@type Element
@const
*/
Document.prototype.documentElement = 0;
/**
@type String
@const
*/
Document.prototype.inputEncoding = 0;
/**
@type String
@const
*/
Document.prototype.xmlEncoding = 0;
/**
@type Boolean
*/
Document.prototype.xmlStandalone = 0;
/**
@type String
*/
Document.prototype.xmlVersion = 0;
/**
@type Boolean
*/
Document.prototype.strictErrorChecking = 0;
/**
@type String
*/
Document.prototype.documentURI = 0;
/**
@type DOMConfiguration
@const
*/
Document.prototype.domConfig = 0;
/**
@browser IE
@type IXMLDOMParseError
*/
Document.prototype.parseError = 0;
/**
@param {String} tagName
@return Element
*/
Document.prototype.createElement = function(tagName) {};
/**
@return DocumentFragment
*/
Document.prototype.createDocumentFragment = function() {};
/**
@param {String} data
@return Text
*/
Document.prototype.createTextNode = function(data) {};
/**
@param {String} data
@return Comment
*/
Document.prototype.createComment = function(data) {};
/**
@param {String} data
@return CDATASection
*/
Document.prototype.createCDATASection = function(data) {};
/**
@param {String} target
@param {String} data
@return ProcessingInstruction
*/
Document.prototype.createProcessingInstruction = function(target,data) {};
/**
@param {String} name
@return Attr
*/
Document.prototype.createAttribute = function(name) {};
/**
@param {String} name
@return EntityReference
*/
Document.prototype.createEntityReference = function(name) {};
/**
@param {String} tagname
@return NodeList
*/
Document.prototype.getElementsByTagName = function(tagname) {};
/**
@param {Node} importedNode
@param {Boolean} deep
@return Node
*/
Document.prototype.importNode = function(importedNode,deep) {};
/**
@param {String} namespaceURI
@param {String} qualifiedName
@return Element
*/
Document.prototype.createElementNS = function(namespaceURI,qualifiedName) {};
/**
@param {String} namespaceURI
@param {String} qualifiedName
@return Attr
*/
Document.prototype.createAttributeNS = function(namespaceURI,qualifiedName) {};
/**
@param {String} namespaceURI
@param {String} localName
@return NodeList
*/
Document.prototype.getElementsByTagNameNS = function(namespaceURI,localName) {};
/**
@param {String} elementId
@return Element
*/
Document.prototype.getElementById = function(elementId) {};
/**
@param {Node} source
@return Node
*/
Document.prototype.adoptNode = function(source) {};
Document.prototype.normalizeDocument = function() {};
/**
@param {Node} n
@param {String} namespaceURI
@param {String} qualifiedName
@return Node
*/
Document.prototype.renameNode = function(n,namespaceURI,qualifiedName) {};
/**
@browser ie
@param [idString]
@return Node
*/
Document.prototype.nodeFromID = function(idString) {};
/**
@browser IE
@param {String} filename
*/
Document.prototype.load = function(filename) {};
/**
@browser IE
@param {String} xmlString
*/
Document.prototype.loadXML = function(xmlString) {};
/**
@browser IE
@param {String} filename
*/
Document.prototype.save = function(filename) {};
/**
@browser IE
@param {String} name
@param {String} value
*/
Document.prototype.setProperty = function(name,value) {};
/**
@browser IE
@param {String} xpathExpression
*/
Document.prototype.selectSingleNode = function(xpathExpression) {};
/**
@browser IE
@param {String} xpathExpression
*/
Document.prototype.selectNodes = function(xpathExpression) {};
Document.prototype = new Node();
Document = {};

/**
@browser IE
@type String
*/
IXMLDOMParseError.prototype.reason = 0;
/**
@browser IE
@type Number
*/
IXMLDOMParseError.prototype.errorCode = 0;
IXMLDOMParseError = {};

/**
@type String
@const
*/
Node.prototype.nodeName = 0;
/**
@type String
*/
Node.prototype.nodeValue = 0;
/**
@type Number
@const
*/
Node.prototype.nodeType = 0;
/**
@type Node
@const
*/
Node.prototype.parentNode = 0;
/**
@type NodeList
@const
*/
Node.prototype.childNodes = 0;
/**
@type Node
@const
*/
Node.prototype.firstChild = 0;
/**
@type Node
@const
*/
Node.prototype.lastChild = 0;
/**
@type Node
@const
*/
Node.prototype.previousSibling = 0;
/**
@type Node
@const
*/
Node.prototype.nextSibling = 0;
/**
@type NamedNodeMap
@const
*/
Node.prototype.attributes = 0;
/**
@type Document
@const
*/
Node.prototype.ownerDocument = 0;
/**
@type String
@const
*/
Node.prototype.namespaceURI = 0;
/**
@type String
*/
Node.prototype.prefix = 0;
/**
@type String
@const
*/
Node.prototype.localName = 0;
/**
@type String
@const
*/
Node.prototype.baseURI = 0;
/**
@type String
*/
Node.prototype.textContent = 0;
/**
@browser ie
@type String
@const
*/
Node.prototype.xml = 0;
/**
@type Number
@const
*/
Node.ELEMENT_NODE = 1;
/**
@type Number
@const
*/
Node.ATTRIBUTE_NODE = 2;
/**
@type Number
@const
*/
Node.TEXT_NODE = 3;
/**
@type Number
@const
*/
Node.CDATA_SECTION_NODE = 4;
/**
@type Number
@const
*/
Node.ENTITY_SECTION_NODE = 5;
/**
@type Number
@const
*/
Node.ENTITY_NODE = 6;
/**
@type Number
@const
*/
Node.PROCESSING_INSTRUCTION_NODE = 7;
/**
@type Number
@const
*/
Node.COMMENT_NODE = 8;
/**
@type Number
@const
*/
Node.DOCUMENT_NODE = 9;
/**
@type Number
@const
*/
Node.DOCUMENT_TYPE_NODE = 10;
/**
@type Number
@const
*/
Node.DOCUMENT_FRAGMENT_NODE = 11;
/**
@type Number
@const
*/
Node.NOTATION_NODE = 12;
/**
@param {Node} newChild
@param {Node} refChild
@return Node
*/
Node.prototype.insertBefore = function(newChild,refChild) {};
/**
@param {Node} newChild
@param {Node} refChild
@return Node
*/
Node.prototype.replaceChild = function(newChild,refChild) {};
/**
@param {Node} oldChild
@return Node
*/
Node.prototype.removeChild = function(oldChild) {};
/**
@param {Node} newChild
@return Node
*/
Node.prototype.appendChild = function(newChild) {};
/**
@return Boolean
*/
Node.prototype.hasChildNodes = function() {};
/**
@param {Boolean} deep
@return Node
*/
Node.prototype.cloneNode = function(deep) {};
Node.prototype.normalize = function() {};
/**
@param {String} feature
@param {String} version
@return Boolean
*/
Node.prototype.isSupported = function(feature,version) {};
/**
@return Boolean
*/
Node.prototype.hasAttributes = function() {};
/**
@param {Node} other
@return Node
*/
Node.prototype.compareDocumentPosition = function(other) {};
/**
@param {Node} other
@return Boolean
*/
Node.prototype.isSameNode = function(other) {};
/**
@param {String} namespaceURI
@return String
*/
Node.prototype.lookupPrefix = function(namespaceURI) {};
/**
@param {String} namespaceURI
@return String
*/
Node.prototype.isDefaultNamespace = function(namespaceURI) {};
/**
@param {String} prefix
@return String
*/
Node.prototype.lookupNamespaceURI = function(prefix) {};
/**
@param {Node} arg
@return Boolean
*/
Node.prototype.isEqualNode = function(arg) {};
/**
@param {String} feature
@param {String} version
@return Object
*/
Node.prototype.getFeature = function(feature,version) {};
/**
@param {String} key
@param data
@param {UserDataHandler} handler
*/
Node.prototype.setUserData = function(key,data,handler) {};
/**
@param {String} key
*/
Node.prototype.getUserData = function(key) {};
Node = {};

/**
@type Number
@const
*/
NodeList.prototype.length = 0;
/**
@param {Number} index
@return Node
*/
NodeList.prototype.item = function(index) {};
NodeList = {};

/**
@type Number
@const
*/
NamedNodeMap.prototype.length = 0;
/**
@param {String} name
@return Node
*/
NamedNodeMap.prototype.getNamedItem = function(name) {};
/**
@param {Node} arg
@return Node
*/
NamedNodeMap.prototype.setNamedItem = function(arg) {};
/**
@param {String} name
@return Node
*/
NamedNodeMap.prototype.removeNamedItem = function(name) {};
/**
@param {Number} index
@return Node
*/
NamedNodeMap.prototype.item = function(index) {};
/**
@param {String} namespaceURI
@param {String} localName
@return Node
*/
NamedNodeMap.prototype.getNamedItemNS = function(namespaceURI,localName) {};
/**
@param {Node} arg
@return Node
*/
NamedNodeMap.prototype.setNamedItemNS = function(arg) {};
/**
@param {String} namespaceURI
@param {String} localName
@return Node
*/
NamedNodeMap.prototype.removeNamedItemNS = function(namespaceURI,localName) {};
NamedNodeMap = {};

/**
@type String
*/
CharacterData.prototype.data = 0;
/**
@type Number
@const
*/
CharacterData.prototype.length = 0;
/**
@param {Number} offset
@param {Number} count
@return String
*/
CharacterData.prototype.substringData = function(offset,count) {};
/**
@param {String} arg
*/
CharacterData.prototype.appendData = function(arg) {};
/**
@param {Number} offset
@param {String} arg
*/
CharacterData.prototype.insertData = function(offset,arg) {};
/**
@param {Number} offset
@param {Number} count
*/
CharacterData.prototype.deleteData = function(offset,count) {};
/**
@param {Number} offset
@param {Number} count
@param {String} arg
*/
CharacterData.prototype.replaceData = function(offset,count,arg) {};
CharacterData.prototype = new Node();
CharacterData = {};

/**
@type String
@const
*/
Attr.prototype.name = 0;
/**
@type Boolean
@const
*/
Attr.prototype.specified = 0;
/**
@type String
@const
*/
Attr.prototype.value = 0;
/**
@type Element
@const
*/
Attr.prototype.ownerElement = 0;
/**
@type TypeInfo
@const
*/
Attr.prototype.schemaTypeInfo = 0;
/**
@type Boolean
@const
*/
Attr.prototype.isId = 0;
Attr.prototype = new Node();
Attr = {};

/**
@type String
@const
*/
Element.prototype.tagName = 0;
/**
@type TypeInfo
@const
*/
Element.prototype.schemaTypeInfo = 0;
/**
@param {String} name
@return String
*/
Element.prototype.getAttribute = function(name) {};
/**
@param {String} name
@param {String} value
*/
Element.prototype.setAttribute = function(name,value) {};
/**
@param {String} name
*/
Element.prototype.removeAttribute = function(name) {};
/**
@param {String} name
@return Attr
*/
Element.prototype.getAttributeNode = function(name) {};
/**
@param {Attr} newAttr
@return Attr
*/
Element.prototype.setAttributeNode = function(newAttr) {};
/**
@param {Attr} oldAttr
@return Attr
*/
Element.prototype.removeAttributeNode = function(oldAttr) {};
/**
@param {String} name
@return NodeList
*/
Element.prototype.getElementsByTagName = function(name) {};
/**
@param {String} namespaceURI
@param {String} localName
@return String
*/
Element.prototype.getAttributeNS = function(namespaceURI,localName) {};
/**
@param {String} namespaceURI
@param {String} qualifiedName
@param {String} value
*/
Element.prototype.setAttributeNS = function(namespaceURI,qualifiedName,value) {};
/**
@param {String} namespaceURI
@param {String} localName
*/
Element.prototype.removeAttributeNS = function(namespaceURI,localName) {};
/**
@param {String} namespaceURI
@param {String} localName
*/
Element.prototype.getAttributeNodeNS = function(namespaceURI,localName) {};
/**
@param {Attr} newAttr
*/
Element.prototype.setAttributeNodeNS = function(newAttr) {};
/**
@param {String} namespaceURI
@param {String} localName
@return NodeList
*/
Element.prototype.getElementsByTagNameNS = function(namespaceURI,localName) {};
/**
@param {String} name
@return Boolean
*/
Element.prototype.hasAttribute = function(name) {};
/**
@param {String} namespaceURI
@param {String} localName
@return Boolean
*/
Element.prototype.hasAttributeNS = function(namespaceURI,localName) {};
/**
@param {String} name
@param {Boolean} isId
*/
Element.prototype.setIdAttribute = function(name,isId) {};
/**
@param {String} namespaceURI
@param {String} localName
@param {Boolean} isId
*/
Element.prototype.setIdAttributeNS = function(namespaceURI,localName,isId) {};
/**
@param {Attr} idAttr
@param {Boolean} isId
*/
Element.prototype.setIdAttributeNode = function(idAttr,isId) {};
Element.prototype = new Node();
Element = {};

/**
@type Boolean
@const
*/
Text.prototype.isElementContentWhitespace = 0;
/**
@type String
@const
*/
Text.prototype.wholeText = 0;
/**
@param {Number} offset
@return Text
*/
Text.prototype.splitText = function(offset) {};
/**
@param {String} content
@return Text
*/
Text.prototype.replaceWholeText = function(content) {};
Text.prototype = new CharacterData();
Text = {};

Comment.prototype = new CharacterData();
Comment = {};

/**
@type String
@const
*/
TypeInfo.prototype.typeName = 0;
/**
@type String
@const
*/
TypeInfo.prototype.typeNamespace = 0;
/**
@param {String} typeNamespaceArg
@param {String} typeNameArg
@param { Number} derivationMethod
@return Boolean
*/
TypeInfo.prototype.isDerivedFrom = function(typeNamespaceArg,typeNameArg,derivationMethod) {};
TypeInfo = {};

/**
@param {Number} param1
@param {String} param2
@param param3
@param {Node} param4
@param {Node} param5
*/
UserDataHandler.prototype.handle = function(param1,param2,param3,param4,param5) {};
UserDataHandler = {};

/**
@type Number
*/
DOMError.prototype.severity = 0;
/**
@type String
*/
DOMError.prototype.message = 0;
/**
@type String
*/
DOMError.prototype.type = 0;
/**
@type Object
*/
DOMError.prototype.relatedException = 0;
/**
@type Object
*/
DOMError.prototype.relatedData = 0;
/**
@type DOMLocator
*/
DOMError.prototype.location = 0;
DOMError = {};

/**
@param {DOMError} error
@return Boolean
*/
DOMErrorHandler.prototype.handler = function(error) {};
DOMErrorHandler = {};

/**
@type Number
*/
DOMLocator.prototype.lineNumber = 0;
/**
@type Number
*/
DOMLocator.prototype.columnNumber = 0;
/**
@type Number
*/
DOMLocator.prototype.byteOffset = 0;
/**
@type Number
*/
DOMLocator.prototype.utf16Offset = 0;
/**
@type Node
*/
DOMLocator.prototype.relatedNode = 0;
/**
@type String
*/
DOMLocator.prototype.uri = 0;
DOMLocator = {};

/**
@type DOMStringList
*/
DOMConfiguration.prototype.parameterNames = 0;
/**
@param {String} name
@param value
*/
DOMConfiguration.prototype.setParameter = function(name,value) {};
/**
@param {String} name
*/
DOMConfiguration.prototype.getParameter = function(name) {};
/**
@param {String} name
@param value
@return Boolean
*/
DOMConfiguration.prototype.canSetParameter = function(name,value) {};
DOMConfiguration = {};

CDATASection.prototype = new Text();
CDATASection = {};

/**
@type String
@const
*/
DocumentType.prototype.name = 0;
/**
@type NamedNodeMap
@const
*/
DocumentType.prototype.entities = 0;
/**
@type NamedNodeMap
@const
*/
DocumentType.prototype.notations = 0;
/**
@type String
@const
*/
DocumentType.prototype.publicId = 0;
/**
@type String
@const
*/
DocumentType.prototype.systemId = 0;
/**
@type String
@const
*/
DocumentType.prototype.internalSubset = 0;
DocumentType.prototype = new Node();
DocumentType = {};

/**
@type String
@const
*/
Notation.prototype.publicId = 0;
/**
@type String
@const
*/
Notation.prototype.systemId = 0;
Notation.prototype = new Node();
Notation = {};

/**
@type String
@const
*/
Entity.prototype.publicId = 0;
/**
@type String
@const
*/
Entity.prototype.systemId = 0;
/**
@type String
@const
*/
Entity.prototype.notationName = 0;
/**
@type String
@const
*/
Entity.prototype.inputEncoding = 0;
/**
@type String
@const
*/
Entity.prototype.xmlEncoding = 0;
/**
@type String
@const
*/
Entity.prototype.xmlVersion = 0;
Entity.prototype = new Node();
Entity = {};

EntityReference.prototype = new Node();
EntityReference = {};

/**
@type String
@const
*/
ProcessingInstruction.prototype.target = 0;
/**
@type String
*/
ProcessingInstruction.prototype.data = 0;
ProcessingInstruction.prototype = new Node();
ProcessingInstruction = {};
