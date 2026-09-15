export interface BaseCardProps {
  text?: string;
  image?: string;
  className?: string;
}

export function BaseCard({
  text = "Pokedex",
  image,
  className = "",
}: BaseCardProps) {
    const imageValid= image || "/images/pokeball.jpg";
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md max-w-xs w-full ${className}`}
    >
      {/* Mitad Superior: La Imagen */}
      {/* Le damos un fondo suave (slate-100) por si la imagen tarda en cargar o tiene transparencias */}
      <div className="h-48 w-full bg-slate-100">
        <img
          src={imageValid}
          alt={text}
          // object-cover hace que la imagen llene el espacio sin deformarse (como background-size: cover)
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Mitad Inferior: El Título */}
      <div className="flex flex-1 items-center justify-center p-4">
        <h3 className="text-lg font-bold tracking-tight text-slate-900 capitalize text-center">
          {text}
        </h3>
      </div>
    </div>
  );
}
