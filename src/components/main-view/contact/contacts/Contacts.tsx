// Interfaces
import { IContact } from '../../../../interfaces/IContact';

// Components
import ContactCard from './contact-card/ContactCard';
interface Props {
  list: IContact[];
}

export default function Contacts({ list }: Props) {
  return (
    <div className="w-auto space-y-12 px-4 py-20 sm:px-7 md:px-8 lg:px-10">
      <h1 className="w-auto text-center text-3xl font-bold md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
        Get in touch
      </h1>
      <div className="block h-auto w-full items-center justify-between lg:flex xl:gap-4">
        <div className="container mb-4 block w-full lg:mb-0 xl:space-y-2 2xl:space-y-6">
          {list.map((item) => (
            <ContactCard key={item.id} item={item}></ContactCard>
          ))}
        </div>
        <div className="container ">
          <img className='cover rounded-xl shadow-sm shadow-translucid-black hover:scale-105 hover:shadow-md hover:shadow-translucid-black transition-transform duration-200 ease-in' src="/contact.jpg" alt="Photo by Gilles Lambert on Unsplash" />
        </div>
      </div>
    </div>
  );
}
