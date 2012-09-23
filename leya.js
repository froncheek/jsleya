/**
 * Created by IntelliJ IDEA.
 * User: froncheek
 * Date: 8/26/12
 * Time: 3:30 PM
 * To change this template use File | Settings | File Templates.
 */


/*
 leya.BoxModel
 leya.Panel
 leya.Button
 leya.TextField
 leya.TextArea
 leya.ToggleButton
 leya.Radio
 leya.RadioGroup
 leya.CheckBox
 leya.CheckBoxGroup
 leya.ComboBox
 leya.Modal
 leya.Form
 leya.FormField
 */

(function (undefined) {
    var win = window,
        doc = win.document;

    if(!Object.hasOwnProperty('create')) {
        Object.create = function (o) {
            if (arguments.length > 1) {
                throw new Error('Object.create implementation only accepts the first parameter.');
            }
            function F() {}
            F.prototype = o;
            return new F();
        };
    }


    var leya = function(ns, conf) {
            if(!arguments.length) {
                return this;
            }

            this.init(ns, conf);
        },
        alias;

    leya.fn = leya.prototype = {
        createModel: function(ns, o) {

        }
        ,createView: function(ns, o) {

        }
        ,createController: function(ns, o) {

        }
        ,createRecord: function(ns, o) {

        }
        ,getRecord: function(ns) {

        }
        ,getModel: function(ns) {

        }
        ,init: function (ns, conf) {
            var o = this.ns(ns);

            if (o) {
                var ext = conf.extend;

                if(this.get(ext)) {

                }

                this.reg('model', o);
            }
            return false;
        }
        ,each: function (o, fbk, scp) {
            var len = o.length,
                isO = len == undefined,
                v, k = 0;

            if (isO) {
                for (k in o) {
                    v = o[k];

                    if (fbk.call(scp || v, v, k) === false) {
                        return v;
                    }
                }
            } else {
                for (; k < len;) {
                    v = o[k];

                    if (fbk.call(scp || v, v, k++) === false) {
                        return v;
                    }
                }
            }
        }
        ,extend: function (fr, to) {
            var o = to,
                v;

            for (var i in fr) {
                v = o[i];
                v = v || fr[i];
            }

            return o;
        }
        ,getObject: function(s) {
            return alias[s];
        }
        ,isArray: function (a) {
            return (a instanceof Array);
        }
        ,isFunction: function (f) { //todo: need to modify this checking
            return (f instanceof Function); //(f.apply && f.call);
        }
        ,isNumber: function (n) {
            return (typeof n == 'string' || typeof n == 'number') && !isNaN(n - 0) && n !== '';
        }
        ,isString: function (s) {
            return (typeof(s) === 'string');
        }
        ,isObject: function (o) {
            return (o instanceof Object) && !this.isArray(o) && !this.isFunction(o);
        }
        /**
         @ns    leya.ns
         @param {String} Namespace
         @param {Boolean} ExistenceOnly
         @return Object or Undefined/false
         */
        ,ns: function (s, is) {
            if (this.isString(s)) {
                var a = s.split('.'),
                    o = win;

                if(is) {
                    this.each(a, function (v) {
                        if(!o[v]) {
                            o = o[v];
                            return false;
                        } else {
                            o = o[v];
                        }
                    });
                    return o;
                } else {
                    this.each(a, function (v) {
                        o = o[v] = o[v] || {};
                    });
                    return o;
                }
            }
            return false;
        }
        /**
         @ns    leya.ref
         @param {String} Namespace
         @param {String} Name
         @param {Object} Object to reference
         @return False if error
         */
        ,ref: function(ns, s, o) {
            var ns = this.ns(ns,true);

            if(!ns) {
                return false;
            }
            ns.__proto__[s] = o;
        }
        /**
         @ns    leya.reg
         @param {String} Alias
         @param {Object} Object to add
         @return False if existing
         */
        ,reg: function(s, o) {
            if(alias[s]) {
                return false;
            }
            alias[s] = o;
        }
    };

    doc.leya = new leya();

})();
