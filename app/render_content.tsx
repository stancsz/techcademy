import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoadCoursePage() {
  const [username, setUsername] = useState('');
  const [repoName, setRepoName] = useState('');
  const [readmeContent, setReadmeContent] = useState('');
  const [error, setError] = useState('');

  const fetchReadme = async () => {
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

  return (
    <div className="container text-center">
      <h1 className="my-4">Load Course</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Repository Name"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={fetchReadme}>
        Load README
      </button>

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
