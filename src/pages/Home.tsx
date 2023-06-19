import NavBar from '../components/NavBar';
import Dropdown from '../components/Dropdown';
import Input from '../components/Input';
import stateData from '../assets/states';
import stateDataFormat from '../dataFormat/stateFormat';
import { useState } from 'react';
import { RootState } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../slices/dataSlice';

const Home = () => {
  // to format state data to display in a dropdown library
  const formattedState = stateDataFormat(stateData);

  // to get value of dropdowns
  const [state, setState] = useState(null);
  const [department, setDepartment] = useState(null);

  const [values, setValues] = useState<{ [key: string]: string }>({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    selectedState: '',
    selectedDepartment: '',
  });

  // get redux state
  const storeData = useSelector((state: RootState) => state.data);

  // initialise dispatch
  const dispatch = useDispatch();

  // when form is submitted
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const formData = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      street: target.street.value,
      city: target.city.value,
      state: target.state,
      zip: target.zip.value,
      selectedState: state,
      selectedDepartment: department,
    };

    // form values are passed to reducer
    dispatch(updateData({ formData }));
  };
  console.log('initialValue:', storeData);

  const onChange = (e: any) => {
    console.log(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen">
      <NavBar page="View Employees" link={'/employees'} />
      <div className="max-w-6/12 mx-auto flex h-full max-w-xs flex-col items-center">
        <h2 className="mb-8 text-xl">Create Employee</h2>
        <form
          action="#"
          id="create-employee"
          className="flex w-full flex-col"
          onSubmit={handleSubmit}
        >
          <Input
            name="firstName"
            label="First Name"
            type="text"
            placeholder="Henry"
            value={values.firstName}
            required
            onChange={onChange}
            errorMessage="Firstname should be 2-16 characters"
          />
          <Input
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Cavil"
            value={values.lastName}
            required
            onChange={onChange}
            errorMessage="Lastname should be 2-16 characters"
          />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="startDate">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="mb-4 flex flex-col rounded-sm border border-solid border-sub-green p-3">
            <legend>Address</legend>
            <Input
              name="street"
              label="Street"
              type="text"
              placeholder="Kensington"
              value={values.street}
              required
              onChange={onChange}
              errorMessage="Street name should be 2-10 characters"
            />
            <Input
              name="city"
              label="City"
              type="text"
              placeholder="London"
              value={values.city}
              required
              onChange={onChange}
              errorMessage="City name should be 2-10 characters"
            />

            <label htmlFor="state">State</label>
            <Dropdown options={formattedState} onChange={setState} />
            <Input
              name="zip"
              label="Zip Code"
              type="number"
              placeholder="92160"
              value={values.zip}
              required
              onChange={onChange}
              errorMessage="Zipcode should be 5 numbers or more"
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
            onChange={setDepartment}
          />
          <button
            type="submit"
            className="mb-10 mt-10 rounded-full bg-sub-green px-20 py-2"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
