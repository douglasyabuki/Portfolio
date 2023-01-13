// Interfaces
import { INavigation } from '../../../interfaces/INavigation';

// Utils
import { scrollOnClick } from '../../../utils/scroll-on-click';

// Props destructuring
interface Props {
  list: INavigation[];
}

// Footer navigation main function
export default function FooterNavigation({ list }: Props) {

  // Returns navigation links to Footer.tsx
  return (
    <div className="container w-[250px]">
      <h1 className="w-max text-base font-semibold text-not-so-white text-opacity-80 lg:text-xl">
        Navigate back
      </h1>
      {list.map((item) => (
        <div
          key={item.id}
          className="justify-center text-left text-sm opacity-50 transition-all duration-200 hover:underline hover:opacity-80 lg:text-lg"
        >
          <a href={item.link} onClick={() => scrollOnClick(item.link)}>
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
}
