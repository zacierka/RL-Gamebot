const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const reload = require('electron-reload')(__dirname);
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 480,
        height: 640,
        frame: false,
        show: false,
        maxHeight: 640,
        maxWidth: 480,
        minHeight:450,
        minWidth: 480,
        webPreferences: {
            nodeIntegration: true
          }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.once('ready-to-show', () => {
        win.show()
    });
    win.openDevTools({detached: true});
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

//handle mac
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if(win === null) {
        createWindow();
    }
});