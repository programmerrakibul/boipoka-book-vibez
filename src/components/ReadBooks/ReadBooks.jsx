import CommonCard from "@/components/CommonCard/CommonCard";
import { selectReadListBooks } from "@/redux/saved/saved.selector";
import { removeFromReadList } from "@/redux/saved/savedSlice";
import { useDispatch, useSelector } from "react-redux";

const ReadBooks = () => {
  const readList = useSelector(selectReadListBooks);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromReadList(id));
  };

  return (
    <>
      {readList.map((book) => (
        <CommonCard key={book.id} book={book} handleRemove={handleRemove} />
      ))}
    </>
  );
};

export default ReadBooks;
