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
                innerHTML: this.html || null,
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

        if(this.contents && this.contents.length > 0) {
            canvas.children = [{
                className: 'container-content',
                style: {
                    //height: bodyHeight - thickness,
                    //width: 25
                }
            }];
        } else {
            //canvas.style.height = bodyHeight - thickness;
            //canvas.style.width = bodyWidth - thickness;
        }

        if(this.resizable === true) {
            //leftDrag.style.height = bodyHeight - thickness;
            //rightDrag.style.height = bodyHeight - thickness;
            
            //innerWrapper.style.width = bodyWidth;
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
            //leya.addObserver(op);
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
            var canvas = this.el.findByClass('container-canvas')[0],
                totalWidth = bodyWidth - thickness,
                totalHeight = bodyHeight - thickness;

            if(this.resizable === true) {
                var innerWrapper = this.el.findByClass('container-inner').eq(0), //getElementsByClassName('container-inner')[0],
                    ld = this.el.findByClass('container-left-draggable')[0],
                    rd = this.el.findByClass('container-right-draggable')[0];

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
            this.el = new leya.Element(this.tpl);
        }
        
        this.rendered = true;
    },
    doLayout: function() {
        var canvas = this.el.findByClass('container-canvas').eq(0),
            ld = this.el.findByClass('container-left-draggable').eq(0),
            rd = this.el.findByClass('container-right-draggable').last();

        ld.setHeight(canvas.getHeight());
        rd.setHeight(canvas.getHeight());
    },
    show: function(dom) {
        if(!this.showed && (dom || (dom = this.renderTo))) {
            if(dom.appendChild) {
                dom.appendChild(this.el.dom);
            } else {
                dom.el.dom.appendChild(this.el.dom);
            }
            this.renderItems();
            this.showed = true;
        } else {
            this.el.removeClass('leya-hidden');
        }
        this.doLayout();
    },
    hide: function() {
        this.el.addClass('leya-hidden');
    },
    renderItems: function() {
    	var self = this,
    		content;

    	if(content = this.contents) {
    		leya.each(content, function(content) {
                content.parentCt = self;
                content.el.addClass('content');
                content.show(self.el.findByClass('container-content').eq(0));
                self.el.findByClass('container-content').eq(0).innerHTML += '<br>';
    		});
    	}
    },
    getEl: function() {
        return this.el;
    },
    getDom: function() {
        if(this.el) {
            return this.el.dom;
        }
    }
});
