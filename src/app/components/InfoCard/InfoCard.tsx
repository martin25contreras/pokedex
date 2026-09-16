import Image from 'next/image';

export interface InfoCardProps {
  title: string;
  description: string;
  types: Array<string>;
  stats: Array<Record<string, unknown>>;
  abilities: {
    text: string;
    img: string;
    point: string;
  }[];
}

export function InfoCard({
  title,
  description,
  types,
  stats,
  abilities,
}: InfoCardProps) {
  return (
    <article
      className={`flex flex-col rounded-2xl bg-white p-6 shadow-md border border-slate-200 max-w-sm w-full transition-shadow hover:shadow-lg`}
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-2 capitalize">
        {title}
      </h3>

      <p className="text-sm text-slate-600 mb-4 pb-4 border-b border-slate-100 leading-relaxed">
        {description}
      </p>

      {types.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {types.map((type, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider border border-blue-200"
            >
              {type}
            </span>
          ))}
        </div>
      )}

      {abilities.length > 0 && (
        <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-slate-100">
          <h4 className="text-xs text-slate-400 uppercase tracking-wider mb-1">
            Estadísticas
          </h4>
          {abilities.map((ability, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={ability.img}
                  alt={ability.text}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span className="text-sm font-semibold text-slate-700 capitalize">
                  {ability.text}
                </span>
              </div>
              <span className="text-sm font-bold text-slate-900">
                {ability.point}
              </span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
