

(function(window, undefined) {

    var leya = function() {
        //return class();
    };

    var util = leya.util = {
        isArray: function(obj) {
            return (obj instanceof Array);
        }
        ,isObject: function(obj) {
            return !(obj instanceof Array);
        }
    };

    var each = leya.each = function(arr, fn, scope) {
        if(arguments.length < 2) {
            return;
        }

        var len = arr.length,
            isObj = util.isObject(arr);

        if( isObj ) {
            for(var key in arr) {
                var val = arr[key];

                if(fn.call(scope || val, val, key) === false) {
                    return val;
                }
            }
        } else {
            for(var i = -1; len > ++i;) {
                var val = arr[i];

                if(fn.call(scope || val, val, i) === false) {
                    return val;
                }
            }
        }

        return arr;
    };

    var extend = leya.extend = function(base, obj) {

    };

    leya.class = function(newClass) {



        return new Object(newClass);
    };

    var model = leya.model = {
        Model: function() {

        }
    };

    var data = leya.data = {
        Record: function() {

        }
    };

    window.leya = leya;
})(window);