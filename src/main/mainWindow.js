import path from 'path'
import BrowserWinHandler from './BrowserWinHandler'
const isDev = process.env.NODE_ENV === 'development'

const INDEX_PATH = path.join(__dirname, '..', 'renderer', 'index.html')
const DEV_SERVER_URL = process.env.DEV_SERVER_URL // eslint-disable-line prefer-destructuring

const winHandler = new BrowserWinHandler({
  width: 1280,
  height: 720,
  resizable: false
})

winHandler.onCreated(browserWindow => {
  isDev ? browserWindow.loadURL(DEV_SERVER_URL)
        : browserWindow.loadFile(INDEX_PATH)
})

export default winHandler
