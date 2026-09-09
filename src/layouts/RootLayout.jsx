import Navbar from "@/components/Navbar/Navbar";
import ReadListContext from "@/contexts/ReadListContext";
import WishlistContext from "@/contexts/WishlistContext";
import {
  addToStorage,
  getStoredData,
  removeFromStorage,
} from "@/utils/local_storage";
import { useState } from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  const [wishlist, setWishlist] = useState(() => getStoredData("wishlist"));
  const [readList, setReadList] = useState(() => getStoredData("read-list"));

  const handleAddToStorage = (key, value) => {
    if (key === "wishlist") {
      setWishlist([...wishlist, value]);
    } else {
      setReadList([...readList, value]);
    }

    addToStorage(key, value);
  };

  const handleRemoveFromStorage = (key, id) => {
    if (key === "wishlist") {
      const updatedData = wishlist.filter((item) => item.id !== id);
      setWishlist(updatedData);
    } else {
      const updatedData = readList.filter((item) => item.id !== id);
      setReadList(updatedData);
    }

    removeFromStorage(key, id);
  };

  return (
    <>
      <Navbar />
      <main>
        <ReadListContext.Provider
          value={{ readList, handleAddToStorage, handleRemoveFromStorage }}
        >
          <WishlistContext.Provider
            value={{ wishlist, handleAddToStorage, handleRemoveFromStorage }}
          >
            <Outlet />
          </WishlistContext.Provider>
        </ReadListContext.Provider>
      </main>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default RootLayout;
