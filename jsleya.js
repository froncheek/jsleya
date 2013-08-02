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
    eventObservers = {};

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
    delay: function(ms, fn) {
        setTimeout(fn, ms);
        return this;
    },
    delayEvery: function(ms, fn) {
        setInterval(fn, ms);
        return this;
    },
    parseXML: function() {
        if (typeof window.DOMParser != "undefined") {

            return function(xmlStr) {
                return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
            };
        } else if (typeof window.ActiveXObject != "undefined" &&
               new window.ActiveXObject("Microsoft.XMLDOM")) {

            return function(xmlStr) {
                var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = "false";
                xmlDoc.loadXML(xmlStr);
                return xmlDoc;
            };
        } else {
            return function() {
                return;        
            }
        }
    }(),
    parseJSON: function(s) {
        try {
            return JSON.parse(s);
        } catch(e) {}

        return;
    },
    httpReq: function(req) {
        var xmlhttp,
            method = req.method || 'GET';

        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4) {
                if(xmlhttp.status == 200) {
                    if(req.success) {
                        req.success.call(req, xmlhttp);    
                    }
                    if(req.onJSON) {
                        try {
                            req.onJSON.call(req, leya.parseJSON(xmlhttp.response));
                        } catch(e) {}
                        return;
                    }
                    if(req.onXML) {
                        try {
                            req.onXML.call(req, leya.parseXML(xmlhttp.response));
                        } catch(e) {}
                        return;
                    }
                    if(req.onElse) {

                    }
                } else {
                    if(req.failed) {
                        req.failed.call(req, xmlhttp);    
                    }
                }
            }
        };
        xmlhttp.open(method, req.url, true);
        xmlhttp.send();
    },
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
    addObserver: function(observer) {
        leya.each(observer, function(v, k) {
            if(eventObservers[k]) {
                eventObservers[k].push(v);
            } else {
                eventObservers[k] = [v];
            }
        });
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
        var len = o ? o.length || 0 : 0,
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
        return getWidthAndHeight().height;
    },
    getWidth: function() {
        return getWidthAndHeight().width;
    },
    getId: function() {
        return 'ly-' + (id++);
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
        var body;

        if(!(body = document.body)) {

        } else {
            return body;
        }
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
        if(n && n.trim) {
            var ns1 = (n = n.trim()).substr(0, n.lastIndexOf('.')),
                len = ns1.length;

            return [ns1, n.substr(ns1 ? len + 1 : 0, n.length - len)];
        }
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
    createEl: function(elc){
        var el = document.createElement(elc.tag);
    },
    element: {
        appendChild: function(parent, child) {
            if(parent) {
                parent.appendChild(child);
            }
            return this;
        },
        prependChild: function() {
            return this;
        },
        insertChild: function() {
            return this;
        },
        removeChild: function() {
            return this;
        },
        replaceChild: function(parent, oldChild, newChild) {
            if(parent && oldChild && newChild) {
                parent.replaceChild(oldChild, newChild);
            }
            return this;
        },
        getThickness: function(el) {
            var style = el.style;

            return {
                horizontal: leya.math.sum(
                    leya.getDigits(style.paddingLeft),
                    leya.getDigits(style.paddingRight),
                    leya.getDigits(style.marginLeft),
                    leya.getDigits(style.marginRight)
                ),
                vertical: leya.math.sum(
                    leya.getDigits(style.paddingTop),
                    leya.getDigits(style.paddingBottom),
                    leya.getDigits(style.marginTop),
                    leya.getDigits(style.marginBottom)
                )
            }
        }
    },
    math: {
        div: function() {
            var num = 0;

            for(var i=0, len = arguments.length; i < len;) {
                num /= arguments[i++];
            }
            return num;
        },
        mul: function() {
            var num = 0;

            for(var i=0, len = arguments.length; i < len;) {
                num *= arguments[i++];
            }
            return num;
        },
        sum: function() {
            var num = 0;

            for(var i=0, len = arguments.length; i < len;) {
                num += arguments[i++];
            }
            return num;
        },
        sub: function() {
            var num = 0;

            for(var i=0, len = arguments.length; i < len;) {
                num -= arguments[i++];
            }
            return num;
        }
    },
    getDigits: function(s) {
        var d = s.match(/(\d+)/) || [0];
        return leya.parseInt(d[0]);
    },
    parseInt: function(o, replaceValue) {
        var cInt = replaceValue || 0;

        try {
            cInt = parseInt(o);
        } catch(ex) {}

        return cInt;
    },
    initClass: function() {
        var _createConstructor = function(ns, o, isOverride) {
                var _fn = function(ns, o) {
                    if(leya.isString(ns)) {
                        var sns = leya.splitns(ns),
                            d = leya.ns(sns[0], o.attachTo);

                        return( (d[sns[1]] = new _fn.init(o)) );
                    } else {
                        o = ns;
                        return new _fn.init(o);
                    }
                };

                //_fn.prototype = o;   
                var fn = function() {
                    return this.init.apply(
                        leya.extend(this, leya.isObject(arguments[0]) ?  arguments[0] : {}), arguments
                    );
                }; 

                if(isOverride) {
                    //leya.extendIf(_fn.prototype, o.base.prototype);
                    //_fn.prototype = o.base();
                    //_fn.prototype = o.base.prototype;
                    fn.prototype = new o.base.init();
                    leya.extend(fn.prototype, o);
                    _fn.base = o.base.init.prototype;
                } else {
                    fn.prototype = o;    
                }

                _fn.init = fn;
                
                // leya.extend(_fn.prototype, {
                //     namespace: ns,
                //     getBase: function() {
                //         return o.base;
                //     },
                //     getBasePrototype: function() {
                //         return o.base.prototype;
                //     },
                //     getDomDirectory: function() {
                //         //TODO:implement traverse here
                //         return this;    
                //     },
                //     getName: function() {
                //         return leya.splitns(ns)[1];
                //     },
                //     getNamespace: function() {
                //         return ns;
                //     }
                // });
                return _fn;
            },
            _create = function(ns, o, isOverride) {
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
            },
            lib: function(ns, o) {

            }
        });

        return true;
    }()
});

