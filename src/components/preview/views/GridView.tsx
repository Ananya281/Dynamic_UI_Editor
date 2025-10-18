import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Sparkles, Zap, Layers, Image as ImageIcon } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

interface GridViewProps {
  colors: { primary: string; secondary: string; accent: string };
}

export const GridView: React.FC<GridViewProps> = ({ colors }) => {
  const { config } = useEditor();

  const features = [
    { icon: Sparkles, title: 'Beautiful Design', desc: 'Stunning visual elements' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance' },
    { icon: Layers, title: 'Fully Customizable', desc: 'Control every detail' },
  ];

  const buttonStyle = {
    borderRadius: `${config.button.borderRadius}px`,
    backgroundColor: config.button.backgroundColor,
    color: config.button.textColor,
    boxShadow: config.button.shadow !== 'none' 
      ? `var(--shadow-${config.button.shadow})` 
      : 'none',
    fontFamily: config.typography.fontFamily,
    fontSize: `${config.typography.fontSize}px`,
    fontWeight: config.typography.fontWeight,
  };

  const cardStyle = {
    borderRadius: `${config.layout.cardRadius}px`,
    padding: `${config.layout.padding}px`,
    backgroundColor: config.layout.backgroundColor,
    borderWidth: `${config.stroke.weight}px`,
    borderColor: config.stroke.color,
    borderStyle: config.stroke.weight > 0 ? 'solid' : 'none',
  };

  const imageStyle = {
    borderRadius: `${config.gallery.borderRadius}px`,
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Card */}
      <div style={cardStyle} className="shadow-xl overflow-hidden transition-all">
        <div className="text-center space-y-4">
          <h2
            style={{
              fontFamily: config.typography.fontFamily,
              fontWeight: config.typography.fontWeight,
              fontSize: `${config.typography.fontSize * 1.5}px`,
            }}
            className="font-bold"
          >
            Welcome to Dynamic UI Editor
          </h2>
          <p
            style={{
              fontFamily: config.typography.fontFamily,
              fontSize: `${config.typography.fontSize * 0.9}px`,
            }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Experience the power of real-time customization. Every element you see here responds instantly to your changes in the editor panel.
          </p>
          <div style={{ textAlign: config.button.alignment }}>
            <button
              style={buttonStyle}
              className="px-8 py-3 font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-3 animate-fade-in"
        style={{ gap: `${config.gallery.spacing}px` }}
      >
        {features.map((feature, idx) => (
          <div
            key={idx}
            style={cardStyle}
            className="shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
              style={{ 
                backgroundColor: `${colors.primary}20`,
                color: colors.primary,
              }}
            >
              <feature.icon className="w-6 h-6" />
            </div>
            <h3
              style={{
                fontFamily: config.typography.fontFamily,
                fontWeight: config.typography.fontWeight,
                fontSize: `${config.typography.fontSize * 1.1}px`,
              }}
              className="font-semibold mb-2"
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontFamily: config.typography.fontFamily,
                fontSize: `${config.typography.fontSize * 0.85}px`,
              }}
              className="text-muted-foreground"
            >
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <div style={cardStyle} className="shadow-lg">
        <div 
          className="flex items-center mb-6"
          style={{ justifyContent: config.gallery.alignment }}
        >
          <ImageIcon className="w-5 h-5 mr-2" style={{ color: colors.primary }} />
          <h3
            style={{
              fontFamily: config.typography.fontFamily,
              fontWeight: config.typography.fontWeight,
              fontSize: `${config.typography.fontSize * 1.2}px`,
            }}
            className="font-semibold"
          >
            Image Gallery
          </h3>
        </div>
        <div 
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: `${config.gallery.spacing}px` }}
        >
          {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
            <div
              key={i}
              style={imageStyle}
              className="aspect-square overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-[1.05] relative group"
            >
              <img 
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
