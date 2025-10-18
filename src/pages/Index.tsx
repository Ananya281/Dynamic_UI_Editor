import React from 'react';
import { EditorProvider } from '@/contexts/EditorContext';
import { EditorPanel } from '@/components/editor/EditorPanel';
import { PreviewCanvas } from '@/components/preview/PreviewCanvas';

const Index = () => {
  return (
    <EditorProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Editor Panel - Fixed Width */}
        <div className="w-80 flex-shrink-0 h-full">
          <EditorPanel />
        </div>

        {/* Preview Canvas - Flexible */}
        <div className="flex-1 h-full">
          <PreviewCanvas />
        </div>
      </div>
    </EditorProvider>
  );
};

export default Index;
