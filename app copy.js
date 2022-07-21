// const { demandOption, array, argv } = require('yargs');
//const {option} = require ('yargs');
const {crearArchivo}= require ('./helpers/multiplicar'); 
const argv = require ('./config/yargs');



console.clear();

// console.log (process.argv);


// console.log('base: yargs', argv.b);


// // esta forma es dificil y suele tener muchos errores
// const [,,arg3 = 'base = 5'] = process.argv; // argv son argumentos desde la consola 
// const [ , base = 5] = arg3.split ('='); //por defecto la base sera 5 si es que no se ingresa ningun valor a la base
// console.log (base);




//const base = 7;

crearArchivo( argv.b, argv.l )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch (err => console.log (err));


