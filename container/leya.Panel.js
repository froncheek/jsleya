leya.override('leya.Panel', {
	base: leya.Container,
	title: '',
	titlePosition: '',
	draggable: false,
	init: function() {
		leya.Panel.base.init.apply(this, arguments);
	},
	render: function() {
		leya.Panel.base.render.call(this);
		this.rendered = false;
		this.renderCtrls();

		if(this.title) {
			//var canvas = this.el.findByClass('container-canvas').eq(0),
			var t = new leya.Element({
					tag: 'div',
					innerHTML: this.title,
					className: 'panel-title'
				});

			if(this.draggable) {
				t.addClass('leya-draggable');			
			}
			if(this.titlePosition === 'bottom') {
				this.canvas.appendChild(t.dom);
			} else {
				this.canvas.prependChild(t.dom);
			}
		}

		this.rendered = true;
	},
	renderCtrls: function() {
		var canvas = this.canvas,
			ctrls = this.controlPanels;

		if(ctrls) {
			var top;
			if((top = ctrls.top) && top.length > 0) {
				leya.each(top, function(ctrl) {
					canvas.prependChild(ctrl.el.dom);
				});
			}
		}
	}
});