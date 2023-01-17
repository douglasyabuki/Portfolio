// Components
import AboutDouglas from './about-douglas/AboutDouglas';
import Testimonials from './testimonial/Testimonials';

// Const
import { aboutInfo } from './about-douglas/about-info/about-info';
import { testimonialList } from './testimonial/testimonial-row/testimonial-list/testimonial-list';

// About main function
export default function About() {

  // Returns the whole About component to MainView.tsx
  return (
    <div id="#about" className="bg-background-div2 h-auto w-full py-20 px-4 sm:px-7 md:px-8 lg:px-10">
      <div className="block bg-background-div2">
        <AboutDouglas item={aboutInfo}></AboutDouglas>
        <Testimonials list={testimonialList}></Testimonials>
      </div>
    </div>
  );
}
