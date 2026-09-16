import React, { ElementType, HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  text?: React.ReactNode;
  // Permite cambiar la etiqueta HTML (por defecto será un <p>)
  as?: ElementType;
}

export function Title({
  text,
  as: Component = "p",
  className = "",
  ...props
}: TextProps) {
  // Lógica: Si hay text, úsalos. Si no, usa el defaultText.
  const content = text || "Pokedex";

  return (
    <Component className={`text-slate-900 ${className}`} {...props}>
      {content}
    </Component>
  );
}
