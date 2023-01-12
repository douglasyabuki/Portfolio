// Components
import AboutDouglas from './about-douglas/AboutDouglas';
import Testimonials from './testimonial/Testimonials';

// Const
import { aboutInfo } from './about-douglas/about-info/about-info';
import { testimonialList } from './testimonial/testimonial-list/testimonial-list';

// About main function
export default function About() {
  // Returns the whole About component to MainView.tsx
  return (
    <div id="#about" className="bg-background-div2 px-4 py-20 sm:px-7 md:px-8 lg:px-10">
      <div className="block bg-background-div2">
        {/* p-4 sm:p-7 md:p-8 lg:p-10 xl:p-20 */}
        <AboutDouglas item={aboutInfo}></AboutDouglas>
        <Testimonials list={testimonialList}></Testimonials>
      </div>
    </div>
  );
}
