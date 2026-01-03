import { INPUT_STYLES } from '../lib/constants/constants';

interface MatrixCellProps {
  value: string;
  onChange: (value: string) => void;
  rowIndex: number;
  colIndex: number;
}

export const MatrixCell = ({ value, onChange, rowIndex, colIndex }: MatrixCellProps) => {
  return (
    <input
      className={`${INPUT_STYLES.base} ${INPUT_STYLES.cell}`}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="0"
      aria-label={`Cell ${rowIndex + 1},${colIndex + 1}`}
    />
  );
};
