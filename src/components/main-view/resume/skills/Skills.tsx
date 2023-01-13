// Interface
import { ISkill } from "../../../../interfaces/ISkill";

// Props destructuring
interface Props {
  list: ISkill[];
}

export default function Skills ({list}: Props) {
  return (
    <div className="container px-4 sm:px-7 md:px-8 lg:px-10 py-20">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">Tech Stack</h1>
    </div>
  );
}
