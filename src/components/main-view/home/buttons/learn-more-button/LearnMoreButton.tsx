// Utils
import { scrollOnClick } from '../../../../../utils/scroll-on-click';

// Learn more button main function
export default function LearnMoreButton() {
  // Returns a routing button to Home.tsx
  return (
    <a
      href="#about"
      onClick={() => scrollOnClick('#about')}
      className="flex h-auto w-fit min-w-[9rem] items-center justify-center gap-2 rounded-full bg-background-div2 px-4 py-2 align-middle font-semibold text-not-so-white shadow-lg  shadow-black/10 transition-all duration-300 hover:bg-not-so-white hover:text-background-black xs:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl"
    >
      <i className="fa fa-info-circle h-fit"></i>
      Learn more
    </a>
  );
}
