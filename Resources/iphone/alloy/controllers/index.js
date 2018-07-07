var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {

  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'index';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.win = Ti.UI.createWindow(
  { backgroundColor: "#F8B195", id: "win" });

  $.__views.win && $.addTopLevelView($.__views.win);
  $.__views.statusBar = Ti.UI.createView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { top: 0, height: "22dp", width: Ti.UI.FILL, backgroundColor: "#F67280" });
    if (Alloy.Globals.isIPhoneX) Alloy.deepExtend(true, o, { height: "44dp" });
    Alloy.deepExtend(true, o, { id: "statusBar" });
    return o;
  }());

  $.__views.win.add($.__views.statusBar);
  $.__views.navBar = Ti.UI.createView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { top: "22dp", height: "44dp", width: Ti.UI.FILL, backgroundColor: "#F67280" });
    if (Alloy.Globals.isIPhoneX) Alloy.deepExtend(true, o, { top: "44dp", height: "44dp" });
    Alloy.deepExtend(true, o, { id: "navBar" });
    return o;
  }());

  $.__views.win.add($.__views.navBar);
  $.__views.navBarTitle = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#FFF", font: { fontWeight: "bold", fontSize: 18 }, text: '6i Menu example', id: "navBarTitle" });

  $.__views.navBar.add($.__views.navBarTitle);
  $.__views.container = Ti.UI.createScrollView(
  { top: "88dp", bottom: 0, width: Ti.UI.FILL, layout: "vertical", id: "container" });

  $.__views.win.add($.__views.container);
  $.__views.__alloyId0 = Ti.UI.createView(
  { height: "44dp", id: "__alloyId0" });

  $.__views.container.add($.__views.__alloyId0);
  $.__views.__alloyId1 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", font: { fontWeight: "bold", fontSize: 18 }, text: 'STYLE BOTTOM', id: "__alloyId1" });

  $.__views.container.add($.__views.__alloyId1);
  $.__views.__alloyId2 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Open Menu', id: "__alloyId2" });

  $.__views.container.add($.__views.__alloyId2);
  openMenu ? $.addListener($.__views.__alloyId2, 'click', openMenu) : __defers['$.__views.__alloyId2!click!openMenu'] = true;$.__views.__alloyId3 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Open Menu Title: "New title from menu"', dataTitle: "New title from menu", id: "__alloyId3" });

  $.__views.container.add($.__views.__alloyId3);
  openMenu ? $.addListener($.__views.__alloyId3, 'click', openMenu) : __defers['$.__views.__alloyId3!click!openMenu'] = true;$.__views.__alloyId4 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Open Menu: No NavBar', dataShowNavBar: "null", id: "__alloyId4" });

  $.__views.container.add($.__views.__alloyId4);
  openMenu ? $.addListener($.__views.__alloyId4, 'click', openMenu) : __defers['$.__views.__alloyId4!click!openMenu'] = true;$.__views.__alloyId5 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Open Menu: With NavBar', dataShowNavBar: true, id: "__alloyId5" });

  $.__views.container.add($.__views.__alloyId5);
  openMenu ? $.addListener($.__views.__alloyId5, 'click', openMenu) : __defers['$.__views.__alloyId5!click!openMenu'] = true;$.__views.__alloyId6 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Open Menu: No Close button', dataShowBtnBar: "null", id: "__alloyId6" });

  $.__views.container.add($.__views.__alloyId6);
  openMenu ? $.addListener($.__views.__alloyId6, 'click', openMenu) : __defers['$.__views.__alloyId6!click!openMenu'] = true;$.__views.__alloyId7 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Open Menu: open with icon', dataIcon: "https://nl.xtv.nu/img/channel/logo/64/_33b2ca74-0cc1-11e8-ba67-a8387f729390-5b342bb54c79599a722f22ce.png", id: "__alloyId7" });

  $.__views.container.add($.__views.__alloyId7);
  openMenu ? $.addListener($.__views.__alloyId7, 'click', openMenu) : __defers['$.__views.__alloyId7!click!openMenu'] = true;$.__views.__alloyId8 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Open Menu: Without icon', dataIcon: "undefined", id: "__alloyId8" });

  $.__views.container.add($.__views.__alloyId8);
  openMenu ? $.addListener($.__views.__alloyId8, 'click', openMenu) : __defers['$.__views.__alloyId8!click!openMenu'] = true;$.__views.__alloyId9 = Ti.UI.createView(
  { height: "44dp", id: "__alloyId9" });

  $.__views.container.add($.__views.__alloyId9);
  $.__views.__alloyId10 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", font: { fontWeight: "bold", fontSize: 18 }, text: 'STYLE MID', id: "__alloyId10" });

  $.__views.container.add($.__views.__alloyId10);
  $.__views.__alloyId11 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Open Menu', dataStyle: "mid", id: "__alloyId11" });

  $.__views.container.add($.__views.__alloyId11);
  openMenu ? $.addListener($.__views.__alloyId11, 'click', openMenu) : __defers['$.__views.__alloyId11!click!openMenu'] = true;$.__views.__alloyId12 = Ti.UI.createView(
  { height: "44dp", id: "__alloyId12" });

  $.__views.container.add($.__views.__alloyId12);
  $.__views.__alloyId13 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", font: { fontWeight: "bold", fontSize: 18 }, text: 'STYLE DIALOG', id: "__alloyId13" });

  $.__views.container.add($.__views.__alloyId13);
  $.__views.__alloyId14 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Dialog open', dataStyle: "dialog", id: "__alloyId14" });

  $.__views.container.add($.__views.__alloyId14);
  openMenu ? $.addListener($.__views.__alloyId14, 'click', openMenu) : __defers['$.__views.__alloyId14!click!openMenu'] = true;$.__views.__alloyId15 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Dialog open one btn', dataStyle: "dialog", dataDataSet: "one", dataMessage: "Hello this is the dialog", id: "__alloyId15" });

  $.__views.container.add($.__views.__alloyId15);
  openMenu ? $.addListener($.__views.__alloyId15, 'click', openMenu) : __defers['$.__views.__alloyId15!click!openMenu'] = true;$.__views.__alloyId16 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Dialog open two btns longer message', dataStyle: "dialog", dataDataSet: "two", dataMessage: "Hello this is the dialog, with an large message so we can have some lines in it and we can test if the text will brake or not and if the reszie function is working properly.", id: "__alloyId16" });

  $.__views.container.add($.__views.__alloyId16);
  openMenu ? $.addListener($.__views.__alloyId16, 'click', openMenu) : __defers['$.__views.__alloyId16!click!openMenu'] = true;$.__views.__alloyId17 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Dialog open three btns', dataStyle: "dialog", dataDataSet: "three", dataMessage: "Hello this is the dialog", id: "__alloyId17" });

  $.__views.container.add($.__views.__alloyId17);
  openMenu ? $.addListener($.__views.__alloyId17, 'click', openMenu) : __defers['$.__views.__alloyId17!click!openMenu'] = true;$.__views.__alloyId18 = Ti.UI.createLabel(
  { width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#355C7D", text: 'Dialog open long', dataStyle: "dialog", dataDataSet: "long", dataMessage: "Hello this is the dialog", id: "__alloyId18" });

  $.__views.container.add($.__views.__alloyId18);
  openMenu ? $.addListener($.__views.__alloyId18, 'click', openMenu) : __defers['$.__views.__alloyId18!click!openMenu'] = true;exports.destroy = function () {};




  _.extend($, $.__views);



  var menuItems = [];
  for (var i = 1; i < 31; i++) {
    menuItems[i] = {
      title: 'Item ' + i };

  }
  menuItems[1] = {
    title: 'Item 1 (Has Callback) Close',
    callback: function () {
      $.menus.close();
      alert('You clicked item: 1');
    } };

  menuItems[2] = {
    title: 'Item 2 (Has Callback) Close on args.',
    doClose: true,
    callback: function () {
      alert('You clicked item: 2');
    } };

  menuItems[3] = {
    title: 'Item 3 (Has Callback)',
    callback: function () {
      alert('You clicked item: 3');
    } };


  var dialogOptions = [];
  dialogOptions[0] = {
    title: 'Cancel',
    doClose: true,
    callback: function () {} };

  dialogOptions[1] = {
    title: 'No',
    doClose: true,
    callback: function () {
      alert('Why not?');
    } };

  dialogOptions[2] = {
    title: 'Yes',
    doClose: true,
    callback: function () {
      alert('Thank you!! ;) ');
    } };


  var DataSets = {
    one: [{
      title: 'Ok',
      doClose: true }],

    two: [{
      title: 'Cancel',
      doClose: true },
    {
      title: 'Ok',
      doClose: true }],

    three: [{
      title: 'Cancel',
      doClose: true },
    {
      title: 'Not sure',
      doClose: true },
    {
      title: 'Ok',
      doClose: true }],

    long: [{
      title: 'Btn 1',
      doClose: true },
    {
      title: 'Btn 2',
      doClose: true },
    {
      title: 'Btn 3',
      doClose: true },
    {
      title: 'Btn 4',
      doClose: true },
    {
      title: 'Btn 5',
      doClose: true },
    {
      title: 'Btn 6',
      doClose: true },
    {
      title: 'Btn 7',
      doClose: true },
    {
      title: 'Btn 8',
      doClose: true }] };






  $.menus = Alloy.createWidget('6i.menus', {
    debug: true,
    parent: $.win,
    style: 'bottom',


    showNavBar: true,
    showBtnBar: true,
    showCloseBtn: true,


    title: 'Here a starting title',
    icon: 'https://nl.xtv.nu/img/channel/logo/64/_33b2ca74-0cc1-11e8-ba67-a8387f729390-5b342bb54c79599a722f22ce.png' });


  function openMenu(e) {
    console.log('Open menu');
    var opts = {};

    if (e.source.dataTitle) {
      opts.title = e.source.dataTitle;
    }
    if (e.source.dataShowNavBar) {
      opts.showNavBar = e.source.dataShowNavBar;
    }
    if (e.source.dataShowBtnBar) {
      opts.showBtnBar = e.source.dataShowBtnBar;
    }
    if (e.source.dataIcon) {
      opts.icon = e.source.dataIcon;
    }
    if (e.source.dataStyle) {
      opts.style = e.source.dataStyle;
    }


    if (e.source.dataStyle == 'dialog') {

      if (e.source.dataMessage) {
        opts.message = e.source.dataMessage;
      } else {
        opts.message = 'This is the dialog option you like it?';
      }


      var dataSet = dialogOptions;
      if (e.source.dataDataSet) {
        if (DataSets[e.source.dataDataSet]) {
          dataSet = DataSets[e.source.dataDataSet];
        }
      }

      opts.btns = dataSet;
    } else {
      opts.items = menuItems;
    }


    $.menus.open(opts);
  }

  $.win.open();





  __defers['$.__views.__alloyId2!click!openMenu'] && $.addListener($.__views.__alloyId2, 'click', openMenu);__defers['$.__views.__alloyId3!click!openMenu'] && $.addListener($.__views.__alloyId3, 'click', openMenu);__defers['$.__views.__alloyId4!click!openMenu'] && $.addListener($.__views.__alloyId4, 'click', openMenu);__defers['$.__views.__alloyId5!click!openMenu'] && $.addListener($.__views.__alloyId5, 'click', openMenu);__defers['$.__views.__alloyId6!click!openMenu'] && $.addListener($.__views.__alloyId6, 'click', openMenu);__defers['$.__views.__alloyId7!click!openMenu'] && $.addListener($.__views.__alloyId7, 'click', openMenu);__defers['$.__views.__alloyId8!click!openMenu'] && $.addListener($.__views.__alloyId8, 'click', openMenu);__defers['$.__views.__alloyId11!click!openMenu'] && $.addListener($.__views.__alloyId11, 'click', openMenu);__defers['$.__views.__alloyId14!click!openMenu'] && $.addListener($.__views.__alloyId14, 'click', openMenu);__defers['$.__views.__alloyId15!click!openMenu'] && $.addListener($.__views.__alloyId15, 'click', openMenu);__defers['$.__views.__alloyId16!click!openMenu'] && $.addListener($.__views.__alloyId16, 'click', openMenu);__defers['$.__views.__alloyId17!click!openMenu'] && $.addListener($.__views.__alloyId17, 'click', openMenu);__defers['$.__views.__alloyId18!click!openMenu'] && $.addListener($.__views.__alloyId18, 'click', openMenu);



  _.extend($, exports);
}

module.exports = Controller;