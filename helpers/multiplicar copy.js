

const fs = require('fs');
// const { resolve } = require('path');



const crearArchivo = async ( base =5, listar=false ) => {  //en este caso el valor por defecto de la base es 5, si la persona no manda la base, por defecto sera 5
                                            //esta es la promesa
    try {// try es como if 
        
        let salida = '';
        
        for (let i=1; i<=10; i++) {
        
            salida +=  `${base} x ${ i } = ${base * i}\n`;
        }
        
        if (listar){
            console.log ('===================');
            console.log ('Tabla del: ', base);
            console.log ('===================');
            console.log(salida);
        }
        
        
        
        fs.writeFileSync (`tabla-${base}.txt`, salida)
        
        return `tabla-${base}.txt`; // esta linea tambien es parte de la promesa

    }catch {err}{ //  este seria como el else
        throw err; // qye muestre error
    }
        
    
}
module.exports = {
    crearArchivo
}






