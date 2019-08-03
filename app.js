const argv = require('./config/yargs').argv;

const todos = require('./todos/todos');

const comando = argv._[0];

switch (comando) {

    case 'listar':
        todos.listar()
        break;

    case 'crear':
        let tarea = todos.crear(argv.descripcion);
        console.log(`Se añadio la tarea: ${tarea}`);
        break;

    case 'actualizar':
        let actualizado = todos.actualizar(argv.descripcion, argv.completado)
        if (actualizado) console.log(`Se completo la tarea: ${argv.descripcion}`)
        else console.log('La tarea que intenta actualizar no existe');
        break;

    case 'eliminar':
        let eliminado = todos.eliminar(argv.descripcion)
        if (eliminado) console.log(`Se elimino: ${argv.descripcion}`)
        else console.log('La tarea que intenta eliminar no existe');
        break;

    default:
        console.log('Comando no reconocido');
        break;
}