import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import { RootState } from '../app/store';
// import Table from '../components/Table';

const Employees = () => {
  // get redux state
  const storedData = useSelector((state: RootState) => state.data);
  console.log(storedData);

  return (
    <div>
      <NavBar page="Return to home" link={'/'} />
      <h1>Current Employees</h1>
      {/* <Table employeeData={storedData} /> */}
    </div>
  );
};

export default Employees;
