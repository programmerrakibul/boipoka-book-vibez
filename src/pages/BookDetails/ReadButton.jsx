import { isInReadList } from "@/redux/saved/saved.selector";
import { addToReadList, removeFromReadList } from "@/redux/saved/savedSlice";
import { useDispatch, useSelector } from "react-redux";

const ReadButton = ({ book }) => {
  const dispatch = useDispatch();
  const checkReadList = useSelector((state) => isInReadList(state, book.id));

  const toggleReadList = () => {
    if (checkReadList) {
      dispatch(removeFromReadList(book.id));
    } else {
      dispatch(addToReadList(book));
    }
  };

  return (
    <button className="btn btn-outline" onClick={toggleReadList}>
      {checkReadList ? "Remove from read list" : "Add to read list"}
    </button>
  );
};

export default ReadButton;
