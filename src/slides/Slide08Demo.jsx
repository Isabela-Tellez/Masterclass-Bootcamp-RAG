import Slide from '../components/Slide';
import RagDemo from '../components/RagDemo';

const Slide08Demo = () => (
  <Slide
    title="El Archivero Ninja entra en acción"
    subtitle="Ahora veremos cómo el sistema recupera evidencia antes de que el Sabio responda"
  >
    <div className="demo-slide">
      <div className="demo-story">
        <span>🥷 Archivero Ninja</span>
        <span className="demo-arrow">→</span>
        <span>📜 Recupera evidencia</span>
        <span className="demo-arrow">→</span>
        <span>🧙‍♂️ Sabio responde</span>
      </div>

      <RagDemo />
    </div>
  </Slide>
);

export default Slide08Demo;