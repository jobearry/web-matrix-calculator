import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { BUTTON_STYLES } from '../lib/constants/constants';

interface ControlButtonProps {
  icon: IconDefinition;
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
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
