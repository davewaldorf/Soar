import depositIcon from './depositIcon.svg';
import paypalIcon from './paypalIcon.svg';
import dollarCircleIcon from './dollarCircleIcon.svg';

export const icons = {
  depositIcon,
  paypalIcon,
  dollarCircleIcon,
} as const;

export type IconKeys = keyof typeof icons;