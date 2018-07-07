// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

// Devices
if((Ti.Platform.displayCaps.platformWidth === 375 && Ti.Platform.displayCaps.platformHeight == 812) || // Portrait
  (Ti.Platform.displayCaps.platformHeight === 812 && Ti.Platform.displayCaps.platformWidth == 375)){ // Landscape
	Alloy.Globals.isIPhoneX = true;
}

// Online
Alloy.Globals.isOnline 	= (Ti.Network.online)? 1 : 0;
