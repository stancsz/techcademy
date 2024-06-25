import React from 'react';
import { useRouter } from 'expo-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="container text-center">
      <h1 className="my-4">Welcome to Techcademy</h1>
      <p className="lead">
        Techcademy is an open-source courseware framework that allows people to create courses and share them like a GitHub repo. Course designers have full flexibility to monetize or keep it completely open and free.
      </p>
      <button className="btn btn-primary" onClick={() => router.push('/render')}>
        Go to course index
      </button>
    </div>
  );
}
