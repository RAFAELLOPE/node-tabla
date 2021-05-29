
const fs = require('fs')
const colors = require('colors');

const crearArchivo = async(base = 5, list=false, hasta=10) => {
    
    const txt_name = `tabla-${base}.txt`;
    let salida = '';

    for (let i=1; i<=hasta; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }
    try{
        if (list){
            console.log('===================='.red);
            console.log(`   Tabla del ${base}:   `.green);
            console.log('===================='.red);
            console.log(colors.rainbow(salida));
        }
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return txt_name;
    }catch (error){
        throw error;
    }

}

module.exports = {
    crearArchivo
}