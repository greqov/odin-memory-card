import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-zinc-50 selection:bg-pink-300">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
