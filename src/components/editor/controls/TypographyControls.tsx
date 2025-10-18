import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useEditor } from '@/contexts/EditorContext';

const fontFamilies = ['Inter', 'Poppins', 'Roboto', 'Open Sans', 'Montserrat'];
const fontWeights = [400, 500, 600, 700, 800];

export const TypographyControls: React.FC = () => {
  const { config, updateConfig } = useEditor();

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-sm font-semibold mb-2 block">Font Family</Label>
        <Select
          value={config.typography.fontFamily}
          onValueChange={(value) =>
            updateConfig({
              typography: { ...config.typography, fontFamily: value },
            })
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontFamilies.map((font) => (
              <SelectItem key={font} value={font}>
                <span style={{ fontFamily: font }}>{font}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-2 block">Font Weight</Label>
        <Select
          value={config.typography.fontWeight.toString()}
          onValueChange={(value) =>
            updateConfig({
              typography: { ...config.typography, fontWeight: parseInt(value) },
            })
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {fontWeights.map((weight) => (
              <SelectItem key={weight} value={weight.toString()}>
                {weight}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="text-sm font-semibold mb-3 block">
          Font Size: {config.typography.fontSize}px
        </Label>
        <Slider
          value={[config.typography.fontSize]}
          onValueChange={([value]) =>
            updateConfig({
              typography: { ...config.typography, fontSize: value },
            })
          }
          min={10}
          max={60}
          step={1}
          className="w-full"
        />
      </div>
    </div>
  );
};
