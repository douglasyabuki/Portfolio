// Interfaces
import { IAboutSection } from '../../../../../../interfaces/IAboutSection';
interface Props {
  currentSection: IAboutSection;
}

export default function AboutBoardFrame({ currentSection }: Props) {
  return (
    <div className="relative h-full rounded-xl py-5 text-center lg:text-left">
      <div className="container block p-2 px-4 md:px-24 lg:mb-32 lg:px-8 xl:p-12 2xl:w-3/5 2xl:mb-0 3xl:w-4/6">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-5xl">
          {currentSection.sectionTitle}
        </h1>
        <h2 className="py-4 text-xl opacity-80 xs:py-8 md:text-2xl xl:py-12 2xl:py-16 3xl:text-4xl">
          {currentSection.sectionContent}
        </h2>
      </div>
      <div className="container rounded-3xl h-auto justify-center px-2 sm:px-4 md:px-8 lg:absolute lg:-right-4 lg:-bottom-36 lg:w-80 lg:p-0 lg:shadow-xl lg:shadow-black xl:w-96 2xl:w-[28rem] 2xl:-bottom-16 3xl:w-[36rem] 3xl:-bottom-40">
        <img
          src={currentSection.sectionImage}
          alt={currentSection.sectionImageAlt}
          className="contain relative w-auto rounded-3xl"
        />
      </div>
    </div>
  );
}
