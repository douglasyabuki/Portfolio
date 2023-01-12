// Hooks
import { useEffect, useState } from 'react';

// Props destructuring
interface Props {
  id: number;
  currentId: number;
  icon: string;
  title: string;
  onClickHandler: React.MouseEventHandler;
}

// About board selector main function
export default function AboutBoardSelector({ icon, title, id, currentId, onClickHandler }: Props) {

  // Setting initial state to button
  const [isActive, setIsActive] = useState<boolean>(false);

  // Checks if the button id is the same as the user selected and changes the state based on its outcome
  useEffect(() => {
    if (currentId === id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentId]);

  // Returns the button that controls which section will be displayed on the board to AboutBoard.tsx
  return (
    <div
      role={'button'}
      onClick={onClickHandler}
      className={
        isActive
          ? `group container relative mx-auto my-5 flex w-36 rounded-full bg-not-so-white text-left align-middle font-bold text-black shadow-lg shadow-black transition-all duration-300 lg:w-44`
          : `group container relative mx-auto my-5 flex w-36 rounded-full text-left align-middle shadow-md shadow-black transition-all duration-300 hover:bg-not-so-white hover:text-black lg:w-44 lg:bg-background-div1`
      }
    >
      <i
        className={
          isActive
            ? `${icon} flex w-6 animate-spin items-center justify-center xs:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl`
            : `${icon} flex w-6 items-center justify-center group-hover:animate-spin xs:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl`
        }
      ></i>
      <h1 className="ml-3 h-auto w-min px-2 font-sans text-xl lg:text-2xl">{title}</h1>
    </div>
  );
}
