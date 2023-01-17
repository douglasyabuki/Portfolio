// Components
import AboutBoard from './about-board/AboutBoard';

// Interfaces
import { IAboutInfo } from '../../../../interfaces/IAboutInfo';

// Props destructuring
interface Props {
  item: IAboutInfo;
}

// About Douglas main function
export default function AboutDouglas({ item }: Props) {

  // Destructuring the received props into different const
  const { title, content, infoList } = item;

  // Returns personal information about Douglas to About.tsx
  return (
    <div className="w-auto space-y-12 px-4 py-20 sm:px-7 md:px-8 lg:px-10">
      <div className="block w-full justify-center py-8 text-center lg:flex lg:justify-between lg:text-left">
        <h1 className="w-auto text-center text-3xl font-bold md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">{title}</h1>
        <h2 className="py-4 text-xl opacity-70 md:text-2xl lg:w-2/5 lg:py-0 2xl:text-4xl">
          {content}
        </h2>
      </div>
      <AboutBoard infoList={infoList}></AboutBoard>
    </div>
  );
}
