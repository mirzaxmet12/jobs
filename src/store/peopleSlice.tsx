import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Person {
  id: string;
  name: string;
  createdAt: string;
  job: string;
}

interface PeopleState {
  items: Person[];
  loading: boolean;
  error: string | null;
}

const initialState: PeopleState = {
  items: [],
  loading: false,
  error: null,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    fetchPeopleRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPeopleSuccess(state, action: PayloadAction<Person[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchPeopleFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {fetchPeopleRequest,fetchPeopleSuccess,fetchPeopleFailure,} = peopleSlice.actions;

export default peopleSlice.reducer;
