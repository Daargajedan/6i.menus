module.exports = [{ "isId": true, "priority": 100000.0006, "key": "row", "style": {} }, { "isId": true, "priority": 100000.0007, "key": "title", "style": { touchEnabled: false, bubbleParent: true } }, { "isId": true, "priority": 100000.90079999999, "key": "row", "style": { selectedBackgroundColor: "#F8B195" } }, { "isId": true, "priority": 100000.9009, "key": "title", "style": { color: "#6C5B7B", left: 10 } }];function WPATH(s) {
	var index = s.lastIndexOf('/');
	var path = index === -1 ? '6i.menus/' + s : s.substring(0, index) + '/6i.menus/' + s.substring(index + 1);

	return path.indexOf('/') !== 0 ? '/' + path : path;
}