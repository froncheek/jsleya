leya.override('leya.Button', {
	base: leya.Container,
	text: '',
	init: function() {
		leya.Button.base.init.apply(this, arguments);
	},
	render: function() {
		leya.Button.base.render.call(this);

		this.canvas.createEl({
			tag: 'div',
			className: 'button-text',
			innerHTML: this.text
		});
	},
	renderItems: function() {}
});