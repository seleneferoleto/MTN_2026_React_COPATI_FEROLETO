import { useState, type ChangeEvent } from "react";

type Prioridad = "baja" | "media" | "alta";

type Props = {
  onAgregar: (titulo: string, prioridad: Prioridad) => void;
};

export default function Formulario({ onAgregar }: Props) {
  const [titulo, setTitulo] = useState("");
  const [prioridad, setPrioridad] = useState<Prioridad>("media");

  const handleAgregar = () => {
    if (!titulo.trim()) return;
    onAgregar(titulo.trim(), prioridad);
    setTitulo("");
    setPrioridad("media");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAgregar();
  };

  return (
    <div className="formulario">
      <input
        type="text"
        value={titulo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitulo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nueva tarea..."
      />
      <select
        value={prioridad}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setPrioridad(e.target.value as Prioridad)}
      >
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      <button onClick={handleAgregar}>+ Agregar</button>
    </div>
  );
}