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
    <div className="group container relative h-full w-72 scale-90 rounded-xl bg-background-div1 p-4 text-center shadow-lg shadow-black duration-300 hover:scale-95 sm:p-7 md:p-8 lg:p-10">
      <div className="container relative flex h-3/5 items-center">
        <i className="fa fa-quote-left absolute left-0 top-0 text-5xl text-purplish-gray opacity-20"></i>
        <p className="pt-4 text-sm opacity-80">{testimonial}</p>
      </div>
      <div className="container items-end">
        <i className="fa fa-user-circle-o m-5 block text-5xl group-hover:hidden"></i>
        <a href={href} className="h-min w-min rounded-full">
          <i className="fa fa-chain m-5 hidden cursor-pointer text-5xl group-hover:block"></i>
        </a>
        <h2 className="text-xl">{position}</h2>
        <h3 className="text-lg opacity-90">{relation}</h3>
      </div>
    </div>
  );
}
