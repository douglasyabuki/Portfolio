export interface IAboutBoardProps {}

export default function AboutBoard(props: IAboutBoardProps) {
  return (
    <div className="group container align-middle">
      <i className="fa fa-map-o flex w-min rounded-full bg-background-div1 text-3xl shadow-md shadow-black">
        <h1 className="h-auto w-min px-2 font-sans xl:text-2xl">Country</h1>
      </i>
    </div>
  );
}
