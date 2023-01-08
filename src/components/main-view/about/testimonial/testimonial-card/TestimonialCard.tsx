// Interface
import { ITestimonial } from "../../../../../interfaces/ITestimonial";

interface Props {
  position: string;
  relation: string;
  testimonial: string;
}

export default function TestimonialCard ({position, relation, testimonial}: Props) {
  return (
    <div className="container relative h-min">
      <i className="fa fa-quote-left"></i>
      <h2>{position}</h2>
      <h3>{relation}</h3>
      <p>{testimonial}</p>
    </div>
  );
}
// export interface ITestimonial {
//   id: number;
//   position: string;
//   relation: string;
//   testimonial: string;
// }
