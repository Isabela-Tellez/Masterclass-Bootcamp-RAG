import Slide from '../components/Slide';

const Slide07Evaluation = () => (
  <Slide
    title="El juicio del Consejo"
    subtitle="La Tríada RAG: Tres pruebas para saber si el sistema realmente funciona"
  >
    <div className="evaluation-slide">

      <div className="evaluation-intro">
        <div className="evaluation-council">
          🏛️
        </div>

        <div>
          <strong>EL CONSEJO GALÁCTICO</strong>
          <p>
            Antes de aprobar al Archivero Ninja, debemos comprobar
            res cosas: que encuentre la evidencia correcta, que el Sabio
            no invente información y que la respuesta resuelva la pregunta.
          </p>
        </div>
      </div>

      <div className="evaluation-triad">

        <div className="evaluation-card context-card">
          <div className="evaluation-number">01</div>

          <div className="evaluation-icon">
            📜
          </div>

          <h3>Relevancia del contexto</h3>

          <span className="evaluation-term">
            CONTEXT RELEVANCE
          </span>

          <p>
            ¿El Ninja recuperó los pergaminos que realmente
            contienen la información necesaria?
          </p>

          <div className="evaluation-question">
            <span>PRUEBA</span>
            ¿Encontró la evidencia correcta?
          </div>
        </div>

        <div className="evaluation-card faithfulness-card">
          <div className="evaluation-number">02</div>

          <div className="evaluation-icon">
            🧙‍♂️
          </div>

          <h3>Fidelidad</h3>

          <span className="evaluation-term">
            GROUNDEDNESS / FAITHFULNESS
          </span>

          <p>
            ¿El Sabio responde basándose únicamente en la
            evidencia recuperada?
          </p>

          <div className="evaluation-question">
            <span>PRUEBA</span>
            ¿Está respaldada la respuesta?
          </div>
        </div>

        <div className="evaluation-card answer-card">
          <div className="evaluation-number">03</div>

          <div className="evaluation-icon">
            🎯
          </div>

          <h3>Relevancia de la respuesta</h3>

          <span className="evaluation-term">
            ANSWER RELEVANCE
          </span>

          <p>
            ¿La respuesta resuelve de forma directa y útil
            la pregunta original?
          </p>

          <div className="evaluation-question">
            <span>PRUEBA</span>
            ¿Respondió exactamente lo que preguntaron?
          </div>
        </div>

      </div>

      <div className="evaluation-bottom">
        <span>SELLO DEL CONSEJO</span>

        <strong>
          Contexto correcto + respuesta fundamentada + respuesta útil
        </strong>
      </div>

    </div>
  </Slide>
);

export default Slide07Evaluation;