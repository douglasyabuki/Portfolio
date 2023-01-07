// Const
import { navigationList } from './navigation/navigation-list/navigation-list';
import { socialList } from './social/social-list/social-list';

// Components
import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';
import Social from './social/Social';

// Header main function
export default function Header() {

  // Returns the whole header to App.tsx
  return (
    <header className="group container justify-between fixed top-0 z-30 flex h-11 w-screen min-w-full bg-gradient-to-b from-background-black to-transparent px-5 py-1 text-center duration-500 hover:bg-background-black md:h-16 md:px-8 md:py-2 lg:px-12 text-not-so-white">
      <Logo></Logo>
      <Social list={socialList}></Social>
      <Navigation list={navigationList}></Navigation>
    </header>
  );
}
