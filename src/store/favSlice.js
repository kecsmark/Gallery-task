import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("favourites");
  if (data === null || data.length === 0) {
    return [];
  } else {
    return JSON.parse(data);
  }
};

const saveToLocalStorage = (data) => {
  localStorage.setItem("favourites", JSON.stringify(data));
};

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    favourites: loadFromLocalStorage(),
  },
  reducers: {
    addFavourite: (state, action) => {
      const newState = {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

      saveToLocalStorage(newState.favourites);

      return newState;
    },

    deleteFavourite: (state, action) => {
      const newState = {
        ...state,
        favourites: state.favourites.filter((fav) => {
          if (fav.title !== action.payload) {
            return fav;
          }
        }),
      };

      saveToLocalStorage(newState.favourites);

      return newState;
    },
  },
});

export const { addFavourite, deleteFavourite } = favSlice.actions;

export const selectSearchResults = (state) => state.fav.searchResults;
export const selectFavourites = (state) => state.fav.favourites;

export default favSlice.reducer;
