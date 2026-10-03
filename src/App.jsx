import { useState } from 'react';

import RagDemo from './components/RagDemo';
import Quiz from './components/Quiz';

import Slide01Cover from './slides/Slide01Cover';
import Slide02Problem from './slides/Slide02Problem';
import Slide03Metaphor from './slides/Slide03Metaphor';
import Slide04Pipeline from './slides/Slide04Pipeline';
import Slide05Chunking from './slides/Slide05Chunking';
import Slide06VectorDb from './slides/Slide06VectorDb';
import Slide07Evaluation from './slides/Slide07Evaluation';

import './App.css';

const slides = [
  Slide01Cover,
  Slide02Problem,
  Slide03Metaphor,
  Slide04Pipeline,
  Slide05Chunking,
  Slide06VectorDb,
  Slide07Evaluation
];

function App() {
  const [activeTab, setActiveTab] = useState('slides');
  const [current, setCurrent] = useState(0);

  const CurrentSlide = slides[current];

  const nextSlide = () => {
    setCurrent((currentSlide) =>
      Math.min(currentSlide + 1, slides.length - 1)
    );
  };

  const previousSlide = () => {
    setCurrent((currentSlide) =>
      Math.max(currentSlide - 1, 0)
    );
  };

  return (
    <div className="app-container">
      <header className="header">
        <div>
          <h1>🧙‍♂️ Masterclass RAG — Somos F5</h1>
          <p>Retrieval-Augmented Generation en Acción</p>
        </div>

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
            🧠 Quiz
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === 'slides' && (
          <div className="presentation">
            <CurrentSlide />

            <div className="slide-navigation">
              <button
                onClick={previousSlide}
                disabled={current === 0}
              >
                ← Anterior
              </button>

              <span>
                {current + 1} / {slides.length}
              </span>

              <button
                onClick={nextSlide}
                disabled={current === slides.length - 1}
              >
                Siguiente →
              </button>
            </div>
          </div>
        )}

        {activeTab === 'demo' && <RagDemo />}

        {activeTab === 'quiz' && <Quiz />}
      </main>
    </div>
  );
}

export default App;