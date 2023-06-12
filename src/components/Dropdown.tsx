import Select from 'react-select';

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  onChange: (event: any) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  return (
    <>
      <Select options={options} onChange={onChange} />
    </>
  );
};

export default Dropdown;
