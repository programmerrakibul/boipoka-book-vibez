import { useContext } from "react";
import WishlistContext from "../../contexts/WishlistContext";
import CommonCard from "../CommonCard/CommonCard";

const WishlistBooks = () => {
  const { wishlist, handleRemoveFromStorage } = useContext(WishlistContext);

  const handleRemove = (id) => {
    handleRemoveFromStorage("wishlist", id);
  };

  return (
    <>
      {wishlist.map((book) => (
        <CommonCard key={book.id} book={book} handleRemove={handleRemove} />
      ))}
    </>
  );
};

export default WishlistBooks;
