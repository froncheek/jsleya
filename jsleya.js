/**
 * Author: froncheek
 * Date: 7/8/12
 * Time: 4:49 PM
 * To change this template use File | Settings | File Templates.
 **/
 // {js:leya}
(function(undefined) {
var CONST = {
    complete: 'complete'
};

var win = window,
    doc = document,
    loc = location,
    nav = navigator,
    ua = nav.userAgent,
    ly = function() {},
    eventListeners = {};

ly.fn = ly.prototype;

ly.fn.extend = function(/*source, [,(abstract,sealed...]*/) {
    var args = arguments,
        d = args[0],
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
            return function(t, l, u, a) {
                document.addEventListener(t, l, u, a);
                return this;
            };
        } else {
            eventListeners.ready = 'readystatechange';
            return function(t, l) {
                document.attachEvent('on' + t, l);
                return this;
            };
        }
    }(),
    removeEvent: function() {
        if(document.removeEventListener) {
            return function(t, l, u, a) {
                document.removeEventListener(t, l, u, a);
                return this;
            };
        } else {
            return function(t, l) {
                document.detachEvent('on' + t, l);
                return this;
            };
        }
    }(),
    ready: function(fn) {
        if(leya.isDocReady && document.body) {
            fn.call(window);
            return;
        }
        leya.isDocReady = true;
        leya.addEvent(eventListeners.ready, function() {
            if (document.readyState === CONST.complete || document.body) {
                leya.removeEvent(eventListeners.ready, arguments.callee);
                fn.call(window);
            }
        }, false);
    },
    each: function(o, fn, sc) {
        var len = o.length,
            isObj = len === undefined || this.isObject(o);

        if( isObj ) {
            for(var key in o) {
                var val = o[key];

                if(fn.call(sc || val, val, key) === false) {
                    return val;
                }
            }
        } else {
            for(var i = 0; i < len;) {
                //var val = arr[i];

                if(fn.call(o[i], o[i], i++) === false) {
                //return val;
                }
            }
        }
        //return obj.each(fn, sc);
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
        return /^[a-zA-Z]+([a-zA-Z\.]+([a-zA-Z]+))$/.test(ns);
    },
    isClass: function() {
        var ns;
        return (arguments.length >= 2 && this.isString(ns = arguments[0]) && ns && this.isNs(ns));
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
    initClass: function() {
        var _createConstructor = function() {
                return function() {
                    this.init.apply(
                        leya.extend(this, leya.isObject(arguments[0]) ?  arguments[0] : {})
                    );
                };
            }, fn;

        ly.fn.extend(ly.fn, {
            abstract: function(ns, o) {
                if(this.isClass.apply(this, arguments)) {
                    fn = _createConstructor();
                    ns = this.splitns(ns);
                    fn.prototype = o;
                    o = this.ns(ns[0], o.copyTo);
                    o[ns[1]] = fn;
                }
            },
            override: function() {
                return function() {
                    if(this.isClass.apply(this, arguments)) {
                        fn = _createConstructor();

                        //this.extend({}, )
                    }
                };
            }()
        });

        return true;
    }()
});



window.leya = new ly();


})();





