// Interfaces
import { IForm } from '../../../../interfaces/IForm';

// Components
import Input from './input/Input';

// Hooks
import { useReducer } from 'react';

interface Props {}

export default function ContactForm() {
  return (
    <div
      id="#contact-form"
      className="w-auto space-y-12 px-4 py-20 text-center sm:px-7 md:px-8 lg:px-10"
    >
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
        Leave a message
      </h1>
      <div className="m-auto block px-4 text-center">

      </div>
    </div>
  );
}
