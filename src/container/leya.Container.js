leya.override('leya.Container', {
    base: leya.EventListener,
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
    expandWidth: true,
    expandHeight: true,
    createTpl: function() {
        var self = this,
            wrapper = {
                className: 'ct' + (this.shadow === true ? ' lyshdw' : ''),
                style: {
                    width: this.width ? this.width : '',
                    display: (this.width ? 'inline-block' : '')
                }
            },
            canvas = {
                className: 'ct-cnvs',
                children: [{
                    className: 'ct-ctns'
                }],
                style: {
                    height: this.height ? this.height : ''
                }
            },
            stylefn = function(pos, loc, len) {
                var o = {};

                o['padding' + pos] = len;
                o.cursor = loc + '-resize';
                if(self.border == true) {
                    var st;
                    if((st = self.borderStyle['border-' + pos.toLowerCase()])) {
                        o['border' + pos] = st;
                    } else if(loc != 'n' && loc != 's'){
                        if(loc == 'nw') {
                            o['borderTop'] = self.borderStyle['border'];
                            o['borderLeft'] = self.borderStyle['border'];
                        } else if(loc == 'sw') {
                            o['borderBottom'] = self.borderStyle['border'];
                            o['borderLeft'] = self.borderStyle['border'];
                        } else {
                            o['border' + pos] = self.borderStyle['border'];
                        }
                    }
                }

                return o;
            };

        if(this.resizable === true) {
            leya.extend(wrapper.style, {
                display: 'inline-block'
            });

            wrapper.children = [{
                className: 'nwrsz',
                style: stylefn('Left', 'nw', 4),
                children: [{
                    className: 'nersz',
                    style: stylefn('Right', 'ne', 4),
                    children: [{
                        className: 'nrsz',
                        style: stylefn('Top', 'n', 4)
                    }]
                }]
            }, {
                className: 'wrsz',
                style: stylefn('Left', 'w', 4),
                children: [{ 
                    className: 'ersz',
                    style: stylefn('Right', 'e', 4),
                    children: [ canvas ]
                }]
            }, {
                className: 'swrsz',
                style: stylefn('Left', 'sw', 4),
                children: [{
                    className: 'sersz',
                    style: stylefn('Right', 'se', 4),
                    children: [{
                        className: 'srsz',
                        style: stylefn('Bottom', 's', 4)
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
    init: function() {
        leya.Container.base.init.apply(this, arguments);

        this.addEvent('beforeresize', 'resize', 'afterresize');
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
        var self = this,
            dom;

        this.el = leya.Element(this.tpl);
        dom = this.el.dom;
        this.canvas = dom.findByClass('ct-cnvs').eq(0);
        this.canvasCtns = dom.findByClass('ct-ctns').eq(0);
        this.rendered = true;
        this.regEvent(this.el.dom);

        leya.each(this.events, function(v, k) {
            self.attachEvent(k, v, self);
        });
        return this;
    },
    regEvent: function(dom) {
        var self = this,
            parentCt = self.parentCt,
            evmgr = leya.lib.EventManager;

        if(this.resizable === true) {
            var nw = dom.findByClass('nwrsz').first(),
                ne = nw.findByClass('nersz').first(),
                n = ne.findByClass('nrsz').first(),
                w = dom.findByClass('wrsz').first(),
                e = w.findByClass('ersz').first(),
                sw = dom.findByClass('swrsz').first(),
                se = sw.findByClass('sersz').first(),
                s = se.findByClass('srsz').first(),
                rsz = [ nw, ne, n, w, e, sw, se, s ],
                upfn = function(m) {
                    if(this.drag === true) {
                        this.drag = false;
                        this.dragging = false;
                        self.fireEvent('afterresize');
                    }
                },
                mvfn = function(m) {
                    if(this.drag == true) {
                        if(this.dragging == 'se' || (this.clientX >= dom.getFullWidth() - 8 && 
                            this.clientY >= dom.getFullHeight() - 8)) {
                            dom.setWidth(m.clientX - dom.offsetLeft);
                            self.canvasCtns.setHeight(m.clientY - self.canvasCtns.offsetTop);
                            this.dragging = 'se';
                        } else if(this.dragging == 'right' || this.clientX >= dom.getFullWidth() - 8) {
                            var parent = dom.parentNode,
                                width = m.clientX - dom.offsetLeft;

                            if(parent.getWidth() > width) {
                                dom.setWidth(width - 12);
                            } else {
                                var parentCt = self.parentCt;
                                if(parentCt.expandWidth == true) {
                                    parentCt.setWidth();
                                    dom.setWidth(width - 12);
                                } else {
                                    dom.setWidth(parent.getWidth() - 12);    
                                }
                            }
                            this.dragging = 'right';
                        } else if(this.dragging == 'bottom' || this.clientY >= self.canvasCtns.getFullHeight() - 8) {
                            self.canvasCtns.setHeight(m.clientY - self.canvasCtns.offsetTop);
                            this.dragging = 'bottom';
                        }
                        self.fireEvent('resize');
                        return true;
                    }
                    return false;
                },
                dwfn = function(m) {
                    this.drag = true;
                    this.clientX = m.clientX;
                    this.clientY = m.clientY;
                    self.fireEvent('beforeresize');
                    m.stopPropagation();
                };

            leya.each(rsz, function(r) {
                evmgr({
                    mousedown: {
                        scope: r,
                        reg: [{
                            evt: 'mousemove',
                            fn: mvfn
                        }],
                        fn: dwfn
                    },
                    mousemove: {
                        scope: r,
                        reg: [{
                            evt: 'mouseup',
                            fn: upfn
                        }],
                        fn: mvfn
                    },
                    mouseup: {
                        scope: r,
                        unreg: [{
                            evt: 'mousemove',
                            fn: mvfn
                        }, {
                            evt: 'mouseup',
                            fn: upfn
                        }],
                        fn: upfn
                    }
                });
            });
            evmgr({
                mousedown: {
                    scope: this.canvas,
                    fn: function(m) { m.stopPropagation();}
                }
            });
        }
        if(this.draggable === true) {

        }
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
    },
    getWidth: function() {
        return this.el.dom.getFullWidth();
    },
    getHeight: function() {
        return this.el.dom.getFullHeight();
    },
    setWidth: function(w) {
        this.el.dom.setWidth(w);
        return this;
    },
    setHeight: function() {
        return this;
    }
});
