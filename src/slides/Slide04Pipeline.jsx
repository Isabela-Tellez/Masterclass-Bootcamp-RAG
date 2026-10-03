import Slide from '../components/Slide';

const Slide04Pipeline = () => (
  <Slide
    title="El viaje del Archivero Ninja"
    subtitle="Así transforma una pregunta en una respuesta fundamentada"
  >
    <div className="pipeline-slide">

      {/* HISTORIA */}
      <div className="pipeline-story">
        <span className="pipeline-story-icon">🥷</span>

        <p>
          El viajero pregunta. El Archivero busca la evidencia.
          El Sabio responde usando únicamente lo que tiene delante.
        </p>
      </div>

      {/* PIPELINE */}
      <div className="pipeline-flow">

        {/* RETRIEVAL */}
        <div className="pipeline-step retrieval">
          <div className="pipeline-number">01</div>

          <div className="pipeline-icon">🔎</div>

          <div className="pipeline-content">
            <span className="pipeline-label">RETRIEVAL</span>

            <h3>Recuperar</h3>

            <p>
              La pregunta se convierte en un vector y el Archivero
              busca los <strong>chunks más relevantes</strong> en la
              base de datos vectorial.
            </p>
          </div>
        </div>

        <div className="pipeline-arrow">→</div>

        {/* AUGMENT */}
        <div className="pipeline-step augment">
          <div className="pipeline-number">02</div>

          <div className="pipeline-icon">📜</div>

          <div className="pipeline-content">
            <span className="pipeline-label">AUGMENT</span>

            <h3>Aumentar</h3>

            <p>
              Los fragmentos recuperados se incorporan al
              <strong> prompt</strong> junto con la pregunta y las
              instrucciones del sistema.
            </p>
          </div>
        </div>

        <div className="pipeline-arrow">→</div>

        {/* GENERATE */}
        <div className="pipeline-step generate">
          <div className="pipeline-number">03</div>

          <div className="pipeline-icon">🧠</div>

          <div className="pipeline-content">
            <span className="pipeline-label">GENERATE</span>

            <h3>Generar</h3>

            <p>
              El Sabio procesa el contexto recuperado y genera una
              respuesta <strong>basada en la evidencia</strong>.
            </p>
          </div>
        </div>

      </div>

      {/* IDEA CLAVE */}
      <div className="pipeline-bottom">
        <span>💡 PRINCIPIO CLAVE</span>

        <strong>
          El LLM deja de depender de su memoria como fuente principal
          y razona sobre información recuperada en tiempo real.
        </strong>
      </div>

    </div>
  </Slide>
);

export default Slide04Pipeline;