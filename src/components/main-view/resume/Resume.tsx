// Components
import Education from './education/Education';
import Idioms from './idioms/Idioms';
import Skills from './skills/Skills';

// Const
import { educationList } from './education/education-list/education-list';
import { educationImgList } from './education/education-img-board/education-img-list/education-img-list';
import { idiomList } from './idioms/idiom-list/idiom-list';
import { skillList } from './skills/skill-list/skill-list';

// Resume main function
export default function Resume() {
  return (
    <div
      id="#resume"
      className="h-auto w-full bg-background-black py-16 px-4 sm:px-7 md:px-8 lg:px-10"
    >
      <Education list={educationList} imgList={educationImgList}></Education>
      <Skills list={skillList}></Skills>
      <Idioms list={idiomList}></Idioms>
      <div className="rounded-xl bg-red-900 px-4 sm:px-7 md:px-8 lg:px-10"></div>
    </div>
  );
}
