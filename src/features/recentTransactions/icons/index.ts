import depositIcon from './depositICON.svg';
import paypalIcon from './paypalICON.svg';
import dollarCircleIcon from './dollarCircleIcon.svg';

export const icons = {
  depositIcon,
  paypalIcon,
  dollarCircleIcon,
} as const;

export type IconKeys = keyof typeof icons;