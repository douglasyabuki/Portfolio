// Interfaces
import { IResumePath } from '../../../../../../interfaces/IResume';

// Props destructuring
interface Props {
  item: IResumePath;
}

// PDF hole main function
export default function PdfHole({ item }: Props) {
  // Conditional styling to avoid nested template literals
  let shadowChooser =
    item.id === 0
      ? `shadow-inner1 hover:shadow-inner1-hover`
      : `shadow-inner2 hover:shadow-inner2-hover`;

  // Exports a hole-shaped div with a pdf anchor inside it to ResumeChooser.tsx
  return (
    <div
      className={`${shadowChooser} flex h-32 w-32 items-center justify-center rounded-xl  transition-all duration-300 hover:translate-y-1 `}
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
