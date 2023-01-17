// Interface
import { IContact } from '../../../interfaces/IContact';

// Props destructuring
interface Props {
  list: IContact[];
}

// Footer contact main function
export default function FooterContact({ list }: Props) {

  // Creating new list without form
  const filteredList = list.filter((item) => item.id<2);

  // Returns contact info to Footer.tsx
  return (
    <div className="container w-[250px]">
      <h1 className="text-base font-semibold text-not-so-white text-opacity-80 lg:text-xl">
        Get in touch
      </h1>
      {filteredList.map((item) => (
        <div key={item.id} className="text-left text-sm lg:text-lg">
          <a
            href={item.href}
            className="text-not-so-white text-opacity-50 transition-all duration-200 ease-in-out hover:text-opacity-80 hover:underline"
          >
            {item.content}
          </a>
        </div>
      ))}
    </div>
  );
}
