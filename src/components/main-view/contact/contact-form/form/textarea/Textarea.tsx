// Props destructuring
interface Props {
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

// Input main function
export default function Textarea({ name, label, value, onChange }: Props) {

  // Returns the componentized input field to ContactForm.tsx
  return (
    <div className="m-auto w-fit flex-col">
      <label className="mb-2 flex text-left font-semibold">{label}</label>
      <textarea
        className="h-auto min-h-[200px] w-[220px] resize-none rounded-md bg-background-div1 p-2 text-sm text-not-so-white shadow-inner3 shadow-translucid-black outline-translucid-black transition-all duration-300 focus:bg-not-so-white focus:text-black focus:shadow-inner3-hover focus:outline-none xs:min-h-[220px] xs:w-[250px] md:w-[300px]"
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
