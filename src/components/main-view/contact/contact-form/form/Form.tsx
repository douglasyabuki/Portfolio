// Interfaces
import { IFormAction, IFormState } from '../../../../../interfaces/IForm';

// Components
import Input from './input/Input';
import Textarea from './textarea/Textarea';
import SubmitButton from './submit-button/SubmitButton';

// Hooks
import React, { useRef, useReducer, useEffect } from 'react';

// Libraries
import emailjs from '@emailjs/browser';

function reducer(state: IFormState, action: IFormAction): IFormState {
  switch (action.type) {
    case 'updateName':
      return { ...state, user_name: action.value || '', nameError: '' };
    case 'updateEmail':
      return { ...state, user_email: action.value || '', emailError: '' };
    case 'updateMessage':
      return { ...state, message: action.value || '', messageError: '' };
    case 'validate':
      return {
        ...state,
        nameError: state.user_name.length === 0 ? 'Name is Required' : '',
        emailError: state.user_email.length === 0 ? 'Email is Required' : '',
        messageError: state.message.length === 0 ? 'Message is Required' : '',
      };
    case 'updateIsSent':
      return { ...state, isSent: true };
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, {
    user_name: '',
    user_email: '',
    message: '',
    nameError: '',
    emailError: '',
    messageError: '',
    isSent: false,
  });

  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_33hll7y', 'template_5ayyk7u', form.current, 'sPdg6uR18LiOuNKHP').then(
      (result) => {
        console.log(result.text);
        dispatch({ type: 'updateIsSent' });
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  useEffect(() => {
    dispatch({ type: 'validate' });
  }, [state.user_name, state.user_email, state.message]);

  return (
    <div className="relative overflow-x-hidden">
      <div
        className={`${
          state.isSent ? `-translate-x-[0px]` : `-translate-x-[3900px]`
        } relative top-32 flex-col transition-transform duration-1000 ease-in-out`}
      >
        <h1 className="text-semibold mb-4 text-3xl xl:text-4xl">Message sent!</h1>
        <i className="fa fa-check text-5xl 4xl:text-7xl"></i>
      </div>
      <div
        className={`${
          state.isSent ? `translate-x-[3900px]` : `translate-x-[0px]`
        } relative -top-10 block transition-transform duration-1000 ease-in-out`}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="group m-auto w-min space-y-4 rounded-xl bg-background-div1 p-4 shadow-md shadow-translucid-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-translucid-black"
        >
          <Input
            value={state.user_name}
            type="text"
            name="user_name"
            label="Full name"
            onChange={(e) => dispatch({ type: 'updateName', value: e.target.value })}
          ></Input>
          <Input
            value={state.user_email}
            type="email"
            name="user_email"
            label="E-mail"
            onChange={(e) => dispatch({ type: 'updateEmail', value: e.target.value })}
          ></Input>
          <Textarea
            value={state.message}
            name="message"
            label="Message"
            onChange={(e) => dispatch({ type: 'updateMessage', value: e.target.value })}
          ></Textarea>
          <div className="relative h-auto">
            <SubmitButton
              disabled={
                state.nameError === '' && state.emailError === '' && state.messageError === ''
                  ? false
                  : true
              }
            ></SubmitButton>
          </div>
        </form>
      </div>
    </div>
  );
}
