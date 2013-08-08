leya.override('leya.Container', {
	//attachTo: ly.fn,
    base: leya.lib.Event,
    border: true,
    borderStyle: {
        'border': '1px solid gray'
    },
    margin: true,
    marginStyle: {
        'margin': 5
    },
    paddingStyle: {
        'padding': 12
    },
    renderTo: undefined,
    resizable: false,
    shadow: true,
    createTpl: function() {
        var wrapper = {
                className: 'ct' + (this.shadow === true ? ' lyshdw' : '')
            },
            canvas = {
                className: 'ct-cnvs',
                style: {
                    'min-width' : 1040
                },
                children: [{
                    className: 'ct-ctns'
                }]
            },
            stylefn = function(pos, loc, len) {
                var o = {};

                o['padding' + pos] = len;
                o.cursor = loc + '-resize';

                return o;
            };

        if(this.resizable === true) {
            wrapper.children = [{
                style: stylefn('Left', 'nw', 8),
                children: [{
                    style: stylefn('Right', 'ne', 8),
                    children: [{
                        style: stylefn('Top', 'n', 8)
                    }]
                }]
            }, {
                style: stylefn('Left', 'w', 8),
                children: [{
                    style: stylefn('Right', 'e', 8),
                    children: [ canvas ]
                }]
            }, {
                style: stylefn('Left', 'sw', 8),
                children: [{
                    style: stylefn('Right', 'se', 8),
                    children: [{
                        style: stylefn('Bottom', 's', 8)
                    }]
                }]
            }];
        } else {
            wrapper.children = [ canvas ];

            if(this.border === true) {
                wrapper.style = this.borderStyle;
            }
        }

        if(this.margin === true) {
            leya.extend(wrapper.style, this.marginStyle);
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
        leya.Container.base.init.apply(this, arguments);
        //this.addEvents('resize');
        this.createTpl().render();
        return this;
    },
    onresize: function() {
        this.doLayout();
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
            className: 'ct-ctn',
            style: {
                padding: padding
            }
        }).dom));
        this.ctr++;
        return this;
    },
    render: function() {    
        var dom;

        this.el = leya.Element(this.tpl);
        dom = this.el.dom;
        this.canvas = dom.findByClass('ct-cnvs').eq(0);
        this.rendered = true;
        return this;
    },
    doLayout: function() {
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
            this.el.removeClass('lyhdn');
            if(this.parentCt) {
                this.parentCt.doLayout();
            }
        }
        this.doLayout();

        return this;
    },
    hide: function() {
        this.el.addClass('lyhdn');
        if(this.parentCt) {
            this.parentCt.doLayout();
        }
        return this;
    },
    renderItems: function() {
    	var self = this,
            padding = this.padding, 
            contents = this.el.dom.findByClass('ct-ctns').eq(0),
    		content;
        
    	if(content = this.contents) {
    		leya.each(content, function(content) {
                self.add(content);
    		});
    	}
    },
    getCanvas: function() {
        return (this.canvas = this.el.dom.findByClass('ct-cnvs').eq(0));
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
