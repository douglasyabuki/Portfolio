// Props destructuring
interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

// SkillHideButton main function
export default function SkillHideButton({ isActive, setIsActive }: Props) {

  // Function that deactivates parent state when clicking on eye icon
  const pokeEye = () => {
    setIsActive(false);
  };

  // Function that activates parent state when clicking on eyedropper icon
  const useEyeDropper = () => {
    setIsActive(true);
  };

  // Returns interactive button to Skills.tsx
  return (
    <div className="relative m-auto flex h-12 w-12 items-center justify-center rounded-xl bg-background-div1 shadow-md shadow-translucid-black transition-all duration-300 hover:shadow-lg hover:shadow-translucid-black md:h-20 md:w-20">
      <i
        role={'button'}
        onClick={useEyeDropper}
        className={`${
          isActive ? 'h-0 w-0 opacity-0' : 'animate-bounce opacity-100'
        } fa fa-eyedropper absolute -top-5 -right-2 h-auto w-auto text-2xl hover:scale-110 md:-top-10 md:-right-3 md:text-5xl`}
      ></i>
      <i
        role={'button'}
        onClick={pokeEye}
        className={`${
          isActive ? 'fa fa-eye' : 'fa fa-eye-slash'
        } h-fit text-2xl transition-all duration-300 hover:scale-110 md:text-5xl`}
      ></i>
    </div>
  );
}
