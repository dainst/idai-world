import { MenuItem } from './MenuItem';
export interface MenuGroup {
  name: string;
  items: (MenuItem | MenuGroup)[];
}
