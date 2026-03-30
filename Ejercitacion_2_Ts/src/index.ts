// ===================== IMPORTS =====================
import type { tarea, prioridad } from "./Interfaces/Tarea.interface.js";
import { CrearTarea, MostrarTarea } from "./models/Models1.js";
import {
  AgregarTarea,
  BuscarPorId,
  CompletarTarea,
  ELiminarTarea,
  ActualizarTarea,
  ActualizarPrioridad,
} from "./services/Services1.js";
import {
  FiltrarPorEstado,
  FiltrarPorPrioridad,
  OrdenarPorPrioridad,
  BuscarTareas,
  ContarPorPrioridad,
  ValidarTarea,
} from "./utils/Utils1.js";

// ===================== DATOS DE EJEMPLO =====================

let lista: tarea[] = [];

const t1: tarea = CrearTarea(
  1,
  "Estudiar integrales",
  "Repasar capítulo 5",
  "Matemáticas",
  9,
  new Date("2026-03-01"),
  new Date("2026-03-31"),
  false,
  "alta"
);

const t2: tarea = CrearTarea(
  2,
  "Leer Revolución Francesa",
  "Páginas 40 a 80",
  "Historia",
  7,
  new Date("2026-03-05"),
  new Date("2026-04-10"),
  false,
  "media"
);

const t3: tarea = CrearTarea(
  3,
  "Practicar phrasal verbs",
  "Ejercicios del libro",
  "Inglés",
  8,
  new Date("2026-03-10"),
  new Date("2026-04-15"),
  true,
  "baja"
);

// ===================== LLAMADAS A FUNCIONES =====================

// --- Models1.ts ---
console.log("=== CrearTarea ===");
console.log(t1);

console.log("\n=== MostrarTarea ===");
MostrarTarea(t1);

// --- Services1.ts ---
console.log("\n=== AgregarTarea ===");
lista = AgregarTarea(lista, t1);
lista = AgregarTarea(lista, t2);
lista = AgregarTarea(lista, t3);
console.log(lista);

console.log("\n=== BuscarPorId ===");
const encontrada = BuscarPorId(lista, 2);
console.log(encontrada);

console.log("\n=== CompletarTarea ===");
lista = CompletarTarea(lista, 1);
console.log(lista);

console.log("\n=== ActualizarPrioridad ===");
lista = ActualizarPrioridad(lista, 2, "alta");
console.log(lista);

console.log("\n=== ActualizarTarea ===");
const tareaActualizada: tarea = {
  id: 3,
  titulo: "Phrasal verbs avanzados",
  descripcion: "Ejercicios nivel B2",
  materia: "Inglés",
  nota: 9,
  fecha_creacion: new Date("2026-03-10"),
  fecha_entrega: new Date("2026-04-15"),
  completada: true,
  prioridad: "baja",
};
lista = ActualizarTarea(lista, tareaActualizada);
console.log(lista);

console.log("\n=== ELiminarTarea ===");
lista = ELiminarTarea(lista, 1);
console.log(lista);

// --- Utils1.ts ---
console.log("\n=== FiltrarPorEstado (completada = true) ===");
console.log(FiltrarPorEstado(lista, true));

console.log("\n=== FiltrarPorPrioridad (alta) ===");
console.log(FiltrarPorPrioridad(lista, "alta"));

console.log("\n=== OrdenarPorPrioridad ===");
console.log(OrdenarPorPrioridad(lista));

console.log("\n=== BuscarTareas ===");
console.log(BuscarTareas(lista, "phrasal"));

console.log("\n=== ContarPorPrioridad ===");
console.log(ContarPorPrioridad(lista));

console.log("\n=== ValidarTarea (lista válida) ===");
console.log(ValidarTarea(lista));

console.log("\n=== ValidarTarea (lista con errores) ===");
const tareaInvalida = [
  {
    id: 0,
    titulo: "",
    descripcion: "",
    materia: "Física",
    nota: 5,
    fecha_creacion: null as unknown as Date,
    fecha_entrega: new Date("2026-05-01"),
    completada: "si" as unknown as boolean,
    prioridad: "ninguna" as prioridad,
  },
];
console.log(ValidarTarea(tareaInvalida));
