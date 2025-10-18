import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { useEditor } from '@/contexts/EditorContext';

export const ButtonControls: React.FC = () => {
  const { config, updateConfig } = useEditor();

  return (
    <div className="space-y-4 p-4 border border-border rounded-lg">
      <h3 className="font-semibold text-sm">Button Styling</h3>
      
      <div>
        <Label className="text-sm mb-2 block">
          Border Radius: {config.button.borderRadius}px
        </Label>
        <Slider
          value={[config.button.borderRadius]}
          onValueChange={([value]) =>
            updateConfig({
              button: { ...config.button, borderRadius: value },
            })
          }
          min={0}
          max={32}
          step={1}
        />
      </div>

      <div>
        <Label className="text-sm mb-2 block">Shadow</Label>
        <Select
          value={config.button.shadow}
          onValueChange={(value: any) =>
            updateConfig({
              button: { ...config.button, shadow: value },
            })
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="sm">Small</SelectItem>
            <SelectItem value="md">Medium</SelectItem>
            <SelectItem value="lg">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm mb-2 block">Alignment</Label>
        <div className="grid grid-cols-3 gap-2">
          {['left', 'center', 'right'].map((align) => (
            <button
              key={align}
              onClick={() =>
                updateConfig({
                  button: { ...config.button, alignment: align as any },
                })
              }
              className={`
                p-2 rounded border text-xs font-medium transition-all capitalize
                ${
                  config.button.alignment === align
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

      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label className="text-xs mb-2 block">Background</Label>
          <Input
            type="color"
            value={config.button.backgroundColor}
            onChange={(e) =>
              updateConfig({
                button: { ...config.button, backgroundColor: e.target.value },
              })
            }
            className="h-10 cursor-pointer"
          />
        </div>
        <div>
          <Label className="text-xs mb-2 block">Text Color</Label>
          <Input
            type="color"
            value={config.button.textColor}
            onChange={(e) =>
              updateConfig({
                button: { ...config.button, textColor: e.target.value },
              })
            }
            className="h-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
