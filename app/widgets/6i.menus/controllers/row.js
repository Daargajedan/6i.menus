var args = _.extend({
	title		: 'Here a title',
	image		: false,
	height	: '44dp',

}, arguments[0] || {});

$.title.text 	= args.title;
$.row.height 	= args.height;
var data = args;
delete data.height;
$.row.data 		= args;
