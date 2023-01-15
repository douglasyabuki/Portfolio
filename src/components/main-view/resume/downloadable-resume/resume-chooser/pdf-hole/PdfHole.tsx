// Interfaces
import { IResumePath } from '../../../../../../interfaces/IResume';

interface Props {
  item: IResumePath;
}

export default function PdfHole({ item }: Props) {
  return (
    <div
      className={`flex h-32 w-32 items-center justify-center rounded-xl shadow-inner${
        item.id + 1
      } transition-all duration-300 hover:translate-y-1 hover:shadow-inner${item.id + 1}-hover`}
    >
      <a href={item.downloadPath}>
        <img
          className="cover h-16 w-16 transition-transform duration-300 hover:scale-110"
          src={item.svg}
          alt={item.svgAlt}
        />
      </a>
    </div>
  );
}
