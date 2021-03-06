const electron = require('electron');
const { app, BrowserWindow, clipboard } = require('electron');

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({ width: 650, height: 270, show: false, resizable: false, title: 'Date Formatter'});

    // and load the index.html of the app.
    win.loadFile('index.html');
    win.setMenu(null);

    win.on('focus', () => {
        var myclp = clipboard.readText();
        // console.log("Hello : " + myclp);
        win.webContents.send('ping', myclp);
    });

    win.once('ready-to-show', () => {
        win.show()
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});