// app = manages the entire life cycle of application
// BrowserWindow :: class that is used to create desktop windows
// ref@L19 :: use this for all projects and all windows to avoid an error when packaging.

const { app, BrowserWindow, Menu } = require('electron')

process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV !== 'production' ? true : false
const isMac = process.env.platform === 'darwin' ? true : false

let mainWindow

/**
 * [#]- Docs 
 * |- Look for class Browser Window 
 */
function createMainWindow () {
  mainWindow = new BrowserWindow({
    title: 'ImgShrink',
    width: 500,
    height: 600,
    // icon: './assets/icons/Icon_256x256.png', // For Development Only
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    resizeable: isDev ? true : false,
  })

  // mainWindow.loadURL('https://twitter.com')
  // mainWindow.loadURL(`file://${__dirname}/app/index.html`) // Works the same as below
  mainWindow.loadFile('./app/index.html') // more efficient, however line20 works also. 
}


app.on('ready', () => {
  createMainWindow()

  const mainMenu = Menu.buildFromTemplate(menu)
  menu.setApplicationMenu(mainMenu)

  mainWindow.on('closed', () => mainWindow = null)
})

const menu = [
  ...(isMac ? [
    {role: 'appMenu'}
  ] : []),
  {
    label: 'file',
    submenu: [
      {
        label: 'Quit',
        click: () => app.quit(),
      }
    ]
  }
]


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (!isMac) app.quit()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
 

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow()
  })
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here


app.allowRendererProcessReuse = true