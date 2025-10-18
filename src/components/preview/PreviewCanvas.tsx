import React, { useState } from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { GridView } from './views/GridView';
import { ListView } from './views/ListView';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

const themeColors = {
  default: { primary: '#8b5cf6', secondary: '#a78bfa', accent: '#c4b5fd' },
  ocean: { primary: '#0ea5e9', secondary: '#38bdf8', accent: '#7dd3fc' },
  sunset: { primary: '#f97316', secondary: '#fb923c', accent: '#fdba74' },
  forest: { primary: '#10b981', secondary: '#34d399', accent: '#6ee7b7' },
  midnight: { primary: '#6366f1', secondary: '#818cf8', accent: '#a5b4fc' },
  rose: { primary: '#ec4899', secondary: '#f472b6', accent: '#f9a8d4' },
  mint: { primary: '#14b8a6', secondary: '#2dd4bf', accent: '#5eead4' },
  coral: { primary: '#f43f5e', secondary: '#fb7185', accent: '#fda4af' },
};

export const PreviewCanvas: React.FC = () => {
  const { config } = useEditor();
  const colors = themeColors[config.theme];
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  const viewportWidths = {
    mobile: '375px',
    tablet: '768px',
    desktop: '100%',
  };

  return (
    <div className="h-full overflow-auto bg-preview-bg">
      {/* Viewport Switcher */}
      <div className="sticky top-0 z-10 bg-card border-b border-border p-3 flex items-center justify-center gap-2">
        <button
          onClick={() => setViewport('mobile')}
          className={`p-2 rounded-lg transition-all ${
            viewport === 'mobile'
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted'
          }`}
          title="Mobile View"
        >
          <Smartphone className="w-4 h-4" />
        </button>
        <button
          onClick={() => setViewport('tablet')}
          className={`p-2 rounded-lg transition-all ${
            viewport === 'tablet'
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted'
          }`}
          title="Tablet View"
        >
          <Tablet className="w-4 h-4" />
        </button>
        <button
          onClick={() => setViewport('desktop')}
          className={`p-2 rounded-lg transition-all ${
            viewport === 'desktop'
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-muted'
          }`}
          title="Desktop View"
        >
          <Monitor className="w-4 h-4" />
        </button>
      </div>

      <div className="min-h-full p-8 flex justify-center">
        <div 
          className="transition-all duration-300 mx-auto"
          style={{ 
            width: viewportWidths[viewport],
            maxWidth: '100%'
          }}
        >
          <div className="mb-8 text-center animate-fade-in">
            <h1 
              className="text-4xl font-bold mb-3"
              style={{
                fontFamily: config.typography.fontFamily,
                fontWeight: config.typography.fontWeight,
                fontSize: `${config.typography.fontSize * 2}px`,
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Dynamic Design
            </h1>
            <p 
              className="text-muted-foreground"
              style={{
                fontFamily: config.typography.fontFamily,
                fontSize: `${config.typography.fontSize}px`,
              }}
            >
              Customize everything in real-time
            </p>
          </div>

          {config.layoutVariant === 'grid' ? (
            <GridView colors={colors} />
          ) : (
            <ListView colors={colors} />
          )}
        </div>
      </div>
    </div>
  );
};
