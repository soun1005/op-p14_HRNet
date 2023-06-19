import DatePicker from 'react-datepicker';

type Props = {
  label: string;
  onChange: (name: string, value: Date | null) => void;
  selected: any;
  name: string;
  filterDate?: ((date: Date) => boolean) | undefined;
};

const MyDatePicker = ({
  label,
  onChange,
  selected,
  name,
  filterDate,
}: Props) => {
  //   (date: Date) => setStartDate(date)
  const handleOnChange = (date: Date | null) => {
    console.log(date);
    onChange(name, date);
  };

  return (
    <>
      <label>{label}</label>
      <DatePicker
        selected={selected}
        dateFormat="dd/MM/yyyy"
        onChange={handleOnChange}
        closeOnScroll={true}
        todayButton="Today"
        filterDate={filterDate}
        className="mb-5 min-h-[auto] rounded-sm border border-solid border-gray-300 placeholder-gray-200 focus:placeholder-opacity-0 focus:outline-none"
      />
    </>
  );
};

export default MyDatePicker;
