import Image from "next/image";

export interface BaseCardProps {
  text: string;
  image: string;
  className?: string;
}

export function BaseCard({
  text = "Pokedex",
  image,
  className = "",
}: BaseCardProps) {
  const imageValid = image || "/images/pokeball.jpg";
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md max-w-xs w-full ${className}`}
    >
      {/* Mitad Superior: La Imagen */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <Image
          src={imageValid}
          alt={text}
          fill
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
