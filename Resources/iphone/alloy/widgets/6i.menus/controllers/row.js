var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ?
	'6i.menus/' + s :
	s.substring(0, index) + '/6i.menus/' + s.substring(index + 1);

	return path.indexOf('/') !== 0 ? '/' + path : path;
}

function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
	}
	return arg;
}

function Controller() {
	var Widget = new (require('/alloy/widget'))('6i.menus');this.__widgetId = '6i.menus';
	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'row';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.row = Ti.UI.createTableViewRow(
	{ selectedBackgroundColor: "#F8B195", id: "row" });

	$.__views.row && $.addTopLevelView($.__views.row);
	$.__views.title = Ti.UI.createLabel(
	{ touchEnabled: false, bubbleParent: true, color: "#6C5B7B", left: 10, id: "title" });

	$.__views.row.add($.__views.title);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var args = _.extend({
		title: 'Here a title',
		image: false,
		height: '44dp' },

	arguments[0] || {});

	$.title.text = args.title;
	$.row.height = args.height;
	var data = args;
	delete data.height;
	$.row.data = args;









	_.extend($, exports);
}

module.exports = Controller;