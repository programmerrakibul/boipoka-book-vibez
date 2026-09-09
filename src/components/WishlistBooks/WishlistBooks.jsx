import CommonCard from "@/components/CommonCard/CommonCard";
import WishlistContext from "@/contexts/WishlistContext";
import { useContext } from "react";

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
