const { ipcRenderer } = require('electron');


function $(selector) {
    if (selector.indexOf('.') === 0) {
        const sel = selector.replace('.', '');
        return document.getElementsByClassName(sel);
    } else if (selector.indexOf('#') === 0) {
        const sel = selector.replace('#', '');
        return document.getElementById(sel);
    }
}

function liparCampos(selector) {
    Array.from($(`#${selector}`)).forEach(element => {
        element.value = '';
        element.innerText = '';
        element.innerHtml = '';
    });
}

function request(url, arg) {
    return new Request()
        .send(url, arg);
}

class Request {
    url
    send(url, arg) {
        ipcRenderer.removeAllListeners();
        this.url = url;
        setTimeout(() => {
            ipcRenderer.send(url, arg);
        }, 50);
        return this;
    }

    then(execute) {
        ipcRenderer.on(this.url + '-retorno', (event, arg) => {
            if (arg.status === 'success') {
                execute(event, arg);
            }
        })
        this.error()
        return this;
    }

    error(execute) {
        ipcRenderer.on(this.url + '-retorno', (event, arg) => {
            if (arg.status === 'error') {
                if (execute) {
                    execute(event, arg);
                } else {
                    alert('error');
                }
            }
        })
        return this;
    }

    finally(execute) {
        execute();
    }

}

module.exports = { $, liparCampos, request }

