// Components
import AboutMe from "./about-me/AboutMe";
import Testimonials from "./testimonial/Testimonials";

// Const
import { testimonialList } from "./testimonial/testimonial-list/testimonial-list";

export default function About () {
  return (
    <div className="px-4 sm:px-7 py-16 md:px-8 lg:px-10 bg-background-div2">
      <div className="px-4 sm:px-7 md:px-8 lg:px-10 rounded-xl bg-red-700">
      <AboutMe></AboutMe>
      <Testimonials list={testimonialList}></Testimonials>
      </div>
    </div>
  );
}
