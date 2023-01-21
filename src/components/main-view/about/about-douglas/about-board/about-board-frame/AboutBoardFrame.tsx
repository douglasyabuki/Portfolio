// Interfaces
import { IAboutSection } from '../../../../../../interfaces/IAboutSection';

// Props destructuring
interface Props {
  currentSection: IAboutSection;
}

// About board frame main function
export default function AboutBoardFrame({ currentSection }: Props) {
  // Returns the current section information rendered to AboutBoard.tsx
  return (
    <div className="relative h-full rounded-xl py-5 text-center lg:text-left">
      <div className="container block p-2 px-4 md:px-24 lg:mb-32 lg:px-8 xl:p-12 2xl:mb-0 2xl:w-3/5 3xl:w-4/6">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-5xl">
          {currentSection.sectionTitle}
        </h1>
        <h2 className="py-4 text-base opacity-80 xs:py-8 xs:text-lg md:text-2xl xl:py-12 2xl:py-16 3xl:text-4xl">
          {currentSection.sectionContent}
        </h2>
      </div>
      <div className="container h-auto justify-center rounded-3xl px-2 sm:px-4 md:px-8 lg:absolute lg:-right-4 lg:-bottom-36 lg:w-80 lg:p-0 lg:shadow-xl lg:shadow-translucid-black xl:w-96 2xl:-bottom-16 2xl:w-[28rem] 3xl:-bottom-40 3xl:w-[36rem]">
        <img
          src={currentSection.sectionImage}
          alt={currentSection.sectionImageAlt}
          className="contain relative w-auto rounded-3xl"
        />
      </div>
    </div>
  );
}
