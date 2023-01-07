// Components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <main className="font-sans h-screen bg-neutral-900 text-white">
      <Header></Header>
      <h1 className="text-2xl opacity-80 h-screen w-screen py-44 text-center bg-slate-600">Vite + React + TS + TailwindCSS</h1>
      <h2 className='relative h-screen'>hello</h2>
      <h2 className='relative h-screen'>hello</h2>
      <h2 className='relative h-screen'>hello</h2>
      <h2 className='relative h-screen'>hello</h2>
      <Footer></Footer>
    </main>
  </React.StrictMode>
);
