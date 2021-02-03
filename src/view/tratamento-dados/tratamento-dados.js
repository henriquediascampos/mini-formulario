const { ipcRenderer } = require('electron');
const { $, request } = require('../../util/form');


document.getElementById('submit-form').addEventListener('click', (e) => {
    const param = {
        'lista': getParam(),
        'tipo': 'GRAVAR'
    }
    request('tratamento-dados-gravar', param).then((event, arg) => {
        alert('success');
    });
});


function getParam() {
    const list = $('.field-form');
    let parametros = {};
    Array.from(list).forEach(element => {
        parametros[element.id] = element.value;
    });

    return parametros;
}



