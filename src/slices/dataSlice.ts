import { createSlice } from '@reduxjs/toolkit';

// initial state

type InitialState = {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  zip: string;
  state: string;
  department: string;
  startDate: string;
  birthDate: string;
};

const initialState: InitialState[] = [];

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData(state, action) {
      console.log('action.payload:', action.payload);

      return [
        ...state,
        {
          firstName: action.payload.values.firstName,
          lastName: action.payload.values.lastName,
          birthDate: action.payload.values.birthDate,
          startDate: action.payload.values.startDate,
          street: action.payload.values.street,
          city: action.payload.values.city,
          state: action.payload.values.state,
          zip: action.payload.values.zip,
          department: action.payload.values.department,
        },
      ];
    },
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
