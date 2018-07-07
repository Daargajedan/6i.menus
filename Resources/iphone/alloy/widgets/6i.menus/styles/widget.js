module.exports = [{ "isClass": true, "priority": 10000.0019, "key": "navBarBtn", "style": { width: Ti.UI.SIZE, height: Ti.UI.FILL } }, { "isClass": true, "priority": 10000.9033, "key": "navBarBtn", "style": { width: Ti.UI.SIZE, height: Ti.UI.FILL } }, { "isId": true, "priority": 100000.001, "key": "mask", "style": { top: 0, right: 0, bottom: 0, left: 0, visible: false } }, { "isId": true, "priority": 100000.0011, "key": "menuContainer", "style": { height: "0", width: "90%", layout: "vertical" } }, { "isId": true, "priority": 100000.0012, "key": "menuTable", "style": { width: Ti.UI.FILL } }, { "isId": true, "priority": 100000.0013, "key": "marginTop", "style": { height: "22dp" } }, { "isId": true, "priority": 100000.0014, "key": "marginBottom", "style": { height: "22dp" } }, { "isId": true, "priority": 100000.0017, "key": "menu", "style": { top: 0, bottom: 0, bubbleParent: false, width: Ti.UI.FILL, layout: "vertical" } }, { "isId": true, "priority": 100000.0018, "key": "navBar", "style": { width: Ti.UI.FILL } }, { "isId": true, "priority": 100000.002, "key": "icon", "style": { height: "38dp", width: "38dp", top: 4, left: 4 } }, { "isId": true, "priority": 100000.0021, "key": "leftBtn", "style": { left: 0 } }, { "isId": true, "priority": 100000.0022, "key": "rightBtn", "style": { right: 0 } }, { "isId": true, "priority": 100000.0023, "key": "title", "style": { width: Ti.UI.FILL, height: Ti.UI.FILL, top: 0, left: 49, right: 44 } }, { "isId": true, "priority": 100000.0024, "key": "message", "style": { top: 5, right: 5, bottom: 5, left: 5 } }, { "isId": true, "priority": 100000.0025, "key": "btnBar", "style": { layout: "horizontal", height: "44dp", width: Ti.UI.FILL } }, { "isId": true, "priority": 100000.9026, "key": "mask", "style": { backgroundColor: "#80000000" } }, { "isId": true, "priority": 100000.90269999999, "key": "menuContainer", "style": {} }, { "isId": true, "priority": 100000.9028, "key": "menuTable", "style": { backgroundColor: "transparent", separatorStyle: Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE } }, { "isId": true, "priority": 100000.9029, "key": "marginTop", "style": {} }, { "isId": true, "priority": 100000.90299999999, "key": "marginBottom", "style": {} }, { "isId": true, "priority": 100000.9031, "key": "menu", "style": { borderRadius: 8, backgroundColor: "#F8B195" } }, { "isId": true, "priority": 100000.9032, "key": "navBar", "style": { backgroundColor: "#F67280" } }, { "isId": true, "priority": 100000.9034, "key": "icon", "style": { backgroundColor: "#000", borderRadius: "22" } }, { "isId": true, "priority": 100000.9035, "key": "leftBtn", "style": {} }, { "isId": true, "priority": 100000.90359999999, "key": "rightBtn", "style": {} }, { "isId": true, "priority": 100000.9037, "key": "title", "style": { color: "#FFF", font: { fontWeight: "bold", fontSize: 18 } } }, { "isId": true, "priority": 100000.9038, "key": "message", "style": { color: "#FFF", font: { fontSize: 16 }, bottom: 0 } }, { "isId": true, "priority": 100000.90389999999, "key": "btnBar", "style": { borderRadius: 8, height: 34, top: 5, right: 5, bottom: 5, left: 5 } }, { "isId": true, "queries": { "if": "Alloy.Globals.isIPhoneX" }, "priority": 100501.0015, "key": "marginTop", "style": { height: "44dp" } }, { "isId": true, "queries": { "if": "Alloy.Globals.isIPhoneX" }, "priority": 100501.0016, "key": "marginBottom", "style": { height: "44dp" } }];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ? '6i.menus/' + s : s.substring(0, index) + '/6i.menus/' + s.substring(index + 1);

	return path.indexOf('/') !== 0 ? '/' + path : path;
}