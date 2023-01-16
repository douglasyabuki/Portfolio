// Components
import Contacts from "./contact-form/contacts/Contacts";
import ContactForm from "./contact-form/ContactForm";

// Const
import { contactList } from "../../common/contact-list/contact-list";

// Contact main function
export default function Contact () {

  // Returns the whole Contact component to Main View
  return (
    <div id='#contact' className="w-auto h-auto min-h-screen py-16 mb-20 px-4 sm:px-7 md:px-8 lg:px-10 bg-background-black">
      <Contacts list={contactList}></Contacts>
      <ContactForm></ContactForm>
    </div>
  );
}
