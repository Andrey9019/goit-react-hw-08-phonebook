import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = `https://6564f36bceac41c0761f0eec.mockapi.io`;

export const fetchContacts = createAsyncThunk(
  `contacts/featchAll`,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  `contacts/addContact`,
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, { name, number });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  `contacts/deleteContact`,
  async (contactsID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactsID}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);