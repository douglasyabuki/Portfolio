// Hooks
import { useState } from 'react';

// Main animated welcome function
export default function AnimatedWelcome() {
  const [isExtended, setIsExtended] = useState<boolean>(false);

  // Function to handle the click event
  const onClickHandler = () => {
    setIsExtended(!isExtended)
  }

  // Returns the animated welcome to Home.tsx
  return (
    <div
      onClick={onClickHandler}

      className="container m-auto h-auto w-min text-center font-semibold my-5 lg:my-0 lg:mb-3 lg:ml-0 xl:mb-12 2xl:mb-16"
    >
      {isExtended ? (
        <h1 className="flex rounded-full h-auto w-auto bg-background-black p-3 text-2xl transition-all duration-500 ease-out 2xl:text-2xl 3xl:text-3xl">
          Welcome
          <i className="fa fa-exclamation visible ml-2 text-3xl 2xl:text-4xl 3xl:text-4xl"></i>
        </h1>
      ) : (
        <h1 className="flex justify-center h-16 w-16 rounded-full bg-background-black p-3 transition-all duration-500 ease-out 2xl:text-2xl 3xl:text-3xl">
          <i className="fa fa-exclamation visible text-3xl 2xl:text-4xl 3xl:text-4xl animate-bounce"></i>
        </h1>
      )}
    </div>
  );
}
