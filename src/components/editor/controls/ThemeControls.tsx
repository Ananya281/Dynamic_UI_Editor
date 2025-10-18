import React from 'react';
import { Label } from '@/components/ui/label';
import { useEditor } from '@/contexts/EditorContext';

const themes = [
  { name: 'default', label: 'Purple Dream', colors: ['#8b5cf6', '#a78bfa', '#c4b5fd'] },
  { name: 'ocean', label: 'Ocean Blue', colors: ['#0ea5e9', '#38bdf8', '#7dd3fc'] },
  { name: 'sunset', label: 'Sunset Glow', colors: ['#f97316', '#fb923c', '#fdba74'] },
  { name: 'forest', label: 'Forest Green', colors: ['#10b981', '#34d399', '#6ee7b7'] },
  { name: 'midnight', label: 'Midnight Sky', colors: ['#6366f1', '#818cf8', '#a5b4fc'] },
  { name: 'rose', label: 'Rose Garden', colors: ['#ec4899', '#f472b6', '#f9a8d4'] },
  { name: 'mint', label: 'Fresh Mint', colors: ['#14b8a6', '#2dd4bf', '#5eead4'] },
  { name: 'coral', label: 'Coral Reef', colors: ['#f43f5e', '#fb7185', '#fda4af'] },
];

export const ThemeControls: React.FC = () => {
  const { config, updateConfig } = useEditor();

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-semibold mb-3 block">Color Theme</Label>
        <div className="grid grid-cols-1 gap-3">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => updateConfig({ theme: theme.name as any })}
              className={`
                p-4 rounded-lg border-2 transition-all hover:scale-[1.02]
                ${
                  config.theme === theme.name
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {theme.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="font-medium text-sm">{theme.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-3 block">Layout Variant</Label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => updateConfig({ layoutVariant: 'grid' })}
            className={`
              p-3 rounded-lg border-2 transition-all text-sm font-medium
              ${
                config.layoutVariant === 'grid'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border hover:border-primary/50'
              }
            `}
          >
            Grid View
          </button>
          <button
            onClick={() => updateConfig({ layoutVariant: 'list' })}
            className={`
              p-3 rounded-lg border-2 transition-all text-sm font-medium
              ${
                config.layoutVariant === 'list'
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-border hover:border-primary/50'
              }
            `}
          >
            List View
          </button>
        </div>
      </div>
    </div>
  );
};
