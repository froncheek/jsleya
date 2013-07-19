
leya.abstract('leya.Container', {
	//attachTo: ly.fn,
    border: 8,
    renderTo: undefined,
    padding: 5,
    resizable: true,
    createTpl: function() {
        var border = this.border || 8,
            wrapper = {
                className: 'container'
            },
            canvas = {
                className: 'container-canvas',
                style: {}
            },
            leftDrag = {
                className: 'container-left-draggable',
                style: {
                    width: border
                }
            },
            rightDrag = {
                className: 'container-right-draggable',
                style: {
                    width: border
                }
            },
            innerWrapper = {
                className: 'container-inner',
                style: {}
            },
            bodyHeight = leya.getHeight(),
            bodyWidth = leya.getWidth(),
            thickness = ((this.resizable === true ? border : 0) * 2);

        if(this.contents && this.contents.count > 0) {
            canvas.children = [{
                className: 'container-content',
                style: {
                    height: bodyHeight - (this.padding * 4),
                    width: 25
                }
            }];
        } else {
            canvas.style.height = bodyHeight - thickness;
            canvas.style.width = bodyWidth - thickness;
        }

        if(this.resizable === true) {
            leftDrag.style.height = bodyHeight - thickness;
            rightDrag.style.height = bodyHeight - thickness;
            
            innerWrapper.style.width = bodyWidth;
            innerWrapper.children = [
                leftDrag, 
                canvas,
                rightDrag
            ];

            wrapper.children = [{
                className: 'container-top-draggable',
                style: {
                    height: border
                }
            }, 
            innerWrapper, {
                className: 'container-bottom-draggable',
                style: {
                    height: border
                }
            }];
        } else {
            wrapper.children = [ canvas ];
        }

        this.tpl = wrapper;
    },
    addEvents: function() {
        var self = this;

        leya.each(arguments, function(v) {
            var op = {};

            op[v] = {
                fn: self['on' + v],
                scope: self
            }
            leya.addObserver(op);
            delete self['on' + v];
        });
    },
    init: function() {
        //this.events = new leya.EventObserver('click', 'resize');
        //this.events.get();
        this.addEvents('resize');
        this.createTpl();
        this.render();
    },
    onresize: function() {
        var border = this.border || 0,
            bodyHeight = leya.getHeight(),
            bodyWidth = leya.getWidth(),
            thickness = ((this.resizable === true ? border : 0) * 2);

        if(this.contents && this.contents.length > 0) {
            // contents resize
        } else if(this.el) {
            var canvas = this.el.dom.getElementsByClassName('container-canvas')[0],
                totalWidth = bodyWidth - thickness,
                totalHeight = bodyHeight - thickness;

            if(this.resizable === true) {
                var innerWrapper = this.el.dom.getElementsByClassName('container-inner')[0],
                    ld = this.el.dom.getElementsByClassName('container-left-draggable')[0],
                    rd = this.el.dom.getElementsByClassName('container-right-draggable')[0];

                canvas.style.height = totalHeight;
                canvas.style.width = totalWidth;
                innerWrapper.style.width = bodyWidth;
                ld.style.height = bodyHeight - thickness;
                rd.style.height = bodyHeight - thickness;
            } else {
                canvas.style.width = 0;
                canvas.style.height = bodyHeight - thickness;
            }
        }
    },
    render: function() {    
        if(!this.el) {
            this.el = new leya.Element(this.tpl, 'wa');
        }
        this.show();
    },
    show: function() {
        document.body.appendChild(this.el.dom);
    },
    renderItems: function() {
    	var self = this,
    		items;

    	if(items = this.items) {
    		leya.each(items, function(item) {
    			self.contentEl.appendChild(item.el);	
    		});
    		
    	}
    }
});


// leya.override('test.Sample', {
//     base: leya.Container,
//     init: function() {
//         this.base.init.call(this);
//     },
//     render: function() {
//         this.base.render.call(this);
//     }
// });