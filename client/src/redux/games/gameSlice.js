import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addGame: (state, action) => {
      const newGame = {
        id: Math.random(),
        title: "Overwatch",
        genre: "Action",
      };

      state.push(newGame);
    },

    deleteGame: (state, action) => {
      return state.filter((game) => game.id !== action.payload.id);
    },

    modifyGame: (state, action) => {
      return {};
    },
  },
});

export const { addGame, deleteGame, modifyGame } = gameSlice.actions;

export default gameSlice.reducer;
