import { configureStore } from '@reduxjs/toolkit';
import { additionalInfoReducer, helpReducer, personDataReducer } from './slice';

export const store = configureStore({
  reducer: {
    help: helpReducer,
    personData: personDataReducer,
    additionalInfo: additionalInfoReducer,
  },
  devTools: true,
});
