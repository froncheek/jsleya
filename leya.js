/**
 * Created by IntelliJ IDEA.
 * User: froncheek
 * Date: 8/26/12
 * Time: 3:30 PM
 * To change this template use File | Settings | File Templates.
 */

(function(undefined) {
    var win = window,
        doc = win.document;

    var leya = {};

    leya.__proto__ = {
        each: function(o, fncbk, scp) {
            var len = o.length,
                isO = len == undefined,
                v, k = 0;

            if(isO) {
                for(k in o) {
                    v = o[k];

                    if(fncbk.call(scp || v, v, k) === false) {
                        return v;
                    }
                }
            } else {
                for(;k < len;) {
                    v = o[k];

                    if(fncbk.call(scp || v, v, k++) === false) {
                        return v;
                    }
                }
            }
        }
        ,extend: function(fr, to) {
            var o = to,
                v;

            for(var i in fr) {
                v = o[i];
                v = v || fr[i];
            }

            return o;
        }
        ,isArray: function(a) {
            return (a instanceof Array);
        }
        ,isFunction: function(f) { //todo: need to modify this checking
            return (f instanceof Function); //(f.apply && f.call);
        }
        ,isNumber: function(n) {
            return (typeof n == 'string' || typeof n == 'number') && !isNaN(n - 0) && n !== '';
        }
        ,isString: function(s) {
            return (typeof(s) === 'string');
        }
        ,isObject: function(o) {
            return (o instanceof Object) && !this.isArray(o) && !this.isFunction(o);
        }
    };

    // @ns: leya.Panel
    leya.Panel = function(c) {

    };

    win.leya = leya;
})();

var panel = leya.Panel({
    title: 'Title of Panel'
});

leya.create({
    child: [panel]
});