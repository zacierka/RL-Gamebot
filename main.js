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
        webPreferences: {
            nodeIntegration: true
          }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.webContents.openDevTools();
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