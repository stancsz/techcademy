import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useRouter, Slot } from 'expo-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min');
    }
  }, []);

  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onMouseOver={(e) => { (e.target as HTMLElement).style.opacity = '0.7'; }} onMouseOut={(e) => { (e.target as HTMLElement).style.opacity = '1'; }} onClick={() => router.push('/')}> 
            <img src="/logo.png" alt="Logo" width="120" height="45" className="d-inline-block align-top" />
          </a>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: '#4CAF50'}}>
            SignUp / Login
            </button>
            <ul className="dropdown-menu" aria-labelledby="userDropdown">
              <li><a className="dropdown-item" href="#" onClick={() => router.push('/login')}>Login</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => router.push('/signup')}>Sign Up</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => router.push('/openai')}>OpenAI</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-grow-1 d-flex justify-content-center align-items-center py-3" style={{ overflowY: 'auto' }}>
        <div className="container bg-light p-4 rounded shadow">
          <Slot />
          {children}
        </div>
      </main>
    </div>
  );
}
