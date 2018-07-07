# 6i Menus  [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)


Titanium Aloy widget for costum bottom menu and dialog. for IOS and Android. Adjust the ui on the screen sizes.

## Examples:

![Example 1 - Menu bottom](https://raw.githubusercontent.com/Daargajedan/6i.menus/master/example/images/1.png) |
![Example 2 - Menu mid](https://raw.githubusercontent.com/Daargajedan/6i.menus/master/example/images/2.png) |
![Example 3 - Dialog](https://raw.githubusercontent.com/Daargajedan/6i.menus/master/example/images/3.png) |
![Example 4 - Dialog 2](https://raw.githubusercontent.com/Daargajedan/6i.menus/master/example/images/4.png)

## Installing manualy

1. Download this project and open the .zip file.
2. Copy the app/widgets/6i.menus to you're project in app/widgets/
3. Update you're app/config.json file () add 	"6i.menus":"0.1" to  dependencies like
```
"dependencies": {
	"6i.menus":"0.1"
}
```

# Usage
You can simple create a widget, add the parent view to the parent option. This is root view.

## Example code

### Add the widget to you're code:
```
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
  title         : 'Here a starting title', // A menu
  icon          : '',       // Url to an icon.
});
```


### Show a message:

The default options set in the createWidget will be default the options set in the open methode will override the default options.
Use null, undefined, 'null', 'undefined' to empty the values or remove titles messages etc.

```
$.menus.open({
  showNavBar    : true,     // Show navbar on top of menu
  showBtnBar    : true,     // Show close button on the bottom of the menu, always true when style = dialog
  showCloseBtn  : true,     // Doesnt work with dialog style

  // Default data
  title         : '',       // A title
  icon          : '',       // Url to an icon.
});
```

### Show a dialog:

```
$.menus.open({
  showNavBar    : true,     // Show navbar on top of menu
  showBtnBar    : true,     // Show close button on the bottom of the menu, always true when style = dialog
  showCloseBtn  : true,     // Doesnt work with dialog style

  // Default data
  styles        : 'dialog',                  //
  title         : 'My dialog title',        // A title.
  message       : 'You like this dialog?',  // A message for the dialog.
  icon          : 'null',                   // Url to an icon.
  items         : itemsDialog,
});
```

### Data for Items:
In the param items, you can add menu rows (TableList) or in the dialog style, add buttons to the menu.

## Menu
```

var dialogOptions = [{
    title:  'Item 1 (Has Callback) Close',	// Title
    callback: function(){			// The callback after clicked the menu item.
      $.menus.close();				// The close methode is public
      alert('You clicked item: 1');
    }
}, {
    title:  'Item 2 (Has Callback) Close on args.',
    doClose: true,				// Close the menu after clicked
    callback: function(){
      alert('You clicked item: 2');
    }
}, {
    title:  'Item 3 (Has Callback)',
    callback: function(){
      alert('You clicked item: 3');
    }
}];

```

## Dialog
```

var dialogOptions = [{
    title:  'Cancel',				// The button text
    doClose: true,				// Close the menu after clicked
    callback: function(){ 			// Set a function to call after clicked
    }
},{
    title:  'No',
    doClose: true,
    callback: function(){
      alert('Why not?');
    }
},{
    title:  'Yes',
    doClose: true,
    callback: function(){
      alert('Thank you!! ;) ');
    }
}];

```


# Theme
There is a theme file ready to use see code, app/themes/default/widgets/6i.menus/

## Changelog

- None

## To do

- Add icons to dialog buttons, and menu row items.

```
{
    title:  'Item 1 (Has Callback) Close',	// Title

		icon: 	'',			// <- Still to make || Add an icon to the item.

		callback: function(){		// The callback after clicked the menu item.
      $.menus.close();				// The close methode is public
      alert('You clicked item: 1');
    }
}
```

# Built With

* [Axway Appcelerator Titanium](https://www.appcelerator.com/) - Mobile Development Platform
* [Atom](https://atom.io/) - A hackable text editor for the 21st Century
* Knowledge :)

____

```
  ____                                ______  ____
 /'___\  __                   /'\_/`\/\  _  \/\  _`\
/\ \__/ /\_\                 /\      \ \ \L\ \ \ \/\ \
\ \  _``\/\ \      _______   \ \ \__\ \ \  __ \ \ \ \ \
 \ \ \L\ \ \ \    /\______\   \ \ \_/\ \ \ \/\ \ \ \_\ \
  \ \____/\ \_\   \/______/    \ \_\\ \_\ \_\ \_\ \____/
   \/___/  \/_/                 \/_/ \/_/\/_/\/_/\/___/
```

# License

PDF Generator is licensed under MIT.

```
GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

 See [LICENSE.md](LICENSE.md) file.
```
