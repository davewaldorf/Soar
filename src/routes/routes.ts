import { IconKeys } from "../components/Layout/Sidebar/icons";

export interface Routes {
  name: string;
  path: string;
  icon: IconKeys;
}

export enum RoutePaths {
  Dashboard = "/",
  Transactions = "/transactions",
  Accounts = "/accounts",
  Investments = "/investments",
  CreditCards = "/credit-cards",
  Loans = "/loans",
  Services = "/services",
  MyPrivileges = "/privileges",
  Settings = "/settings",
  Cards = "/cards",
}

export const routes: Routes[] = [
  { name: "Dashboard", path: RoutePaths.Dashboard, icon: "dashboardIcon" },
  { name: "Transactions", path: RoutePaths.Transactions, icon: "transactionsIcon" },
  { name: "Accounts", path: RoutePaths.Accounts, icon: "accountsIcon" },
  { name: "Investments", path: RoutePaths.Investments, icon: "investmentsIcon" },
  { name: "Credit Cards", path: RoutePaths.CreditCards, icon: "creditCardsIcon" },
  { name: "Loans", path: RoutePaths.Loans, icon: "loansIcon" },
  { name: "Services", path: RoutePaths.Services, icon: "servicesIcon" },
  { name: "My Privileges", path: RoutePaths.MyPrivileges, icon: "privilegesIcon" },
  { name: "Settings", path: RoutePaths.Settings, icon: "settingsIcon" },
];