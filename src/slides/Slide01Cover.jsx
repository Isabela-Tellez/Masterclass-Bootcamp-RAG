import Slide from '../components/Slide';

const Slide01Cover = () => (
  <div className="cover-slide">

    <div className="cover-badge">
      MANUAL DE ARQUITECTURA E INGENIERÍA DE IA
    </div>

    <div className="cover-content">

      <div className="cover-text">

        <p className="cover-eyebrow">
          DESCIFRANDO LA ARQUITECTURA RAG
        </p>

        <h1>
          El Sabio con
          <span>Amnesia</span>
          y el Archivero
          <span>Ninja</span>
        </h1>

        <p className="cover-subtitle">
          De la historia del <strong>Sabio y el Archivero Ninja</strong>
          <br /> a la arquitectura RAG.
        </p>

        <div className="cover-rag">
          <span>R</span>
          <span>A</span>
          <span>G</span>
          <small>Retrieval · Augmentation · Generation</small>
        </div>

      </div>

      <div className="cover-visual">

        <div className="cover-orbit orbit-one" />
        <div className="cover-orbit orbit-two" />

        <div className="cover-core">
          <span>RAG</span>
          <small>
            SABIO<br />
            +<br />
            ARCHIVERO
          </small>
        </div>

        <div className="cover-node node-document">
          📜
          <span>Documentos</span>
        </div>

        <div className="cover-node node-ninja">
          🥷
          <span>Archivero Ninja</span>
        </div>

        <div className="cover-node node-sage">
          🧙‍♂️
          <span>Sabio · LLM</span>
        </div>

      </div>

    </div>

    <div className="cover-story">
      <span>EL PROBLEMA</span>
      <span>EL ARCHIVERO</span>
      <span>EL MAPA VECTORIAL</span>
      <span>EL SABIO</span>
    </div>

  </div>
);

export default Slide01Cover;