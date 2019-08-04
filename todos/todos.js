const fs = require('fs');
const colors = require('colors');


const getToDos = () => {
    try {
        return require('../db/data.json');
    } catch (error) {
        return [];
    }
}


const guardarDB = (toDos) => {

    fs.writeFile('db/data.json', JSON.stringify(getToDos()), error => {
        if (error) throw new Error('No se pudo grabar');
    });

}


const listar = () => {

    getToDos().forEach(todo => {
        console.log('===========Tarea==========='.green);
        console.log(todo.descripcion);
        console.log(`Estado: ${todo.completado}`);
        console.log('========================= \n'.green);
    })

}

const crear = descripcion => {
    let toDos = getToDos();

    let task = {
        descripcion,
        completado: false
    };

    toDos.push(task);
    guardarDB(toDos);

    return task.descripcion;
}


const actualizar = (descripcion, completado = true) => {
    let toDos = getToDos();
    let index = toDos.findIndex(todo => todo.descripcion === descripcion);
    if (index >= 0) {
        toDos[index].completado = completado;
        guardarDB(toDos);
        return true;
    } else {
        return false;
    }

}

const eliminar = descripcion => {
    let toDos = getToDos();
    let index = toDos.findIndex(todo => todo.descripcion === descripcion);
    if (index >= 0) {
        toDos.splice(index, 1)
        guardarDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    listar,
    crear,
    actualizar,
    eliminar
}