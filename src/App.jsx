import { useState } from 'react';
import RagDemo from './components/RagDemo';
import Quiz from './components/Quiz';
import Slide01Cover from './slides/Slide01Cover';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('demo');

  return (
    <div className="app-container">
      <header className="header">
        <h1>🧙‍♂️ Masterclass RAG — Somos F5</h1>
        <p>Retrieval-Augmented Generation en Acción</p>
        <nav className="tab-navigation">
          <button 
            className={activeTab === 'slides' ? 'active' : ''} 
            onClick={() => setActiveTab('slides')}
          >
            📊 Presentación
          </button>
          <button 
            className={activeTab === 'demo' ? 'active' : ''} 
            onClick={() => setActiveTab('demo')}
          >
            ⚡ Demo RAG
          </button>
          <button 
            className={activeTab === 'quiz' ? 'active' : ''} 
            onClick={() => setActiveTab('quiz')}
          >
            🧠 Quiz Interactivo
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'slides' && <Slide01Cover />}
        {activeTab === 'demo' && <RagDemo />}
        {activeTab === 'quiz' && <Quiz />}
      </main>
    </div>
  );
}

export default App;