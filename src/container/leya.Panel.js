/*
Layout
	vertical
	horizontal
*/

leya.override('leya.Panel', {
	base: leya.Container,
	title: '',
	titlePosition: '',
	draggable: false,
	layout: '',
	shadow: true,
	init: function() {
		leya.Panel.base.init.apply(this, arguments);
	},
    add: function(con) {
    	var contents = this.el.dom.findByClass('ctctns').eq(0),
            padding = this.padding;

        contents.addStyle(this.paddingStyle);
        this.ctr = this.ctr || 0;
        con.parentCt = this;
        con.el.dom.addClass('ctn');
        con.show(contents.appendChild(leya.Element({
            tag: 'div',
            className: 'ct-ctn' + (this.layout == 'horz' ? ' pnl-lay-hor' : ''),
            style: {
                padding: padding
            }
        }).dom));

        if(con.el.dom.getFullWidth() > leya.parseInt(this.contentWidth)) {
            this.contentWidth = con.el.dom.getFullWidth();
        }
        this.ctr++;

        return this;
    },
    doLayout: function() {
    	leya.Panel.base.doLayout.call(this);

    	if(this.layout == 'horizontal') {
            //canvas.setWidth(leya.getWidth() - (this.border * 2) - (this.padding * 2) - 50);
            //innerWrapper.setWidth(canvas.getWidth() + 2);
        }
    	return this;
    },
	render: function() {
		leya.Panel.base.render.call(this);
		this.rendered = false;
		//this.renderCtrls();

		if(this.title) {
			var t = document.createElement('div'); 

			leya.extend(t, {
				innerHTML: this.title,
				className: 'pnttle' + (this.draggable ? ' leya-draggable' : '')
			});

			if(this.titlePosition === 'bottom') {
				this.el.dom.appendChild(t);
			} else {
				this.el.dom.prependChild(t);
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
		var t = this.el.dom.findByClass('pnttle').first();

		if(t) {
			this.title = t.innerHTML = title;
		}
	}
});