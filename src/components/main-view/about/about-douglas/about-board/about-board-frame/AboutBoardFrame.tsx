// Interfaces
import { IAboutSection } from '../../../../../../interfaces/IAboutSection';
interface Props {
  currentSection: IAboutSection;
}

export default function AboutBoardFrame({ currentSection }: Props) {
  return (
    <div className="relative h-full rounded-xl py-5 text-center transition-all lg:text-left">
      <div className="container p-2 px-4 lg:w-4/6 lg:p-12">
        <h1 className="mb-4 text-3xl font-semibold xl:text-4xl">{currentSection.sectionTitle}</h1>
        <h1 className="text-xl opacity-80">{currentSection.sectionContent}</h1>
      </div>
      <img
        src={currentSection.sectionImage}
        alt={currentSection.sectionImageAlt}
        className="container relative m-auto h-auto w-60 rounded-3xl lg:shadow-xl lg:shadow-black lg:absolute lg:top-4 lg:-right-4 lg:w-96 lg:rounded-3xl lg:bg-background-div2 lg:bg-opacity-90"
      />
    </div>
  );
}
