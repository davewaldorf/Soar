import notificationIcon from "./notification.svg";
import searchIcon from "./search.svg";
import settingsIcon from "./settings.svg";
import userAvatar from "./user.png";

export const icons = {
  notificationIcon,
  searchIcon,
  settingsIcon,
  userAvatar,
} as const;

export type IconKeys = keyof typeof icons;