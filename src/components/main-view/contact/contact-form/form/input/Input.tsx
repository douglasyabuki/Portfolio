// Props destructuring
interface Props {
  name: string;
  type: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Input main function
export default function Input ({name, type, label, value, onChange}: Props) {

  // Returns the componentized input field to ContactForm.tsx
  return (
    <div className="flex-col w-fit m-auto">
      <label className="text-left font-semibold flex">{label}</label>
      <input className="text-sm text-black w-[220px] h-[40px] rounded-md px-2 focus:outline-none" type={type} value={value} name={name} onChange={onChange} />
    </div>
  );
}
