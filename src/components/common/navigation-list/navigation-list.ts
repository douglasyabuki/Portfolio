// Interface
import { INavigation } from "../../../interfaces/INavigation";

// Exports routing links to Header and Footer
export const navigationList: INavigation[] = [
  {
    id: 0,
    name: 'Home',
    link: '#home',
    icon: 'fa fa-home'
  },
  {
    id: 1,
    name: 'About',
    link: '#about',
    icon: 'fa fa-user'
  },
  {
    id: 2,
    name: 'Resume',
    link: '#resume',
    icon: 'fa fa-file-text'
  },
  {
    id: 3,
    name: 'Projects',
    link: '#projects',
    icon: 'fa fa-rocket'
  },
  {
    id: 4,
    name: 'Contact',
    link: '#contact',
    icon: 'fa fa-vcard'
  },
]
