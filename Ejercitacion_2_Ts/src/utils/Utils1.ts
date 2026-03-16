import type { tarea, prioridad } from "../Interfaces/Tarea.interface.js";

function FiltrarPorEstado(lista: tarea[], estado: boolean) {
  return lista.filter(Tarea => Tarea.completada === estado);
}

function FiltrarPorPrioridad(lista: tarea[], prioridad: prioridad) {
  return lista.filter(Tarea => Tarea.prioridad === prioridad);
}

function OrdenarPorPrioridad(lista: tarea[]){
    const orden = { alta: 1, media: 2, baja: 3 };
    return [...lista].sort((a, b) => orden[a.prioridad] - orden[b.prioridad]);

}

function BuscarTareas(lista: tarea[], titulo : string ) {
const terminoLower = titulo.toLowerCase();
  return lista.filter(lista =>
    lista.titulo.toLowerCase().includes(terminoLower) ||
    lista.descripcion.toLowerCase().includes(terminoLower)
  ).map(lista => ({ ...lista }));
}


function ContarPorPrioridad(lista: tarea[]) {
  return lista.reduce((cuenta, Tarea) => {
    return {...cuenta,
      [Tarea.prioridad]: (cuenta[Tarea.prioridad] || 0) + 1
    };
  }, { alta: 0, media: 0, baja: 0 });
}



function ValidarTarea(lista:tarea[]) {
const error : string[] = [];
 lista.forEach((t) => {
   if (! t.id || typeof t.id !== 'number') {
    error.push('El id no es un numero valido, deberia serlo');
  }
  if (!t.titulo || typeof t.titulo !== 'string' || t.titulo.trim() === '') {
    error.push('El titulo no es un string, deberia serlo y debe existir');
  }
  if (!t.descripcion || typeof t.descripcion !== 'string' || t.descripcion.trim() === '') {
    error.push('La descripcion no es una cadena de texto, deberia serlo y debe existir');
  }
  if (!['alta', 'media', 'baja'].includes(t.prioridad)) {
    error.push('La prioridad debe ser: alta, media o baja');
  }
  if (typeof t.completada !== 'boolean') {
    error.push('Completada debe ser un booleano');
  }
  if (!t.fecha_creacion ) {
    error.push('FechaCreacion no es una fecha valida, debe ser una fecha válida en formato ISO');
  }

 })
  return {
    esValida: error.length === 0,
    error
  };
}
 