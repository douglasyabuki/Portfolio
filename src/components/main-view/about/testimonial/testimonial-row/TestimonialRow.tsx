// Components
import TestimonialCard from './testimonial-card/TestimonialCard';
import TestimonialCarousel from './testimonial-carousel/TestimonialCarousel';

// Interfaces
import { ITestimonial } from '../../../../../interfaces/ITestimonial';

// Hooks
import { useState, useEffect } from 'react';

// Utils
import { limitScreenWidth } from '../../../../../utils/limit-screen-width';

// Props destructuring
interface ITestimonialRowProps {
  list: ITestimonial[];
}

// Sets initial state based on current screen width
const initialState = limitScreenWidth();

// Testimonials row main function
export default function TestimonialRow({ list }: ITestimonialRowProps) {
  // Setting state
  const [requiresCarousel, setRequiresCarousel] = useState<boolean>(initialState);

  // Function that checks if a Carousel is needed whenever the screen is resized
  onresize = () => {
    let checkNeed = limitScreenWidth();
    {
      checkNeed ? setRequiresCarousel(true) : setRequiresCarousel(false);
    }
  };

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
      {requiresCarousel ? (
        <TestimonialCarousel list={list}></TestimonialCarousel>
      ) : (
        <div className="container flex justify-center gap-3 overflow-x-hidden rounded-xl">
          {simpleRow}
        </div>
      )}
    </div>
  );
}
