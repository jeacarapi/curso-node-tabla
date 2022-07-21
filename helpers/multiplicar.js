

const { yellow } = require('colors');
const fs = require('fs');
const colors = require ('colors');

const crearArchivo = async ( base =5, listar=false, hasta = 10 ) => {

    try {
        
        let salida = '';
        let consola = '';
        
        for (var i=1; i<=hasta; i++) {
            
            salida +=  `${base} x ${ i } = ${base * i}\n`;
            consola += `${colors.brightYellow( base)} ${' x '.brightRed} ${ colors.brightYellow(i)} ${' = '.brightRed} ${colors.brightYellow(base * i)}\n`;
        }
        
        if (listar){
            console.log ('=============='.rainbow);
            console.log ('TABLA DEL: '.brightYellow.underline, colors.bgMagenta.white.bold( base));
            console.log ('=============='.rainbow);
            console.log(consola.bgBlue);

        }
        
        
        
        fs.writeFileSync (`./salida/tabla-${base}.txt`, salida)
        
        return `tabla-${base}.txt`;

    }catch {err}{ 
        throw err; 
    }
        
    
}
module.exports = {
    crearArchivo
}






