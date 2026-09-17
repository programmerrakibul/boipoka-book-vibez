import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  readList: [],
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload,
      );
    },
    addToReadList: (state, action) => {
      state.readList.push(action.payload);
    },
    removeFromReadList: (state, action) => {

      state.readList = state.readList.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  addToReadList,
  removeFromReadList,
} = savedSlice.actions;
export default savedSlice.reducer;
