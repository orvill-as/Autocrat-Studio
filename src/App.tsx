import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;