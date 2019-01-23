const { app, BrowserWindow } = require('electron')

let win = null;

function createWindow(){
    win = new BrowserWindow({width: 1000, height: 600});
    win.loadURL('http://localhost:3000');
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', () => {
    createWindow();
});

app.on('activate', () => {
    if(win === null){
        createWindow()
    }
})

app.on('window-all-closed', () => {
    if(process.platform != 'darwin'){
        app.quit();
    }
});