const { ipcRenderer } = require('electron');
const { include }  = require('../util/include');


// //GRAVAR
const btn = document.getElementById('iniciar-estudo')

btn.addEventListener('click', (e) => {
    e.currentTarget.classList.add('animation-do-poder');
    // ipcRenderer.send('gravar', {'lista': getParam(), 'tipo': document.getElementById('submit').innerText} );
    // document.getElementById('submit').innerText = 'Gravar';
});

// function getParam() {
//     const list = $('.item-form');
//     let parametros = {};
//     Array.from(list).forEach(element => {
//         parametros[element.id] = element.value;
//     });

//     return parametros;
// }

// function $(selector) {
//     if (selector.indexOf('.') === 0) {
//         const sel = selector.replace('.', '');
//         return document.getElementsByClassName(sel);
//     } else if (selector.indexOf('#') === 0) {
//         const sel = selector.replace('#', '');
//         return document.getElementById(sel);
//     }
// }

// function liparCampos() {
//     document.getElementById('nome').value = '';
//     document.getElementById('sobrenome').value = '';
//     document.getElementById('email').value = '';
//     document.getElementById('bairro').value = '';
//     document.getElementById('rua').value = '';
//     document.getElementById('numero').value = '';
// }

// //BUSCAR
// $('#buscar').addEventListener('click', () => {
//     const tipo = $('#tipo');
//     const filtro = $('#filtro');
//     const filtros = {
//         'tipo': tipo.options[tipo.selectedIndex].innerText,
//         'filtro': filtro.innerText
//     }
//     buscar(filtros);
// });

// function buscar(filtros) {
//     ipcRenderer.send('buscar', filtros);
// }

// buscar();

// ipcRenderer.on('buscar', (e, arg) => {
//     atualizaTabela(arg);
// });

// function atualizaTabela(arg) {
//     const itens = monstaListaParaEnvio(arg);
//     document.getElementById('lista').innerHTML = '';
//     itens.forEach(element => {
//         document.getElementById('lista').appendChild(element);
//     });
// }

// function monstaListaParaEnvio(pessoas) {
//     const lista = []
//     pessoas.forEach(pessoa => {
//         lista.push(inserirItemNaLista(pessoa));
//     });

//     return lista;
// }

// function inserirItemNaLista(item) {
//     const tr = document.createElement('tr');
//     const td1 = createElement('td', 'nome_');
//     td1.appendChild(createTextNode(`${item.nome}`));

//     const td2 = createElement('td');
//     td2.appendChild(createTextNode(`${item.sobrenome}`))

//     const td3 = createElement('td');
//     td3.appendChild(createTextNode(`${item.email}`));

//     const td4 = createElement('td');
//     const endereco = `${item.bairro} - ${item.rua} - ${item.numero}`;
//     td4.appendChild(createTextNode(endereco));

//     const td5 = createElement('td');
//     const icon = createElement('img');
//     icon.setAttribute('src', '../../assets/delete-24px.svg')
//     icon.setAttribute('style', 'width: 20px; cursor: pointer')
//     icon.addEventListener('click', (event) => {
//         excluir(event.currentTarget.parentElement.parentElement.children.nome_.innerText)
//     });
//     td5.appendChild(icon)

//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tr.appendChild(td4);
//     tr.appendChild(td5);

//     tr.addEventListener('dblclick', (event) => {
//         carregarDadosPessoa(event.currentTarget);
//     });

//     return tr;
// }

// function createElement(tag, name) {
//     const element = document.createElement(tag);
//     if (name) {
//         element.setAttribute('name', name);
//     }
//     return element;
// }

// function createTextNode(text) {
//     return document.createTextNode(text);
// }

// function excluir(nome) {
//     ipcRenderer.send('excluir', nome);
// }

// ipcRenderer.on('excluir_retorno', (event, arg) => {
//     console.log(arg);
// });

// function carregarDadosPessoa(target) {
//     const filtros = {
//         "filtro": target.firstElementChild.innerText,
//         "tipo": 'Nome'
//     }

//     ipcRenderer.send('carragar_dados', filtros);
// }

// ipcRenderer.on('carragar_dados', (event, arg) => {
//     document.getElementById('nome').value = arg.nome
//     document.getElementById('sobrenome').value = arg.sobrenome
//     document.getElementById('email').value = arg.email
//     document.getElementById('bairro').value = arg.bairro
//     document.getElementById('rua').value = arg.rua
//     document.getElementById('numero').value = arg.numero

//     document.getElementById('submit').innerText = 'Alterar'
// });