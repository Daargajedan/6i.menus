var args = _.extend({
	title		: 'Click',
	icon		: false,
	width		: '100%',

	isFirst	: false, // Is it the first button in the row
	isLast	: false, // Is it the last button in the row
}, arguments[0] || {});

$.title.text 			= args.title;
$.container.setWidth((args.width-0.01) + '%'); // Add -0.01 for redraw issues.

var data = args;
delete data.width;

// Set data to all elements for click event.
$.container.data 	= args;
//$.button.data 		= args;
$//.title.data 			= args;
