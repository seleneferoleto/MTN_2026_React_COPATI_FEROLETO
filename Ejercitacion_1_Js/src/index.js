// ===================== IMPORTS =====================
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

let lista = [];

const tarea1 = CrearTarea(1, "Matemáticas", 9, "2026-03-01", "2026-03-31", false);
const tarea2 = CrearTarea(2, "Historia", 7, "2026-03-05", "2026-04-10", false);
const tarea3 = CrearTarea(3, "Inglés", 8, "2026-03-10", "2026-04-15", true);

// Sobrescribimos las propiedades necesarias para que sean compatibles con Utils1.js
const t1 = { id: 1, titulo: "Estudiar integrales", descripcion: "Repasar capítulo 5", prioridad: "alta", estado: "pendiente", completada: false, fechaCreacion: "2026-03-01" };
const t2 = { id: 2, titulo: "Leer Revolución Francesa", descripcion: "Páginas 40 a 80", prioridad: "media", estado: "en progreso", completada: false, fechaCreacion: "2026-03-05" };
const t3 = { id: 3, titulo: "Practicar phrasal verbs", descripcion: "Ejercicios del libro", prioridad: "baja", estado: "completada", completada: true, fechaCreacion: "2026-03-10" };

// ===================== LLAMADAS A FUNCIONES =====================

// --- Models1.js ---
console.log("=== CrearTarea ===");
console.log(tarea1);

console.log("\n=== MostrarTarea ===");
MostrarTarea(tarea1);

// --- Services1.js ---
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
lista = ActualizarTarea(lista, { id: 3, titulo: "Phrasal verbs avanzados" });
console.log(lista);

console.log("\n=== ELiminarTarea ===");
lista = ELiminarTarea(lista, 1);
console.log(lista);

// --- Utils1.js ---
console.log("\n=== FiltrarPorEstado ===");
console.log(FiltrarPorEstado(lista, "en progreso"));

console.log("\n=== FiltrarPorPrioridad ===");
console.log(FiltrarPorPrioridad(lista, "alta"));

console.log("\n=== OrdenarPorPrioridad ===");
console.log(OrdenarPorPrioridad(lista));

console.log("\n=== BuscarTareas ===");
console.log(BuscarTareas(lista, "phrasal"));

console.log("\n=== ContarPorPrioridad ===");
console.log(ContarPorPrioridad(lista));

console.log("\n=== ValidarTarea ===");
console.log(ValidarTarea(t1));
console.log(ValidarTarea({ id: "mal", titulo: "", prioridad: "ninguna", estado: "xxx", completada: "si", fechaCreacion: "no-es-fecha" }));
