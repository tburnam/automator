const electron = require('electron')


// Module to control application life.
const {app, BrowserWindow, ipcMain} = electron;

// Key listener
const gkm = require('gkm');

const recorder = require('./recorder');
const play = require('./play');

console.log(recorder.util.gkm);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.


function createWindow () {

  const installer = require('electron-devtools-installer'); // eslint-disable-line global-require

  installer.default(installer['REACT_DEVELOPER_TOOLS'])
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 190, height: 250, titleBarStyle: 'hidden', vibrancy: 'ultra-dark', transparent: true, resizable: false})

  // Setup
  mainWindow.setResizable(false);

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.send('fileContent', "1");
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// Listeners for renderer thread (React UI)
ipcMain.on('beginRecording', (event, arg) => {
  recorder.util.startRecording();
});

ipcMain.on('stopRecording', (event, arg) => {
  recorder.util.stopRecording();
  event.sender.send('cacheRecording', recorder.util.events);
  recorder.util.clearCache();
});

ipcMain.on('beginPlaying', (event, arg) => {
  for (var item in arg) {
    play.util.process(arg[item]);
  }
  event.sender.send('donePlaying', recorder.util.events);
});



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

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
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
