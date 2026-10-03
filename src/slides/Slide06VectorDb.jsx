import Slide from '../components/Slide';

const Slide06VectorDb = () => (
  <Slide
    title="El mapa secreto de coordenadas"
    subtitle="Cómo el Archivero Ninja encuentra los pergaminos correctos"
  >
    <div className="vector-slide">

      <div className="vector-story">
        <div className="vector-character">
          🥷
        </div>

        <div className="vector-arrow">→</div>

        <div className="vector-map">
          <div className="vector-map-title">
            ESPACIO VECTORIAL
          </div>

          <div className="vector-point point-query">
            <span>●</span>
            <small>QUERY</small>
          </div>

          <div className="vector-point point-a">
            <span>●</span>
            <small>chunk A</small>
          </div>

          <div className="vector-point point-b">
            <span>●</span>
            <small>chunk B</small>
          </div>

          <div className="vector-point point-c">
            <span>●</span>
            <small>chunk C</small>
          </div>

          <div className="vector-line" />
        </div>

        <div className="vector-arrow">→</div>

        <div className="vector-result">
          <div className="vector-result-icon">📜</div>
          <strong>TOP-K</strong>
          <small>fragmentos relevantes</small>
        </div>
      </div>

      <div className="vector-concepts">

        <div className="vector-card">
          <span className="vector-card-icon">🔢</span>

          <div>
            <h3>Embeddings</h3>
            <p>
              Cada fragmento se convierte en un
              <strong> vector numérico</strong> que representa
              su significado.
            </p>
          </div>
        </div>

        <div className="vector-card">
          <span className="vector-card-icon">📐</span>

          <div>
            <h3>Similitud</h3>
            <p>
              La consulta se compara con los vectores almacenados
              para encontrar los fragmentos
              <strong> semánticamente más cercanos</strong>.
            </p>
          </div>
        </div>

        <div className="vector-card">
          <span className="vector-card-icon">🗄️</span>

          <div>
            <h3>Base vectorial</h3>
            <p>
              Motores como <strong>Chroma, Pinecone o Qdrant</strong>
              permiten almacenar e indexar estos vectores para
              recuperarlos rápidamente.
            </p>
          </div>
        </div>

      </div>

      <div className="vector-bottom">
        <span>IDEA CLAVE</span>
        <strong>
          El Ninja no busca palabras: busca significado.
        </strong>
      </div>

    </div>
  </Slide>
);

export default Slide06VectorDb;