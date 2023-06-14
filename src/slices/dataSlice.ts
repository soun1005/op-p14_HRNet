import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  startDate: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  department: '',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData(state, action) {
      console.log('action.payload:', action.payload);
      return {
        ...state,
        firstName: action.payload.formData.firstName,
        lastName: action.payload.formData.lastName,
        dateOfBirth: action.payload.formData.dateOfBirth,
        startDate: action.payload.formData.startDate,
        street: action.payload.formData.street,
        city: action.payload.formData.city,
        state: action.payload.formData.selectedState.value,
        zip: action.payload.formData.zip,
        department: action.payload.formData.selectedDepartment.value,
      };
    },
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
