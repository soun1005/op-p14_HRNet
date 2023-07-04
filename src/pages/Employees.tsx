import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import { RootState } from '../app/store';
import { Table } from '../components/table/Table';

const Employees = () => {
  // get redux state
  const storedData = useSelector((state: RootState) => state.data);
  console.log(storedData);

  return (
    <div className="h-full">
      <NavBar page="Return to home" link={'/'} />
      <h1 className="my-10 text-center">Current Employees</h1>
      {/* <Table employeeData={storedData} /> */}
      <Table />
    </div>
  );
};

export default Employees;
