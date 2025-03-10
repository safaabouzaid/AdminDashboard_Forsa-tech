import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import themeReducer from "./thems/themeSlice";

export const store = configureStore({
  reducer: {
     user: userReducer,
     theme:themeReducer ,

  },
});
