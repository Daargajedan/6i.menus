var args = _.extend({
	debug 									: false,
	style										: 'bottom',
	animationDurationOpen 	: 200,
	animationDurationClose 	: 200,

	// Can be adjust by open
	showNavBar 		: true,
	showBtnBar 		: true, // Adds close button if empty

	// Data
	title	: false,
	icon	: false,

}, arguments[0] || {});


// Settings for layout
var rowHeight 					= 44;

var navBarHeight 				= 44,
    titleLeftWithouIcon	= 8;

// Save this controller in that so we can use it in the fn tree
var that = this;

// Load variables
var didInit 				= false,
    isAddedToParent = false;

// Amount of rows currentrly made
var currentRows = 0;

// Amount of buttons currentrly made
var currentBtns = 0;
// Total buttons gonna made and made.
var totalBtns 	= 0;

// Style start and clode animations and start points.
var styles = {
	bottom: {
		beginStyle: {
			bottom: -900,
			opacity		: 0,
		},
		animations: {
			open: function(){
					$.menuContainer.animate({
						bottom		: 0,
						opacity		: 1,
						duration	: args.animationDurationOpen
					});
			},
			close: function(){
				$.menuContainer.animate({
					bottom		: -900,
					opacity		: 1,
					duration	: args.animationDurationClose
				});
			}
		}
	},
	mid: {
		beginStyle: {
			bottom		: null,
			opacity		: 0,
		},
		animations: {
			open: function(){
				var matrix = Ti.UI.create2DMatrix();
				matrix = matrix.scale(0.01, 0.01);
				$.menuContainer.setTransform(matrix);

				var matrix = Ti.UI.create2DMatrix();
			  matrix = matrix.scale(1, 1);
				$.menuContainer.animate({
					transform : matrix,
					opacity		: 1,
					duration	: args.animationDurationOpen
				});
			},
			close: function(){
				$.menuContainer.animate({
					opacity		: 0,
					duration	: args.animationDurationClose
				});
			}
		}
	},
	dialog: {
		beginStyle: {
			bottom		: null,
			opacity		: 0,
		},
		animations: {
			open: function(){
				var matrix = Ti.UI.create2DMatrix();
				matrix = matrix.scale(0.01, 0.01);
				$.menuContainer.setTransform(matrix);

				var matrix = Ti.UI.create2DMatrix();
				matrix = matrix.scale(1, 1);
				$.menuContainer.animate({
					transform : matrix,
					opacity		: 1,
					duration	: args.animationDurationOpen
				});
			},
			close: function(){
				$.menuContainer.animate({
					opacity		: 0,
					duration	: args.animationDurationClose
				});
			}
		}
	},
};
// Last used and current used syyle, sets on open.
var lastSetStyle = '';

// Save style
var btnBarHeight 	= $.btnBar.getHeight(),
    btnBarTop 		= $.btnBar.getTop(),
    btnBarBottom 	= $.btnBar.getBottom();

// Save style
var messageTop 			= $.message.getTop(),
    messageBottom 	= $.message.getBottom();

// Set some settings for the resize
var df 						= ((OS_IOS)? 1 : Ti.Platform.displayCaps.logicalDensityFactor), // densityFactor
//		ph 						= Ti.Platform.displayCaps.platformHeight / df, // Set pixels to dp.

ph 							= ((OS_IOS)? Ti.Platform.displayCaps.platformHeight : Ti.Platform.displayCaps.platformHeight / (Titanium.Platform.displayCaps.dpi / 160));


var maxMenuHeight = ph * 0.9, // set 90% max-height
    titleLeft 		= $.title.getLeft();

