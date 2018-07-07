module.exports = [{ "isId": true, "priority": 100000.0001, "key": "container", "style": {} }, { "isId": true, "priority": 100000.0002, "key": "button", "style": { width: Ti.UI.FILL, height: Ti.UI.FILL, touchEnabled: false, bubbleParent: true } }, { "isId": true, "priority": 100000.0003, "key": "title", "style": { width: Ti.UI.SIZE, height: Ti.UI.FILL, touchEnabled: false, bubbleParent: true } }, { "isId": true, "priority": 100000.9004, "key": "button", "style": { backgroundColor: "#C06C84", borderRadius: 0 } }, { "isId": true, "priority": 100000.90049999999, "key": "title", "style": { color: "#FFF", font: { fontWeight: "bold", fontSize: 18 } } }];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ? '6i.menus/' + s : s.substring(0, index) + '/6i.menus/' + s.substring(index + 1);

	return path.indexOf('/') !== 0 ? '/' + path : path;
}