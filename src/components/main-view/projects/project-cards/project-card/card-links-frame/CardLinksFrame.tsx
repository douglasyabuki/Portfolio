// Props destructuring
interface Props {
  gitUrl: string;
  projectUrl: string;
  isExtended: boolean;
}

// Card links frame main function
export default function CardLinksFrame({ gitUrl, projectUrl, isExtended }: Props) {

  // Returns styled github and page links to CardMainFrame
  return (
    <div
      className={`${
        isExtended ? `scale-100 lg:pl-2 xl:pl-4` : `h-0 scale-0 lg:h-auto lg:w-0`
      } flex w-auto items-center justify-center space-x-4 transition-all duration-300 lg:block lg:h-max lg:self-center`}
    >
      <a href={gitUrl} target='_blank'>
        <i
          className={`fa fa-github flex h-12 w-12 items-center justify-center  rounded-full bg-background-div2 text-4xl opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100`}
        ></i>
      </a>
      <a href={projectUrl} target='_blank'>
        <i
          className={`fa fa-chain flex h-12 w-12  items-center justify-center rounded-full bg-background-div2 text-4xl opacity-80 transition-opacity duration-300 ease-in-out hover:opacity-100`}
        ></i>
      </a>
    </div>
  );
}
