import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../routes';

type User = {
  id: number;
};

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, { payload: user }) {
      return user;
    },
    clearUser() {
      return null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const getUser = () => async (dispatch: Function) => {
  const user = await axios(routes.user());
  dispatch(setUser(user));
};

export default userSlice.reducer;
