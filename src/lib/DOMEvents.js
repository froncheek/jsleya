/**
@browser Gecko
@type String
@const
*/
Event.prototype.type = 0;
/**
@browser Gecko
@type EventTarget
@const
*/
Event.prototype.target = 0;
/**
@browser Gecko
@type EventTarget
@const
*/
Event.prototype.currentTarget = 0;
/**
@browser Gecko
@type Number
@const
*/
Event.prototype.eventPhase = 0;
/**
@browser Gecko
@type Boolean
@const
*/
Event.prototype.bubbles = 0;
/**
@browser Gecko
@type Boolean
@const
*/
Event.prototype.cancelable = 0;
/**
@browser Gecko
@type Number
@const
*/
Event.prototype.timeStamp = 0;
/**
@browser Gecko
@type String
@const
*/
Event.prototype.namespaceURI = 0;
/**
@browser Gecko
*/
Event.prototype.stopPropagation = function() {};
/**
@browser Gecko
*/
Event.prototype.preventDefault = function() {};
/**
@browser Gecko
@param {String} eventTypeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
*/
Event.prototype.initEvent = function(eventTypeArg,canBubbleArg,cancelableArg) {};
/**
@browser Gecko
@return Boolean
*/
Event.prototype.isCustom = function() {};
/**
@browser Gecko
*/
Event.prototype.stopImmediatePropagation = function() {};
/**
@browser Gecko
@return Boolean
*/
Event.prototype.isDefaultPrevented = function() {};
/**
@browser Gecko
@param {String} namespaceURIArg
@param {String} eventTypeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
*/
Event.prototype.initEventNS = function(namespaceURIArg,eventTypeArg,canBubbleArg,cancelableArg) {};
Event = {};

/**
@browser Gecko
@param {String} type
@param {EventListener|Function} listener
@param {Boolean} [useCapture]
*/
EventTarget.prototype.addEventListener = function(type,listener,useCapture) {};
/**
@browser Gecko
@param {String} type
@param {EventListener|Function} listener
@param {Boolean} [useCapture]
*/
EventTarget.prototype.removeEventListener = function(type,listener,useCapture) {};
/**
@browser Gecko
@param {Event} evt
@return Boolean
*/
EventTarget.prototype.dispatchEvent = function(evt) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} type
@param {EventListener} listener
@param {Boolean} [useCapture]
@param {Object} [evtGroup]
*/
EventTarget.prototype.addEventListenerNS = function(namespaceURI,type,listener,useCapture,evtGroup) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} type
@param {EventListener} listener
@param {Boolean} [useCapture]
*/
EventTarget.prototype.removeEventListenerNS = function(namespaceURI,type,listener,useCapture) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} type
@return Boolean
*/
EventTarget.prototype.willTriggerNS = function(namespaceURI,type) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} type
@return Boolean
*/
EventTarget.prototype.hasEventListenerNS = function(namespaceURI,type) {};
EventTarget = {};

/**
@browser Gecko
@param {Event} evt
*/
EventListener.prototype.handleEvent = function(evt) {};
EventListener = {};

/**
@browser Gecko
@type Number
*/
EventException.prototype.code = 0;
EventException = {};

/**
@browser Gecko
@param {String} eventType
@return Event
*/
DocumentEvent.prototype.createEvent = function(eventType) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} type
@return String
*/
DocumentEvent.prototype.canDispatch = function(namespaceURI,type) {};
DocumentEvent = {};

/**
@browser Gecko
@param {EventTarget} target
@param {Number} phase
*/
CustomEvent.prototype.setDispatchState = function(target,phase) {};
/**
@browser Gecko
@return Boolean
*/
CustomEvent.prototype.isPropagationStopped = function() {};
/**
@browser Gecko
@return Boolean
*/
CustomEvent.prototype.isImmediatePropagationStopped = function() {};
CustomEvent.prototype = new Event();
CustomEvent = {};

/**
@browser Gecko
@type AbstractView
@const
*/
UIEvent.prototype.view = 0;
/**
@browser Gecko
@type Number
@const
*/
UIEvent.prototype.detail = 0;
/**
@browser Gecko
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
*/
UIEvent.prototype.initUIEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,detailArg) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
*/
UIEvent.prototype.initUIEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,detailArg) {};
UIEvent.prototype = new Event();
UIEvent = {};

/**
@browser Gecko
@type String
@const
*/
TextEvent.prototype.data = 0;
/**
@browser Gecko
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} dataArg
*/
TextEvent.prototype.initTextEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,dataArg) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} dataArg
*/
TextEvent.prototype.initTextEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,dataArg) {};
TextEvent.prototype = new UIEvent();
TextEvent = {};

