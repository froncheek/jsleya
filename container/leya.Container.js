leya.abstract('leya.Container', {
	//attachTo: ly.fn,
    border: 1,
    renderTo: undefined,
    padding: 12,
    resizable: true,
    shadow: true,
    createTpl: function() {
        var border = this.border || 0,
            wrapper = {
                className: 'container' + (this.shadow === true ? ' leya-shadow' : ' ')
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
                className: 'container-contents'
            }]
        }

        if(this.resizable === true) {
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
        this.doLayout();
    },
    render: function() {    
        this.el = new leya.Element(this.tpl);
        this.canvas = this.el.findByClass('container-canvas').eq(0);
        this.rendered = true;
    },
    doLayout: function() {
        var innerWrapper = this.el.findByClass('container-inner').eq(0),
            canvas = this.canvas, //this.el.findByClass('container-canvas').eq(0),
            ld = this.el.findByClass('container-left-draggable').eq(0),
            rd = this.el.findByClass('container-right-draggable').last();

        if(!this.parentCt) {
            canvas.setWidth(leya.getWidth() - (this.border * 2));
            innerWrapper.setWidth(canvas.getWidth() + (this.border * 2));
        }
        ld.setHeight(canvas.getHeight());
        rd.setHeight(canvas.getHeight());

        if(this.parentCt) {
            this.parentCt.doLayout();
        }
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
            if(this.parentCt) {
                this.parentCt.doLayout();
            }
        }
        this.doLayout();
    },
    hide: function() {
        this.el.addClass('leya-hidden');
        if(this.parentCt) {
            this.parentCt.doLayout();
        }
    },
    renderItems: function() {
    	var self = this,
            padding = this.padding, 
            contents = this.el.findByClass('container-contents').eq(0),
    		content;

    	if(content = this.contents) {
    		leya.each(content, function(content, idx) {
                content.parentCt = self;
                content.el.addClass('content');
                content.show(contents.appendChild(new leya.Element({
                    tag: 'div',
                    className: 'container-content',
                    style: {
                        padding: ['0 ', padding, ' ', padding, ' ', padding].join(''),
                        paddingTop: (idx == 0 ? padding : 0) 
                    }
                }).dom));
    		});
    	}
    },
    getCanvas: function() {
        return (this.canvas = this.el.findByClass('container-canvas').eq(0));
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
