leya.abstract('leya.lib.Event', {
	init: function() {
		var events = [],
			o = {};

		leya.extend(this, {
			addEvent: function() {
				leya.each(arguments, function(e) {
					o[n] = [];
					events.push(o);
				});
				
			},
			attach: function() {

			},
			fireEvent: function(ename, scope, args) {

			},
			removeEvent: function() {

			}
		});
	}
});