const { app } = require('electron')
const {createMain} = require('./controller/controller')

app.whenReady().then(() => {
    createMain();
});