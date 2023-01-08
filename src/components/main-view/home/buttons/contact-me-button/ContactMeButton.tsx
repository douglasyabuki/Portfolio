// Props destructuring
export interface Props {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

// Contact button main function
export default function ContactMeButton() {
  return (
    <div className="container m-2 h-auto w-auto">
      <a
        href="#contact"
        className="rounded-full bg-not-so-white px-3 py-2 align-middle text-xl font-semibold text-background-black transition-all duration-300 hover:bg-background-black hover:text-not-so-white"
      >
        Contact me
      </a>
    </div>
  );
}
