// Interface
import { IResume } from "../../../../../../interfaces/IResume"

// Exports the list of available resumes to download
export const resumeList:IResume[] = [
  {
    id: 0,
    language:'PT-BR' ,
    img:'brazil-flag.svg',
    imgAlt:'Brazilian flag',
    downloadPath:'/DOUGLAS_YABUKI_CV.pdf',
    svg:'/brazil-pdf.svg',
    svgAlt:'SVG from w3.org'},
  {
    id: 1,
    language:'EN-US' ,
    img:'usa-flag.svg',
    imgAlt:'American flag',
    downloadPath:'/DOUGLAS_YABUKI_RESUME.pdf',
    svg:'/usa-pdf.svg',
    svgAlt:'SVG from w3.org'},
]
