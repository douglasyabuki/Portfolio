// Github Board main function
export default function GithubBoard() {

  // Returns a cool animated github logo
  return (
    <div className="w-auto items-center justify-center space-y-12 px-4 py-20 text-center sm:px-7 md:px-8 lg:px-10">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">Github</h1>
      <h2 className="py-4 text-xl opacity-70 md:text-2xl 2xl:text-4xl">
        Want to see more? Visit his Github profile.
      </h2>
      <a
        href="https://github.com/douglas-yabuki"
        target={'_blank'}
        className="group container relative m-auto flex h-fit w-fit items-center justify-center rounded-full bg-transparent-black shadow-lg shadow-translucid-black transition-all duration-300 hover:shadow-2xl hover:shadow-transparent-red"
      >
        <img
          className="cover w-[200px] rounded-full opacity-80 transition-all duration-300 group-hover:bg-transparent-red xs:w-[250px] md:w-[400px] lg:w-auto"
          src="/github.png"
          alt=""
        />
        <img
          src="/sunglasses.svg"
          alt="Svg from SVGRepo.com"
          className="absolute w-1/2 opacity-0 transition-all duration-300 group-hover:translate-y-5 group-hover:opacity-100 md:group-hover:translate-y-9 lg:group-hover:translate-y-12"
        />
      </a>
    </div>
  );
}
