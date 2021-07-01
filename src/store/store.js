import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./favSlice";

export default configureStore({
  reducer: {
    fav: favReducer,
  },
});
