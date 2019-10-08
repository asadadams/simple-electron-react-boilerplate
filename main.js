'use strict';

require('electron-reload')(__dirname);
const electron = require('electron')
const {dialog} = require('electron')
const { app , BrowserWindow ,ipcMain } = electron
const os = require('os')  

const path = require('path')
const url = require('url')

let win = null

const Menu = electron.Menu

function createWindow () {
	 // Initialize the window to our specified dimensions
	 
  win = new BrowserWindow({
	  webPreferences: {
         nodeIntegration: true
      },
	width: 1200, 
	  height: 620,
	  minWidth: 1200,
	  minHeight: 620
  })

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
	win.webContents.openDevTools()

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });
}


app.on('ready', function () {

  createWindow();
	
  //creating menubar
  const template = [
	{
		label: 'File',
		submenu: [
			{
				label : 'Exit',
				click: function(){
					app.quit();
				}
			}
		]
	},
	{
		label: 'Help',
		submenu: [
			{
				label : 'Contact Asad',
				click : function(){
					electron.shell.openExternal('http://www.github.com/asadadams');
				},
				accelerator: 'Shift + F'
			},
			{
				type:'separator'
			},
			{
				label : 'Visit Raadyo',
				click : function(){
					electron.shell.openExternal('http://www.raadyo.com/about');
				}
			}
			
		]
	}
  ]
  const menu = Menu.buildFromTemplate(template);
	Menu.setApplicationMenu(menu);
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
