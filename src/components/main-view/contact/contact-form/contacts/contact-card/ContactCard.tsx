// Interface
import { IContact } from '../../../../../../interfaces/IContact';

// Utils
import { scrollOnClick } from '../../../../../../utils/scroll-on-click';

// Props destructuring
interface Props {
  item: IContact;
}

// Contact card main function
export default function ContactCard({ item }: Props) {

  // Returns a single interactive contact card to Contacts.tsx
  return (
    <div
      className={`group container flex h-auto min-h-[140px] scale-90 transform rounded-xl bg-background-div1 p-4 shadow-md shadow-translucid-black duration-300 hover:scale-100 hover:shadow-lg hover:shadow-translucid-black lg:min-h-[110px] lg:p-2 xl:p-4 2xl:min-h-[165px] ${
        item.id === 1 ? 'ml-4 md:ml-8 xl:ml-12' : 'ml-0'
      }`}
    >
      <i
        className={`${item.icon} } h-min
        text-3xl`}
      ></i>
      <div className="block p-2 lg:p-2 xl:p-4">
        <div className="items-baseline gap-4">
          <h2 className="mb-2 text-xl font-bold md:text-2xl xl:mb-4 xl:text-3xl 2xl:text-4xl">
            {item.name}
          </h2>
        </div>
        <a
          href={item.href}
          onClick={item.routing ? () => scrollOnClick(item.href) : null}
          target={item.newPage ? '_blank' : '_self'}
        >
          <h4 className="xl:text-lg 2xl:text-2xl">{`${item.content}`}</h4>
        </a>
      </div>
    </div>
  );
}
