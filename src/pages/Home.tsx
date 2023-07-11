import NavBar from '../components/NavBar';
import Dropdown from '../components/forms/Dropdown';
import Input from '../components/forms/inputs/Input';
import stateData from '../data/states';
import stateDataFormat from '../dataFormat/stateFormat';
import { useState } from 'react';
// import { RootState } from '../app/store';
import { useDispatch } from 'react-redux';
import { updateData } from '../slices/dataSlice';
import MyDatePicker from '../components/forms/DatePicker';
import FormType from '../type/formType';
import validateForm from '../components/forms/inputs/formValidation';
import Error from '../components/forms/inputs/Error';
import { Modal } from '@soeunlee/reactjs-modal';

// const stateDefault = stateData[0];
// console.log(stateDefault);

const Home = () => {
  // to format state data to display in a dropdown library
  const formattedState = stateDataFormat(stateData);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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
    // dispatch(updateData({ values }));

    // 1, 2
    // Validate inputs and generates error messages
    // and save inside formError by useState(=setFormErrors)

    // 아래와 같이 함수와 인자를 전달하게 되면
    // -> setFormErrors(validateForm(values))
    // formErrors에 에러 저장이 안되기 때문에 const로 저장을 미리 하고 useState에 전달해줌
    // 이렇게 하면 useEffect사용하지 않아도 자동으로 리렌더링 되기 때문에 에러 메세지가 뜸
    // 다시 말해, validateForm(values)를 저장함으로써 자동으로 formErrors의 state가 업데이트 됨

    const validate = validateForm(values);
    setFormErrors(validate);
    console.log('formErrors', formErrors);
    console.log('validate', validate);

    if (Object.keys(validate).length === 0) {
      console.log('validated');
      dispatch(updateData({ values }));
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
      setIsModalOpen(true);
      // modal opened
    }
  };

  const onChange = (name: string, value: string) => {
    // using variable as key
    setValues({ ...values, [name]: value });
    // validateForm(values);
  };

  // to check stored data in Redux
  // const storeData = useSelector((state: RootState) => state.data);
  // console.log(storeData);

  return (
    <div className="relative h-screen">
      <NavBar page="View Employees" link={'/employees'} />
      <div className="formContainer max-w-6/12 relative mx-auto flex h-full max-w-xs flex-col items-center">
        <h2 className="mb-6 text-center text-2xl">Create Employee 📇</h2>

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
          <Error errorMsg={formErrors.firstName} />

          <Input
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Cavil"
            value={values.lastName}
            onChange={onChange}
          />
          <Error errorMsg={formErrors.lastName} />

          <MyDatePicker
            label="Date of Birth"
            onChange={onChange}
            selected={values.birthDate}
            name="birthDate"
            filterDate={(d) => {
              return new Date() > d;
            }}
          />
          <Error errorMsg={formErrors.birthDate} />

          <MyDatePicker
            label="Start Date"
            onChange={onChange}
            selected={values.startDate}
            name="startDate"
          />
          <Error errorMsg={formErrors.startDate} />

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
            <Error errorMsg={formErrors.street} />

            <Input
              name="city"
              label="City"
              type="text"
              placeholder="London"
              value={values.city}
              onChange={onChange}
            />
            <Error errorMsg={formErrors.city} />

            <Dropdown
              options={formattedState}
              onChange={onChange}
              label="State"
              name="state"
              value={values.state}
            />
            <Error errorMsg={formErrors.state} />

            <Input
              name="zip"
              label="Zip Code"
              type="number"
              placeholder="92160"
              value={values.zip}
              onChange={onChange}
            />
            <Error errorMsg={formErrors.zip} />
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
          <Error errorMsg={formErrors.department} />

          <button
            type="submit"
            className="mb-10 mt-10 rounded-full bg-sub-green px-20 py-2"
          >
            Save
          </button>
        </form>
      </div>
      {/* modal */}
      <Modal
        onClose={() => setIsModalOpen(false)}
        setModalOpen={isModalOpen}
        backgroundClass="bg-zinc-500/60 modalBackground fixed top-0 left-0 flex flex-col h-screen w-screen items-center justify-center"
        containerClass="modalContainer bg-neutral-300/80 flex flex-col items-center justify-around py-1 w-1/3 h-28 rounded"
        bodyClass="modalBody"
        btnClass="modalBtn rounded-full bg-sub-green py-1 w-20"
        btnLabel="close"
        btnLabelClass="text-sm text-slate-50 font-medium"
        children={
          <div>
            <h1>Employee is successfully created!</h1>
          </div>
        }
      />
    </div>
  );
};

export default Home;
