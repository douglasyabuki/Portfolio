// Interface
import { IEducation } from "../../../../../interfaces/IEducation"

export const educationList: IEducation[] = [
  { id: 0, university: 'UFPR', degree: 'Civil Engineering', category: "Bachelor's degree", icon: 'fa fa-graduation-cap', current: false },
  { id: 1, university: 'UNINTER', degree: 'System Analysis and Development', category: "Technology's degree", icon: 'fa fa-cog', current: true },
  { id: 2, university: 'Complimentary Education', degree: 'downloadable Resume', category: "Check it out", icon: 'fa fa-circle-o-notch', current: true, href:'#downloadable-resume' },
]
