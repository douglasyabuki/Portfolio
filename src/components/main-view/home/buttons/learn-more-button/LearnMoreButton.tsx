// Learn more button main function
export default function LearnMoreButton() {

  // Returns a routing button to Home.tsx
  return (
    <div className="container m-5 md:m-0 h-auto w-auto">
      <a
        href="#about"
        className="rounded-full w-max bg-background-div2 px-3 py-2 align-middle font-semibold text-not-so-white transition-all  duration-300 hover:bg-not-so-white hover:text-background-black xs:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl"
      >
        <i className="fa fa-info-circle mr-2"></i>
        Learn more
      </a>
    </div>
  );
}
