// Components
import DownloadableResume from './downloadable-resume/DownloadableResume';
import Education from './education/Education';
import Skills from './skills/Skills';

// Const
import { educationList } from './education/education-list/education-list';
import { educationImgList } from './education/education-img-board/education-img-list/education-img-list';
import { skillList } from './skills/skill-list/skill-list';
import { resumeList } from './downloadable-resume/resume-chooser/resume-list/resume-list';

// Resume main function
export default function Resume() {

  // Returns the whole Resume section to Main View
  return (
    <div
      id="#resume"
      className="h-auto w-full bg-background-black py-16 px-4 sm:px-7 md:px-8 lg:px-10"
    >
      <Education list={educationList} imgList={educationImgList}></Education>
      <Skills list={skillList}></Skills>
      <DownloadableResume list={resumeList}></DownloadableResume>
    </div>
  );
}
