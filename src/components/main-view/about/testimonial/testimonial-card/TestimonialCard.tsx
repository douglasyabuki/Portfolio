// Interface
import { ITestimonial } from '../../../../../interfaces/ITestimonial';

interface Props {
  position: string;
  relation: string;
  testimonial: string;
}

export default function TestimonialCard({ position, relation, testimonial }: Props) {
  return (
    <div className="container relative h-full w-72 rounded-xl text-center bg-background-div2 p-4 sm:p-7 md:p-8 lg:p-10">
      <div className="container h-3/5 relative flex items-center">
        <i className="fa fa-quote-left absolute left-0 top-0 text-5xl text-purplish-gray opacity-20"></i>
        <p className="pt-4 text-sm opacity-80">{testimonial}</p>
      </div>
      <div className="container items-end">
        <i className="fa fa-user-circle-o m-5 text-5xl"></i>
        <h2 className="text-xl">{position}</h2>
        <h3 className="text-lg opacity-90">{relation}</h3>
      </div>
    </div>
  );
}
// export interface ITestimonial {
//   id: number;
//   position: string;
//   relation: string;
//   testimonial: string;
// }
