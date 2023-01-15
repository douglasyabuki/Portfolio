// Interface
import { IResume } from '../../../../interfaces/IResume';

// Components
import ResumeChooser from './resume-chooser/ResumeChooser';

// Props destructuring
interface Props {
  list: IResume[];
}

// Downloadable Resume main function
export default function DownloadableResume({ list }: Props) {

  // Exports the complete interactive component that displays resumes based on user choice to Resume.tsx
  return (
    <div id='#downloadable-resume' className="w-auto space-y-12 px-4 py-20 sm:px-7 md:px-8 lg:px-10">
      <div className="block w-full justify-center py-8 text-center lg:flex lg:justify-between lg:text-left">
        <h1 className="w-auto text-center text-3xl font-bold md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
          Downloadable Resume
        </h1>
        <h2 className="py-4 text-xl opacity-70 md:text-2xl lg:w-2/5 lg:py-0 2xl:text-4xl">
          Feel free to get the complete version of his Resume on PDF
        </h2>
      </div>
      <ResumeChooser list={list}></ResumeChooser>
    </div>
  );
}
