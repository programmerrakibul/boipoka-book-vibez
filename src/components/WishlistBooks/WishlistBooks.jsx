import CommonCard from "@/components/CommonCard/CommonCard";
import { selectWishlistBooks } from "@/redux/saved/saved.selector";
import { removeFromWishlist } from "@/redux/saved/savedSlice";
import { useDispatch, useSelector } from "react-redux";

const WishlistBooks = () => {
  const wishlist = useSelector(selectWishlistBooks);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
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
