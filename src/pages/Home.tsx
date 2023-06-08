import NavBar from '../components/NavBar';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';
import stateData from '../assets/states';
import stateDataFormat from '../dataFormat/stateFormat';

const Home = () => {
  const formattedState = stateDataFormat(stateData);

  return (
    <div>
      <NavBar page="View Current Employees" link={'/employees'} />
      <div>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <Input
            labelHtml="first-name"
            labelName="First Name"
            inputType="text"
          />
          <Input labelHtml="last-name" labelName="Last Name" inputType="text" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset>
            <legend>Address</legend>

            <Input labelHtml="street" labelName="Street" inputType="text" />
            <Input labelHtml="city" labelName="City" inputType="text" />

            <label htmlFor="state">State</label>
            <Dropdown options={formattedState} />

            <Input
              labelHtml="zip-code"
              labelName="Zip Code"
              inputType="number"
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Dropdown
            options={[
              { value: 'sales', label: 'Sales' },
              { value: 'marketing', label: 'Marketing' },
              { value: 'engineering', label: 'Engineering' },
              { value: 'human resources', label: 'Human Resources' },
              { value: 'legal', label: 'Legal' },
            ]}
          />
        </form>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Home;