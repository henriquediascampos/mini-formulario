const { BrowserWindow, ipcMain }=require('electron')
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
    let lista = getListaPessoas();
    let pessoas = filtrar(lista, filtro);
    inserirLista(pessoas);
}

function inserirItemNaLista(item) {
    const item_=`
    <tr>
        <td>${item.nome} ${item.sobrenome}</td>
        <td>${item.email}</td>
        <td>${item.bairro} - ${item.rua} - ${item.numero}°</td>
    </tr>`

    enviaItem(item_);
}

//ENVIA
function enviaItem(item) {
    win.webContents.send('lista', [item]);
}

//RECEBE
ipcMain.on('vaiCavalo', (e, arg) => {
    gravar(arg[0]);
});

ipcMain.on('busca', (e, arg) => {
    buscar(arg[0]);
});

function gravar(pessoa) {
    const lista = getListaPessoas();
    lista.push(pessoa)
    jsonController.writeNewList(lista)
}

// delete

module.exports = {createMain}