const { app, BrowserWindow } = require('electron')  //import app and BrowserWindow modules of electron package
const path = require('path')                        // import path package

const { Notification } = require('electron')

function showNotification () {
    const notification = {
        title: 'Basic Notification',
        body: 'Notifcation from the Main process'
    }

    new Notification(notification).show()
}

app.whenReady().then(createWindow).then(showNotification)

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})