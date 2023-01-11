interface Props {
  id: number;
  icon: string;
  title: string;
}

export default function AboutBoardSelector({ id, icon, title }: Props) {
  return (
    <div className="container flex lg:block">
      <i
        className={`${icon} flex w-min rounded-full bg-background-div1 text-3xl shadow-md shadow-black`}
      >
        <h1 className="h-auto w-min px-2 font-sans xl:text-2xl">{title}</h1>
      </i>
    </div>
  );
}
