// Components
import TestimonialCard from './testimonial-card/TestimonialCard';
import TestimonialCarousel from './testimonial-carousel/TestimonialCarousel';

// Interfaces
import { ITestimonial } from '../../../../../interfaces/ITestimonial';

// Props destructuring
interface ITestimonialRowProps {
  list: ITestimonial[];
}

// Testimonials row main function
export default function TestimonialRow({ list }: ITestimonialRowProps) {
  // Function to map the list into cards in a row
  const simpleRow = list.map((item) => (
    <TestimonialCard
      key={item.id}
      href={item.href}
      position={item.position}
      relation={item.relation}
      testimonial={item.testimonial}
    ></TestimonialCard>
  ));

  // Returns the row of cards with or without the carousel depending on screen width
  return (
    <div className="container flex justify-center">
      <div className="block w-full lg:hidden">
        <TestimonialCarousel list={list}></TestimonialCarousel>
      </div>
      <div className="container hidden justify-center gap-3 rounded-xl lg:flex">{simpleRow}</div>
    </div>
  );
}
