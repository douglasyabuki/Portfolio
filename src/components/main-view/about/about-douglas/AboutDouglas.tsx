// Interfaces
import { IAboutInfo } from "../../../../interfaces/IAboutInfo";
import AboutBoard from "./about-board/AboutBoard";

// Hooks
import { useState } from "react";
interface Props {
  item: IAboutInfo;
}

export default function AboutDouglas({item}: Props) {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const {title, content} = item

  return (
    <div className="container h-auto w-full p-4 sm:p-7 md:p-8 lg:p-10 xl:p-20">
      <div className="flex w-full justify-between py-8">
      <h1 className='w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl'>{title}</h1>
      <h2 className='w-2/5 text-xl opacity-70 md:text-2xl 2xl:text-4xl'>{content}</h2>
      </div>
      <AboutBoard></AboutBoard>
    </div>
  );
}
