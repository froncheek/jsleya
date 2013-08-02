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
			var t = leya.Element({
					tag: 'div',
					innerHTML: this.title,
					className: 'pnl-ttle'
				});

			if(this.draggable) {
				t.addClass('leya-draggable');			
			}
			if(this.titlePosition === 'bottom') {
				this.canvas.appendChild(t.dom);
			} else {
				this.canvas.prependChild(t.dom);
			}
			if(this.html) {
				this.canvas.appendChild(leya.Element({
					className: 'pnl-html',
					innerHTML: this.html
				}).dom);
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
	},
	setTitle: function(title) {
		var t = this.el.findByClass('pnl-ttle').first();

		if(t) {
			t.innerHTML = title;
		}
	}
});