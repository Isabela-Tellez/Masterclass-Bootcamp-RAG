import { useState, useCallback } from 'react';

/*
 * Normaliza el texto:
 * - minúsculas
 * - elimina tildes
 * - elimina signos
 * - elimina espacios duplicados
 */
const normalizeText = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/*
 * Palabras que aportan muy poca información
 * a la búsqueda semántica de esta demo.
 */
const STOP_WORDS = new Set([
  'el',
  'la',
  'los',
  'las',
  'un',
  'una',
  'unos',
  'unas',
  'de',
  'del',
  'al',
  'a',
  'en',
  'y',
  'o',
  'que',
  'como',
  'con',
  'para',
  'por',
  'se',
  'su',
  'sus',
  'es',
  'son',
  'un',
  'una',
  'qué',
  'cual',
  'cuál',
  'cómo',
  'funciona'
]);

/*
 * Extrae las palabras relevantes.
 */
const getKeywords = (text) =>
  normalizeText(text)
    .split(' ')
    .filter((word) => word.length > 2)
    .filter((word) => !STOP_WORDS.has(word));

/*
 * "Embedding" simplificado para la demo.
 * No es un embedding real de un modelo de IA:
 * representa cada texto mediante las palabras relevantes.
 */
const generateSimpleEmbedding = (text) => {
  const words = getKeywords(text);

  return words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
};

/*
 * Calcula una puntuación basada en:
 *
 * 1. coincidencias exactas
 * 2. frecuencia de coincidencias
 * 3. importancia de las palabras de la consulta
 *
 * Las palabras más específicas reciben más peso.
 */
const calculateSimilarity = (queryEmbedding, chunkEmbedding) => {
  const queryWords = Object.keys(queryEmbedding);

  if (queryWords.length === 0) {
    return 0;
  }

  let score = 0;
  let totalWeight = 0;

  queryWords.forEach((word) => {
    const queryFrequency = queryEmbedding[word];

    /*
     * Las palabras largas suelen ser más específicas.
     */
    const weight = word.length >= 6 ? 2 : 1;

    totalWeight += weight;

    if (chunkEmbedding[word]) {
      score += weight;

      /*
       * Bonus pequeño si aparece varias veces.
       */
      if (chunkEmbedding[word] > 1) {
        score += 0.2;
      }
    }
  });

  if (totalWeight === 0) {
    return 0;
  }

  return Math.min(score / totalWeight, 1);
};

/*
 * Divide el documento en chunks.
 */
const createChunks = (
  content,
  chunkSize = 55,
  chunkOverlap = 10
) => {
  const words = content.split(/\s+/).filter(Boolean);

  const generatedChunks = [];

  let start = 0;
  let index = 0;

  while (start < words.length) {
    const end = Math.min(start + chunkSize, words.length);

    const chunkWords = words.slice(start, end);

    generatedChunks.push({
      index,
      text: chunkWords.join(' ')
    });

    if (end === words.length) {
      break;
    }

    start += chunkSize - chunkOverlap;
    index++;
  }

  return generatedChunks;
};

export const useVectorEngine = () => {
  const [documents, setDocuments] = useState([]);
  const [chunks, setChunks] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  /*
   * INGESTA
   */
  const processDocument = useCallback(
    (title, content, chunkSize = 55, chunkOverlap = 10) => {
      setIsProcessing(true);

      const newDoc = {
        id: Date.now(),
        title,
        content
      };

      const generatedChunks = createChunks(
        content,
        chunkSize,
        chunkOverlap
      );

      const processedChunks = generatedChunks.map((chunk) => ({
        id: `${newDoc.id}-chunk-${chunk.index}`,
        docTitle: title,
        text: chunk.text,
        embedding: generateSimpleEmbedding(chunk.text)
      }));

      setDocuments((prev) => [...prev, newDoc]);

      setChunks((prev) => [
        ...prev,
        ...processedChunks
      ]);

      setIsProcessing(false);
    },
    []
  );

  /*
   * BÚSQUEDA
   */
  const searchSimilarity = useCallback(
    (query, topK = 3) => {
      if (!query.trim() || chunks.length === 0) {
        return [];
      }

      const queryEmbedding =
        generateSimpleEmbedding(query);

      const scoredChunks = chunks.map((chunk) => ({
        ...chunk,
        score: calculateSimilarity(
          queryEmbedding,
          chunk.embedding
        )
      }));

      return scoredChunks
        .filter((chunk) => chunk.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, topK);
    },
    [chunks]
  );

  /*
   * LIMPIAR BASE VECTORIAL
   */
  const clearDatabase = useCallback(() => {
    setDocuments([]);
    setChunks([]);
  }, []);

  return {
    documents,
    chunks,
    isProcessing,
    processDocument,
    searchSimilarity,
    clearDatabase
  };
};

export default useVectorEngine;