import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: [],
  reducers: {
    addGame: (state, action) => {
      const newGame = {
        id: "",
        title: "",
        short_description: "",
        platform: "",
        genre: "",
        thumbnail: "",
      };
      state.push(newGame);
    },

    deleteGame: (state, action) => {
      return state.filter((game) => game.id !== action.payload.id);
    },

    modifyGame: (state, action) => {
      return {};
    },

    filterGames: (state, action) => {},
  },
});

export const { setList, addGame, deleteGame, modifyGame } = gameSlice.actions;

export default gameSlice.reducer;
