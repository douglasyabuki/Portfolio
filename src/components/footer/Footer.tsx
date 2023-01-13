// Components
import CopyRight from './copyright/Copyright';
import FooterContact from './footer-contact/FooterContact';
import FooterNavigation from './footer-navigation/FooterNavigation';
import FooterSocial from './footer-social/FooterSocial';

// Const
import { contactList } from '../common/contact-list/contact-list';
import { navigationList } from '../common/navigation-list/navigation-list';
import { socialList } from '../common/social-list/social-list';

// Footer main function
export default function Footer() {
  // Returns the whole footer to App.tsx
  return (
    <div className="relative block h-auto min-w-full bg-black px-8 py-4 text-not-so-white sm:px-14 md:px-16 lg:px-20 xl:px-32">
      <FooterSocial list={socialList}></FooterSocial>
      <div className="container m-auto space-y-4 lg:flex lg:w-1/3 justify-between py-8">
        <FooterNavigation list={navigationList}></FooterNavigation>
        <FooterContact list={contactList}></FooterContact>
      </div>
      <CopyRight></CopyRight>
    </div>
  );
}

{
  /* <header className="group container fixed top-0 z-30 flex h-11 w-screen min-w-full justify-between bg-gradient-to-b from-background-black to-transparent px-8 py-1 text-center text-not-so-white duration-500 hover:bg-background-black sm:px-14 md:h-16 md:px-16 md:py-2 lg:px-20 xl:px-32 shadow-lg shadow-black backdrop-blur-md"> */
}
