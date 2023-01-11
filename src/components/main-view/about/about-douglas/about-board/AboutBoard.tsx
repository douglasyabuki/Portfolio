// Components
import AboutBoardSelector from './about-board-selector/AboutBoardSelector';
import AboutBoardFrame from './about-board-frame/AboutBoardFrame';

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

export default function AboutBoard({ infoList }: Props) {
  const [currentSectionId, setCurrentSectionId] = useState<number | null>(null);
  const [currentSection, setCurrentSection] = useState<IAboutSection>(emptySection);

  const onClickHandler = (index: number) => {
    setCurrentSectionId(index);
    let copy = deepClone(currentSection);
    copy = infoList[index];
    setCurrentSection(copy);
  };

  return (
    <div className="container block h-auto w-full lg:flex py-20">
      <div className="flex h-auto w-min lg:block py-12 lg:mr-6">
        {infoList.map((item) => (
          <AboutBoardSelector
            onClickHandler={() => onClickHandler(item.sectionId)}
            id={item.sectionId}
            key={item.sectionId}
            icon={item.sectionIcon}
            title={item.sectionTitle}
          ></AboutBoardSelector>
        ))}
      </div>
      <div className="container relative block custom-bg-2 rounded-3xl shadow-md shadow-black">
        <AboutBoardFrame currentSection={currentSection}></AboutBoardFrame>
      </div>
    </div>
  );
}
