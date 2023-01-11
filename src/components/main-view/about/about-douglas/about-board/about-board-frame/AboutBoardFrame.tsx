// Interfaces
import { IAboutSection } from '../../../../../../interfaces/IAboutSection';
interface Props {
  currentSection: IAboutSection;
}

export default function AboutBoardFrame({ currentSection }: Props) {
  return (
    <div className="relative h-full rounded-xl transition-all text-center lg:text-left py-5">
      <div className="container px-4 lg:w-4/6 p-2 lg:p-12">
        <h1 className="mb-4 text-4xl">{currentSection.sectionTitle}</h1>
        <h1 className="text-xl opacity-80">{currentSection.sectionContent}</h1>
      </div>
      <div className="relative p-2 w-auto lg:rounded-3xl lg:bg-background-div2 lg:bg-opacity-90 shadow-lg lg:shadow-black lg:absolute lg:top-4 lg:-right-4">
        <img
          src={currentSection.sectionImage}
          alt={currentSection.sectionImageAlt}
          className="w-60 m-auto h-auto lg:w-96 rounded-3xl"
        />
      </div>
    </div>
  );
}