function createHtml(parent) {
    var dom = document.createElement(this.tag || 'div'),
        children = this.children || [],
        style = this.style;

        if(this.children) delete this.children;

        ly.fn.extend(dom, this);

        if(style) {
            if(this.style) delete this.style;

            if(children.length) {
                if(style.height) delete style.height;
            } else {
                if(parent && style) {
                    var verticalThickness = ly.fn.element.getThickness(parent).vertical,
                        horizontalThickness = ly.fn.element.getThickness(parent).horizontal;

                    //style.height = style.height || 0;
                    //style.width = style.width || 0;

                    if(parent.clientHeight) {
                        //style.height += parent.clientHeight + verticalThickness;
                        //style.width += parent.clientWidth + horizontalThickness;
                    } else {
                        //style.height += parent.offsetHeight + verticalThickness;
                        //style.width += parent.offsetWidth + horizontalThickness;
                    }
                }
            }

            ly.fn.extend(dom.style, style);
        }
        dom.id = (this.id ? this.id : leya.getId());

        // if(this.renderTo) {
        //     this.renderTo.appendChild(dom);
        // } else 
        //if(doc.body) {
        //    doc.body.appendChild(dom);
        //}

        ly.fn.each(children, function(v) {
            dom.appendChild(createHtml.call(v, dom));
        });
        
    return dom;
};

function getWidthAndHeight() {
    var hw = {
        height: 0,
        width: 0
    };

    if(win.innerHeight) {
        hw.height = win.innerHeight;
        hw.width = win.innerWidth;
    } else if(doc.body && doc.body.clientHeight) {
        hw.height = doc.body.clientHeight;
        hw.width = doc.body.clientWidth;
    } else if(doc.documentElement && doc.documentElement.clientHeight) {
        hw.height = doc.documentElement.clientHeight;
        hw.width = doc.documentElement.clientWidth;
    }

    return hw;
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

var els = {
    first: function() {
        return this.item(0);
    },
    last: function() {
        return this.item(this.length - 1);
    },
    eq: function(idx) {
        return this.item(idx);
    }
};

leya.extend(Node.prototype, {
    prependChild: function(el, bel) {
        return this.insertBefore(el, bel || this.firstChild);
    },
    setHeight: function(h) {
        this.style.height = h;

        return this;
    },
    setWidth: function(w) {
        this.style.width = w;

        return this;
    },
    getHeight: function() {
        return this.clientHeight;
    },
    getWidth: function() {
        return this.clientWidth;
    },
    addStyle: function(key, val) {
        var el = this;

        if(leya.isObject(key)) {
            leya.each(key, function(val, key) {
                el.style[key] = val;
            });
        } else {
            this[key] = val;
        }
    },
    createEl: function(o) {
        return this.appendChild(new leya.Element(o).dom);
    }
});

leya.abstract('leya.Element', {
    init: function(prop) {
        this.createLayout(prop);
    },
    addClass: function(className) {
        var dom = this.dom || this;

        if(dom.classList) {
            dom.classList.add(className);
        } else {
            dom.className += ' ' + className;
        }
    },
    appendTo: function(el) {
        el.appendChild(this.dom);
    },
    prependTo: function(el) {
        el.prependChild(this.dom);
    },
    createEl: function() {

    },
    createLayout: function(prop) {
        this.dom = createHtml.call(prop);
    },
    removeClass: function(className) {
        var dom = this.dom || this;

        if(dom.classList) {
            dom.classList.remove(className);
        } else {
            //dom.className += className;
        }
    },
    find: function() {},
    findBy: function(fn, scope) {
        return fn.call(scope || this);
    },
    findByClass: function(className) {
        return leya.extend(this.dom.getElementsByClassName(className), els);
    },
    findByTag: function() {},
    get: function() {
        return this.dom;
    },
    getHeight: function() {
        return this.dom.clientHeight;
    },
    getWidth: function() {
        return this.dom.clientWidth;  
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
    var args = arguments;

    leya.each(eventObservers.resize, function(v, k) {
        if(v.fn) {
            v.fn.call(v.scope, args);
        }
    });
});

})(window.leya);