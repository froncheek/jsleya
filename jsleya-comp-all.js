leya.abstract('leya.EventObserver', {
    init: function() {
        var events = [].slice.call(arguments),
            _init = function() {};

        _init.prototype.add = function(e) {
            if(e) {
                events.push(e);
            }
        };

        _init.prototype.get = function() {
            console.log(events);
        };

        _init.prototype.remove = function() {

        };

        return new _init(arguments);
    }
});

leya.abstract('leya.ElementTpl', {
	init: function() {

	}
});

leya.abstract('leya.Container', {
	//attachTo: ly.fn,
    border: true,
    renderTo: undefined,
    tpl: new leya.ElementTpl({

    }),
    init: function() {

        this.events = new leya.EventObserver('click', 'resize');

        this.events.get();

        this.render();
    },
    render: function() {
        //
        var dom;

        this.el = new leya.Element({
            tag: 'div',
            renderTo: document.body,
            className: 'container',
            style: {
                height: '100%',
                padding: (this.border ? 8 : 0)
            },
            children: [{
                tag: 'div',
                className: 'container-content',
                style: {
                    height: leya.getHeight()
                }
            }]
        });

        dom = this.el.dom;
        /*this.el = div2;
        this.contentEl = div3;

        this.renderItems();*/
        this.show();
    },
    show: function() {
        //document.body.appendChild(this.el.dom);
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



leya.override('test.Sample', {
    base: leya.Container,
    init: function() {
        this.base.init.call(this);
    },
    render: function() {
        this.base.render.call(this);
    }
});