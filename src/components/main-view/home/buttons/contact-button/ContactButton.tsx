// Utils
import { scrollOnClick } from "../../../../../utils/scroll-on-click";

// Contact button main function
export default function ContactButton() {

  // Returns a routing button to Home.tsx
  return (
    <div className="container m-5 h-auto w-auto md:m-0">
      <a
        href="#contact"
        onClick={() => scrollOnClick('#contact')}
        className="rounded-full bg-not-so-white px-6 py-2 align-middle font-semibold text-background-black transition-all duration-300 hover:bg-background-black hover:text-not-so-white xs:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl shadow-lg shadow-translucid-black"
      >
        <i className="fa fa-envelope mr-2"></i>
        Contact
      </a>
    </div>
  );
}
