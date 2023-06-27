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
  value: string | null;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onChange,
  label,
  name,
  value,
}) => {
  const handleOnChange = (selectedValue: SingleValue<Option>) => {
    // selectedvalue -> [{value: 'sales}, label: 'sales']
    const value = selectedValue?.value || '';
    // value -> 'sales'
    onChange(name, value);
  };

  /* 
  Options is an array 
  [
              { value: 'sales', label: 'Sales' },
              { value: 'marketing', label: 'Marketing' },
              { value: 'engineering', label: 'Engineering' },
              { value: 'human resources', label: 'Human Resources' },
              { value: 'legal', label: 'Legal' },
  ]

    We store the value only to know wich one is selected

    The Select component need the value with this format { value: 'legal', label: 'Legal' }

    So we can use Array function find to get the object that match the value

    for value === 'legal', find will return { value: 'legal', label: 'Legal' }

    By default (when user didnt select anything), the value is === '' (empty string)
    => that mean the find will return undefined because nothing match value empty in the array of object OPTIONS

    We add || null because if it's undefined we want selectedValue to equal null so the select dropdown reset (the value on select is Option | null)
  */
  const selectedValue =
    options.find((option) => option.value === value) || null;

  return (
    <>
      <label htmlFor={label}>{label}</label>
      <Select
        options={options}
        onChange={handleOnChange}
        isClearable
        value={selectedValue}
      />
    </>
  );
};

export default Dropdown;
