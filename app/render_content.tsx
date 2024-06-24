import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoadCoursePage() {
  const [repoPath, setRepoPath] = useState('');
  const [readmeContent, setReadmeContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      if (!repoPath) return;
      const [username, repoName] = repoPath.split('/');
      if (!username || !repoName) return;
      const url = `https://raw.githubusercontent.com/${username}/${repoName}/main/README.md`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch README.md');
        }
        const content = await response.text();
        setReadmeContent(content);
        setError('');
      } catch (error) {
        setError(error.message);
        setReadmeContent('');
      }
    };
    fetchReadme();
  }, [repoPath]);

  return (
    <div className="container text-center">
      <h1 className="my-4">Load Course</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="username/repo"
          value={repoPath}
          onChange={(e) => setRepoPath(e.target.value)}
        />
      </div>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {readmeContent && (
        <div className="mt-3 text-left">
          <h2>README.md:</h2>
          <pre>{readmeContent}</pre>
        </div>
      )}
    </div>
  );
}
