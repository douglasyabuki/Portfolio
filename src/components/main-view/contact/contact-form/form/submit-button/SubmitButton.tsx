// Hooks
import { useState } from 'react';

// Props destructuring
interface Props {
  disabled: boolean;
}

// Submit button main function
export default function SubmitButton({ disabled }: Props) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseOver = () => {
    if (disabled === true) {
      setIsHovered(!isHovered);
    }
  };

  // Returns the styled and responsive button to submit the form on ContactForm.tsx
  return (
    <button
      id="submitButton"
      onMouseOver={handleMouseOver}
      type="submit"
      disabled={disabled}
      className={`${
        disabled ? `${isHovered === true ? `md:translate-x-[200%]` : `md:translate-x-0`}` : ''
      }  relative m-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl text-black transition-all duration-75 disabled:opacity-80`}
    >
      <i className="fa fa-send"></i>
    </button>
  );
}
