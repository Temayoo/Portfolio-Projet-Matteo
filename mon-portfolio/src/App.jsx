import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <img
        src="../src/assets/pictures/backgroundPortfolio.jpg"
        alt="background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
