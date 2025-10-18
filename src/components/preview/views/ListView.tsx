import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { CheckCircle2, Star, TrendingUp } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

interface ListViewProps {
  colors: { primary: string; secondary: string; accent: string };
}

export const ListView: React.FC<ListViewProps> = ({ colors }) => {
  const { config } = useEditor();

  const items = [
    { icon: CheckCircle2, title: 'Typography Control', desc: 'Customize fonts, weights, and sizes' },
    { icon: Star, title: 'Theme Switching', desc: 'Beautiful pre-made color palettes' },
    { icon: TrendingUp, title: 'Layout Variants', desc: 'Toggle between grid and list views' },
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

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero */}
      <div style={cardStyle} className="shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div 
            className="w-32 h-32 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            }}
          >
            UI
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2
              style={{
                fontFamily: config.typography.fontFamily,
                fontWeight: config.typography.fontWeight,
                fontSize: `${config.typography.fontSize * 1.6}px`,
              }}
              className="font-bold mb-3"
            >
              List View Layout
            </h2>
            <p
              style={{
                fontFamily: config.typography.fontFamily,
                fontSize: `${config.typography.fontSize * 0.9}px`,
              }}
              className="text-muted-foreground mb-4"
            >
              A different perspective on your customizable design, showcasing content in a vertical flow
            </p>
            <div style={{ textAlign: config.button.alignment }}>
              <button
                style={buttonStyle}
                className="px-6 py-2.5 font-semibold transition-all hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* List Items */}
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            style={cardStyle}
            className="shadow-lg hover:shadow-xl transition-all hover:translate-x-2"
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ 
                  backgroundColor: `${colors.primary}20`,
                  color: colors.primary,
                }}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3
                  style={{
                    fontFamily: config.typography.fontFamily,
                    fontWeight: config.typography.fontWeight,
                    fontSize: `${config.typography.fontSize * 1.1}px`,
                  }}
                  className="font-semibold mb-1"
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: config.typography.fontFamily,
                    fontSize: `${config.typography.fontSize * 0.85}px`,
                  }}
                  className="text-muted-foreground"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery in List */}
      <div style={cardStyle} className="shadow-lg">
        <h3
          style={{
            fontFamily: config.typography.fontFamily,
            fontWeight: config.typography.fontWeight,
            fontSize: `${config.typography.fontSize * 1.2}px`,
          }}
          className="font-semibold mb-4"
        >
          Image Showcase
        </h3>
        <div 
          className="flex flex-wrap"
          style={{ 
            gap: `${config.gallery.spacing}px`,
            justifyContent: config.gallery.alignment,
          }}
        >
          {[gallery1, gallery2, gallery3].map((img, i) => (
            <div
              key={i}
              style={{ 
                borderRadius: `${config.gallery.borderRadius}px`,
                width: '120px',
                height: '120px',
              }}
              className="overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-110 relative group"
            >
              <img 
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0 mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
