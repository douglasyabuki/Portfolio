// Interfaces
import { IAboutSection } from '../../../../../../interfaces/IAboutSection';
interface Props {
  currentSection: IAboutSection;
}

export default function AboutBoardFrame({ currentSection }: Props) {
  return (
    <div className="relative h-full rounded-xl transition-all">
      <div className='p-12 container w-4/6'>
      <h1 className="text-4xl mb-4">{currentSection.sectionTitle}</h1>
      <h1 className="text-xl">{currentSection.sectionContent}</h1>
      </div>
      <div className="absolute top-4 -right-4 bg-background-div2 bg-opacity-90 rounded-3xl shadow-lg shadow-black">
        <img src={currentSection.sectionImage} alt={currentSection.sectionImageAlt} className=' w-96 h-auto rounded-3xl'/>
      </div>
    </div>
  );
}
