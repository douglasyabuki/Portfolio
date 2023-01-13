// Interfaces
import { ISocial } from '../../../interfaces/ISocial';

interface Props {
  list: ISocial[];
}

// Footer Social main function
export default function FooterSocial({ list }: Props) {
  return (
    <div className="flex gap-2">
      {list.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="flex lg:h-10 lg:w-10 w-8 h-8 items-center rounded-full text-not-so-white transition-all duration-200 ease-in-out hover:bg-not-so-white hover:text-black hover:shadow-md hover:shadow-slate-400 justify-center"
        >
          <i className={`${item.icon} text-xl lg:text-2xl`}></i>
        </a>
      ))}
    </div>
  );
}
