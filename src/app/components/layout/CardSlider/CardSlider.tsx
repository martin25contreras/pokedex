import { HTMLAttributes } from "react";

export interface CardSliderProps<T> extends Omit<
  HTMLAttributes<HTMLElement>,
  "children"
> {
  elements: T[];
  label: string;
  emptyMessage?: string;
  className?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
}

export function CardSlider({
  elements,
  label,
  emptyMessage,
  className = "",
  renderItem
}: CardSliderProps<any>) {
  if (elements.length === 0) {
    return (
      <div className="flex w-full items-center justify-center p-8 text-slate-500 border-2 border-dashed border-slate-300 rounded-xl">
        {emptyMessage}
      </div>
    );
  }

  return (
    <section aria-label={label} className={`w-full ${className}`}>
      <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2 hide-scrollbar scroll-smooth">
        {elements.map((item, index) => (
          <div
            key={index}
            className="shrink-0 snap-start w-[280px] md:w-[320px]"
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </section>
  );
}
