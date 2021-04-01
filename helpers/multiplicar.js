const fs = require('fs');


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {



        let salida = ''

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index} \n`;
        }

        if (listar) {

            console.log("====================");
            console.log("  tabla del  ", base );
            console.log("====================");

            console.log(salida);
        }

        // escribimos la tabla creada en archivo de texto
        fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);

        return (`tabla del ${base}.txt`);

    } catch (err) {
        throw err
    }

}


// exportamos las funciones creadas
module.exports = {
    crearArchivo
}