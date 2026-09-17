import { configureStore } from "@reduxjs/toolkit";
import { booksAPI } from "./books/booksAPI";
import savedReducer from "./saved/savedSlice";

const store = configureStore({
  reducer: {
    [booksAPI.reducerPath]: booksAPI.reducer,
    saved: savedReducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksAPI.middleware),
});

export default store;
