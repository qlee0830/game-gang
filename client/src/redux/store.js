import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice";
import gameSlice from "./gameSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    game: gameSlice,
    auth: authSlice,
  },
});

export default store;
