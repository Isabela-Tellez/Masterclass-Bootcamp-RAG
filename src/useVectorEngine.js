import { useState, useCallback } from 'react';

export const useVectorEngine = () => {
  const [documents, setDocuments] = useState([]);
  const [chunks, setChunks] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const generateSimpleEmbedding = (text) => {
    const words = text.toLowerCase().match(/\w+/g) || [];
    return words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
  };

  const calculateSimilarity = (queryEmbedding, chunkEmbedding) => {
    let score = 0;
    Object.keys(queryEmbedding).forEach((word) => {
      if (chunkEmbedding[word]) {
        score += queryEmbedding[word] * chunkEmbedding[word];
      }
    });
    return score;
  };

  const processDocument = useCallback((title, content, chunkSize = 150, chunkOverlap = 20) => {
    setIsProcessing(true);

    const newDoc = { id: Date.now(), title, content };
    setDocuments((prev) => [...prev, newDoc]);

    const generatedChunks = [];
    let start = 0;
    let index = 0;

    while (start < content.length) {
      const end = Math.min(start + chunkSize, content.length);
      const chunkText = content.slice(start, end);

      generatedChunks.push({
        id: `${newDoc.id}-chunk-${index}`,
        docTitle: title,
        text: chunkText,
        embedding: generateSimpleEmbedding(chunkText)
      });

      start += chunkSize - chunkOverlap;
      index++;
    }

    setChunks((prev) => [...prev, ...generatedChunks]);
    setIsProcessing(false);
  }, []);

  const searchSimilarity = useCallback((query, topK = 3) => {
    if (chunks.length === 0) return [];

    const queryEmbedding = generateSimpleEmbedding(query);

    const scoredChunks = chunks.map((chunk) => ({
      ...chunk,
      score: calculateSimilarity(queryEmbedding, chunk.embedding)
    }));

    return scoredChunks
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }, [chunks]);

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