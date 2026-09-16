import Image from "next/image";

export interface IllustrativeCardProps {
  title: string;
  image: string;
  imageAlt: string;
  description?: string;
  className?: string;
}

export function IllustrativeCard({
  title,
  image,
  imageAlt,
  description,
  className = "",
}: IllustrativeCardProps) {
  return (
    <article
      className={`flex flex-col items-center overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-lg border border-slate-100 max-w-md w-full transition-all hover:shadow-xl ${className}`}
    >
      {/* Título Principal */}
      <h3 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 text-center capitalize">
        {title}
      </h3>

      {/* Descripción Opcional */}
      {description && (
        <p className="text-center text-base text-slate-500 leading-relaxed">
          {description}
        </p>
      )}

      {/* Contenedor de la Imagen Central */}
      <div className="relative mb-6 flex h-64 w-full items-center justify-center rounded-2xl bg-slate-50 p-4">
        <Image src={image} alt={imageAlt} fill className={className} />
      </div>
    </article>
  );
}
