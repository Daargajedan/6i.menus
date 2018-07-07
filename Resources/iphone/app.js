




var Alloy = require('/alloy'),
_ = Alloy._,
Backbone = Alloy.Backbone;














if (Ti.Platform.displayCaps.platformWidth === 375 && Ti.Platform.displayCaps.platformHeight == 812 ||
Ti.Platform.displayCaps.platformHeight === 812 && Ti.Platform.displayCaps.platformWidth == 375) {
  Alloy.Globals.isIPhoneX = true;
}


Alloy.Globals.isOnline = Ti.Network.online ? 1 : 0;

Alloy.createController('index');