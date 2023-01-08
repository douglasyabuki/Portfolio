// Learn more button main function
export default function LearnMoreButton () {
  return (
    <div className="container m-2 h-auto w-auto">
      <a
        href="#about"
        className="rounded-full  bg-background-div2 px-3 py-2 align-middle text-xl font-semibold text-not-so-white  transition-all duration-300 hover:bg-not-so-white hover:text-background-black"
      >
        <i className="fa fa-info-circle mr-2"></i>
        Learn more
      </a>
    </div>
  );
}
