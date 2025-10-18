import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useEditor } from '@/contexts/EditorContext';

export const GalleryControls: React.FC = () => {
  const { config, updateConfig } = useEditor();

  return (
    <div className="space-y-4 p-4 border border-border rounded-lg">
      <h3 className="font-semibold text-sm">Gallery & Images</h3>
      
      <div>
        <Label className="text-sm mb-2 block">Alignment</Label>
        <div className="grid grid-cols-3 gap-2">
          {['left', 'center', 'right'].map((align) => (
            <button
              key={align}
              onClick={() =>
                updateConfig({
                  gallery: { ...config.gallery, alignment: align as any },
                })
              }
              className={`
                p-2 rounded border text-xs font-medium transition-all capitalize
                ${
                  config.gallery.alignment === align
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border hover:border-primary/50'
                }
              `}
            >
              {align}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-sm mb-3 block">
          Spacing: {config.gallery.spacing}px
        </Label>
        <Slider
          value={[config.gallery.spacing]}
          onValueChange={([value]) =>
            updateConfig({
              gallery: { ...config.gallery, spacing: value },
            })
          }
          min={0}
          max={48}
          step={4}
        />
      </div>

      <div>
        <Label className="text-sm mb-3 block">
          Border Radius: {config.gallery.borderRadius}px
        </Label>
        <Slider
          value={[config.gallery.borderRadius]}
          onValueChange={([value]) =>
            updateConfig({
              gallery: { ...config.gallery, borderRadius: value },
            })
          }
          min={0}
          max={32}
          step={2}
        />
      </div>
    </div>
  );
};
