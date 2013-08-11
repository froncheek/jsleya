leya.abstract('leya.EventListener', {
	init: function() {
		var events = {};

		this.addEvent = function() {
			leya.each(arguments, function(e) {
				events[e] = [];
			});
			
		};

		this.getEvent = function(ename) {
			return events[ename];
		};
	}, 
	attachEvent: function(ename, fn, scope) {
		if(ename = this.getEvent(ename)) {
			ename.push({
				fn: fn,
				scope: scope || this
			});
		}
	},
	fireEvent: function(ename, scope, args) {
		if(ename = this.getEvent(ename)) {
			leya.each(ename, function(o) {
				o.fn.apply(scope || o.scope, args);
			});
		}
	},
	removeEvent: function() {

	}
});