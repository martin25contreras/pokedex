import React, { useState } from "react";

export interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className = "" }: AccordionProps) {
  // openIndex guarda el índice del panel abierto. null significa que todos están cerrados.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    // Si hacemos clic en el que ya está abierto, lo cerramos. Si no, abrimos el nuevo.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`w-full max-w-2xl rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden ${className}`}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border-b border-slate-200 last:border-b-0"
          >
            {/* Cabecera / Botón */}
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-50 focus:outline-none focus:bg-slate-50"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-slate-900">{item.title}</span>

              {/* Icono de + y - */}
              <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-500">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Contenido Expandible */}
            {isOpen && (
              <div className="px-6 pb-4 text-slate-600 animate-in fade-in slide-in-from-top-2 duration-200">
                <p className="leading-relaxed">{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
