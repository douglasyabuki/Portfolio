// Components
import AboutBoard from './about-board/AboutBoard';

// Interfaces
import { IAboutInfo } from '../../../../interfaces/IAboutInfo';

// Props destructuring
interface Props {
  item: IAboutInfo;
}

export default function AboutDouglas({ item }: Props) {
  const { title, content, infoList } = item;
  // p-4 sm:p-7 md:p-8
  return (
    <div className="container h-auto w-full py-20 lg:px-10 xl:px-20">
      <div className="block w-full justify-center py-8 text-center lg:flex lg:justify-between lg:text-left">
        <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">{title}</h1>
        <h2 className="py-4 text-xl opacity-70 md:text-2xl lg:w-2/5 lg:py-0 2xl:text-4xl">
          {content}
        </h2>
      </div>
      <AboutBoard infoList={infoList}></AboutBoard>
    </div>
  );
}
