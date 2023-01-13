// Interface
import { IContact } from '../../../interfaces/IContact';

// Props destructuring
interface Props {
  list: IContact[];
}

// Footer contact main function
export default function FooterContact({ list }: Props) {
  return (
    <div className="container w-max">
      <h1 className="w-fit text-base lg:text-xl text-not-so-white text-opacity-80 font-semibold">Get in touch</h1>
      {list.map((item) => (
        <div className="text-left text-sm lg:text-lg">
          <a href={item.href} key={item.id} className="text-not-so-white text-opacity-50 hover:underline hover:text-opacity-80 transition-all ease-in-out duration-200">
            {item.content}
          </a>
        </div>
      ))}
    </div>
  );
}
