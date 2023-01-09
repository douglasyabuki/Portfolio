// Props destructuring
export interface Props {
  onClickHandler: React.MouseEventHandler
}

// Menu button main function
export default function MenuButton ({onClickHandler}: Props) {

  // Returns the button menu to display the navigation list on Navigation.tsx
  return (
    <div  className="block container h-auto w-14 opacity-50 text-end hover:opacity-80 transition-opacity duration-150 lg:hidden">
      <i className="fa fa-bars text-xl md:text-3xl" role={'button'} onClick={onClickHandler}></i>
    </div>
  );
}
