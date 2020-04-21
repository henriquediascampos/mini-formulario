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

//RECEBE
ipcMain.on('gravar', (event, arg) => {
    if (arg.tipo === 'Gravar')
        gravar(arg.lista);
    else 
        alterar(arg.lista)
});


function gravar(pessoa) {
    const lista = buscar();
    const jaTem = validaPorNome(lista, pessoa) // Deve retornar um valor Boolean (True ou False)
    
    if (jaTem) {
        return;
    } else {
        lista.push(pessoa);
        jsonController.writeNewList(lista)
    }
}

function validaPorNome(lista, pessoa) {

}

function alterar(lista) {
    
}

ipcMain.on('buscar', (event, arg) => {
    const list = buscar(arg);
    event.reply('buscar', list)
});

function buscar(filtro) {
    let lista = jsonController.buscarTodos();
    // let pessoas = filtrar(lista, filtro);
    return Array.from(lista);
}

// delete
ipcMain.on('excluir', (event, arg) => {
    excluir(arg);
    event.reply('excluir_retorno', arg);
});

function excluir(params) {
    
}

ipcMain.on('carragar_dados', (event, arg) => {
    const pessoas = buscar(arg);
    const pessoa = pessoas.reduce((accumulated, curret) => {
        if (arg.filtro === curret.nome) {
            accumulated = curret;
        } 

        return accumulated;
    }, {});

    event.reply('carragar_dados', pessoa);
});



module.exports = { createMain }