interface Props {
  id: number;
  icon: string;
  title: string;
  onClickHandler: React.MouseEventHandler;
}

export default function AboutBoardSelector({ id, icon, title, onClickHandler }: Props) {
  return (
    <div
      role={'button'}
      onClick={onClickHandler}
      className="container relative my-5 flex w-min rounded-full bg-background-div1 text-left align-middle  shadow-md shadow-black lg:w-44"
    >
      <i className={`${icon} flex w-6 items-center justify-center lg:text-3xl`}></i>
      <h1 className="ml-3 h-auto w-min px-2 font-sans text-xl lg:text-2xl">{title}</h1>
    </div>
  );
}
