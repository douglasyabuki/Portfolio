// Hooks
import { useReducer } from 'react';

interface Props {}

export default function ContactForm(props: Props) {
  return (
    <div
      id="#contact-form"
      className="relative block items-center rounded-2xl p-2 sm:p-7 md:rounded-2xl md:p-8 lg:flex lg:p-10"
    >
      <div className="container block px-4 text-center align-middle md:px-16 lg:text-left xl:px-12">
        <h1 className="w-auto text-center text-3xl font-bold md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
          Contact
        </h1>
        <div className="container items-center align-middle xl:m-6 xl:p-12"></div>
      </div>
      <div className="container items-center align-middle xl:m-6 xl:p-12">
        <h1></h1>
      </div>
    </div>
  );
}
