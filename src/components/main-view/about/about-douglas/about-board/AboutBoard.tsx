// Components
import AboutBoardFrame from './about-board-frame/AboutBoardFrame';
import AboutBoardSelector from './about-board-selector/AboutBoardSelector';

// Const
import { emptySection } from '../about-info/empty-section';

// Hooks
import { useState } from 'react';

// Interfaces
import { IAboutSection } from '../../../../../interfaces/IAboutSection';

// Utils
import { deepClone } from '../../../../../utils/deep-clone';

// Props destructuring
interface Props {
  infoList: IAboutSection[];
}

// About board main function
export default function AboutBoard({ infoList }: Props) {
  // Setting initial states (begins with no section selected)
  const [currentSectionId, setCurrentSectionId] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState<IAboutSection>(emptySection);

  // Whenever the user clicks a selector, both states change
  const onClickHandler = (index: number) => {
    setCurrentSectionId(index);
    let copy = deepClone(currentSection);
    copy = infoList[index];
    setCurrentSection(copy);
  };

  // Returns the interactive info board about Douglas to AboutDouglas.tsx
  return (
    <div className="container relative block h-auto w-full lg:flex lg:py-20">
      <div className={`${currentSectionId !== null ? `sticky top-32 w-fit h-0 -translate-x-6 lg:relative lg:top-0 lg:-translate-x-0`: `-translate-x-0 block h-auto w-auto text-center`} z-30 lg:z-20 space-y-4 lg:h-auto lg:mr-6 lg:py-12 transition-all duration-300`}>
        {infoList.map((item) => (
          <AboutBoardSelector
            id={item.sectionId}
            currentId={currentSectionId}
            onClickHandler={() => onClickHandler(item.sectionId)}
            key={item.sectionId}
            icon={item.sectionIcon}
            title={item.sectionTitle}
          ></AboutBoardSelector>
        ))}
      </div>
        <div className={`${currentSection !== emptySection ? `scale-100` : `scale-0 `} custom-bg-2 container relative block w-full rounded-3xl shadow-md shadow-translucid-black transition-all duration-300`}>
          <AboutBoardFrame currentSection={currentSection}></AboutBoardFrame>
        </div>
    </div>
  );
}
