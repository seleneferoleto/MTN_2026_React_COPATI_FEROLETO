import type { tarea, prioridad } from "../Interfaces/Tarea.interface.js";

function CrearTarea(id: number, titulo: string,
    descripcion: string, materia: string, nota:  number,
    fecha_creacion: Date, fecha_entrega: Date,
    completada: boolean, prioridad: prioridad): tarea{ 
    return{
        id: id,
        titulo: titulo,
        descripcion : descripcion, 
        materia: materia,
        nota: nota,
        fecha_creacion: fecha_creacion,
        fecha_entrega: fecha_entrega,
        completada : completada,
        prioridad : prioridad
    };
}

function MostrarTarea(tarea: tarea){
    console.log("Id: " + tarea.id + ", Materia: " +
        tarea.materia + ", Nota: " + tarea.nota, ", Fecha creacion: " +
        tarea.fecha_creacion + ", Fecha entrega: " + tarea.fecha_entrega);
}


