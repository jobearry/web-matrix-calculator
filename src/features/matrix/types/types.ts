export type MatrixValue = string;

export type Matrix = MatrixValue[][];

export interface MatrixDimensions {
  rows: number;
  cols: number;
}

export const MIN_DIMENSION = 1;
export const MAX_DIMENSION = 4;
