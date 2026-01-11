import { Matrix } from './types/types';

export const toNumberMatrix = (m: Matrix): number[][] =>
  m.map((row) => row.map((v) => {
    const n = parseFloat(v as string);
    return Number.isNaN(n) ? 0 : n;
  }));

export const equalsDimensions = (a: Matrix, b: Matrix): boolean =>
  a.length === b.length && (a[0]?.length || 0) === (b[0]?.length || 0);

// export const hasEmptyCells = (m: Matrix): boolean =>
//   m.some((row) => row.some((cell) => cell === '' || cell == null));

export const add = (a: Matrix, b: Matrix): Matrix | null => {
  if (!equalsDimensions(a, b)) return null;
  const na = toNumberMatrix(a);
  const nb = toNumberMatrix(b);
  return na.map((row, r) => row.map((val, c) => String(val + nb[r][c])));
};

export const subtract = (a: Matrix, b: Matrix): Matrix | null => {
  if (!equalsDimensions(a, b)) return null;
  const na = toNumberMatrix(a);
  const nb = toNumberMatrix(b);
  return na.map((row, r) => row.map((val, c) => String(val - nb[r][c])));
};

export const multiply = (a: Matrix, b: Matrix): Matrix | null => {
  const aRows = a.length;
  const aCols = a[0]?.length || 0;
  const bRows = b.length;
  const bCols = b[0]?.length || 0;
  if (aCols !== bRows) return null;

  const na = toNumberMatrix(a);
  const nb = toNumberMatrix(b);

  const result: Matrix = Array.from({ length: aRows }, () => Array(bCols).fill(''));

  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bCols; j++) {
      let sum = 0;
      for (let k = 0; k < aCols; k++) {
        sum += (na[i][k] ?? 0) * (nb[k][j] ?? 0);
      }
      result[i][j] = String(sum);
    }
  }

  return result;
};
