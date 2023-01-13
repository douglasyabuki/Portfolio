// Const
import { navigationList } from '../common/navigation-list/navigation-list';
import { socialList } from '../common/social-list/social-list';

// Components
import Logo from '../common/logo/Logo';
import HeaderNavigation from './header-navigation/HeaderNavigation';
import HeaderSocial from './header-social/HeaderSocial';

// Header main function
export default function Header() {
  // Returns the whole header to App.tsx
  return (
    <header className="group container fixed top-0 z-30 flex h-11 w-screen min-w-full justify-between bg-gradient-to-b from-background-black to-transparent px-8 py-1 text-center text-not-so-white duration-500 hover:bg-background-black sm:px-14 md:h-16 md:px-16 md:py-2 lg:px-20 xl:px-32 shadow-lg shadow-black backdrop-blur-md">
      <Logo></Logo>
      <HeaderSocial list={socialList}></HeaderSocial>
      <HeaderNavigation list={navigationList}></HeaderNavigation>
    </header>
  );
}
