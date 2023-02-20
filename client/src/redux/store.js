import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user/userSlice";
import gameSlice from "./games/gameSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    game: gameSlice,
  },
});

export default store;
