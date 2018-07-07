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
  this.__controllerPath = 'widget';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.mask = Ti.UI.createView(
  { top: 0, right: 0, bottom: 0, left: 0, visible: false, backgroundColor: "#80000000", id: "mask" });

  $.__views.mask && $.addTopLevelView($.__views.mask);
  $.__views.menuContainer = Ti.UI.createView(
  { height: "0", width: "90%", layout: "vertical", id: "menuContainer" });

  $.__views.mask.add($.__views.menuContainer);
  $.__views.marginTop = Ti.UI.createView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { height: "22dp" });
    if (Alloy.Globals.isIPhoneX) Alloy.deepExtend(true, o, { height: "44dp" });
    Alloy.deepExtend(true, o, { id: "marginTop" });
    return o;
  }());

  $.__views.menuContainer.add($.__views.marginTop);
  $.__views.menu = Ti.UI.createView(
  { top: 0, bottom: 0, bubbleParent: false, width: Ti.UI.FILL, layout: "vertical", borderRadius: 8, backgroundColor: "#F8B195", id: "menu" });

  $.__views.menuContainer.add($.__views.menu);
  $.__views.navBar = Ti.UI.createView(
  { width: Ti.UI.FILL, backgroundColor: "#F67280", id: "navBar" });

  $.__views.menu.add($.__views.navBar);
  $.__views.leftBtn = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.FILL, left: 0, id: "leftBtn" });

  $.__views.navBar.add($.__views.leftBtn);
  $.__views.icon = Ti.UI.createImageView(
  { height: "38dp", width: "38dp", top: 4, left: 4, backgroundColor: "#000", borderRadius: "22", id: "icon" });

  $.__views.leftBtn.add($.__views.icon);
  $.__views.title = Ti.UI.createLabel(
  { width: Ti.UI.FILL, height: Ti.UI.FILL, top: 0, left: 49, right: 44, color: "#FFF", font: { fontWeight: "bold", fontSize: 18 }, id: "title" });

  $.__views.navBar.add($.__views.title);
  $.__views.rightBtn = Ti.UI.createView(
  { width: Ti.UI.SIZE, height: Ti.UI.FILL, right: 0, id: "rightBtn" });

  $.__views.navBar.add($.__views.rightBtn);
  $.__views.message = Ti.UI.createLabel(
  { top: 5, right: 5, bottom: 0, left: 5, color: "#FFF", font: { fontSize: 16 }, id: "message" });

  $.__views.menu.add($.__views.message);
  $.__views.menuTable = Ti.UI.createTableView(
  { width: Ti.UI.FILL, backgroundColor: "transparent", separatorStyle: Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE, id: "menuTable" });

  $.__views.menu.add($.__views.menuTable);
  $.__views.btnBar = Ti.UI.createView(
  { layout: "horizontal", height: 34, width: Ti.UI.FILL, borderRadius: 8, top: 5, right: 5, bottom: 5, left: 5, id: "btnBar" });

  $.__views.menu.add($.__views.btnBar);
  $.__views.marginBottom = Ti.UI.createView(
  function () {
    var o = {};
    Alloy.deepExtend(true, o, { height: "22dp" });
    if (Alloy.Globals.isIPhoneX) Alloy.deepExtend(true, o, { height: "44dp" });
    Alloy.deepExtend(true, o, { id: "marginBottom" });
    return o;
  }());

  $.__views.menuContainer.add($.__views.marginBottom);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = _.extend({
    debug: false,
    style: 'bottom',
    animationDurationOpen: 200,
    animationDurationClose: 200,


    showNavBar: true,
    showBtnBar: true,


    title: false,
    icon: false },

  arguments[0] || {});


  var rowHeight = 44;

  var navBarHeight = 44,
  titleLeftWithouIcon = 8;


  var that = this;


  var didInit = false,
  isAddedToParent = false;


  var currentRows = 0;


  var currentBtns = 0;

  var totalBtns = 0;


  var styles = {
    bottom: {
      beginStyle: {
        bottom: -900,
        opacity: 0 },

      animations: {
        open: function () {
          $.menuContainer.animate({
            bottom: 0,
            opacity: 1,
            duration: args.animationDurationOpen });

        },
        close: function () {
          $.menuContainer.animate({
            bottom: -900,
            opacity: 1,
            duration: args.animationDurationClose });

        } } },


    mid: {
      beginStyle: {
        bottom: null,
        opacity: 0 },

      animations: {
        open: function () {
          var matrix = Ti.UI.create2DMatrix();
          matrix = matrix.scale(0.01, 0.01);
          $.menuContainer.setTransform(matrix);

          var matrix = Ti.UI.create2DMatrix();
          matrix = matrix.scale(1, 1);
          $.menuContainer.animate({
            transform: matrix,
            opacity: 1,
            duration: args.animationDurationOpen });

        },
        close: function () {
          $.menuContainer.animate({
            opacity: 0,
            duration: args.animationDurationClose });

        } } },


    dialog: {
      beginStyle: {
        bottom: null,
        opacity: 0 },

      animations: {
        open: function () {
          var matrix = Ti.UI.create2DMatrix();
          matrix = matrix.scale(0.01, 0.01);
          $.menuContainer.setTransform(matrix);

          var matrix = Ti.UI.create2DMatrix();
          matrix = matrix.scale(1, 1);
          $.menuContainer.animate({
            transform: matrix,
            opacity: 1,
            duration: args.animationDurationOpen });

        },
        close: function () {
          $.menuContainer.animate({
            opacity: 0,
            duration: args.animationDurationClose });

        } } } };




  var lastSetStyle = '';


  var btnBarHeight = $.btnBar.getHeight(),
  btnBarTop = $.btnBar.getTop(),
  btnBarBottom = $.btnBar.getBottom();


  var messageTop = $.message.getTop(),
  messageBottom = $.message.getBottom();


  var df = true ? 1 : Ti.Platform.displayCaps.logicalDensityFactor,



  ph = true ? Ti.Platform.displayCaps.platformHeight : Ti.Platform.displayCaps.platformHeight / (Titanium.Platform.displayCaps.dpi / 160);

  var maxMenuHeight = ph * 0.9,

  titleLeft = $.title.getLeft();

  var fn = {
    init: function () {
      if (!didInit) {
        didInit = true;
        fn.setStyle(args.style);
        fn.navBar.set(args);
      }
    },
    addToParent: function () {

      if (!isAddedToParent) {
        isAddedToParent = false;
        if (args.parent) {
          args.parent.add(that.getView());
        }
      }
    },

    mask: {
      click: function (e) {
        if (args.debug) {
          console.log('6i.menus: Clicked on Mask');
        }
        fn.close();
      },
      show: function () {
        $.mask.opacity = 0;
        $.mask.visible = true;
        $.mask.animate({
          opacity: 1,
          duration: parseInt(args.animationDurationOpen - args.animationDurationOpen * 0.9) },
        function () {});
      },
      hide: function () {
        $.mask.animate({
          opacity: 0,
          duration: parseInt(args.animationDurationClose) },
        function () {
          $.mask.visible = false;
        });
      } },

    navBar: {
      set: function (uiData) {



        if (fn.utils.ifTrue(uiData.showNavBar)) {
          $.navBar.visible = true;
          $.navBar.height = navBarHeight;
        } else {
          $.navBar.visible = false;
          $.navBar.height = 0;
        }


        if (fn.utils.ifTrue(uiData.showBtnBar) || uiData.style == 'dialog') {
          $.btnBar.visible = true;
          $.btnBar.height = btnBarHeight;
          $.btnBar.top = btnBarTop;
          $.btnBar.bottom = btnBarBottom;
        } else {
          $.btnBar.visible = false;
          $.btnBar.height = 0;
          $.btnBar.top = 0;
          $.btnBar.bottom = 0;
        }


        if (uiData.title) {
          $.title.text = uiData.title;
        } else {
          $.title.text = '';
        }


        if (fn.utils.ifTrue(uiData.icon)) {
          $.icon.visible = true;
          $.icon.image = uiData.icon;
          $.title.left = titleLeft;
        } else {
          $.icon.visible = false;
          $.title.left = titleLeftWithouIcon;
        }
      } },

    menu: {
      clear: function () {
        $.menuTable.setData({});
      },
      addItems: function (data) {
        var objects = [];
        currentRows = 0;
        for (var k in data) {
          objects.push(fn.menu.addItem(data[k]));
          currentRows++;
        }
        $.menuTable.setData(objects);
      },
      addItem: function (data) {
        data.height = rowHeight;
        var row = Widget.createController('row', data);
        return row.getView();
      },

      show: function () {

        styles[lastSetStyle].animations.open();
      },
      hide: function () {

        styles[lastSetStyle].animations.close();
      },


      click: function (e) {
        var item = e.source.data;
        console.log('Row:');
        console.log(e);
        if (args.debug) {
          var h = item ? item.callback ? 'Yes' : 'No' : 'No';
          var dc = item ? item.doClose ? 'Yes' : 'No' : 'No';
          console.log('6i.menus: Clicked on item has on callback: ' + h + ' | callback: ' + dc);
        }
        if (item) {
          if (item.callback) {
            item.callback();
          }


          if (item.doClose) {
            fn.close();
          }
        }
      } },

    message: {
      set: function (data) {
        if (data.message) {
          $.message.text = data.message;
          $.message.visible = true;
          $.message.height = 'auto';
          $.message.top = messageTop;
          $.message.bottom = messageBottom;
          $.message.addEventListener('postlayout', fn.message.postlayout);
        } else {
          $.message.text = '';
          $.message.visible = false;
          $.message.height = 0;
          $.message.top = 0;
          $.message.bottom = 0;
        }
      },
      postlayout: function () {
        fn.resize();
        $.message.removeEventListener('postlayout', fn.message.postlayout);
      } },

    btnBar: {
      set: function (data) {
        var btns = [];

        fn.btnBar.clear();


        if (data.btns) {
          for (var k in data.btns) {
            btns.push(data.btns[k]);
          }
        }

        if (data.style != 'dialog') {

          if (data.showCloseBtn && !data.btns) {
            btns.push({
              title: 'Close',
              doClose: true });

          }
        }

        fn.btnBar.addItems(btns);
      },
      clear: function () {
        var children = $.btnBar.children.slice(0);
        for (var i = 0; i < children.length; ++i) {
          $.btnBar.remove(children[i]);
        }
      },
      addItems: function (data) {
        currentBtns = 0;
        totalBtns = data.length;
        var i = 0;
        for (var k in data) {
          if (data[k]) {
            data[k].width = 100 / totalBtns;
            if (i == 0) {
              data[k].isFirst = true;
            }
            if (i >= totalBtns) {
              data[k].isLast = true;
            }
            var v = fn.btnBar.addItem(data[k]);
            $.btnBar.add(v);
            currentBtns++;
            i++;
          }
        }
      },
      addItem: function (data) {
        var button = Widget.createController('button', data);
        return button.getView();
      },
      click: function (e) {
        var item = e.source.data;
        if (args.debug) {
          console.log('6i.menus: Clicked on btn: ' + item.title);
        }

        if (item.callback) {
          item.callback();
        }

        if (item.doClose) {
          fn.close();
        }
      } },



    resize: function () {
      var h = 0;
      var hmt = parseInt($.marginTop.getHeight());
      var hmb = parseInt($.marginBottom.getHeight());
      var hnb = parseInt($.navBar.getHeight());
      var hm = parseInt($.message.size.height) + parseInt($.message.getTop()) + parseInt($.message.getBottom());
      var hcb = parseInt($.btnBar.getHeight() + parseInt($.btnBar.getTop()) + parseInt($.btnBar.getBottom()));
      if ($.message.visible == false) {
        hm = 0;
      }
      h = hmt + hmb + hnb + hcb + hm;
      var menuTable = 0;

      for (var i = 0; i < currentRows; i++) {
        if (parseInt(h + rowHeight) > maxMenuHeight) {
          break;
        } else {
          h = h + rowHeight;
          menuTable = menuTable + rowHeight;
        }
      }
      $.menuContainer.setHeight(h);
      $.menuTable.setHeight(menuTable);
      $.menu.setHeight(menuTable + hnb + hcb + hm);
    },
    setStyle: function (style) {
      if (styles[style]) {
        if (lastSetStyle != style) {

          if (args.debug) {
            console.log('6i.menus: Set new properties: ' + JSON.stringify(styles[style].beginStyle));
          }
          lastSetStyle = style;
          $.menuContainer.applyProperties(styles[lastSetStyle].beginStyle);
        }
      } else {
        lastSetStyle = args.style;
        if (args.debug) {
          console.log("6i.menus: ERROR Style: " + style + " doesnt exsists. Set default: " + lastSetStyle);
        }
      }
    },

    open: function (dataNew) {
      fn.init();
      fn.addToParent();

      fn.mask.show();


      var data = {};
      data = _.extend(data, args, dataNew);


      fn.menu.clear();


      if (data.style) {
        fn.setStyle(data.style);
      }


      fn.navBar.set(data);
      fn.btnBar.set(data);
      fn.message.set(data);


      fn.menu.addItems(data.items);
      fn.resize();


      fn.menu.show();
    },
    close: function () {
      fn.menu.hide();
      fn.mask.hide();
    },


    utils: {

      ifTrue: function (value) {
        if (value && value != null && value != 'null' && value != 'false' && value != 'undefined') {
          return true;
        } else {
          return false;
        }
      } } };




  $.mask.addEventListener('click', function (e) {
    fn.mask.click(e);
  });
  $.btnBar.addEventListener('click', function (e) {
    fn.btnBar.click(e);
  });
  $.menuTable.addEventListener('click', function (e) {
    fn.menu.click(e);
  });


  Ti.Gesture.addEventListener('orientationchange', function (e) {
    if (e.source.portrait) {}
    if (e.source.landscape) {}

    ph = Ti.Platform.displayCaps.platformHeight / df;
    maxMenuHeight = ph * 0.8;
  });


  exports.open = function (opts) {
    if (args.debug) {
      console.log('6i.menus: Open menu, with settings: ' + JSON.stringify(opts));
    }
    fn.open(opts);
  };
  exports.close = function () {
    fn.close();
  };









  _.extend($, exports);
}

module.exports = Controller;