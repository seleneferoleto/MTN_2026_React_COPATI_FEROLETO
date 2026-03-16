
function AgregarTarea(lista, nuevaTarea) {
  return [...lista, nuevaTarea];
}

function BuscarPorId(lista, id) {
    return lista.find(Tarea => Tarea.id === id);
}

function CompletarTarea(lista, id) {
  return lista.map(Tarea =>Tarea.id === id? 
    { ...Tarea, completada: true }: Tarea
  );
}

function ELiminarTarea(lista, id){
    return lista.filter(Tarea => Tarea.id !== id
    );
}

function ActualizarTarea(lista, nuevaTarea) {
  return lista.map(Tarea =>
    Tarea.id === nuevaTarea.id ? 
    { ...tarea, ...nuevaTarea } : Tarea
  );
}

function ActualizarPrioridad(lista, id, nuevaPrioridad) {
  return lista.map(Tarea =>Tarea.id === id ?
     { ...Tarea, prioridad: nuevaPrioridad } : Tarea
  );
}