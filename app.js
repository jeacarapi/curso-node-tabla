

const {crearArchivo}= require ('./helpers/multiplicar'); 
const argv = require ('./config/yargs');
const colors = require ('colors');


console.clear();


crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.cyan, colors.brightCyan('creado')))
    .catch (err => console.log (err));


