import { useState } from 'react';
import useVectorEngine from '../useVectorEngine';

const RagDemo = () => {
  const {
    chunks,
    isProcessing,
    processDocument,
    searchSimilarity,
    clearDatabase
  } = useVectorEngine();

  const [docTitle, setDocTitle] = useState('');
  const [docContent, setDocContent] = useState('');
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleAddDocument = (e) => {
    e.preventDefault();

    if (!docTitle.trim() || !docContent.trim()) {
      return;
    }

    processDocument(docTitle.trim(), docContent.trim());

    setDocTitle('');
    setDocContent('');
    setSearchResults([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    const results = searchSimilarity(query.trim(), 3);
    setSearchResults(results);
  };

  return (
    <div className="main-layout">

      {/* =====================================================
          ACTO 1 — INGESTA Y FRAGMENTACIÓN
          ===================================================== */}

      <div className="card">
        <h2>📜 1. Ingesta y fragmentación</h2>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            marginTop: '0.4rem'
          }}
        >
          Convierte el texto en pequeños bloques (chunks) listos para la
          búsqueda vectorial.
        </p>

        <form
          onSubmit={handleAddDocument}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            marginTop: '1.2rem'
          }}
        >
          <input
            type="text"
            placeholder="Título del documento (ej. Reglamento de Evaluación)"
            value={docTitle}
            onChange={(e) => setDocTitle(e.target.value)}
            style={{
              padding: '0.6rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              background: 'var(--bg-primary)',
              color: 'white'
            }}
            required
          />

          <textarea
            rows="5"
            placeholder="Escribe o pega aquí el contenido del documento..."
            value={docContent}
            onChange={(e) => setDocContent(e.target.value)}
            style={{
              padding: '0.6rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              background: 'var(--bg-primary)',
              color: 'white',
              resize: 'vertical'
            }}
            required
          />

          <button
            type="submit"
            disabled={isProcessing}
            style={{
              padding: '0.7rem',
              background: 'var(--accent)',
              color: '#000',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '4px',
              cursor: isProcessing ? 'not-allowed' : 'pointer'
            }}
          >
            {isProcessing ? 'Procesando...' : '⚙️ Fragmentar e indexar'}
          </button>
        </form>

        {/* BASE VECTORIAL */}

        <div style={{ marginTop: '1.5rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <h3>Base vectorial ({chunks.length} fragmentos)</h3>

            {chunks.length > 0 && (
              <button
                onClick={clearDatabase}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                Limpiar
              </button>
            )}
          </div>

          <div
            style={{
              maxHeight: '220px',
              overflowY: 'auto',
              marginTop: '0.8rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            {chunks.length === 0 ? (
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem'
                }}
              >
                No hay fragmentos cargados en la base de datos.
              </p>
            ) : (
              chunks.map((chunk) => (
                <div
                  key={chunk.id}
                  style={{
                    background: 'var(--bg-primary)',
                    padding: '0.6rem',
                    borderRadius: '4px',
                    borderLeft: '3px solid var(--accent)',
                    fontSize: '0.85rem'
                  }}
                >
                  <strong style={{ color: 'var(--accent)' }}>
                    [{chunk.docTitle}]
                  </strong>

                  <p
                    style={{
                      marginTop: '0.2rem',
                      color: 'var(--text-main)'
                    }}
                  >
                    {chunk.text}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          ACTOS 2 Y 3 — CONSULTA Y CONTEXTO
          ===================================================== */}

      <div className="card">
        <h2>🔮 2. Consulta y generación</h2>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            marginTop: '0.4rem'
          }}
        >
          El Archivero busca los fragmentos más relevantes y se los entrega
          al Sabio como contexto.
        </p>

        {/* CONSULTA */}

        <form
          onSubmit={handleSearch}
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: '1.2rem'
          }}
        >
          <input
            type="text"
            placeholder="Pregunta al sistema (ej. ¿Cuándo es el examen?)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              padding: '0.6rem',
              borderRadius: '4px',
              border: '1px solid var(--border)',
              background: 'var(--bg-primary)',
              color: 'white'
            }}
            required
          />

          <button
            type="submit"
            style={{
              padding: '0.6rem 1.2rem',
              background: 'var(--success)',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            🔍 Buscar
          </button>
        </form>

        {/* RESULTADOS */}

        <div style={{ marginTop: '1.5rem' }}>
          <h3>Contexto recuperado (Top 3)</h3>

          {searchResults.length === 0 ? (
            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                marginTop: '0.5rem'
              }}
            >
              Realiza una búsqueda para recuperar los fragmentos con mayor
              similitud semántica.
            </p>
          ) : (
            searchResults.map((result) => (
              <div
                key={result.id}
                style={{
                  background: 'var(--bg-primary)',
                  padding: '0.7rem',
                  borderRadius: '4px',
                  margin: '0.6rem 0',
                  border: '1px solid var(--border)'
                }}
              >
                <p style={{ fontSize: '0.9rem' }}>
                  "{result.text}"
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '0.4rem',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <span>
                    Origen: {result.docTitle}
                  </span>

                  <span style={{ color: 'var(--accent)' }}>
                    Similitud: {(result.score * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* =====================================================
            CONTEXTO ENTREGADO AL SABIO
            ===================================================== */}

        {searchResults.length > 0 && (
          <div
            style={{
              marginTop: '1.5rem',
              background: 'var(--bg-primary)',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid var(--accent)'
            }}
          >
            <h4
              style={{
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                margin: 0
              }}
            >
              🧙‍♂️ Contexto entregado al Sabio
            </h4>

            <p
              style={{
                fontSize: '0.95rem',
                marginTop: '0.5rem',
                lineHeight: '1.5',
                color: 'var(--text-main)'
              }}
            >
              El Archivero recuperó estos fragmentos y se los entrega al
              modelo como contexto para generar la respuesta.
            </p>

            <div
              style={{
                marginTop: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem'
              }}
            >
              {searchResults.map((result, index) => (
                <div
                  key={result.id}
                  style={{
                    padding: '0.8rem',
                    borderRadius: '8px',
                    background: 'rgba(124, 58, 237, 0.08)',
                    border: '1px solid rgba(124, 58, 237, 0.2)'
                  }}
                >
                  <div
                    style={{
                      color: 'var(--accent)',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      marginBottom: '0.4rem'
                    }}
                  >
                    CHUNK #{index + 1}
                  </div>

                  <div
                    style={{
                      color: '#cbd5e1',
                      fontSize: '0.88rem',
                      lineHeight: '1.5'
                    }}
                  >
                    {result.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RagDemo;