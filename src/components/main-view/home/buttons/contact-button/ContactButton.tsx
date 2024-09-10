// Utils
import { scrollOnClick } from '../../../../../utils/scroll-on-click';

// Contact button main function
export default function ContactButton() {
  // Returns a routing button to Home.tsx
  return (
    <a
      href="#contact"
      onClick={() => scrollOnClick('#contact')}
      className="flex h-auto w-fit min-w-[9rem] items-center justify-center gap-2 rounded-full bg-not-so-white px-4 py-2 align-middle font-semibold text-background-black shadow-lg shadow-black/10 transition-all duration-300 hover:bg-background-black hover:text-not-so-white xs:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl"
    >
      <i className="fa fa-envelope mr-2"></i>
      Contact
    </a>
  );
}
