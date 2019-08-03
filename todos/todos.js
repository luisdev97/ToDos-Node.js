const fs = require('fs');
const colors = require('colors');

let toDos = [];


const guardarDB = () => {

    let data = JSON.stringify(toDos);
    fs.writeFile('db/data.json', data, error => {
        if (error) throw new Error('No se pudo grabar');
    })

}

const cargarDB = () => {

    try {
        toDos = require('../db/data.json');
    } catch (error) {
        toDos = [];
    }
}

const listar = () => {
    cargarDB();
    toDos.forEach(todo => {
        console.log('===========Tarea==========='.green);
        console.log(todo.descripcion);
        console.log(`Estado: ${todo.completado}`);
        console.log('========================= \n'.green);
    })
}

const crear = descripcion => {
    cargarDB();

    let task = {
        descripcion,
        completado: false
    };

    toDos.push(task);
    guardarDB();

    return task.descripcion;
}


const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = toDos.findIndex(todo => todo.descripcion === descripcion);
    if (index >= 0) {
        toDos[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const eliminar = descripcion => {
    cargarDB();
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