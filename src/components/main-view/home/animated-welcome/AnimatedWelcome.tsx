export default function AnimatedWelcome() {
  // Returns the animated welcome to Home.tsx
  return (
    <div className="container m-auto my-5 h-auto w-min text-center font-semibold lg:my-0 lg:mb-3 lg:ml-0 xl:mb-12 2xl:mb-16">
      <div className="flex h-16 w-16 justify-center overflow-hidden rounded-full bg-background-black p-3 transition-all duration-500 ease-out 2xl:text-2xl 3xl:text-3xl">
        <i className="fa fa-exclamation visible animate-bounce text-3xl 2xl:text-4xl 3xl:text-4xl"></i>
      </div>
    </div>
  );
}
