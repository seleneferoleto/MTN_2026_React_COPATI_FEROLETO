import type { tarea, prioridad } from "../Interfaces/Tarea.interface.js";

function AgregarTarea(lista: tarea[], nuevaTarea: tarea) {
  return [...lista, nuevaTarea];
}

function BuscarPorId(lista: tarea[], id: number) {
    return lista.find(Tarea => Tarea.id === id);
}

function CompletarTarea(lista: tarea[], id: number) {
  return lista.map(Tarea =>Tarea.id === id? 
    { ...Tarea, completada: true }: Tarea
  );
}

function ELiminarTarea(lista: tarea[], id: number){
    return lista.filter(Tarea => Tarea.id !== id
    );
}

function ActualizarTarea(lista: tarea[], nuevaTarea: tarea): tarea[] {
  return lista.map(Tarea =>
    Tarea.id === nuevaTarea.id ? { ...nuevaTarea } : Tarea
  );
}

function ActualizarPrioridad(lista: tarea[], id: number, nuevaPrioridad: prioridad) {
  return lista.map(Tarea =>Tarea.id === id ?
     { ...Tarea, prioridad: nuevaPrioridad } : Tarea
  );
}