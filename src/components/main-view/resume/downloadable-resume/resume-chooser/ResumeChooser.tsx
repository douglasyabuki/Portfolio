// Interfaces
import { IResume } from '../../../../../interfaces/IResume';

// Components
import FlagButton from './flag-button/FlagButton';

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

  // Generating a new array for the list's download paths;
  const downloadPaths = list.map((resume: IResume) => resume.downloadPath);

  return (
    <div className="block w-auto space-y-8">
      <h1 className="mb-2 text-center text-xl font-bold md:text-2xl xl:mb-4 xl:text-3xl 2xl:text-4xl ">
        Choose the Resume language
      </h1>
      <div className="align-center block m-auto w-fit md:flex justify-center gap-8">
        {list.map((item) => (
          <FlagButton
            key={item.id}
            item={item}
            currentLanguage={resumeLanguage}
            setCurrentLanguage={setResumeLanguage}
          ></FlagButton>
        ))}
      </div>
      <div className="relative items-center justify-center flex gap-8 h-32 w-fit align-center rounded-xl m-auto">
          <div className='h-32 w-32 flex items-center justify-center rounded-xl shadow-inner2 hover:shadow-inner2-hover hover:translate-y-1 transition-all duration-300'>
            <a href="/DOUGLAS-YUJI-YABUKI-CURRICULO.pdf"><img className='h-16 w-16 cover hover:scale-110 transition-transform duration-300' src="/brazil-pdf.svg" alt="SVG from w3.org" /></a>
          </div>
          <div className='h-32 w-32 flex items-center justify-center rounded-xl shadow-inner2'>
            <a href="/DOUGLAS-YUJI-YABUKI-RESUME.pdf"><img className='h-16 w-16 cover hover:scale-110 transition-transform duration-300' src="/usa-pdf.svg" alt="SVG from w3.org" /></a>
          </div>
          <div className={`${resumeLanguage === 0 ? 'right-0': 'right-40'} h-32 w-32 bg-background-black absolute rounded-xl shadow-outer hover:shadow-outer-hover hover:-translate-y-1 transition-all duration-500 ease-in-out `}>
          </div>
      </div>
    </div>
  );
}
