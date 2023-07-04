import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import { RootState } from '../app/store';
import { BasicTable } from '../components/table/Table';
// import { useMemo } from 'react';

const Employees = () => {
  // get redux state
  const storedData = useSelector((state: RootState) => state.data);
  // console.log(storedData);
  // const data = useMemo(()=> storedData, [storedData])

  return (
    <div className="h-full">
      <NavBar page="Return to home" link={'/'} />
      <h1 className="my-10 text-center font-extrabold underline">
        Current Employees
      </h1>
      {/* <Table employeeData={storedData} /> */}
      <BasicTable tableData={storedData} />
    </div>
  );
};

export default Employees;
