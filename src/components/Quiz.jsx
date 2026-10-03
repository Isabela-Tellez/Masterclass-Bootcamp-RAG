import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: '¿Cuál es el principal problema que RAG intenta resolver?',
    options: [
      'Hacer que el LLM sea más rápido',
      'Permitir que el LLM utilice información externa y actualizada',
      'Eliminar completamente el entrenamiento del modelo',
      'Convertir un LLM en una base de datos'
    ],
    answer: 1,
    explanation:
      'RAG permite que el modelo consulte información externa antes de generar una respuesta. Esto ayuda a trabajar con información actualizada, documentos privados y conocimiento específico de una organización.'
  },
  {
    id: 2,
    question: 'En nuestra metáfora, ¿qué representa el "Archivero Ninja"?',
    options: [
      'El LLM que genera la respuesta',
      'El usuario que realiza la pregunta',
      'El sistema que busca y recupera los fragmentos relevantes',
      'La base de datos donde se almacenan los usuarios'
    ],
    answer: 2,
    explanation:
      'El "Archivero Ninja" representa el mecanismo de retrieval. Su función es encontrar, dentro de los documentos disponibles, los fragmentos más relevantes para la pregunta del usuario.'
  },
  {
    id: 3,
    question: '¿Por qué dividimos un documento en chunks?',
    options: [
      'Para reducir el tamaño de los archivos únicamente',
      'Para poder recuperar fragmentos concretos y relevantes',
      'Para eliminar información del documento',
      'Para entrenar un nuevo LLM'
    ],
    answer: 1,
    explanation:
      'Los chunks permiten trabajar con partes pequeñas del documento. Así, cuando llega una pregunta, el sistema puede recuperar solamente los fragmentos relacionados en lugar de enviar todo el documento al modelo.'
  },
  {
    id: 4,
    question: '¿Qué representan los embeddings en un sistema RAG?',
    options: [
      'Contraseñas para acceder al LLM',
      'Vectores numéricos que representan el significado del texto',
      'Respuestas generadas por el modelo',
      'Fragmentos de código JavaScript'
    ],
    answer: 1,
    explanation:
      'Un embedding transforma un texto en una representación numérica. Gracias a ella podemos comparar semánticamente una consulta con los fragmentos almacenados y encontrar los que tienen un significado similar.'
  },
  {
    id: 5,
    question: '¿Qué significa Top-K Retrieval?',
    options: [
      'Recuperar todos los documentos disponibles',
      'Seleccionar los K fragmentos con mayor similitud',
      'Eliminar los K documentos más antiguos',
      'Generar K respuestas diferentes'
    ],
    answer: 1,
    explanation:
      'Top-K significa que seleccionamos los K fragmentos que obtuvieron las mejores puntuaciones de similitud. Esos fragmentos forman el contexto que posteriormente recibe el LLM.'
  },
  {
    id: 6,
    question: '¿Qué significa que una respuesta esté "Grounded" o sea "Faithful"?',
    options: [
      'Que sea muy larga y detallada',
      'Que haya sido generada rápidamente',
      'Que esté respaldada por el contexto recuperado',
      'Que utilice palabras técnicas'
    ],
    answer: 2,
    explanation:
      'Groundedness o Faithfulness evalúa si las afirmaciones de la respuesta están respaldadas por la información recuperada. Es especialmente importante para reducir respuestas inventadas o no sustentadas por la evidencia.'
  },
  {
    id: 7,
    question: '¿Cuál es el flujo básico de un sistema RAG?',
    options: [
      'Pregunta → LLM → Base de datos → Respuesta',
      'Pregunta → Retrieval → Contexto → LLM → Respuesta',
      'Pregunta → Entrenamiento → LLM → Base de datos',
      'Documento → LLM → Pregunta → Embedding'
    ],
    answer: 1,
    explanation:
      'El flujo fundamental es: el usuario hace una pregunta, el sistema busca información relevante, recupera el contexto y finalmente se lo proporciona al LLM para generar una respuesta fundamentada.'
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleSelect = (index) => {
    if (checked) return;

    setSelectedAnswer(index);
  };

  const handleCheck = () => {
    if (selectedAnswer === null) return;

    setChecked(true);

    if (selectedAnswer === question.answer) {
      setScore((previous) => previous + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
    setSelectedAnswer(null);
    setChecked(false);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setChecked(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <div className="quiz-result-icon">🎓</div>

          <p className="quiz-result-label">
            Masterclass RAG completada
          </p>

          <h1>
            {score} / {questions.length}
          </h1>

          <p>
            Has completado las 7 preguntas sobre los conceptos
            fundamentales de Retrieval-Augmented Generation.
          </p>

          <button
            className="quiz-button"
            onClick={handleReset}
          >
            🔄 Repetir quiz
          </button>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === question.answer;

  return (
    <div className="quiz-container">

      {/* Cabecera */}
      <div className="quiz-header">
        <div>
          <span className="quiz-kicker">
            🧠 EVALUACIÓN INTERACTIVA
          </span>

          <h1>Comprueba lo aprendido</h1>

          <p className="quiz-intro">
            Una pregunta a la vez. Selecciona tu respuesta y
            después descubriremos juntos la explicación.
          </p>
        </div>

        <div className="quiz-progress">
          <strong>
            {currentQuestion + 1}
          </strong>

          <span>
            / {questions.length}
          </span>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="quiz-progress-bar">
        <div
          style={{
            width: `${((currentQuestion + 1) / questions.length) * 100}%`
          }}
        />
      </div>

      {/* Pregunta */}
      <div className="quiz-question">

        <div className="quiz-question-number">
          PREGUNTA {currentQuestion + 1}
        </div>

        <h2>{question.question}</h2>

        <div className="quiz-options">
          {question.options.map((option, index) => {

            let optionClass = 'quiz-option';

            if (selectedAnswer === index) {
              optionClass += ' selected';
            }

            if (checked && index === question.answer) {
              optionClass += ' correct';
            }

            if (
              checked &&
              selectedAnswer === index &&
              index !== question.answer
            ) {
              optionClass += ' incorrect';
            }

            return (
              <button
                key={index}
                type="button"
                className={optionClass}
                onClick={() => handleSelect(index)}
                disabled={checked}
              >
                <span className="quiz-option-letter">
                  {String.fromCharCode(65 + index)}
                </span>

                <span className="quiz-option-text">
                  {option}
                </span>

                {checked && index === question.answer && (
                  <span className="quiz-option-status">
                    ✓
                  </span>
                )}

                {checked &&
                  selectedAnswer === index &&
                  index !== question.answer && (
                    <span className="quiz-option-status">
                      ✕
                    </span>
                  )}
              </button>
            );
          })}
        </div>

        {/* Explicación */}
        {checked && (
          <div
            className={`quiz-explanation ${
              isCorrect ? 'correct' : 'incorrect'
            }`}
          >
            <div className="quiz-explanation-title">
              {isCorrect
                ? '✅ ¡Correcto!'
                : '❌ No exactamente'}
            </div>

            {!isCorrect && (
              <p>
                La respuesta correcta es:{' '}
                <strong>
                  {question.options[question.answer]}
                </strong>
              </p>
            )}

            <p>
              <strong>¿Por qué?</strong>{' '}
              {question.explanation}
            </p>
          </div>
        )}

        {/* Acción */}
        <div className="quiz-actions">

          {!checked ? (
            <button
              className="quiz-button"
              onClick={handleCheck}
              disabled={selectedAnswer === null}
            >
              Comprobar respuesta →
            </button>
          ) : (
            <button
              className="quiz-button"
              onClick={handleNext}
            >
              {currentQuestion === questions.length - 1
                ? 'Ver resultado 🎯'
                : 'Siguiente pregunta →'}
            </button>
          )}

        </div>
      </div>

      {/* Puntuación discreta */}
      <div className="quiz-score">
        Puntuación actual:{' '}
        <strong>{score}</strong>
      </div>
    </div>
  );
};

export default Quiz;