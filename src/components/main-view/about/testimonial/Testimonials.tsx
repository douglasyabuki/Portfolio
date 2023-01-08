// Interfaces
import { ITestimonial } from '../../../../interfaces/ITestimonial';

// Components
import TestimonialCard from './testimonial-card/TestimonialCard';
interface Props {
  list: ITestimonial[];
}

export default function Testimonials({ list }: Props) {
  return (
    <div className='h-auto w-auto flex rounded-xl justify-center gap-3'>
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
