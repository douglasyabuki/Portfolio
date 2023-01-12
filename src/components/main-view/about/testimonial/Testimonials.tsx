// Interfaces
import { ITestimonial } from '../../../../interfaces/ITestimonial';

// Components
import TestimonialCard from './testimonial-row/testimonial-card/TestimonialCard';
import TestimonialRow from './testimonial-row/TestimonialRow';

// Hooks
import { useState } from 'react';
interface Props {
  list: ITestimonial[];
}

// Testimonials main function
export default function Testimonials({ list }: Props) {

  return (
    <div className="container justify-center mx-auto my-12 text-center">
      <h1 className="mb-8 block h-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
        Testimonials
      </h1>
      <TestimonialRow list={list}></TestimonialRow>
    </div>
  );
}
