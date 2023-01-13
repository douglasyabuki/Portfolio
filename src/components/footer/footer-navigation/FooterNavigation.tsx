// Interfaces
import { ISocial } from '../../../interfaces/ISocial';

interface Props {
  list: ISocial[];
}

export default function FooterNavigation({ list }: Props) {
  return (
    <div className="">
      {list.map((item) => (
        <div></div>
      ))}
    </div>
  );
}
