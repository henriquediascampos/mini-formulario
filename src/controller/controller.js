const { BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const jsonController = require('../json/jsonController')

let win = null;
function createMain() {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        maximizable: true,
    });
    win.loadURL(`file://${path.join(__dirname)}/../view/form.html`);
    win.webContents.openDevTools();
    win.maximize();
}

function buscar(filtro) {
    let lista = jsonController.buscarTodos();
    // let pessoas = filtrar(lista, filtro);
    return Array.from(lista);
}

//RECEBE
ipcMain.on('vaiCavalo', (event, arg) => {
    gravar(arg[0]);
});

ipcMain.on('buscar', (event, arg) => {
    const list = buscar(arg[0]);
    event.reply('lista', list)
});

//ENVIA
// function enviaLista(item) {
//     win.webContents.send('lista', [item]);
// }

function gravar(pessoa) {
    const lista = buscar();
    lista.push(pessoa)
    jsonController.writeNewList(lista)
}

// delete

module.exports = { createMain }