// Interfaces
import { ITestimonial } from '../../../../interfaces/ITestimonial';

// Components
import TestimonialCard from './testimonial-card/TestimonialCard';
interface Props {
  list: ITestimonial[];
}

export default function Testimonials({ list }: Props) {
  return (
    <div className='h-auto w-auto custom-bg-1 p-4 sm:p-7 md:p-8 lg:p-10 rounded-xl'>
      {list.map((item) => (
        <div className="" key={item.id}>
          <TestimonialCard
            position={item.position}
            relation={item.relation}
            testimonial={item.testimonial}
          ></TestimonialCard>
        </div>
      ))}
    </div>
  );
}
