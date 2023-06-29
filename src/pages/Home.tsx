import NavBar from '../components/NavBar';
import Dropdown from '../components/forms/Dropdown';
import Input from '../components/forms/inputs/Input';
import stateData from '../assets/states';
import stateDataFormat from '../dataFormat/stateFormat';
import { useEffect, useState } from 'react';
// import { RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { updateData } from '../slices/dataSlice';
import MyDatePicker from '../components/forms/DatePicker';
import FormType from '../type/formType';
import validateForm from '../components/forms/inputs/formValidation';

// const stateDefault = stateData[0];
// console.log(stateDefault);

const Home = () => {
  // to format state data to display in a dropdown library
  const formattedState = stateDataFormat(stateData);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [values, setValues] = useState<FormType>({
    // initial value
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    department: '',
    startDate: '',
    birthDate: '',
  });

  // initialise dispatch
  const dispatch = useDispatch();

  // when form is submitted
  const handleSubmit = (e: any) => {
    e.preventDefault();

    dispatch(updateData({ values }));

    setFormErrors(validateForm(values));
    // if (Object.keys(formErrors).length === 0) {
    //   setIsSubmit(true);
    // }
    console.log(formErrors);

    // reset inputs!
    setValues({
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      department: '',
      startDate: '',
      birthDate: '',
    });
  };

  useEffect(() => {
    console.log('formErrors', formErrors);
    if (
      Object.keys(formErrors).length === 0 &&
      isSubmit &&
      values.birthDate &&
      values.startDate &&
      values.state &&
      values.department
    ) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSubmit]);

  const onChange = (name: string, value: string) => {
    // using variable as key
    setValues({ ...values, [name]: value });
    // validateForm(values);
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
            onChange={onChange}
          />
          <p>{formErrors.firstName}</p>

          <Input
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Cavil"
            value={values.lastName}
            onChange={onChange}
          />
          <p>{formErrors.lastName}</p>
          <MyDatePicker
            label="Date of Birth"
            onChange={onChange}
            selected={values.birthDate}
            name="birthDate"
            filterDate={(d) => {
              return new Date() > d;
            }}
          />
          <p>{formErrors.birthDate}</p>
          <MyDatePicker
            label="Start Date"
            onChange={onChange}
            selected={values.startDate}
            name="startDate"
          />
          <p>{formErrors.startDate}</p>
          <fieldset className="mb-4 flex flex-col rounded-sm border border-solid border-sub-green p-3">
            <legend>Address</legend>
            <Input
              name="street"
              label="Street"
              type="text"
              placeholder="Kensington"
              value={values.street}
              onChange={onChange}
            />
            <p>{formErrors.street}</p>
            <Input
              name="city"
              label="City"
              type="text"
              placeholder="London"
              value={values.city}
              onChange={onChange}
            />
            <p>{formErrors.city}</p>
            <Dropdown
              options={formattedState}
              onChange={onChange}
              label="State"
              name="state"
              value={values.state}
            />
            <p>{formErrors.state}</p>
            <Input
              name="zip"
              label="Zip Code"
              type="number"
              placeholder="92160"
              value={values.zip}
              onChange={onChange}
            />
            <p>{formErrors.zip}</p>
          </fieldset>
          <Dropdown
            options={[
              { value: 'sales', label: 'Sales' },
              { value: 'marketing', label: 'Marketing' },
              { value: 'engineering', label: 'Engineering' },
              { value: 'human resources', label: 'Human Resources' },
              { value: 'legal', label: 'Legal' },
            ]}
            onChange={onChange}
            label="Department"
            name="department"
            value={values.department}
          />
          <p>{formErrors.department}</p>

          <button
            type="submit"
            className="mb-10 mt-10 rounded-full bg-sub-green px-20 py-2"
          >
            Save
          </button>
        </form>
        {/* modal */}
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="message success">Registered successfully</div>
        ) : (
          <div className="message fail">Please fill the blanks</div>
        )}
      </div>
    </div>
  );
};

export default Home;
