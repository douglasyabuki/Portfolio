// Components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainView from './components/main-view/MainView';

// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="h-full bg-neutral-900 font-sans text-white">
      <Header></Header>
      <MainView></MainView>
      <Footer></Footer>
    </main>
  </React.StrictMode>,
);
