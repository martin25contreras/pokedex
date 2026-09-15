import React, { ElementType, HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  // Permite cambiar la etiqueta HTML (por defecto será un <p>)
  as?: ElementType;
}

export function Title({
  children,
  as: Component = "p",
  className = "",
  ...props
}: TextProps) {
  // Lógica: Si hay children, úsalos. Si no, usa el defaultText.
  const content = children || "Pokedex";

  return (
    <Component className={`text-slate-900 ${className}`} {...props}>
      {content}
    </Component>
  );
}
