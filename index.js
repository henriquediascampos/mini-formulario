const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path');


app.whenReady().then(() => {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            devTools: true
        },
    });
    win.loadURL(`file://${path.join(__dirname)}/src/form.html`)
    win.webContents.openDevTools()

});

function inserirItemNaLista(item) {
    const item_ = `
    <tr>
        <td>${item.nome} ${item.sobrenome}</td>
        <td>${item.email}</td>
        <td>${item.bairro} - ${item.rua} - ${item.numero}°</td>
    </tr>`

    enviaItem(item_);
} 

function enviaItem(item) {
    ipcMain.emit('testemain', [item]);
}

ipcMain.on('vaiCavalo', (e) => {
    console.log('aeeeeeee', e);
});