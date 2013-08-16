leya.override('leya.Container', {
    base: leya.EventListener,
    autoFit: true,
    border: true,
    borderStyle: {
        'border': '1px solid gray'
    },
    margin: true,
    marginStyle: {
        'margin': 5
    },
    paddingSize: 12,
    resizable: false,
    shadow: true,
    expandWidth: true,
    expandHeight: true,
    createTpl: function() {
        var self = this,
            contents = {
                className: 'ctctns',
                style: {
                    padding: this.paddingSize,
                    width: this.width ? this.width : ''
                }
            },
            wrapper = {
                className: 'ct' + (this.shadow === true ? ' lyshdw' : ''),
                style: {
                    //width: this.width ? this.width : ''
                },
                innerHTML: this.html ? '<div style="padding: 6px;">' + this.html + '</div>' : '',
                children: [ contents ]
            };

        if(this.resizable === true) {
            leya.extend(wrapper.style, {
                display: 'inline-block'
            });
        } 
        if(this.border === true) {
            leya.extend(wrapper.style, this.borderStyle);
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
        var contents = this.el.dom.findByClass('ctctns').eq(0),
            padding = this.padding;

        contents.addStyle(this.paddingStyle);
        this.ctr = this.ctr || 0;
        con.parentCt = this;
        con.el.dom.addClass('ctn');
        con.show(contents.appendChild(leya.Element({
            tag: 'div',
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
    render: function() {    
        var self = this,
            dom;

        this.el = leya.Element(this.tpl);
        dom = this.el.dom;
        this.regEvent(this.el.dom);
        leya.each(this.events, function(v, k) {
            self.attachEvent(k, v, self);
        });
        this.rendered = true;

        return this;
    },
    regEvent: function(dom) {
        var self = this,
            parentCt = self.parentCt,
            evmgr = leya.lib.EventManager;

        if(this.resizable === true) {
            
        }
        if(this.draggable === true) {

        }
    },
    doLayout: function() {
        var dom = this.el.dom,
            ctns = dom.findByClass('ctctns').eq(0);

        if(this.height) {
            var h = dom.offsetTop + this.height;

            ctns.setHeight(h - ctns.offsetTop);
        }
        if(this.expandWidth) {
            
            if(this.contentWidth) {
                dom.addStyle({
                    width: '',
                    display: 'inline-block'
                });
                ctns.setWidth(this.contentWidth);
            }
            
            //dom.setWidth(ctns.getWidth());
        }

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
