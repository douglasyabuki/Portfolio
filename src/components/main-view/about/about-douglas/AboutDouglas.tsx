// Interfaces
import { IAboutInfo } from "../../../../interfaces/IAboutInfo";

interface Props {
  item: IAboutInfo;
}

export default function AboutDouglas({item}: Props) {
  const {title, content} = item

  return (
    <div className="container h-auto w-full">
      <h1 className='text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl'>{title}</h1>
      <h2 className='py-4 text-xl opacity-80 xs:py-8 md:text-2xl xl:py-12 2xl:py-16 2xl:text-4xl'>{content}</h2>
    </div>
  );
}
