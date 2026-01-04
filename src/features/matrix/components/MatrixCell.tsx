import { INPUT_STYLES } from '../constants/constants';

interface MatrixCellProps {
  value: string;
  onChange: (value: string) => void;
  rowIndex: number;
  colIndex: number;
}

export const MatrixCell = ({ value, onChange, rowIndex, colIndex }: MatrixCellProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow empty string, numbers, negative sign, and decimal point
    if (newValue === '' || /^-?\d*\.?\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <input
      className={`${INPUT_STYLES.base} ${INPUT_STYLES.cell} p-2 border border-[#b62c2c]`}
      type="text"
      inputMode="decimal"
      value={value}
      onChange={handleChange}
      placeholder="0"
      aria-label={`Cell ${rowIndex + 1},${colIndex + 1}`}
    />
  );
};
