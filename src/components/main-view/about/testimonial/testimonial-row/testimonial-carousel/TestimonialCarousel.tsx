// Interfaces
import { ITestimonial } from '../../../../../../interfaces/ITestimonial';

// Hooks
import { useState, useRef } from 'react';

// Const
import TestimonialCard from '../testimonial-card/TestimonialCard';

// Props destructuring
interface ITestimonialCarouselProps {
  list: ITestimonial[];
}

export default function TestimonialCarousel({ list }: ITestimonialCarouselProps) {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const references = useRef(null);
  const totalCards = list.length;

  const scrollToCard = (i: number) => {
    setCurrentCard(i);
    const getReference = document.getElementById(`#${i}`);
    getReference.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const previousCard = () => {
    if (currentCard === 0) {
      scrollToCard(totalCards - 1);
    } else {
      scrollToCard(currentCard - 1);
    }
  };

  const nextCard = () => {
    if (currentCard >= totalCards - 1) {
      scrollToCard(0);
    } else {
      scrollToCard(currentCard + 1);
    }
  };

  return (
    <div className="relative block w-full">
      <div className="scrollbar-hide flex w-full overflow-scroll">
        {list.map((item) => (
          <div className="m-auto min-w-full flex" id={`#${item.id}`}>
            <TestimonialCard
              key={item.id}
              href={item.href}
              position={item.position}
              relation={item.relation}
              testimonial={item.testimonial}
            ></TestimonialCard>
          </div>
        ))}
      </div>
      <div className="container relative flex items-center justify-center gap-2">
        <button onClick={() => previousCard()}>
          <i className="fa fa-chevron-circle-left text-5xl"></i>
        </button>
        <button onClick={() => nextCard()}>
          <i className="fa fa-chevron-circle-right text-5xl"></i>
        </button>
      </div>
    </div>
  );
}
