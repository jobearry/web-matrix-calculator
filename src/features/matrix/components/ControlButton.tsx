import { BUTTON_STYLES } from '../constants/constants';
import type { ReactNode } from 'react';

interface ControlButtonProps {
  icon: ReactNode;
  onClick: () => void;
  ariaLabel: string;
}

export const ControlButton = ({ icon, onClick, ariaLabel }: ControlButtonProps) => {
  return (
    <button
      className={`${BUTTON_STYLES.base} ${BUTTON_STYLES.control}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};
