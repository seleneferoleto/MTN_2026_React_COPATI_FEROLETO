

function CrearTarea(id, materia, nota, fecha_creacion, fecha_entrega, completada){
    return{
        id: id,
        materia: materia,
        nota: nota,
        fecha_creacion: fecha_creacion,
        fecha_entrega: fecha_entrega,
        completada : true ,
        prioridad : alta
    };
}

function MostrarTarea(Tarea){
    console.log("Id: " + Tarea.id + ", Materia: " +
        Tarea.materia + ", Nota: " + Tarea.nota, ", Fecha creacion: " +
        Tarea.fecha_creacion + ", Fecha entrega: " + Tarea.fecha_entrega);
}


