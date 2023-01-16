// Props destructuring
interface Props {
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

// Input main function
export default function Textarea ({name, label, value, onChange}: Props) {

  // Returns the componentized input field to ContactForm.tsx
  return (
    <div className="flex-col w-fit m-auto">
      <label className="text-left flex mb-2 font-semibold">{label}</label>
      <textarea className="text-base text-black w-[220px] rounded-xl p-2 focus:outline-none bg-not-so-white" value={value} name={name} onChange={onChange}/>
    </div>
  );
}
