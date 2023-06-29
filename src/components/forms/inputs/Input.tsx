import { ChangeEvent } from 'react';

type FunctionProps = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
};

const Input: React.FC<FunctionProps> = ({
  label,
  type,
  placeholder,
  name,
  onChange,
  value,
}) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="my-1 flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleOnChange}
        value={value}
        className="my-1 min-h-[auto] rounded-sm border border-solid border-gray-300 placeholder-gray-200 focus:placeholder-opacity-0 focus:outline-none"
      />
    </div>
  );
};

export default Input;
