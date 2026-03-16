export interface tarea{
    id: number,
    titulo: string,
    descripcion : string, 
    materia: string,
    nota: number,
    fecha_creacion: Date,
    fecha_entrega: Date,
    completada: boolean,
    prioridad: prioridad,
}

export type prioridad= "alta" | "media" | "baja";