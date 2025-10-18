import React from 'react';
import { Palette, Type, Square, Layout, Sliders, Download, RotateCcw, Undo, Redo } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEditor } from '@/contexts/EditorContext';
import { TypographyControls } from './controls/TypographyControls';
import { ButtonControls } from './controls/ButtonControls';
import { GalleryControls } from './controls/GalleryControls';
import { LayoutControls } from './controls/LayoutControls';
import { ThemeControls } from './controls/ThemeControls';
import { toast } from 'sonner';

export const EditorPanel: React.FC = () => {
  const { exportConfig, resetConfig, undo, redo, canUndo, canRedo } = useEditor();

  const handleExport = () => {
    const config = exportConfig();
    const blob = new Blob([config], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ui-config.json';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Configuration exported successfully!');
  };

  const handleReset = () => {
    resetConfig();
    toast.info('Configuration reset to defaults');
  };

  return (
    <div className="h-full bg-editor-panel border-r border-editor-border overflow-y-auto">
      <div className="p-6 border-b border-editor-border bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            UI Editor
          </h2>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={undo}
              disabled={!canUndo}
              className="h-8 w-8"
              title="Undo"
            >
              <Undo className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={redo}
              disabled={!canRedo}
              className="h-8 w-8"
              title="Redo"
            >
              <Redo className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Customize your design in real-time
        </p>
      </div>

      <div className="p-4">
        <div className="flex gap-2 mb-4">
          <Button
            onClick={handleExport}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        <Tabs defaultValue="theme" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="theme" className="text-xs">
              <Palette className="w-3 h-3 mr-1" />
              Theme
            </TabsTrigger>
            <TabsTrigger value="typography" className="text-xs">
              <Type className="w-3 h-3 mr-1" />
              Text
            </TabsTrigger>
            <TabsTrigger value="layout" className="text-xs">
              <Layout className="w-3 h-3 mr-1" />
              Layout
            </TabsTrigger>
          </TabsList>

          <TabsContent value="theme" className="space-y-4 animate-fade-in">
            <ThemeControls />
          </TabsContent>

          <TabsContent value="typography" className="space-y-4 animate-fade-in">
            <TypographyControls />
          </TabsContent>

          <TabsContent value="layout" className="space-y-4 animate-fade-in">
            <LayoutControls />
            <ButtonControls />
            <GalleryControls />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
