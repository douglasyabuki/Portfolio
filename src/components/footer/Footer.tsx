// Components
import CopyRight from './copyright/Copyright';

// Footer main function
export default function Footer() {
  // Returns the whole footer to App.tsx
  return (
    <div className="md:h-22 relative min-w-full items-center bg-slate-500 px-8 text-center text-not-so-white text-opacity-80 sm:px-14 md:px-16 md:py-2 lg:px-20 xl:px-32">
      <div className='flex cols-3 justify-between'>
        <div className="">b</div>
        <div className="">c</div>
        <div className="">d</div>
      </div>
      <CopyRight></CopyRight>
    </div>
  );
}

{
  /* <header className="group container fixed top-0 z-30 flex h-11 w-screen min-w-full justify-between bg-gradient-to-b from-background-black to-transparent px-8 py-1 text-center text-not-so-white duration-500 hover:bg-background-black sm:px-14 md:h-16 md:px-16 md:py-2 lg:px-20 xl:px-32 shadow-lg shadow-black backdrop-blur-md"> */
}
