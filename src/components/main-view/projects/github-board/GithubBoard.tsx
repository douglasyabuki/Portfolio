import * as React from 'react';

interface Props {}

export default function GithubBoard(props: Props) {
  return (
    <div className="w-auto items-center justify-center space-y-12 px-4 py-20 text-center sm:px-7 md:px-8 lg:px-10">
      <h1 className="w-auto text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">Github</h1>
      <h2 className="py-4 text-xl opacity-70 md:text-2xl 2xl:text-4xl">
        Want to see more? Visit his Github profile.
      </h2>
      <a href="#projects" target={'_blank'} className='group container relative w-fit h-fit flex rounded-full m-auto shadow-lg shadow-translucid-black hover:shadow-2xl hover:shadow-transparent-red transition-all duration-300 items-center justify-center bg-transparent-black'>
        <img className='w-[200px] xs:w-[250px] md:w-[400px] lg:w-auto cover opacity-80 group-hover:bg-transparent-red transition-all duration-300 rounded-full' src="/github.png" alt="" />
        <img src="/sunglasses.svg" alt="Svg from SVGRepo.com" className='absolute w-1/2 group-hover:translate-y-5 md:group-hover:translate-y-9 lg:group-hover:translate-y-12 opacity-0 group-hover:opacity-100 transition-all duration-300'/>
      </a>
    </div>
  );
}
