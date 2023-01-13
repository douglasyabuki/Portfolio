// Interfaces
import { IEducation } from '../../../../interfaces/IEducation';

interface Props {
  list: IEducation[];
}

export default function Education({ list }: Props) {
  return (
    <div className="container w-auto space-y-12 px-4 py-20 sm:px-7 md:px-8 lg:px-10">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">Education</h1>
      {list.map((item) => (
        <div key={item.id} className="container flex w-1/2 rounded-xl bg-background-div1 p-4 shadow-md shadow-black">
          <i className={`${item.icon} text-xl`}></i>
          <div className="block p-4">
            <div className="flex gap-4 items-baseline">
              <h2 className='mb-4 text-xl font-bold md:text-2xl xl:text-3xl'>{item.university}</h2>
              <h3 className='text-lg opacity-80 md:text-xl 3xl:text-2xl'>{item.current ? 'Current' : 'Concluded'}</h3>
            </div>
            <h4 className=''>{`${item.category} in ${item.degree}`}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
