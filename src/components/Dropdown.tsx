import Select from 'react-select';

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
};

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  return (
    <>
      <Select options={options} />
    </>
  );
};

export default Dropdown;
