// Interfaces
import { IResumePath } from '../../../../../../interfaces/IResume';

// Props destructuring
interface Props {
  item: IResumePath;
}

// PDF hole main function
export default function PdfHole({ item }: Props) {
  // Exports a hole-shaped div with a pdf anchor inside it to ResumeChooser.tsx
  return (
    <div
      className={`flex h-32 w-32 items-center justify-center rounded-xl shadow-inner${
        item.id + 1
      }  transition-all duration-300 hover:translate-y-1 hover:shadow-inner${item.id + 1}-hover `}
    >
      <a href={item.downloadPath} download>
        <img
          className="cover h-16 w-16 transition-transform duration-300 hover:scale-110"
          src={item.svg}
          alt={item.svgAlt}
        />
      </a>
    </div>
  );
}
