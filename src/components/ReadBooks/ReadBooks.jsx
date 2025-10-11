import { useContext } from "react";
import ReadListContext from "../../contexts/ReadListContext";
import CommonCard from "../CommonCard/CommonCard";

const ReadBooks = () => {
  const { readList, handleRemoveFromStorage } = useContext(ReadListContext);

  const handleRemove = (id) => {
    handleRemoveFromStorage("read-list", id);
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
