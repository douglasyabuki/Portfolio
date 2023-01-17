// Components
import Contacts from './contacts/Contacts';
import ContactForm from './contact-form/ContactForm';

// Const
import { contactList } from '../../common/contact-list/contact-list';

// Contact main function
export default function Contact() {

  // Returns the whole Contact component to Main View
  return (
    <div
      id="#contact"
      className="mb-20 h-auto min-h-screen w-auto bg-background-black py-16 px-4 sm:px-7 md:px-8 lg:px-10"
    >
      <Contacts list={contactList}></Contacts>
      <ContactForm></ContactForm>
    </div>
  );
}
