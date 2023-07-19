import FormType from '../../../type/formType';

const validateForm = (values: FormType) => {
  const errors: { [key: string]: string } = {};
  const {
    firstName,
    lastName,
    street,
    city,
    zip,
    birthDate,
    startDate,
    state,
    department,
  } = values;
  // take values from state as props. check each inputs with 'if'
  const regex = /^[a-zA-Z]{2,15}$/;
  const lastNameRegex = /^[A-Za-z ]{1,20}$/;
  const cityRegex = /^[a-zA-Z]{2,10}$/;
  const zipRegex = /^\d{5,}$/;

  if (firstName === '') {
    errors.firstName = 'First name should be 2-15 characters';
  } else if (!regex.test(firstName)) {
    errors.firstName = 'This is not a valid name format';
  }

  if (lastName === '') {
    errors.lastName = 'Lastname should be 2-15 characters';
  } else if (!lastNameRegex.test(lastName)) {
    errors.lastName = 'This is not a valid name format';
  }

  if (street === '') {
    errors.street = 'Street name should be 2-15 characters';
  } else if (!regex.test(street)) {
    errors.street = 'This is not a valid street format';
  }

  if (city === '') {
    errors.city = 'City name should be 2-10 characters';
  } else if (!cityRegex.test(city)) {
    errors.city = 'This is not a valid city format';
  }

  if (zip === '') {
    errors.zip = 'Zipcode should be 5 numbers or more';
  } else if (!zipRegex.test(zip)) {
    errors.zip = 'This is not a valid zipcode format';
  }

  if (birthDate === '') {
    errors.birthDate = 'Please select a date';
  }

  if (startDate === '') {
    errors.startDate = 'Please select a date';
  }

  if (state === '') {
    errors.state = 'Please select a state';
  }

  if (department === '') {
    errors.department = 'Please select a departement';
  }

  return errors;
};

export default validateForm;
