// Components
import AboutBoardFrame from "./about-board-frame/AboutBoardFrame";
import AboutBoardSelector from "./about-board-selector/AboutBoardSelector";

// Const

// Hooks
import React, { useState } from "react";

// Interfaces
import { IAboutSection } from "../../../../../interfaces/IAboutSection";

interface Props {
  infoList: IAboutSection[],
}

export default function AboutBoard({infoList}: Props) {
  const [currentSection, setCurrentSection] = useState<number | null>(null);

  return (
    <div className="group container block lg:flex">
      <div className="flex w-min h-auto m-auto lg:block">
      {infoList.map((item) => (
        <AboutBoardSelector onClickHandler={() => setCurrentSection(item.sectionId)} id={item.sectionId} key={item.sectionId} icon={item.sectionIcon} title={item.sectionTitle}></AboutBoardSelector>
      ))}
      </div>
      <div>
        {currentSection}
      {/* <AboutBoardSelector id={} key={} icon="" title=""></AboutBoardSelector>
      <AboutBoardFrame></AboutBoardFrame> */}
      </div>
    </div>
  );
}
