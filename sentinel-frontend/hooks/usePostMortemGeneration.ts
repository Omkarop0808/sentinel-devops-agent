import { useState } from 'react';

// API base URL - configurable for different environments
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

interface PostMortemMetadata {
  incidentId: number;
  generatedAt: string;
  sections: string[];
  wordCount: number;
  estimatedReadTime: number;
}

interface PostMortemResponse {
  success: boolean;
  postmortem: {
    markdown: string;
    filePath: string;
    metadata: PostMortemMetadata;
  };
  publishing: {
    file: { success: boolean; path: string };
    slack?: { success: boolean; error?: string };
    email?: { success: boolean; error?: string; recipients?: string[] };
    confluence?: { success: boolean; pageUrl?: string; error?: string };
    github?: { success: boolean; commitUrl?: string; error?: string };
  };
}

export function usePostMortemGeneration() {
  const [generatingIncidentId, setGeneratingIncidentId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [lastGenerated, setLastGenerated] = useState<PostMortemResponse | null>(null);

  const generatePostMortem = async (incidentId: number) => {
    setGeneratingIncidentId(incidentId);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/api/postmortem/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ incidentId })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate post-mortem');
      }

      const data: PostMortemResponse = await response.json();
      setLastGenerated(data);
      return data;
    } catch (err: any) {
      const errorMessage = err.message || 'An unexpected error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setGeneratingIncidentId(null);
    }
  };

  const downloadPostMortem = async (filename: string) => {
    try {
      // Fetch the file content from backend
      const response = await fetch(`${API_BASE_URL}/api/postmortem/${filename}`);
      if (!response.ok) throw new Error('Failed to fetch post-mortem');
      
      const data = await response.json();
      
      // Create a blob from the markdown content
      const blob = new Blob([data.content], { type: 'text/markdown' });
      const url = window.URL.createObjectURL(blob);
      
      // Create download link
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
    }
  };

  return {
    generatePostMortem,
    downloadPostMortem,
    isGenerating: (incidentId: number) => generatingIncidentId === incidentId,
    error,
    lastGenerated
  };
}
