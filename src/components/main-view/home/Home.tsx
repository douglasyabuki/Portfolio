// Components
import ContactMeButton from './buttons/contact-me-button/ContactMeButton';
import LearnMoreButton from './buttons/learn-more-button/LearnMoreButton';

const homeHeader: string = 'Recruit a reliable Developer to your team';
const homeMessage: string =
  'A professional recognized for his affability, adaptivity and desire for knowledge. May this Portfolio be able to demonstrate his determination and passion as a Developer.';

export default function Home() {
  return (
    <div
      id="home"
      className="h-auto w-auto bg-background-black py-20 px-4 sm:px-7 md:px-8 lg:px-10"
    >
      <div className="custom-bg-1 items-center rounded-xl p-4 sm:p-7 md:p-8 lg:flex lg:p-10">
        <div className="container block text-left lg:px-8 xl:px-12">
          <h1 className="text-5xl font-bold">{homeHeader}</h1>
          <h2 className="text-2xl opacity-80 xl:py-12">{homeMessage}</h2>
          <div className="justify-left container flex lg:gap-4">
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
