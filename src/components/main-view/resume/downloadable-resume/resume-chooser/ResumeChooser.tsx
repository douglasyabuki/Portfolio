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

  const onFlagClick = () => {

  }

  return (
    <div className="container block w-auto">
      <h1 className="mb-2 text-center text-xl font-bold md:text-2xl lg:text-left xl:mb-4 xl:text-3xl 2xl:text-4xl">
        Choose the Resume language
      </h1>
      <div className="align-center m-auto flex justify-center gap-4">
        {list.map((item) => (
          <FlagButton key={item.id} item={item} currentLanguage={resumeLanguage} setCurrentLanguage={setResumeLanguage}></FlagButton>
        ))}
      </div>
    </div>
  );
}
