// Components
import AboutDouglas from "./about-douglas/AboutDouglas";
import Testimonials from "./testimonial/Testimonials";

// Const
import { testimonialList } from "./testimonial/testimonial-list/testimonial-list";
import { aboutInfo } from "./about-douglas/about-info/about-info";

export default function About () {
  return (
    <div id='about' className="px-4 sm:px-7 py-16 md:px-8 lg:px-10 bg-background-div2">
      <div className=" bg-background-div2">
        {/* p-4 sm:p-7 md:p-8 lg:p-10 xl:p-20 */}
      <AboutDouglas item={aboutInfo}></AboutDouglas>
      <Testimonials list={testimonialList}></Testimonials>
      </div>
    </div>
  );
}
