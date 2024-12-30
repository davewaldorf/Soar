import dashboardIcon from './home.svg';
import transactionsIcon from './transfer.svg';
import accountsIcon from './accounts.svg';
import investmentsIcon from './investments.svg';
import creditCardsIcon from './credit-cards.svg';
import loansIcon from './loans.svg';
import servicesIcon from './services.svg';
import privilegesIcon from './privileges.svg';
import settingsIcon from './settings.svg';
import taskIcon from './task.svg';
import hamburgerIcon from './hamburger.svg';

export const icons = {
  dashboardIcon,
  transactionsIcon,
  accountsIcon,
  investmentsIcon,
  creditCardsIcon,
  loansIcon,
  servicesIcon,
  privilegesIcon,
  settingsIcon,
  taskIcon,
  hamburgerIcon,
} as const;

export type IconKeys = keyof typeof icons;
