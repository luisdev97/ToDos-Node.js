const generalOptions = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea pendiente'
    }
}


const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', generalOptions)
    .command('eliminar', 'Elimina una tarea', generalOptions)
    .command('actualizar', 'Actualiza una tarea no realizada', {
        ...generalOptions,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completada una tarea'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}