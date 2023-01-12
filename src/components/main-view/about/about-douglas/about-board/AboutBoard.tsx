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
    <div className="container block h-auto w-full lg:flex lg:py-20">
      <div className="block h-auto w-auto text-center lg:mr-6 lg:py-12">
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
      <div className="custom-bg-2 container relative block w-full rounded-3xl shadow-md shadow-black">
        {currentSection !== emptySection ? (
          <AboutBoardFrame currentSection={currentSection}></AboutBoardFrame>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
