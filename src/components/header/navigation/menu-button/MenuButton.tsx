// Props destructuring
export interface Props {
  onClickHandler: React.MouseEventHandler
}

// Menu button main function
export default function MenuButton ({onClickHandler}: Props) {

  // Returns the button menu to display the navigation list on Navigation.tsx
  return (
    <div role={'button'} onClick={onClickHandler} className="block container h-auto w-9 opacity-50 hover:opacity-80 transition-opacity duration-150 lg:hidden">
      <i className="fa fa-bars text-xl md:text-3xl"></i>
    </div>
  );
}
