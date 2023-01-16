// Props destructuring
interface Props {
  type: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Input main function
export default function Input ({type, label, value, onChange}: Props) {

  // Returns the componentized input field to ContactForm.tsx
  return (
    <div>
      <label>
        {label}
        <input type={type} value={value} onChange={onChange} />
      </label>
    </div>
  );
}
