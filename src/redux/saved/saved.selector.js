export const selectWishlistBooks = (state) => state.saved.wishlist;
export const selectReadListBooks = (state) => state.saved.readList;
export const isInWishlist = (state, id) =>
  state.saved.wishlist.find((item) => item.id === id);
export const isInReadList = (state, id) =>
  state.saved.readList.find((item) => item.id === id);
