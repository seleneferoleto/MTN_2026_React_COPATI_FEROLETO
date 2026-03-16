
function FiltrarPorEstado(lista, estado) {
  return lista.filter(Tarea => Tarea.estado === estado);
}

function FiltrarPorPrioridad(lista, prioridad) {
  return lista.filter(Tarea => Tarea.prioridad === prioridad);
}

function OrdenarPorPrioridad(lista){
    const orden = { alta: 1, media: 2, baja: 3 };
    return [...lista].sort((as, b) => orden[a.prioridad] - orden[b.prioridad]);

}



function BuscarTareas(lista,terminado) {
const terminoLower = terminado.toLowerCase();
  return lista.filter(lista =>
    lista.titulo.toLowerCase().includes(terminoLower) ||
    lista.descripcion.toLowerCase().includes(terminoLower)
  ).map(lista => ({ ...lista }));
}


function ContarPorPrioridad(lista) {
  return lista.reduce((cuenta, Tarea) => {
    return {
      ...cuenta,
      [Tarea.prioridad]: (cuenta[Tarea.prioridad] || 0) + 1
    };
  }, { alta: 0, media: 0, baja: 0 });
}



function ValidarTarea(lista) {
const error = [];
 
  if (!lista.id || typeof lista.id !== 'number') {
    error.push('El id no es un numero valido, deberia serlo');
  }
  if (!lista.titulo || typeof lista.titulo !== 'string' || lista.titulo.trim() === '') {
    error.push('El titulo no es un string, deberia serlo y debe existir');
  }
  if (!lista.descripcion || typeof lista.descripcion !== 'string' || lista.descripcion.trim() === '') {
    error.push('La descripcion no es una cadena de texto, deberia serlo y debe existir');
  }
  if (!['alta', 'media', 'baja'].includes(lista.prioridad)) {
    error.push('La prioridad debe ser: alta, media o baja');
  }
  if (!['pendiente', 'en progreso', 'completada'].includes(lista.estado)) {
    error.push('El estado debe ser: pendiente, en progreso o completada');
  }
  if (typeof lista.completada !== 'boolean') {
    error.push('Completada debe ser un booleano');
  }
  if (!lista.fechaCreacion || isNaN(Date.parse(lista.fechaCreacion))) {
    error.push('FechaCreacion no es una fecha valida, debe ser una fecha válida en formato ISO');
  }
 
  return {
    esValida: error.length === 0,
    error
  };
}
 