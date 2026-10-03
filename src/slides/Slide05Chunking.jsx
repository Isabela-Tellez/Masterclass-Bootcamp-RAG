import Slide from '../components/Slide';

const Slide05Chunking = () => (
  <Slide
    title="El arte de cortar los pergaminos"
    subtitle="Cómo el Archivero prepara los documentos para encontrarlos después"
  >
    <div className="chunking-slide">

      {/* HISTORIA */}
      <div className="chunking-story">
        <span className="chunking-story-icon">🥷</span>

        <p>
          El Archivero no entrega un libro entero al Sabio.
          Primero lo divide en fragmentos pequeños y manejables.
        </p>
      </div>

      {/* PROCESO */}
      <div className="chunking-flow">

        {/* DOCUMENTO */}
        <div className="chunking-stage document-stage">
          <div className="chunking-icon">📖</div>

          <span className="chunking-label">DOCUMENTO</span>

          <h3>El manuscrito original</h3>

          <p>
            Un PDF, una página web, un Markdown o cualquier otra
            fuente de información.
          </p>
        </div>

        <div className="chunking-arrow">→</div>

        {/* CHUNKING */}
        <div className="chunking-stage chunk-stage">
          <div className="chunking-icon">✂️</div>

          <span className="chunking-label">CHUNKING</span>

          <h3>Dividir en fragmentos</h3>

          <div className="chunk-example">
            <span>Chunk 01</span>
            <span>Chunk 02</span>
            <span>Chunk 03</span>
          </div>

          <p>
            El <strong>chunk size</strong> controla el tamaño y el
            <strong> overlap</strong> mantiene continuidad entre fragmentos.
          </p>
        </div>

        <div className="chunking-arrow">→</div>

        {/* EMBEDDING */}
        <div className="chunking-stage embedding-stage">
          <div className="chunking-icon">🧬</div>

          <span className="chunking-label">EMBEDDING</span>

          <h3>Convertir significado</h3>

          <div className="vector-example">
            [ 0.82 · -0.14 · 0.47 · 0.91 · ... ]
          </div>

          <p>
            Cada chunk se transforma en un <strong>vector numérico</strong>
            que representa su significado.
          </p>
        </div>

      </div>

      {/* IDEA CLAVE */}
      <div className="chunking-bottom">
        <span>💡 IDEA CLAVE</span>

        <strong>
          No buscamos palabras exactas: buscamos fragmentos que tengan
          un significado parecido a la pregunta.
        </strong>
      </div>

    </div>
  </Slide>
);

export default Slide05Chunking;