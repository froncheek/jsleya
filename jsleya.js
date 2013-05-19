/**
 * Author: froncheek
 * Date: 7/8/12
 * Time: 4:49 PM
 * To change this template use File | Settings | File Templates.
 **/
 // {js:leya}
(function(curLeya, undefined) {
var CONST = {
    complete: 'complete'
};

var win = window,
    doc = document,
    loc = location,
    nav = navigator,
    ua = nav.userAgent,
    id = 1000,
    ly = function() {},
    eventListeners = {},
    eventObservers = [];

ly.fn = ly.prototype;

ly.fn.version = '1.0';
ly.fn.versionName = 'Alpha';

ly.fn.extend = function(/*source, [,(abstract,sealed...]*/) {
    var args = arguments,
        d = args[0] || {},
        s;

    if(Object.prototype.isExtensible && !Object.isExtensible(d)) {
        return false;
    }

    for(var i=1, len = args.length; i < len;) {
        s = args[i++];
        for(var p in s) {
            d[p] = s[p];
        }
    }
    
    return d;
};

ly.fn.extend(ly.fn, {
    addEvent: function(/*type, listener, [useCapture], [aWantsUntrusted]*/) {
        if(document.addEventListener) {
            eventListeners.ready = 'DOMContentLoaded';
            return function(o, t, l, u, a) {
                o.addEventListener(t, l, u, a);
                return this;
            };
        } else {
            eventListeners.ready = 'readystatechange';
            return function(o, t, l) {
                o.attachEvent('on' + t, l);
                return this;
            };
        }
    }(),
    removeEvent: function() {
        if(document.removeEventListener) {
            return function(o, t, l, u, a) {
                o.removeEventListener(t, l, u, a);
                return this;
            };
        } else {
            return function(o, t, l) {
                o.detachEvent('on' + t, l);
                return this;
            };
        }
    }(),
    addObserver: function() {
    },
    removeObserver: function() {
        
    },
    ready: function(fn) {

        if(leya.isDocReady && document.body) {
            fn.call(window);
            return;
        }

        leya.isDocReady = true;
        leya.addEvent(document, eventListeners.ready, function() {
            if (document.readyState === CONST.complete || document.body) {
                leya.removeEvent(document, eventListeners.ready, arguments.callee);
                fn.call(window);
            }
        }, false);
    },
    each: function(o, fn, sc) {
        var len = o.length,
            isObj = len === undefined || this.isObject(o);

        if(isObj) {
            for(var key in o) {
                var val = o[key];

                if(fn.call(sc || val, val, key) === false) {
                    return val;
                }
            }
        } else {
            for(var i = 0; i < len;) {
                if(fn.call(sc || o, o[i], i++) === false) {
                    return o;
                }
            }
        }
    },
    extendIf: function() {
        var args = arguments,
        d = args[0] || {},
        s = args[1];

        if(Object.prototype.isExtensible && !Object.isExtensible(d)) {
            return false;
        }

        for(var p in s) {
            if(!d[p]) {
                d[p] = s[p];  
            } 
        }
        
        return d;   
    },
    getHeight: function() {
        return getHeightAndWidth('Height');
    },
    getWidth: function() {
        return getHeightAndWidth('Width');
    },
    getId: function() {
        return 'leya-comp-' + (id++);
    },
    isArray: function(o) {
        return Array.isArray(o);
    },
    isFunction: function(f) {
        return !!(f && f.constructor && f.call && f.apply);
    },
    isNumber: function(n) {
        return (typeof n == 'string' || typeof n == 'number') && !isNaN(n - 0) && n !== '';
    },
    isString: function(s) {
        return (typeof(s) === 'string');
    },
    isObject: function(o) {
        return (o instanceof Object) && !this.isArray(o) && !this.isFunction(o);
    },
    isNs: function(ns) {
        return /^[\w]+([a-zA-Z\.]+([\w]+))$/.test(ns);
    },
    isClass: function() {
        var ns; return (arguments.length >= 2 && this.isString(ns = arguments[0]) && ns && this.isNs(ns));
    },
    isDefProp: function() {

    },
    /*getBrowserEvent: function() {
        if(arguments.length) {
            return eventListeners[arguments[0]];
        }
        return eventListeners;
    },*/
    getBody: function() {
        /*var body;

        if(!body = document.body) {

        } else {
            return body;
        }*/
    },
    ns: function(n, o) {
        o = o || window;

        if(n) {
            n = n.split('.');

            for(var i=0, len = n.length; i < len;) {
                o = o[n[i]] = o[n[i++]] || {};
            }
        }

        return o;
    },
    splitns: function(n) {
        var ns1 = (n = n.trim()).substr(0, n.lastIndexOf('.')),
            len = ns1.length;

        return [ns1, n.substr(ns1 ? len + 1 : 0, n.length - len)];
    },
    setVersion: function(/* Version */) {
        var v = arguments[0],
            lyv;

        if(leya.version != v) {
            if(v = leya.ly[v]) {
                lyv = leya.ly;
                delete leya.ly;
                lyv[leya.version] = leya;
                leya = v;
                leya.ly = lyv;
            }
        }
    },
    useVersion: function(v, fn) {
        var fromVersion = this, toVersion;

        if(!this.ly || !(toVersion = this.ly[v]) || !fn || !this.isFunction(fn)) {
            return;
        }

        leya = toVersion;
        fn.call(window, fromVersion);
        leya = fromVersion;        
    },
    initClass: function() {
        var _createConstructor = function(ns, o, isOverride) {
                var _init = function() {
                    var arg = arguments[0];

                    return this.init.apply(
                        leya.extend(this, leya.isObject(arg[0]) ?  arg[0] : {}), arg
                    );
                };

                if(isOverride) {
                    leya.extend(_init.prototype, o.base.getPrototypes(), o);
                    _init.prototype.base = o.base.getPrototypes();
                } else {
                    _init.prototype = o;
                }
                
                var _fn = function() {
                    return new _init(arguments);
                };

                _fn.namespace = ns;

                leya.extend(_fn, {
                    getBase: function() {
                        return _init.prototype.base;
                    },
                    getBaseClass: function() {
                        return o.base;
                    },
                    getPrototypes: function() {
                        return _init.prototype;
                    },
                    getName: function() {
                        return leya.splitns(ns)[1];
                    },
                    getNamespace: function() {
                        return ns;
                    },
                    addPrototype: function(k, v) {
                        _init.prototype[k] = v;
                    }
                });
                
                return _fn;
            };

        var _create = function(ns, o, isOverride) {
                if(this.isClass.apply(this, arguments)) {
                    var sns = this.splitns(ns);

                    fn = _createConstructor.call(this, ns, o, isOverride);
                    o = this.ns(sns[0], o.attachTo);
                    o[sns[1]] = fn;
                }
            },
            fn;

        ly.fn.extend(ly.fn, {
            abstract: function(ns, o) {
                _create.call(this, ns, o);
            },
            override: function(ns, o) {
                _create.call(this, ns, o, true);
            }
        });

        return true;
    }()
});

function createHtml(parent) {
    var dom = document.createElement(this.tag),
        children = this.children || [],
        style = this.style;

        delete this.style;
        delete this.children;

        ly.fn.extend(dom, this);

        if(children.length) {
            delete style.height;
        } else {
            if(parent) {
                if(parent.clientHeight) {
                    style.height -= parent.clientHeight;
                } else {
                    style.height -= parent.offsetHeight;
                }
            }
        }

        ly.fn.extend(dom.style, style);
        dom.id = (this.id ? this.id : leya.getId());

        if(this.renderTo) {
            this.renderTo.appendChild(dom);
        } else {
            parent.appendChild(dom);
        }

        ly.fn.each(children, function(v) {
            dom.appendChild(createHtml.call(v, dom));
        });
        
    return dom;
};

function getHeightAndWidth(hw) {
    var s;

    if(s = win['inner' + hw]) {
        return s;
    }
    if(doc.body && (s = doc.body['client' + hw])) {
        return s;
    }
    if(doc.documentElement && (s = doc.documentElement['client' + hw])) {
        return s;
    }
};

if(curLeya) {
    var ver;

    if(leya.version != (ver = ly.fn.version)) {
        leya.ly = leya.ly || {};

        if(!leya.ly[ver]) {
            leya.ly[ver] = new ly();    
        }
    }
} else {
    window.leya = new ly();    
}

leya.abstract('leya.Element', {
    init: function(prop) {
        this.dom = createHtml.call(this);
    },
    addClass: function(className) {
        var dom = this.dom || this;

        if(dom.classList) {
            dom.classList.add(className);
        } else {
            dom.className += className;
        }
    },
    removeClass: function(className) {
        var dom = this.dom || this;

        if(dom.classList) {
            dom.classList.remove(className);
        } else {
            //dom.className += className;
        }
    },
    addEvent: function(t, l, u, a) {
        if(document.addEventListener) {
            return function(t, l, u, a) {
                var dom = this.dom;

                dom.addEventListener(t, l, u, a);
                return this;
            };
        } else {
            return function(t, l) {
                var dom = this.dom;

                dom.attachEvent('on' + t, l);
                return this;
            };
        }
    }()
});


leya.addEvent(window, 'resize', function() {
    console.log(arguments);
});

})(window.leya);