/**
@browser Gecko
@type Number
@const
*/
MouseEvent.prototype.screenX = 0;
/**
@browser Gecko
@type Number
@const
*/
MouseEvent.prototype.screenY = 0;
/**
@browser Gecko
@type Number
@const
*/
MouseEvent.prototype.clientX = 0;
/**
@browser Gecko
@type Number
@const
*/
MouseEvent.prototype.clientY = 0;
/**
@browser Gecko
@type Boolean
@const
*/
MouseEvent.prototype.ctrlKey = 0;
/**
@browser Gecko
@type Boolean
@const
*/
MouseEvent.prototype.shiftKey = 0;
/**
@browser Gecko
@type Boolean
@const
*/
MouseEvent.prototype.altKey = 0;
/**
@browser Gecko
@type Boolean
@const
*/
MouseEvent.prototype.metaKey = 0;
/**
@browser Gecko
@type Number
@const
*/
MouseEvent.prototype.button = 0;
/**
@browser Gecko
@type EventTarget
@const
*/
MouseEvent.prototype.relatedTarget = 0;
/**
@browser Gecko
@param {String} keyIdentifierArg
@return Boolean
*/
MouseEvent.prototype.getModifierState = function(keyIdentifierArg) {};
/**
@browser Gecko
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
@param {Number} screenXArg
@param {Number} screenYArg
@param {Number} clientXArg
@param {Number} clientYArg
@param {Boolean} ctrlKeyArg
@param {Boolean} altKeyArg
@param {Boolean} shiftKeyArg
@param {Boolean} metaKeyArg
@param {Number} buttonArg
@param {EventTarget} relatedTargetArg
*/
MouseEvent.prototype.initMouseEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,detailArg,screenXArg,screenYArg,clientXArg,clientYArg,ctrlKeyArg,altKeyArg,shiftKeyArg,metaKeyArg,buttonArg,relatedTargetArg) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {AbstractView} viewArg
@param {Number} detailArg
@param {Number} screenXArg
@param {Number} screenYArg
@param {Number} clientXArg
@param {Number} clientYArg
@param {Boolean} ctrlKeyArg
@param {Boolean} altKeyArg
@param {Boolean} shiftKeyArg
@param {Boolean} metaKeyArg
@param {Number} buttonArg
@param {EventTarget} relatedTargetArg
*/
MouseEvent.prototype.initMouseEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,detailArg,screenXArg,screenYArg,clientXArg,clientYArg,ctrlKeyArg,altKeyArg,shiftKeyArg,metaKeyArg,buttonArg,relatedTargetArg) {};
MouseEvent.prototype = new UIEvent();
MouseEvent = {};

/**
@browser Gecko
@type String
@const
*/
KeyboardEvent.prototype.keyIdentifier = 0;
/**
@browser Gecko
@type Number
@const
*/
KeyboardEvent.prototype.keyLocation = 0;
/**
@browser Gecko
@type Boolean
@const
*/
KeyboardEvent.prototype.ctrlKey = 0;
/**
@browser Gecko
@type Boolean
@const
*/
KeyboardEvent.prototype.shiftKey = 0;
/**
@browser Gecko
@type Boolean
@const
*/
KeyboardEvent.prototype.altKey = 0;
/**
@browser Gecko
@type Boolean
@const
*/
KeyboardEvent.prototype.metaKey = 0;
/**
@browser Gecko
@param {String} keyIdentifierArg
@return Boolean
*/
KeyboardEvent.prototype.getModifierState = function(keyIdentifierArg) {};
/**
@browser Gecko
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {AbstractView} viewArg
@param {String} keyIdentifierArg
@param {Number} keyLocationArg
@param {String} modifiersList
*/
KeyboardEvent.prototype.initKeyboardEvent = function(typeArg,canBubbleArg,cancelableArg,viewArg,keyIdentifierArg,keyLocationArg,modifiersList) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {AbstractView} viewArg
@param {String} keyIdentifierArg
@param {Number} keyLocationArg
@param {String} modifiersList
*/
KeyboardEvent.prototype.initKeyboardEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,viewArg,keyIdentifierArg,keyLocationArg,modifiersList) {};
KeyboardEvent.prototype = new UIEvent();
KeyboardEvent = {};

/**
@browser Gecko
@type Node
@const
*/
MutationEvent.prototype.relatedNode = 0;
/**
@browser Gecko
@type String
@const
*/
MutationEvent.prototype.prevValue = 0;
/**
@browser Gecko
@type String
@const
*/
MutationEvent.prototype.newValue = 0;
/**
@browser Gecko
@type String
@const
*/
MutationEvent.prototype.attrName = 0;
/**
@browser Gecko
@type Number
@const
*/
MutationEvent.prototype.attrChange = 0;
/**
@browser Gecko
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {Node} relatedNodeArg
@param {String} prevValueArg
@param {String} newValueArg
@param {String} attrNameArg
@param {Number} attrChangeArg
*/
MutationEvent.prototype.initMutationEvent = function(typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevValueArg,newValueArg,attrNameArg,attrChangeArg) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {Node} relatedNodeArg
@param {String} prevValueArg
@param {String} newValueArg
@param {String} attrNameArg
@param {Number} attrChangeArg
*/
MutationEvent.prototype.initMutationEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevValueArg,newValueArg,attrNameArg,attrChangeArg) {};
MutationEvent.prototype = new UIEvent();
MutationEvent = {};

/**
@browser Gecko
@type String
@const
*/
MutationNameEvent.prototype.prevNamespaceURI = 0;
/**
@browser Gecko
@type String
@const
*/
MutationNameEvent.prototype.prevNodeName = 0;
/**
@browser Gecko
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {Node} relatedNodeArg
@param {String} prevNamespaceURIArg
@param {String} prevNodeNameArg
*/
MutationNameEvent.prototype.initMutationNameEvent = function(typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevNamespaceURIArg,prevNodeNameArg) {};
/**
@browser Gecko
@param {String} namespaceURI
@param {String} typeArg
@param {Boolean} canBubbleArg
@param {Boolean} cancelableArg
@param {Node} relatedNodeArg
@param {String} prevNamespaceURIArg
@param {String} prevNodeNameArg
*/
MutationNameEvent.prototype.initMutationNameEventNS = function(namespaceURI,typeArg,canBubbleArg,cancelableArg,relatedNodeArg,prevNamespaceURIArg,prevNodeNameArg) {};
MutationNameEvent.prototype = new MutationEvent();
MutationNameEvent = {};
