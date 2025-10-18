import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface TypographyConfig {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
}

export interface ButtonConfig {
  borderRadius: number;
  shadow: 'none' | 'sm' | 'md' | 'lg';
  alignment: 'left' | 'center' | 'right';
  backgroundColor: string;
  textColor: string;
}

export interface GalleryConfig {
  alignment: 'left' | 'center' | 'right';
  spacing: number;
  borderRadius: number;
}

export interface LayoutConfig {
  cardRadius: number;
  padding: number;
  backgroundColor: string;
}

export interface StrokeConfig {
  color: string;
  weight: number;
}

export interface EditorConfig {
  typography: TypographyConfig;
  button: ButtonConfig;
  gallery: GalleryConfig;
  layout: LayoutConfig;
  stroke: StrokeConfig;
  theme: 'default' | 'ocean' | 'sunset' | 'forest' | 'midnight' | 'rose' | 'mint' | 'coral';
  layoutVariant: 'grid' | 'list';
}

const defaultConfig: EditorConfig = {
  typography: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 16,
  },
  button: {
    borderRadius: 8,
    shadow: 'md',
    alignment: 'center',
    backgroundColor: '#8b5cf6',
    textColor: '#ffffff',
  },
  gallery: {
    alignment: 'center',
    spacing: 16,
    borderRadius: 12,
  },
  layout: {
    cardRadius: 16,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  stroke: {
    color: '#e2e8f0',
    weight: 1,
  },
  theme: 'default',
  layoutVariant: 'grid',
};

interface EditorContextType {
  config: EditorConfig;
  updateConfig: (updates: Partial<EditorConfig>) => void;
  resetConfig: () => void;
  exportConfig: () => string;
  importConfig: (jsonString: string) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<EditorConfig>(defaultConfig);
  const [history, setHistory] = useState<EditorConfig[]>([defaultConfig]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateConfig = (updates: Partial<EditorConfig>) => {
    setConfig((prev) => {
      const newConfig = { ...prev, ...updates };
      
      // Add to history
      setHistory((prevHistory) => {
        const newHistory = prevHistory.slice(0, currentIndex + 1);
        newHistory.push(newConfig);
        return newHistory;
      });
      setCurrentIndex((prev) => prev + 1);
      
      return newConfig;
    });
  };

  const resetConfig = () => {
    setConfig(defaultConfig);
    setHistory([defaultConfig]);
    setCurrentIndex(0);
  };

  const exportConfig = () => {
    return JSON.stringify(config, null, 2);
  };

  const importConfig = (jsonString: string) => {
    try {
      const imported = JSON.parse(jsonString);
      setConfig(imported);
      setHistory([imported]);
      setCurrentIndex(0);
    } catch (error) {
      console.error('Failed to import configuration:', error);
    }
  };

  const undo = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setConfig(history[newIndex]);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setConfig(history[newIndex]);
    }
  };

  const canUndo = currentIndex > 0;
  const canRedo = currentIndex < history.length - 1;

  return (
    <EditorContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        exportConfig,
        importConfig,
        undo,
        redo,
        canUndo,
        canRedo,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
