import Slide from '../components/Slide';

const Slide03Metaphor = () => (
  <Slide
    title={<span style={{ whiteSpace: 'nowrap' }}>Entonces apareció el Archivero Ninja</span>}
    subtitle="Tres componentes para entender cómo funciona"
  >
    <div className="metaphor-slide">

      <div className="metaphor-story">
        <div className="metaphor-character">
          🧙‍♂️
        </div>

        <div className="metaphor-arrow">
          →
        </div>

        <div className="metaphor-character ninja">
          🥷
        </div>

        <div className="metaphor-arrow">
          →
        </div>

        <div className="metaphor-character">
          📜
        </div>
      </div>

      <div className="metaphor-labels">
        <span style={{ transform: 'translateX(5px)' }}>
          EL SABIO
        </span>

        <span style={{ transform: 'translateX(10px)' }}>
          EL ARCHIVERO
        </span>

        <span style={{ transform: 'translateX(15px)' }}>
          LOS PERGAMINOS
        </span>
      </div>

      <div className="metaphor-grid">

        <div className="metaphor-card sage-card">
          <div className="metaphor-card-icon">🧠</div>

          <h3>El Sabio con Amnesia</h3>

          <p>
            El <strong>LLM</strong> aporta razonamiento y capacidad de
            generación, pero no tiene acceso automático a información
            privada o actualizada.
          </p>

          <div className="metaphor-role"
          style={{ textAlign: 'center' }}
          >
            ROL → <strong>RAZONAR Y GENERAR</strong>
          </div>
        </div>

        <div className="metaphor-card ninja-card">
          <div className="metaphor-card-icon">🥷</div>

          <h3>El Archivero Ninja</h3>

          <p>
            El sistema de <strong>retrieval</strong> busca rápidamente los
            fragmentos más relevantes dentro de los documentos disponibles.
          </p>

          <div className="metaphor-role"
          style={{ textAlign: 'center' }}
          >
            ROL → <strong>BUSCAR Y RECUPERAR</strong>
          </div>
        </div>

        <div className="metaphor-card archive-card">
          <div className="metaphor-card-icon">📂</div>

          <h3>Los Archivos</h3>

          <p>
            Los documentos de la organización se transforman en
            <strong> chunks y embeddings</strong> para poder encontrarlos
            mediante búsqueda semántica.
          </p>

          <div className="metaphor-role"
          style={{ textAlign: 'center' }}
          >
            ROL → <strong>ALMACENAR LA EVIDENCIA</strong>
          </div>
        </div>

      </div>

      <div className="metaphor-bottom">
        <span>LA IDEA CLAVE</span>
        <strong>
          El Archivero no responde la pregunta. Le entrega al Sabio la
          información necesaria para responderla.
        </strong>
      </div>

    </div>
  </Slide>
);

export default Slide03Metaphor;