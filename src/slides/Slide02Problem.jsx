import Slide from '../components/Slide';

const Slide02Problem = () => (
  <Slide
    title="El Sabio tiene un problema..."
    subtitle="Es brillante, pero su conocimiento tiene límites."
  >
    <div className="problem-slide">

      <div className="problem-story">
        <div className="problem-character">
          🧙‍♂️
        </div>

        <div>
          <p className="problem-quote">
            «Puedo razonar sobre casi cualquier cosa...
            <br />
            pero no puedo consultar aquello que nunca aprendí.»
          </p>

          <p className="problem-description">
            El Sabio representa al <strong>LLM</strong>: tiene una enorme
            capacidad de razonamiento, pero no es una base de datos
            actualizada de la realidad.
          </p>
        </div>
      </div>

      <div className="problem-grid">

        <div className="problem-card">
          <div className="problem-icon">⏳</div>

          <h3>Corte de conocimiento</h3>

          <p>
            Su conocimiento queda limitado a la información disponible
            durante su entrenamiento.
          </p>

          <span className="problem-label"
           style={{ textAlign: 'center' }}
          >
            «¿Qué ocurrió ayer?»
          </span>
        </div>

        <div className="problem-card">
          <div className="problem-icon">🔒</div>

          <h3>Datos privados</h3>

          <p>
            No conoce automáticamente los documentos, procesos o bases
            de datos internas de una organización.
          </p>

          <span className="problem-label"
          style={{ textAlign: 'center' }}
          >
            «¿Qué dice nuestro reglamento?»
          </span>
        </div>

        <div className="problem-card">
          <div className="problem-icon">⚠️</div>

          <h3>Alucinaciones</h3>

          <p>
            Cuando falta información, puede generar una respuesta
            plausible aunque no esté respaldada por los hechos.
          </p>

          <span className="problem-label"
          style={{ textAlign: 'center' }}
          >
            «No lo sé» → «Voy a inventarlo»
          </span>
        </div>

      </div>

      <div className="problem-bottom">
        <span>EL DILEMA</span>
        <strong>
          ¿Cómo podemos darle al Sabio información fiable sin volver a entrenarlo?
        </strong>
      </div>

    </div>
  </Slide>
);

export default Slide02Problem;