import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import { RootState } from '../app/store';
import { BasicTable } from '../components/table/Table';
import { useMemo } from 'react';
// import mockData from '../data/mockEmployees';

const Employees = () => {
  // get redux state
  const storedData = useSelector((state: RootState) => state.data);
  const data = useMemo(() => storedData, [storedData]);

  return (
    <div className="h-full">
      <NavBar page="Return to home" link={'/'} />
      <h1 className="mb-6 text-center text-2xl">Current Employees 🗂</h1>
      <BasicTable tableData={data.data} />
    </div>
  );
};

export default Employees;
