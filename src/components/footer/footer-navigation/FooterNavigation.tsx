// Interfaces
import { INavigation } from "../../../interfaces/INavigation";

// Utils
import { scrollOnClick } from "../../../utils/scroll-on-click";
interface Props {
  list: INavigation[];
}

export default function FooterNavigation({ list }: Props) {
  return (
    <div className="container w-fit">
      <h1 className="text-not-so-white text-opacity-80 text-base font-semibold lg:text-xl w-max">Navigate back</h1>
      {list.map((item) => (
        <div key={item.id} className="justify-center text-left text-sm lg:text-lg opacity-50 hover:underline hover:opacity-80 transition-all duration-200">
          <a href={item.link} onClick={() => scrollOnClick(item.link)}>{item.name}</a>
        </div>
      ))}
    </div>
  );
}
