// Interface
import { IEducation } from '../../../../../interfaces/IEducation';

// Exports the list of Education to Education.tsx
export const educationList: IEducation[] = [
  {
    id: 0,
    university: 'Rocketseat',
    degree: 'Computer Software Engineering',
    category: 'Postgraduate degree',
    icon: 'fa fa-graduation-cap',
    current: true,
  },
  {
    id: 1,
    university: 'UNINTER',
    degree: 'System Analysis and Development',
    category: "Technology's degree",
    icon: 'fa fa-cog',
    current: false,
  },
  {
    id: 2,
    university: 'UFPR',
    degree: 'Civil Engineering',
    category: "Bachelor's degree",
    icon: 'fa fa-graduation-cap',
    current: false,
  },
  {
    id: 3,
    university: 'Complimentary Education',
    degree: 'downloadable Resume',
    category: 'Check it out',
    icon: 'fa fa-circle-o-notch',
    current: true,
    href: '#downloadable-resume',
  },
];
