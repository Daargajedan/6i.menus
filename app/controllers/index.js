// Menu test data
var menuItems = [];
for(var i = 1; i < 31; i++){
  menuItems[i] = {
      title:  'Item ' + i,
  }
}
menuItems[1] = {
    title:  'Item 1 (Has Callback) Close',
    callback: function(){
      $.menus.close();
      alert('You clicked item: 1');
    }
};
menuItems[2] = {
    title:  'Item 2 (Has Callback) Close on args.',
    doClose: true,
    callback: function(){
      alert('You clicked item: 2');
    }
}
menuItems[3] = {
    title:  'Item 3 (Has Callback)',
    callback: function(){
      alert('You clicked item: 3');
    }
}

// Dialog test data
var dialogOptions = [];
dialogOptions[0] = {
    title:  'Cancel',
    doClose: true,
    callback: function(){
    }
};
dialogOptions[1] = {
    title:  'No',
    doClose: true,
    callback: function(){
      alert('Why not?');
    }
}
dialogOptions[2] = {
    title:  'Yes',
    doClose: true,
    callback: function(){
      alert('Thank you!! ;) ');
    }
}

var DataSets = {
    one: [{
        title:  'Ok',
        doClose: true
    }],
    two: [{
        title:  'Cancel',
        doClose: true
    },{
        title:  'Ok',
        doClose: true
    }],
    three: [{
        title:  'Cancel',
        doClose: true
    },{
        title:  'Not sure',
        doClose: true
    },{
        title:  'Ok',
        doClose: true
    }],
    long: [{
        title:  'Btn 1',
        doClose: true
    },{
        title:  'Btn 2',
        doClose: true
    },{
        title:  'Btn 3',
        doClose: true
    },{
        title:  'Btn 4',
        doClose: true
    },{
        title:  'Btn 5',
        doClose: true
    },{
        title:  'Btn 6',
        doClose: true
    },{
        title:  'Btn 7',
        doClose: true
    },{
        title:  'Btn 8',
        doClose: true
    }],
};

// End test data

// Add the widget to the window, tabgroup or other view. (Best is to add it to the parent view.)
$.menus = Alloy.createWidget('6i.menus', {
	debug    : true,
  parent   : $.win,     // Add to Wich window, tabgroup or view.
  style    : 'bottom',  // bottom, mid

  // Can be overwritten by open
  showNavBar    : true,     // Show navbar on top of menu
  showBtnBar    : true,     // Show close button on the bottom of the menu, always true when style = dialog
  showCloseBtn  : true,     // Doesnt work with dialog style

  // Default data
  title         : 'Here a starting title',
  icon          : 'https://nl.xtv.nu/img/channel/logo/64/_33b2ca74-0cc1-11e8-ba67-a8387f729390-5b342bb54c79599a722f22ce.png',
});

function openMenu(e){
  console.log('Open menu');
  var opts = {};

  if(e.source.dataTitle){
    opts.title          = e.source.dataTitle;
  }
  if(e.source.dataShowNavBar){
      opts.showNavBar   = e.source.dataShowNavBar;
  }
  if(e.source.dataShowBtnBar){
    opts.showBtnBar   = e.source.dataShowBtnBar;
  }
  if(e.source.dataIcon){
    opts.icon           = e.source.dataIcon;
  }
  if(e.source.dataStyle){
    opts.style          = e.source.dataStyle;
  }

  // Set the items for the menu
  if(e.source.dataStyle == 'dialog'){

    if(e.source.dataMessage){
      opts.message        = e.source.dataMessage;
    }else{
      opts.message        = 'This is the dialog option you like it?';
    }

    // Set datasets
    var dataSet = dialogOptions;
    if(e.source.dataDataSet){
      if(DataSets[e.source.dataDataSet]){
        dataSet = DataSets[e.source.dataDataSet];
      }

    }

    opts.btns = dataSet;
  }else{
    opts.items          = menuItems;
  }

  // Open with made options
  $.menus.open(opts);
}

$.win.open();
