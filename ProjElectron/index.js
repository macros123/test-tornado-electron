const {app, BrowserWindow} = require('electron')
const http = require('http');

let win;

let response = {}
async function treatData() {
  return new Promise(resolve => {
    http.get('http://localhost:8881/', (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        response = data
        resolve()
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  })
  
}

async function createWindow () {
    await treatData()
    win = new BrowserWindow({widht: 700, height: 500, webPreferences: {nodeIntegration: true}})
    win.loadFile("index.html", {query: {"data": JSON.stringify(response)}});
    
    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}


app.on('ready', createWindow)