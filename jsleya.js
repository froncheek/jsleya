/**
 * User: froncheek
 * Date: 7/8/12
 * Time: 4:49 PM
 * To change this template use File | Settings | File Templates.
 */

(function(undefined) {
    var win = window,
        doc = document;

    /*Object.prototype.each = function(callback, scope) {
        if(this.length === undefined) {
            for(var k in this) {
                var v = this[k];

                if(callback.call(scope || this, v, k) === false) {
                    return this;
                }
            }
        } else {
            for(var i=0, len = this.length; i<len;) {
                if(callback.call(scope || this, this[i], i++) === false) {
                    return this;
                }
            }
        }

        return this;
    };*/

    var leya = (function() {
        var _leya = function() {};

        _leya.fn = _leya.prototype = {
            extend: function(ob, od) {
                var m = arguments[2],
                    b = undefined;

                if(!m) {
                    if(this.util.isFunction(ob)) {
                        b = new ob();
                    } else {
                        b = new Object(ob);
                    }
                } else {
                    b = ob;
                }

                for(var n in od) {
                    b[n] = od[n];
                }

                return b;
            }
            ,proto: function(ns, o) {
                this.extend(this.setClass(ns).prototype, o);
            }
            ,loadFile: function(src, callback, args, scope) {
                var self = this,
                    script = doc.createElement('script'),
                    head = doc.getElementsByTagName('head')[0];

                script.type = 'text/javascript';
                script.src = src;
                script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        callback.apply(scope || callback, args);
                    }
                };
                // others
                script.onload = function () {
                    //callback.apply(scope || callback, [arguments[0], args]);
                    //self.callbackQueue.add({callback: callback, arguments: [arguments[0], args]});
                };
                self.callbackQueue.add({callback: callback, arguments: [1, args]});
                head.appendChild(script);
            }
            ,class: function(ns, obj) {
                var extend = obj.extend,
                    isCreated;

                var _class = function(load, obj) {
                    var nc = this.setClass(ns,this.extend(this.getClass(extend), obj))['class'];

                    if(nc.init) nc.init.call(nc);
                    if(nc.callback) nc.callback.call(nc);
                    isCreated = true;
                };

                if(extend) {
                    var isNew = this.setClass(extend)['new'];

                    if(isNew) {
                        this.loadFile(this.getClassUrl(extend), _class, obj, this);
                    }
                } else if(!isCreated) {
                    _class.call(this, [], obj);
                }
            }
            ,callbackQueue: new function() {
                var callbacks = [];

                return this.prototype = {
                    add: function(callback) {
                        callbacks.push(callback);
                    }
                    ,get: function() {
                        return callbacks[callbacks.length - 1];
                    }
                };
            }
            ,each: function(obj, fn, scope) {
                 var len = obj.length,
                    isObj = len === undefined || leya.util.isObject(obj);

                 if( isObj ) {
                     for(var key in obj) {
                        var val = obj[key];

                         if(fn.call(scope || val, val, key) === false) {
                            return val;
                         }
                     }
                 } else {
                     for(var i = 0; i < len;) {
                     //var val = arr[i];

                     if(fn.call(arr[i], arr[i], i++) === false) {
                     //return val;
                     }
                    }
                 }

                 return obj.each(fn, scope);
             }
            ,setClass: function(ns /*, newObj */) {
                var r = win,
                    n = arguments[1],
                    o = (n),
                    a = ns.split('.'),
                    isNew = false;

                a.each(function(v) {
                    if(!isNew && !r[v]) {
                        isNew = true;
                    }
                    r = r[v] = r[v] || {};
                });

                return {
                    new : (o ? false : isNew)
                    ,class : (o ? n : r)
                };
            }
            ,getClass: function(ns) {
                var a = ns ? ns.split('.') : [],
                    r = ns ? win : undefined;

                a.each(function(v) {
                    v = r[v];
                    if(!v) {
                        r = undefined;
                        return false;
                    }
                    r = v;
                });

                /*this.each(a, function(v) {
                 v = r[v];
                 if(!v) {
                 r = undefined;
                 return false;
                 }
                 r = v;
                 });*/

                return r;
            }
            ,getClassUrl: function(ns) {
                return [ns.replace(/\./g, '/'), '.js'].join('');
            }
            ,util: {
                isArray: function(a) {
                    return (a instanceof Array);
                }
                ,isFunction: function(f) {
                    return (f instanceof Function); //(f.apply && f.call);
                }
                ,isNumber: function(n) {
                    return (typeof n == 'string' || typeof n == 'number') && !isNaN(n - 0) && n !== '';
                }
                ,isString: function(s) {
                    return (typeof(s) === 'string');
                }
                ,isObject: function(o) {
                    var util = this.util;
                    return (o instanceof Object) && !util.isArray(o) && !util.isFunction(o);
                }
            }
        };

        return new _leya();
    })();

    win.leya = leya;
})();