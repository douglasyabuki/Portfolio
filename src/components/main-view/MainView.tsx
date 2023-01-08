// Components
import Testimonials from "./about/testimonial/Testimonials";

// Const
import { testimonialList } from "./about/testimonial/testimonial-list/testimonial-list";

// Main view main function
export default function MainView () {
  return (
    <div className="flexbox h-screen w-screen px-4 bg-slate-400 items-center py-16 sm:px-7 md:px-8 lg:px-10">
      <Testimonials list={testimonialList}></Testimonials>
    </div>
  );
}
