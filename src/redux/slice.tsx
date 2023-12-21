import { createSlice } from '@reduxjs/toolkit';

const helpSlice = createSlice({
  name: 'helpSlice',
  initialState: {
    value: 'General',
  },
  reducers: {
    setHelpValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setHelpValue } = helpSlice.actions; // Settings
export const helpReducer = helpSlice.reducer;

const personalDataSlice = createSlice({
  name: 'personalDataSlice',
  initialState: {
    value: 'General',
  },
  reducers: {
    setPersonalDataValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setPersonalDataValue } = personalDataSlice.actions; // Settings
export const personDataReducer = personalDataSlice.reducer;

const additionalInfoSlice = createSlice({
  name: 'additionalInfoSlice',
  initialState: {
    value: 'General',
  },
  reducers: {
    setAdditionalInfoValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setAdditionalInfoValue } = additionalInfoSlice.actions; // Settings
export const additionalInfoReducer = additionalInfoSlice.reducer;
