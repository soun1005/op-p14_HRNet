import Select, { SingleValue } from 'react-select';

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  onChange: (name: string, value: string) => void;
  label: string;
  name: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  label,
  name,
}) => {
  const handleOnChange = (newValue: SingleValue<Option>) => {
    // console.log(newValue?.value);
    const value = newValue?.value || '';

    onChange(name, value);
  };

  return (
    <>
      <label htmlFor={label}>{label}</label>

      <Select options={options} onChange={handleOnChange} />
    </>
  );
};

export default Dropdown;
