'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Workspace = 'amplifai' | 'clarifai';

interface WorkspaceContextType {
  workspace: Workspace;
  setWorkspace: (ws: Workspace) => void;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const [workspace, setWorkspace] = useState<Workspace>('amplifai');

  // Sync body class whenever workspace changes (for theme colors)
  useEffect(() => {
    document.body.classList.remove('workspace-amplifai', 'workspace-clarifai');
    document.body.classList.add(`workspace-${workspace}`);
  }, [workspace]);

  return (
    <WorkspaceContext.Provider value={{ workspace, setWorkspace }}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) throw new Error('useWorkspace must be used inside WorkspaceProvider');
  return ctx;
}
