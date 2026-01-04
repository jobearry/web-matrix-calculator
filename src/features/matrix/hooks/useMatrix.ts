import { useCallback, useState } from 'react';
import { Matrix, MatrixValue, MAX_DIMENSION, MIN_DIMENSION } from '../types/types';

export const useMatrix = (initialRows = 1, initialCols = 1) => {
  const [matrix, setMatrix] = useState<Matrix>(() =>
    Array(initialRows).fill(null).map(() => Array(initialCols).fill(''))
  );

  const updateCell = useCallback((rowIndex: number, colIndex: number, value: MatrixValue) => {
    setMatrix((prev) =>
      prev.map((row, rIdx) =>
        rIdx === rowIndex
          ? row.map((cell, cIdx) => (cIdx === colIndex ? value : cell))
          : row
      )
    );
  }, []);

  const addRow = useCallback(() => {
    setMatrix((prev) => {
      if (prev.length >= MAX_DIMENSION) return prev;
      const newRow = Array(prev[0]?.length || 1).fill('');
      return [...prev, newRow];
    });
  }, []);

  const removeRow = useCallback(() => {
    setMatrix((prev) => {
      if (prev.length <= MIN_DIMENSION) return prev;
      return prev.slice(0, -1);
    });
  }, []);

  const addCol = useCallback(() => {
    setMatrix((prev) => {
      if (prev[0]?.length >= MAX_DIMENSION) return prev;
      return prev.map((row) => [...row, '']);
    });
  }, []);

  const removeCol = useCallback(() => {
    setMatrix((prev) => {
      if (prev[0]?.length <= MIN_DIMENSION) return prev;
      return prev.map((row) => row.slice(0, -1));
    });
  }, []);

  const dimensions = {
    rows: matrix.length,
    cols: matrix[0]?.length || 0,
  };

  return {
    matrix,
    dimensions,
    updateCell,
    addRow,
    removeRow,
    addCol,
    removeCol,
  };
};
