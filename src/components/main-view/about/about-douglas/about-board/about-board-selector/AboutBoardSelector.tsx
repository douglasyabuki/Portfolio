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

  // Conditional styling to avoid nested template literals
  let isTranslucid = isActive ? `opacity-100` : `opacity-80`;
  let isCurrentId = (currentId !== null) ? `scale-0 w-0 lg:scale-100 lg:w-32`: `scale-100 w-28 lg:w-32`;

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
      className={`${isTranslucid} flex items-center justify-center space-x-6`}
    >
      <i
        className={
          isActive
            ? `${icon} w-min animate-spin text-xl md:text-xl 2xl:text-2xl 3xl:text-3xl`
            : `${icon} w-min group-hover:animate-spin text-xl md:text-xl 2xl:text-2xl 3xl:text-3xl`
        }
      ></i>
      <h1 className={`${isCurrentId} text-left h-auto font-sans text-xl lg:text-2xl transition-transform duration-300`}>{title}</h1>
    </div>
  );
}
