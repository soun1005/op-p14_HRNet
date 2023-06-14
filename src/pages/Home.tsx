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
      zipCode: target.zipCode.value,
      selectedState: state,
      selectedDepartment: department,
    };

    console.log('formData:', formData);

    // form values are passed to reducer
    dispatch(updateData({ formData }));
  };
  console.log('initialValue after form:', storeData);
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
            labelHtml="firstName"
            labelName="First Name"
            inputType="text"
            placeH="Henry"
          />
          <Input
            labelHtml="lastName"
            labelName="Last Name"
            inputType="text"
            placeH="Cavil"
          />

          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label htmlFor="startDate">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset className="mb-4 flex flex-col rounded-sm border border-solid border-sub-green p-3">
            <legend>Address</legend>

            <Input
              labelHtml="street"
              labelName="Street"
              inputType="text"
              placeH="Kensington"
            />
            <Input
              labelHtml="city"
              labelName="City"
              inputType="text"
              placeH="London"
            />

            <label htmlFor="state">State</label>
            <Dropdown options={formattedState} onChange={setState} />

            <Input
              labelHtml="zipCode"
              labelName="Zip Code"
              inputType="number"
              placeH="92160"
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
