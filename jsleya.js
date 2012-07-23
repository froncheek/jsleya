

(function(window, undefined) {

    var leya = (function() {
        /*return {
            back: function() {
                alert('sdgsdgsdgsdgsd');
            }
        };  */

        var leya = function() {};

        leya.extend = leya.prototype.extend = function(base, ext) {
            var base = base || {},
                target = (arguments[2] ? base : new base),//(copybase ? new base : {}),
                source = ext || {};

            for(var name in source) {
                target[name] = source[name];
            }

            return target;
        };

        leya.extend(leya, {
            util: {
                isArray: function(obj) {
                    return (obj instanceof Array);
                }
                ,isObject: function(obj) {
                    return !(obj instanceof Array);
                }
            }
            ,class: function() {
                return;
            }
            ,each: function(arr, fn, scope) {
                var len = arr.length,
                    isObj = len === undefined || leya.util.isObject(arr);

                if( isObj ) {
                    for(var key in arr) {
                        var val = arr[key];

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

                return arr;
            }
        }
        ,true);

        return leya;
    })();

    window.leya = leya;
})(window);