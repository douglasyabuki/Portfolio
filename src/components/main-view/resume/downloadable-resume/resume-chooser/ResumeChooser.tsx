// Interfaces
import { IResume, IResumePath } from '../../../../../interfaces/IResume';

// Components
import FlagButton from './flag-button/FlagButton';
import PdfHole from './pdf-hole/PdfHole';

// Hooks
import { useState } from 'react';

// Props destructuring
interface Props {
  list: IResume[];
}

// Resume Chooser main function
export default function ResumeChooser({ list }: Props) {
  // Setting initial state
  const [resumeLanguage, setResumeLanguage] = useState<number>(0);

  // Generating a new array using interface IResumePath;
  const sourcePaths: IResumePath[] = list.map((item) => {
    return {
      id: item.id,
      downloadPath: item.downloadPath,
      svg: item.svg,
      svgAlt: item.svgAlt,
    };
  });

  // Returns downloadable PDFs based on state chosen by User
  return (
    <div className="block w-auto space-y-8">
      <h1 className="mb-2 text-center text-xl font-bold md:text-2xl xl:mb-4 xl:text-3xl 2xl:text-4xl ">
        Choose the Resume language
      </h1>
      <div className="align-center m-auto block w-fit justify-center gap-8 md:flex">
        {list.map((item) => (
          <FlagButton
            key={item.id}
            item={item}
            currentLanguage={resumeLanguage}
            setCurrentLanguage={setResumeLanguage}
          ></FlagButton>
        ))}
      </div>
      <div className="align-center relative m-auto flex h-32 w-fit items-center justify-center gap-8 rounded-xl">
        {sourcePaths.map((item) => (
          <PdfHole key={item.id} item={item}></PdfHole>
        ))}
        <div
          className={`${
            resumeLanguage === 0 ? 'right-0' : 'right-40'
          } absolute h-32 w-32 rounded-xl bg-background-black shadow-outer transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-outer-hover `}
        ></div>
      </div>
    </div>
  );
}
