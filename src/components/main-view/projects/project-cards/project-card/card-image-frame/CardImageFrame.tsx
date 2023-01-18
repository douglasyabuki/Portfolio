// Props destructuring
interface Props {
  isExtended: boolean;
  src: string;
  alt: string
}

// Card image frame main function
export default function CardImageFrame ({isExtended, src, alt}: Props) {

  // Returns the styled image container used by ProjectCard.tsx
  return (
    <div
    className={`${
      isExtended ? `scale-100` : `h-0 scale-0 lg:h-auto lg:w-0`
    } shaped-ruppee w-auto transition-all duration-300 hover:-translate-y-5 lg:h-max`}
  >
    <img className={`cover`} src={src} alt={alt} />
  </div>
  );
}