var fn = {
	init: function(){
		if(!didInit){
			didInit = true;
			fn.setStyle(args.style);
			fn.navBar.set(args);
		}
	},
	addToParent: function(){
		// Add view to parent
		if(!isAddedToParent){
			isAddedToParent = false;
			if(args.parent){
				args.parent.add( that.getView() );
			}
		}
	},
// Elements
	mask: {
		click: function(e){
			if(args.debug) { console.log('6i.menus: Clicked on Mask'); }
			fn.close();
		},
		show: function (){
			$.mask.opacity = 0;
			$.mask.visible = true;
			$.mask.animate({
				opacity		: 1,
				duration	: parseInt(args.animationDurationOpen-(args.animationDurationOpen*0.9))
			}, function() {

			});
		},
		hide: function (){
			$.mask.animate({
				opacity		: 0,
				duration	: parseInt(args.animationDurationClose)
			}, function() {
				$.mask.visible = false;
			});
		},
	},
	navBar: {
		set: function(uiData){
			// Set UI

			// Navbar
			if(fn.utils.ifTrue(uiData.showNavBar)){
				$.navBar.visible 	= true;
				$.navBar.height 	= navBarHeight;

			}else{
					$.navBar.visible 	= false;
					$.navBar.height 	= 0;
			}

			// Close button
			if(fn.utils.ifTrue(uiData.showBtnBar) || uiData.style == 'dialog'){
				$.btnBar.visible 	= true;
				$.btnBar.height 	= btnBarHeight;
				$.btnBar.top 			= btnBarTop;
				$.btnBar.bottom 	= btnBarBottom;

			}else{
					$.btnBar.visible 	= false;
					$.btnBar.height 	= 0;
					$.btnBar.top 			= 0;
					$.btnBar.bottom 	= 0;
			}

			// Title
			if(uiData.title){
				$.title.text = uiData.title;
			}else{
				$.title.text = '';
			}

			// Icon
			if(fn.utils.ifTrue(uiData.icon)){
					$.icon.visible 	= true;
					$.icon.image 		= uiData.icon;
					$.title.left 		= titleLeft;
			}else{
					$.icon.visible 	= false;
					$.title.left 		= titleLeftWithouIcon;
			}
		},
	},
	menu: {
		clear: function(){
			$.menuTable.setData({});
		},
		addItems: function(data){
			var objects = [];
			currentRows=0;
			for(var k in data){
				objects.push(fn.menu.addItem(data[k]));
				currentRows ++;
			}
			$.menuTable.setData(objects);
		},
		addItem: function(data){
			data.height = rowHeight;
			var row = Widget.createController('row', data);
			return row.getView();
		},

		show: function(){
			// Get form styles
			styles[lastSetStyle].animations.open();
		},
		hide: function(){
			// Get form styles
			styles[lastSetStyle].animations.close();
		},

		// Events
		click: function(e){
			var item = e.source.data;
			console.log('Row:');
			console.log(e);
			if(args.debug) {
				var h 	=  ((item)? ((item.callback)? 'Yes' : 'No') : 'No');
				var dc 	=  ((item)? ((item.doClose)? 'Yes' : 'No') : 'No');
				console.log('6i.menus: Clicked on item has on callback: ' + h +  ' | callback: ' + dc);
		  }
			if(item){
				if(item.callback){
					item.callback();
				}

				// Close
				if(item.doClose){
					fn.close();
				}
			}
		},
	},
	message: {
		set: function(data){
			if(data.message){
				$.message.text 		= data.message;
				$.message.visible = true;
				$.message.height 	= 'auto';
				$.message.top 		= messageTop;
				$.message.bottom 	= messageBottom;
				$.message.addEventListener('postlayout', fn.message.postlayout);
			}else{
				$.message.text 		= '';
				$.message.visible = false;
				$.message.height 	= 0;
				$.message.top 		= 0;
				$.message.bottom 	= 0;
			}
		},
		postlayout: function(){
				fn.resize();
				$.message.removeEventListener('postlayout', fn.message.postlayout);
		}
	},
	btnBar: {
		set: function(data){
			var btns = [];
			// clear
			fn.btnBar.clear();

			// Add buttons
			if(data.btns){
				for(var k in data.btns){
					btns.push(data.btns[k]);
				}
			}

			if(data.style != 'dialog'){
				// Add close btns
				if(data.showCloseBtn && !data.btns){
					btns.push({
						title		: 'Close',
						doClose	: true,
					});
				}
			}
			//
			fn.btnBar.addItems(btns);
		},
		clear: function(){
			var children = $.btnBar.children.slice(0);
			for (var i = 0; i < children.length; ++i) {
				$.btnBar.remove(children[i]);
			}
		},
		addItems: function(data){
			currentBtns	= 0;
			totalBtns		=	data.length;
			var i=0;
			for(var k in data){
				if(data[k]){
					data[k].width = 100/totalBtns;
					if(i==0){data[k].isFirst = true;}
					if(i>=totalBtns){data[k].isLast  = true;}
					var v = fn.btnBar.addItem(data[k]);
					$.btnBar.add(v);
					currentBtns ++;
					i++;
				}
			}
		},
		addItem: function(data){
			var button = Widget.createController('button', data);
			return button.getView();
		},
		click: function(e){
			var item = e.source.data;
			if(args.debug) { console.log('6i.menus: Clicked on btn: ' + item.title); }

			if(item.callback){
				item.callback();
			}

			if(item.doClose){
				fn.close();
			}
		},
	},

// Events
	resize: function(){
		var h = 0;
		var hmt = parseInt($.marginTop.getHeight());
		var hmb = parseInt($.marginBottom.getHeight());
		var hnb = parseInt($.navBar.getHeight());
		var hm 	= parseInt($.message.size.height)  + parseInt($.message.getTop()) + parseInt($.message.getBottom());
		var hcb = parseInt($.btnBar.getHeight() + parseInt($.btnBar.getTop()) + parseInt($.btnBar.getBottom()));
		if($.message.visible == false){
			hm = 0;
		}
		h = hmt+hmb+hnb+hcb+hm;
		var menuTable = 0;

		for(var i=0; i< currentRows; i++){
			if(parseInt(h+rowHeight) > maxMenuHeight){
				break;
			}else{
				h = h + rowHeight;
				menuTable = menuTable + rowHeight;
			}
		}
		$.menuContainer.setHeight(h);
		$.menuTable.setHeight(menuTable);
		$.menu.setHeight(menuTable+hnb+hcb+hm);
	},
	setStyle: function(style){
			if(styles[style]){
				if(lastSetStyle != style){ // Dont set style when already active
					if(args.debug) { console.log('6i.menus: Set new properties: ' + JSON.stringify(styles[style].beginStyle) ); }
					lastSetStyle = style;
					$.menuContainer.applyProperties(styles[lastSetStyle].beginStyle);
				}
			}else{
				lastSetStyle = args.style; // Back to default
				if(args.debug) { console.log("6i.menus: ERROR Style: " + style + " doesnt exsists. Set default: " + lastSetStyle); }
			}
	},
// Public methodes
	open: function(dataNew){
		fn.init();
		fn.addToParent();

		fn.mask.show();

		// Get default settings add the new ones
		var data = {};
		data = _.extend(data, args, dataNew);

		// Clear
		fn.menu.clear();

		// Set styles
		if(data.style){
			fn.setStyle(data.style);
		}

		// Set UI
		fn.navBar.set(data);
		fn.btnBar.set(data);
		fn.message.set(data);

		// Update the menu
		fn.menu.addItems(data.items);
		fn.resize();

		// Show
		fn.menu.show();
	},
	close: function(){
		fn.menu.hide();
		fn.mask.hide();
	},

// Utils
	utils: {
		// So you can use it in the views like data='false'
		ifTrue: function(value){
			if(value
			&& value != null
			&& value != 'null'
			&& value != 'false'
			&& value != 'undefined'){
				return true;
			}else{
				return false;
			}
		}
	}
};

// Events
$.mask.addEventListener('click', function(e){
	fn.mask.click(e);
});
$.btnBar.addEventListener('click', function(e){
	fn.btnBar.click(e);
});
$.menuTable.addEventListener('click', function(e){
	fn.menu.click(e);
});

// Set new vars on orientation change
Ti.Gesture.addEventListener('orientationchange',function(e) {
	if(e.source.portrait){}
	if(e.source.landscape){}

	ph 						= Ti.Platform.displayCaps.platformHeight / df;
	maxMenuHeight = ph * 0.8;
});


// Public methodes
exports.open = function(opts) {
	if(args.debug) { console.log('6i.menus: Open menu, with settings: ' + JSON.stringify(opts)); }
	fn.open(opts);
};
exports.close = function() {
	fn.close();
};
