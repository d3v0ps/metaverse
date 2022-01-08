import { app, BrowserWindow, screen } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';

const widevinePaths = {
  windows:
    'C/Program Files(x86)/Google/Chrome/Application/CHROME_VERSION/WidevineCdm/_platform_specific/win_(x86|x64)/',
  macos:
    '/Applications/Google Chrome.app/Contents/Frameworks/Google Chrome Framework.framework/Versions/Current/Libraries/WidevineCdm/_platform_specific/mac_x64/libwidevinecdm.dylib',
};

const platform = (process.env.APPLICATION_PLATFORM = 'macos');

let win: BrowserWindow | null = null;
const args = process.argv.slice(1),
  serve = args.some((val) => val === '--serve');

if (platform !== 'macos') {
  throw new Error('Platform not supported');
}

app.commandLine.appendSwitch('widevine-cdm-path', widevinePaths[platform]);
app.commandLine.appendSwitch('widevine-cmd-version', '4.10.2391.0');

function createWindow(): BrowserWindow {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      allowRunningInsecureContent: serve ? true : false,
      contextIsolation: false, // false if you want to run e2e test with Spectron
      webviewTag: true,
      plugins: true,
    },
    // transparent: true,
    // vibrancy: 'ultra-dark',
    // backgroundColor: '#00000000',
  });

  win.webContents.session.webRequest.onHeadersReceived({ urls: [] }, (d, c) => {
    if (d.responseHeaders && d.responseHeaders['X-Frame-Options']) {
      delete d.responseHeaders['X-Frame-Options'];
    }
    if (d.responseHeaders && d.responseHeaders['x-frame-options']) {
      delete d.responseHeaders['x-frame-options'];
    }

    c({ cancel: false, responseHeaders: d.responseHeaders });
  });

  if (serve) {
    // win.webContents.openDevTools();
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // require('electron-reload')(__dirname, {
    //   electron: require(path.join(__dirname, '../../../node_modules/electron')),
    // });
    win.loadURL('http://localhost:5000');
  } else {
    // Path when running electron executable
    let pathIndex = './index.html';

    if (fs.existsSync(path.join(__dirname, '../dist/index.html'))) {
      // Path when running electron in local folder
      pathIndex = '../dist/index.html';
    }

    win.loadURL(
      url.format({
        pathname: path.join(__dirname, pathIndex),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  return win;
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => setTimeout(createWindow, 400));

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });
} catch (e) {
  // Catch Error
  // throw e;
}
