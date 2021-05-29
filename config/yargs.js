const { option, boolean } = require('yargs');
const argv = require('yargs')
             .option('b', {
                 alias:'base',
                 type:'number',
                 demandOption:true,
                 describe: 'Es la base de la tabla de multiplicar'
             })
             .option('l', {
                 alias: 'list',
                 type: 'boolean',
                 demandOption: true,
                 default: false,
                 describe:'Muestra la tabla en la consola'
             })
             .option('h', {
                 alias:'hasta',
                 type:'number',
                 demandOption:true,
                 default:10,
                 describe:'Hasta donde llega la multiplicación'
             })
             .check((argv, options) => {
                 if( isNaN(argv.b) ){
                     throw 'La base tiene que ser un numbero'
                 }
                 return true;
             })
             .argv;


module.exports = argv;