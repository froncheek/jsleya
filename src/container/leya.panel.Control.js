leya.override('leya.panel.Control', {
	base: leya.Panel,
	titlePosition: 'bottom',
	init: function() {
		leya.panel.Control.base.init.apply(this, arguments);
	},
	render: function() {
		leya.panel.Control.base.render.call(this);

		var canvas = this.getCanvas();

		canvas.createEl({
			tag: 'div'
		})
	},
	showControl: function(o) {
		this.show(o);
	}
});