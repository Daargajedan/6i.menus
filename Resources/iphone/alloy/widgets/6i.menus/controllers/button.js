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
	this.__controllerPath = 'button';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.container = Ti.UI.createView(
	{ id: "container" });

	$.__views.container && $.addTopLevelView($.__views.container);
	$.__views.button = Ti.UI.createView(
	{ width: Ti.UI.FILL, height: Ti.UI.FILL, touchEnabled: false, bubbleParent: true, backgroundColor: "#C06C84", borderRadius: 0, id: "button" });

	$.__views.container.add($.__views.button);
	$.__views.title = Ti.UI.createLabel(
	{ width: Ti.UI.SIZE, height: Ti.UI.FILL, touchEnabled: false, bubbleParent: true, color: "#FFF", font: { fontWeight: "bold", fontSize: 18 }, text: 'Close', id: "title" });

	$.__views.button.add($.__views.title);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var args = _.extend({
		title: 'Click',
		icon: false,
		width: '100%',

		isFirst: false,
		isLast: false },
	arguments[0] || {});

	$.title.text = args.title;
	$.container.setWidth(args.width - 0.01 + '%');

	var data = args;
	delete data.width;


	$.container.data = args;

	$;









	_.extend($, exports);
}

module.exports = Controller;