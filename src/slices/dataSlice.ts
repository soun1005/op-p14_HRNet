import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  firstName: '',
  lastName: '',
  birthDate: '',
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
        firstName: action.payload.values.firstName,
        lastName: action.payload.values.lastName,
        birthDate: action.payload.values.birthDate,
        startDate: action.payload.values.startDate,
        street: action.payload.values.street,
        city: action.payload.values.city,
        state: action.payload.values.state,
        zip: action.payload.values.zip,
        department: action.payload.values.department,
      };
    },
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
