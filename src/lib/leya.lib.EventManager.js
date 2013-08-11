leya.static('leya.lib.EventManager', {
	init: function() {
		if(!this.add) {
			var self = this;
			this.events = {};
			this.add = function(e) {
				leya.each(e, function(v, k) {
					var fn = function(v, k) {
						return function() {
							if(self.events[k] && self.events[k].scope != v.scope) {
								self.events[k].fn.apply(self.events[k].scope, arguments);
							} else {
								if(v.fn.apply(v.scope, arguments) !== false) {
									if(v.reg) {
										leya.each(v.reg, function(reg) {
											reg.scope = reg.scope || v.scope;
											self.events[reg.evt] = {
												scope: reg.scope,
												fn: function() {
													reg.fn = reg.fn;
													return fn(reg, reg.evt);
												}()
											};
										});
									}
									if(v.unreg) {
										leya.each(v.unreg, function(unreg) {
											unreg.scope = unreg.scope || v.scope;
											if(self.events[unreg.evt]) {
												if(self.events[unreg.evt].scope == unreg.scope) {
													self.events[unreg.evt] = null;
												}
											}
										});
									}
								}
							}
						};
					};

					if(v.scope.on) {
						v.scope.on(k, fn(v, k));
					} else {
						leya.addEvent(v.scope, k, fn(v, k));
					}
					
				});
			};
			this.run = function() {};
			this.rem = function() {};	

			this.add.call(this, {
			    mousedown: {
			        scope: window,
			        fn: function() {}
			    },
			    mousemove: {
			       scope: window,
			        fn: function() {}
			    },
			    mouseup: {
			        scope: window,
			        fn: function() {}
			    }
			});
		}
		this.add.apply(this, arguments);
	},
	events: {}
});
