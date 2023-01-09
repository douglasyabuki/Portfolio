// Components
import AnimatedWelcome from './animated-welcome/AnimatedWelcome';
import ContactMeButton from './buttons/contact-me-button/ContactMeButton';
import LearnMoreButton from './buttons/learn-more-button/LearnMoreButton';

// Const
import { homeInfo } from './home-info/home-info';

export default function Home() {
  // Destructuring imported object
  const { title, content } = homeInfo;

  return (
    <div
      id="home"
      className="group h-auto w-auto bg-background-black py-20 px-4 sm:px-7 md:px-8 lg:px-10"
    >
      <div className="custom-bg-1 block items-center rounded-2xl p-2 sm:p-7 md:rounded-2xl md:p-8 lg:flex lg:p-10">
        <div className="container block px-4 text-center align-middle md:px-16 lg:text-left xl:px-12">
          <AnimatedWelcome></AnimatedWelcome>
          <h1 className="text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">{title}</h1>
          <h2 className=" py-4 text-xl opacity-80 xs:py-8 md:text-2xl xl:py-12 2xl:py-16 2xl:text-4xl">
            {content}
          </h2>
          <div className=" container h-auto justify-center md:my-12 md:flex md:gap-4 lg:my-4 lg:justify-start">
            <ContactMeButton></ContactMeButton>
            <LearnMoreButton></LearnMoreButton>
          </div>
        </div>
        <div className="container items-center align-middle xl:m-6 xl:p-12">
          <img
            src="/coding.jpg"
            alt="photo from unsplash arnold-francisca-f77Bh3inUpE-"
            className="contain rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
