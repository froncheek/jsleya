leya.abstract('leya.data.DataRow', {
	init: function(data) {
		var dr = {
			column: {}
		};

		leya.each(data, function(val, key) {
			dr.column[key] = val;
		});

		return dr;
	}
});

leya.abstract('leya.data.DataTable', {
	autoLoad: false,
	root: '',
	init: function() {
		if(this.autoLoad === true) {
			this.load();
		}
	},
	load: function() {
		var self = this;

		leya.httpReq({
			url: this.url,
			onJSON: function(data) {
				if(self.root) {
					data = data[self.root];
				}
				self.createData(data);
			}
		});
	},
	createData: function(data) {
		var d = this.data = [];

		if(leya.isArray(data)) {

		} else {
			d.push(new leya.data.DataRow(data));
		}
	}
});