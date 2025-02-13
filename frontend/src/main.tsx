import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import { ParticleConnectkit } from './components/auth/connectkit.tsx';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      {/* <ParticleConnectkit> */}
      <App />
      {/* </ParticleConnectkit> */}
   </StrictMode>
);
