import { BUTTON_STYLES } from '../constants/constants';
import type { ReactNode } from 'react';

interface ControlButtonProps {
  icon: ReactNode;
  onClick: () => void;
  ariaLabel: string;
  className?: string
}

export const ControlButton = ({ icon, onClick, ariaLabel, className }: ControlButtonProps) => {
  return (
    <button
      className={`${BUTTON_STYLES.base} ${BUTTON_STYLES.control} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};
