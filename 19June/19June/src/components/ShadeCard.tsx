import { getContrastColor } from '../lib/utils';
import type { Shade } from '../lib/supabase';

interface ShadeCardProps {
  shade: Shade;
  size?: 'sm' | 'md' | 'lg';
  showInfo?: boolean;
}

export function ShadeCard({ shade, size = 'md', showInfo = true }: ShadeCardProps) {
  const textColor = getContrastColor(shade.hex_code);
  const sizeClasses = {
    sm: 'h-20',
    md: 'h-32',
    lg: 'h-44',
  };

  return (
    <div className="group cursor-pointer">
      <div
        className={`${sizeClasses[size]} rounded-xl flex items-center justify-center transition-all duration-400 group-hover:scale-[1.03] group-hover:shadow-xl relative overflow-hidden`}
        style={{ backgroundColor: shade.hex_code }}
      >
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
          <div className="text-center px-3">
            <p className="font-serif text-base font-medium" style={{ color: textColor }}>
              {shade.name}
            </p>
            <p className="text-[10px] mt-0.5 font-mono" style={{ color: textColor, opacity: 0.7 }}>
              {shade.hex_code}
            </p>
          </div>
        </div>
      </div>
      {showInfo && (
        <div className="mt-3">
          <p className="font-serif text-sm font-medium text-charcoal">{shade.name}</p>
          {shade.collection && (
            <p className="text-[10px] text-charcoal-muted mt-0.5">{shade.collection}</p>
          )}
        </div>
      )}
    </div>
  );
}
