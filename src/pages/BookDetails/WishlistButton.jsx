import { isInWishlist } from "@/redux/saved/saved.selector";
import { addToWishlist, removeFromWishlist } from "@/redux/saved/savedSlice";
import { useDispatch, useSelector } from "react-redux";

const WishlistButton = ({ book }) => {
  const dispatch = useDispatch();
  const checkWishlist = useSelector((state) => isInWishlist(state, book.id));

  const toggleWishlist = () => {
    if (checkWishlist) {
      dispatch(removeFromWishlist(book.id));
    } else {
      dispatch(addToWishlist(book));
    }
  };

  return (
    <button className="btn btn-info" onClick={toggleWishlist}>
      {checkWishlist ? "Remove from wishlist" : "Add to wishlist"}
    </button>
  );
};

export default WishlistButton;
