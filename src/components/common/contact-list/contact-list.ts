// Interface
import { IContact } from "../../../interfaces/IContact"

export const contactList: IContact[] = [
  { id: 0, name: 'Whatsapp', content: '(41)99953-0599', icon: 'fa fa-whatsapp', href: 'https://api.whatsapp.com/send?phone=5541999530599', routing: false, newPage:true },
  { id: 1, name: 'E-mail', content: 'douglasyabuki@gmail.com', icon: 'fa fa-envelope', href: 'mailto:douglasyabuki@gmail.com', routing: false },
  { id: 2, name: 'Leave a message', content: 'Complete the Form to leave a message', icon: 'fa fa-send', href: '#contact-form', routing: true }
]
