import { configureStore } from "@reduxjs/toolkit";
import { booksAPI } from "./books/booksAPI";

const store = configureStore({
  reducer: {
    [booksAPI.reducerPath]: booksAPI.reducer,
  },
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksAPI.middleware),
});

export default store;
