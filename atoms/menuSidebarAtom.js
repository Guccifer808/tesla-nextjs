import { atom } from 'recoil';

//creating atom for nav menu sidebar
export const menuSidebarAtom = atom({
  key: 'menuSidebarState',
  default: false,
});
