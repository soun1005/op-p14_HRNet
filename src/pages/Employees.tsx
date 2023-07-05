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
  // const data = useMemo(() => mockData, []);

  return (
    <div className="h-full">
      <NavBar page="Return to home" link={'/'} />
      <h1 className="mb-6 text-center text-2xl">Current Employees</h1>
      {/* {storedData.length === 0 ? (
        <span className="align-center mt-48 flex h-full w-full justify-center">
          No employees
        </span>
      ) : (
        <BasicTable tableData={data} />
      )} */}
      <BasicTable tableData={data} />
    </div>
  );
};

export default Employees;
