// Interfaces
import { ITestimonial } from '../../../../interfaces/ITestimonial';

// Components
import TestimonialCard from './testimonial-card/TestimonialCard';
interface Props {
  list: ITestimonial[];
}

export default function Testimonials({ list }: Props) {
  return (
    <div>
      <h1 className='text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl h-auto text-center'>What they say about him</h1>
      <div className="flex h-auto w-auto justify-center gap-3 overflow-hidden rounded-xl">
        {list.map((item) => (
          <div className="" key={item.id}>
            <TestimonialCard
              href={item.href}
              position={item.position}
              relation={item.relation}
              testimonial={item.testimonial}
            ></TestimonialCard>
          </div>
        ))}
      </div>
    </div>
  );
}
