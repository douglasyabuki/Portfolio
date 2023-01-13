// Interface
import { IIdiom } from "./idiom-list/idiom-list";

interface Props {
  list: IIdiom[];
}

export default function Idioms ({list}: Props) {
  return (
    <div className="container px-4 sm:px-7 md:px-8 lg:px-10 py-20">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">Idioms</h1>
    </div>
  );
}
