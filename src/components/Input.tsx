type FunctionProps = {
  label: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  name: string;
  required: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<FunctionProps> = ({
  label,
  type,
  placeholder,
  errorMessage,
  name,
  required,
  onChange,
  value,
}) => {
  return (
    <div className="my-1 flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        onChange={onChange}
        value={value}
        className="my-1 min-h-[auto] rounded-sm border border-solid border-gray-300 placeholder-gray-200 invalid:border-red-500 focus:placeholder-opacity-0 focus:outline-none"
      />
      <div>{errorMessage}</div>
    </div>
  );
};

export default Input;
