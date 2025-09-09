'use client';
import { useWorkspace } from '@/context/WorkspaceContext';

export default function Home() {
  const { workspace } = useWorkspace();

  if (workspace === 'clarifai') {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-primary">Welcome to ClarifAI</h1>
        <p className="mt-2 text-text-muted">
          ClarifAI insights platform — access Guided Mode, Manual Mode, and analytics.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-primary">Welcome to AmplifAI</h1>
      <p className="mt-2 text-text-muted">
        AmplifAI test acceleration — explore Dashboard, Pipelines, and analytics.
      </p>
    </div>
  );
}
