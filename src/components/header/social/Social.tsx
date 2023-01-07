// Interfaces
import { ISocialList } from '../../../interfaces/ISocialList';
interface Props {
  list: ISocialList[];
}

export default function Social({ list }: Props) {
  return (
    <div className="container w-min bg-black bg-opacity-0 gap-3 px-5 rounded-2xl flex self-center group-hover:bg-opacity-80 transition-bg-opacity ease-in-out duration-300 lg:hidden">
      {list.map((item) => (
        <div key={item.id} className="">
          <a href={item.href} className='opacity-50 hover:opacity-80'>
            <i className={`${item.icon} text-xl`}></i>
          </a>
        </div>
      ))}
    </div>
  );
}
