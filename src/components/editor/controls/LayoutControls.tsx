import React from 'react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { useEditor } from '@/contexts/EditorContext';

export const LayoutControls: React.FC = () => {
  const { config, updateConfig } = useEditor();

  return (
    <div className="space-y-4 p-4 border border-border rounded-lg">
      <h3 className="font-semibold text-sm">Layout Settings</h3>
      
      <div>
        <Label className="text-sm mb-3 block">
          Card Radius: {config.layout.cardRadius}px
        </Label>
        <Slider
          value={[config.layout.cardRadius]}
          onValueChange={([value]) =>
            updateConfig({
              layout: { ...config.layout, cardRadius: value },
            })
          }
          min={0}
          max={32}
          step={2}
        />
      </div>

      <div>
        <Label className="text-sm mb-3 block">
          Container Padding: {config.layout.padding}px
        </Label>
        <Slider
          value={[config.layout.padding]}
          onValueChange={([value]) =>
            updateConfig({
              layout: { ...config.layout, padding: value },
            })
          }
          min={8}
          max={64}
          step={4}
        />
      </div>

      <div>
        <Label className="text-sm mb-2 block">Background Color</Label>
        <Input
          type="color"
          value={config.layout.backgroundColor}
          onChange={(e) =>
            updateConfig({
              layout: { ...config.layout, backgroundColor: e.target.value },
            })
          }
          className="h-10 cursor-pointer"
        />
      </div>

      <div className="pt-2 border-t border-border">
        <h4 className="font-medium text-xs mb-3">Border Stroke</h4>
        <div className="space-y-3">
          <div>
            <Label className="text-xs mb-2 block">Stroke Color</Label>
            <Input
              type="color"
              value={config.stroke.color}
              onChange={(e) =>
                updateConfig({
                  stroke: { ...config.stroke, color: e.target.value },
                })
              }
              className="h-8 cursor-pointer"
            />
          </div>
          <div>
            <Label className="text-xs mb-2 block">
              Stroke Weight: {config.stroke.weight}px
            </Label>
            <Slider
              value={[config.stroke.weight]}
              onValueChange={([value]) =>
                updateConfig({
                  stroke: { ...config.stroke, weight: value },
                })
              }
              min={0}
              max={8}
              step={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
