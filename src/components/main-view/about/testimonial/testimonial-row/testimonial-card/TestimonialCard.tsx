// Props destructuring
interface Props {
  position: string;
  relation: string;
  testimonial: string;
  href: string;
}

// Testimonial card main function
export default function TestimonialCard({ position, relation, testimonial, href }: Props) {
  // Returns a single testimonial card to Testimonials.tsx
  return (
    <div className="group container relative w-[300px] h-[450px] max-lg:m-auto md:w-[400px] md:h-[700px] lg:w-[300px] lg:h-[450px] xl:w-[400px] xl:h-[700px] scale-90 rounded-xl bg-background-div1 p-4 text-center shadow-lg shadow-black duration-300 hover:scale-95 sm:p-7 md:p-8 lg:p-4 xl:p-8">
      <div className="container relative flex items-center h-3/5">
        <i className="fa fa-quote-left absolute left-0 top-0 text-5xl text-purplish-gray opacity-20"></i>
        <p className="pt-4 text-base md:text-2xl lg:text-base xl:text-2xl opacity-80 px-2 md:mb-6">{testimonial}</p>
      </div>
      <div className="container items-end">
        <i className="fa fa-user-circle-o m-5 block text-5xl md:text-7xl lg:text-5xl xl:text-7xl group-hover:hidden"></i>
        <a href={href} className="h-min w-min rounded-full">
          <i className="fa fa-chain m-5 hidden cursor-pointer text-5xl md:text-7xl lg:text-5xl xl:text-7xl group-hover:block"></i>
        </a>
        <h2 className="text-xl md:text-4xl lg:text-xl xl:text-4xl">{position}</h2>
        <h3 className="text-lg md:text-3xl lg:text-xl xl:text-3xl opacity-90">{relation}</h3>
      </div>
    </div>
  );
}
