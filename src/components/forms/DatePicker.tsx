import DatePicker from 'react-datepicker';

type Props = {
  label: string;
  onChange: (name: string, value: string) => void;
  selected: string;
  name: string;
  filterDate?: ((date: Date) => boolean) | undefined;
};

const dateFormat = (date: Date) => date.toLocaleDateString('us-US');

const MyDatePicker = ({
  label,
  onChange,
  selected,
  name,
  filterDate,
}: Props) => {
  const handleOnChange = (date: Date) => {
    onChange(name, dateFormat(date));
  };

  const selectedDate = selected ? new Date(selected) : null;

  return (
    <>
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        dateFormat="dd/MM/yyyy"
        onChange={handleOnChange}
        closeOnScroll={true}
        todayButton="Today"
        filterDate={filterDate}
        className="mb-1 min-h-[auto] rounded-sm border border-solid border-gray-300 placeholder-gray-200 focus:placeholder-opacity-0 focus:outline-none"
      />
    </>
  );
};

export default MyDatePicker;
