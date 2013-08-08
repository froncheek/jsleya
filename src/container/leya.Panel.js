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
    	var contents = this.el.dom.findByClass('ct-ctns').eq(0),
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
        this.ctr++;
        return this;

      //   var contents = this.el.dom.findByClass('ct-ctns').eq(0),
      //       padding = this.padding;

      //   if(this.layout == 'horizontal') {
    		// contents.addStyle('overflow', 'scroll');
      //   }
      //   this.ctr = this.ctr || 0;
      //   con.parentCt = this;
      //   con.el.dom.addClass('ctn');
      //   con.show(contents.appendChild(leya.Element({
      //       tag: 'div',
      //       className: 'ct-ctn' + (this.layout == 'horizontal' ? ' pnl-lay-hor' : ''),
      //       style: {
      //           padding: padding
      //           //paddingTop: (this.ctr == 0 ? padding : 0) 
      //       }
      //   }).dom));
      //   this.ctr++;

      //   return this;
    },
    doLayout: function() {
    	leya.Panel.base.doLayout.call(this);

    	// var innerWrapper = this.el.findByClass('ctnr-inner').eq(0),
     //        canvas = this.canvas;

    	if(this.layout == 'horizontal') {
            //canvas.setWidth(leya.getWidth() - (this.border * 2) - (this.padding * 2) - 50);
            //innerWrapper.setWidth(canvas.getWidth() + 2);
        }
    	return this;
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
		var t = this.el.dom.findByClass('pnl-ttle').first();

		if(t) {
			t.innerHTML = title;
		}
	}
});