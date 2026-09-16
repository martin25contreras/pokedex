import React, { useState } from "react";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownInputProps {
  placeholder?: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
  className?: string;
}

export function DropdownInput({
  placeholder = "Selecciona una opción...",
  options,
  onSelect,
  className = "",
}: DropdownInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (option: DropdownOption) => {
    setSelectedValue(option.label); // Mostramos el texto amigable en el input
    setIsOpen(false); // Cerramos el menú
    onSelect(option.value); // Emitimos el valor técnico hacia afuera
  };

  return (
    <div className={`relative w-full max-w-sm ${className}`}>
      {/* Input principal */}
      <input
        type="text"
        readOnly // Lo hacemos de solo lectura para que actúe como un botón
        placeholder={placeholder}
        value={selectedValue}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      {/* Icono de flecha (opcional, puramente visual) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
        ▼
      </div>

      {/* Menú Desplegable */}
      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selectedValue === option.label}
              onClick={() => handleSelect(option)}
              className="cursor-pointer px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
