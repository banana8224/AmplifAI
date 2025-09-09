'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [workspace, setWorkspace] = useState<'amplifai' | 'clarifai'>('amplifai');

  // Detect workspace from body class
  useEffect(() => {
    if (document.body.classList.contains('workspace-clarifai')) {
      setWorkspace('clarifai');
    } else {
      setWorkspace('amplifai');
    }
  }, []);

  if (workspace === 'clarifai') {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold text-primary">Welcome to ClarifAI</h1>
        <p className="mt-2 text-text-muted">
          This is the ClarifAI insights platform. From here you can access Guided
          Mode, Manual Mode, and your insights dashboard.
        </p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold text-primary">Welcome to AmplifAI</h1>
      <p className="mt-2 text-text-muted">
        This is the AmplifAI test acceleration platform. From here you can explore
        your Dashboard, Pipelines, and analytics.
      </p>
    </main>
  );
}
