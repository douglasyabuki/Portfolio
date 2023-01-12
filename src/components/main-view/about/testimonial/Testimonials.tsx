// Interfaces
import { ITestimonial } from '../../../../interfaces/ITestimonial';

// Components
import TestimonialCard from './testimonial-card/TestimonialCard';

// Hooks
import { useState } from 'react';
interface Props {
  list: ITestimonial[];
}

// Testimonials main function
export default function Testimonials({ list }: Props) {

  return (
    <div className="container my-12">
      <h1 className="mb-8 block h-auto text-center text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
        Testimonials
      </h1>
      <div className="container flex justify-center gap-3 overflow-x-hidden rounded-xl">
        {list.map((item) => (
            <TestimonialCard
            key={item.id}
              href={item.href}
              position={item.position}
              relation={item.relation}
              testimonial={item.testimonial}
            ></TestimonialCard>
        ))}
      </div>
    </div>
  );
}
