// Interfaces
import { IImage } from '../../../../../interfaces/IImage';

// Props destructuring
export interface Props {
  list: IImage[];
}

// Education Image Board main function
export default function EducationImgBoard({ list }: Props) {

  // Returns the board of images to Education.tsx
  return (
    <div className="grid-parent">
      {list.map((item) => (
        <div className={`grid-div${item.id+1} flex`}>
          <img className='cover rounded-xl shadow-sm shadow-black' src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
