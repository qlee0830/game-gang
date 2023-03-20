import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: Math.random(),
        name: "Quoc ly",
        email: "qp93@ggang.com",
      };

      state.push(newUser);
    },

    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },

    modifyUser: (state, action) => {
      return {};
    },
  },
});

export const { addUser, deleteUser, modifyUser } = userSlice.actions;

export default userSlice.reducer;
