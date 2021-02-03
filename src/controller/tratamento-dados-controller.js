const { ipcMain } = require('electron');
const { save, saveList, buscarTodos } = require('../json/jsonController');

const BASEURL = 'tratamento-dados'

function path(url) {
    return `${BASEURL}-${url}`
}

ipcMain.on(path('gravar'), (event, arg) => {
    try {
        const retorno = gravar(arg.lista);
        event.reply(path('gravar-retorno'), {status: 'success', retorno});
    } catch (error) {
        event.reply(path('gravar-retorno'), {status: 'error',error});
    }
});


//RECEBE requeste
/**
 * validar para não ter dois cadastros com mesmo cpf
 * validar cpf como obrigatorio
 * validar cpf valido
 * validar nome como obrigatorio
 * validar sobrenome como obrigatorio
 * validar 
 * validar 
 * validar 
 * validar 
 * validar 
 * validar 
 * validar 
 */
function gravar(pessoa) {
    console.log(pessoa);
    //implemente seu codigo abaixo 
    // (...)

    //implemente seu codigo acima
    save(pessoa)
    return 'gravado com sucesso'
}