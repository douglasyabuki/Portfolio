// Components
import Education from "./education/Education";
import Idioms from "./idioms/Idioms";
import Skills from "./skills/Skills";

// Const
import { educationList } from "./education/education-list/education-list";
import { idiomList } from "./idioms/idiom-list/idiom-list";
import { skillList } from "./skills/skill-list/skill-list";



export default function Resume () {
  return (
    <div id='#resume' className="w-auto h-auto py-16 px-4 sm:px-7 md:px-8 lg:px-10 bg-background-black">
      <Education list={educationList}></Education>
      <Skills list={skillList}></Skills>
      <Idioms list={idiomList}></Idioms>
      <div className="px-4 sm:px-7 md:px-8 lg:px-10 rounded-xl bg-red-900">
      </div>
    </div>
  );
}
