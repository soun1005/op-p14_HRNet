import NavBar from '../../components/navBar';

const Home = () => {
  return (
    <div>
      <NavBar page="View Current Employees" link={'/employees'} />
    </div>
  );
};

export default Home;
