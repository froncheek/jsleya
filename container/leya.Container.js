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
                className: 'ctnr' + (this.shadow === true ? ' leya-shadow' : ' ')
            },
            canvas = {
                className: 'ctnr-canvas',
                //innerHTML: this.html || null,
                style: {}
            },
            leftDrag = {
                className: 'ctnr-left-draggable',
                style: {
                    width: border
                }
            },
            rightDrag = {
                className: 'ctnr-right-draggable',
                style: {
                    width: border
                }
            },
            innerWrapper = {
                className: 'ctnr-inner',
                style: {}
            },
            bodyHeight = leya.getHeight(),
            bodyWidth = leya.getWidth(),
            thickness = ((this.resizable === true ? border : 0) * 2);

        //if(this.contents && this.contents.length > 0) {
            canvas.children = [{
                className: 'ctnr-contents'
            }]
        //}

        if(this.resizable === true) {
            innerWrapper.children = [
                leftDrag, 
                canvas,
                rightDrag
            ];

            wrapper.children = [{
                className: 'ctnr-top-draggable',
                style: {
                    height: border
                }
            }, 
            innerWrapper, {
                className: 'ctnr-bottom-draggable',
                style: {
                    height: border
                }
            }];
        } else {
            wrapper.children = [ canvas ];
        }

        this.tpl = wrapper;
        return this;
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
        //this.addEvents('resize');
        this.createTpl().render();
        return this;
    },
    onresize: function() {
        this.doLayout();
    },
    add: function(con) {
        var contents = this.el.findByClass('ctnr-contents').eq(0),
            padding = this.padding;

        this.ctr = this.ctr || 0;
        con.parentCt = this;
        con.el.addClass('content');
        con.show(contents.appendChild(leya.Element({
            tag: 'div',
            className: 'ctnr-content',
            style: {
                padding: ['0 ', padding, ' ', padding, ' ', padding].join(''),
                paddingTop: (this.ctr == 0 ? padding : 0) 
            }
        }).dom));
        this.ctr++;
        //this.doLayout();
    },
    render: function() {    
        this.el = leya.Element(this.tpl);
        this.canvas = this.el.findByClass('ctnr-canvas').eq(0);
        this.rendered = true;
        return this;
    },
    doLayout: function() {
        var innerWrapper = this.el.findByClass('ctnr-inner').eq(0),
            canvas = this.canvas, //this.el.findByClass('ctnr-canvas').eq(0),
            ld = this.el.findByClass('ctnr-left-draggable').eq(0),
            rd = this.el.findByClass('ctnr-right-draggable').last();

        if(!this.parentCt) {
            canvas.setWidth(leya.getWidth() - (this.border * 2));
            innerWrapper.setWidth(canvas.getWidth() + (this.border * 2));
        }
        ld.setHeight(canvas.getHeight());
        rd.setHeight(canvas.getHeight());

        if(this.parentCt) {
            this.parentCt.doLayout();
        }
        return this;
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

        return this;
    },
    hide: function() {
        this.el.addClass('leya-hidden');
        if(this.parentCt) {
            this.parentCt.doLayout();
        }
        return this;
    },
    renderItems: function() {
    	var self = this,
            padding = this.padding, 
            contents = this.el.findByClass('ctnr-contents').eq(0),
    		content;

    	if(content = this.contents) {
    		leya.each(content, function(content) {
                self.add(content);
                // content.parentCt = self;
                // content.el.addClass('content');
                // content.show(contents.appendChild(leya.Element({
                //     tag: 'div',
                //     className: 'ctnr-content',
                //     style: {
                //         padding: ['0 ', padding, ' ', padding, ' ', padding].join(''),
                //         paddingTop: (idx == 0 ? padding : 0) 
                //     }
                // }).dom));
    		});
    	}
    },
    getCanvas: function() {
        return (this.canvas = this.el.findByClass('ctnr-canvas').eq(0));
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
