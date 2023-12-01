import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './contacts/filtersSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
