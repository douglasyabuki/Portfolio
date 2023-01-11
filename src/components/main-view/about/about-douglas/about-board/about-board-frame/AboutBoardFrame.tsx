// Interfaces
import { IAboutSection } from '../../../../../../interfaces/IAboutSection';
interface Props {
  currentSection: IAboutSection;
}

export default function AboutBoardFrame({ currentSection }: Props) {
  return (
    <div className="relative h-full bg-red-800">
      <div className='p-12 container w-4/6'>
      <h1 className="text-4xl mb-4">{currentSection.sectionTitle}</h1>
      <h1 className="text-xl">{currentSection.sectionContent}</h1>
      </div>
      <div className="absolute top-4 -right-4 h-96 w-96 bg-slate-400 rounded-3xl"></div>
    </div>
  );
}
