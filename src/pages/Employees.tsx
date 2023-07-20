import { useSelector } from 'react-redux';
import NavBar from '../components/NavBar';
import { RootState } from '../app/store';
import { BasicTable } from '../components/table/Table';
import { useMemo } from 'react';
import PageTitle from '../components/PageTitle';
// import mockData from '../data/mockEmployees';

const Employees = () => {
  // get redux state
  const storedData = useSelector((state: RootState) => state.data);
  const data = useMemo(() => storedData, [storedData]);

  return (
    <div className="h-full">
      <NavBar page="Return to home" link={'/'} />
      <PageTitle title="Current Employees 🗂" />
      <BasicTable tableData={data.data} />
    </div>
  );
};

export default Employees;
