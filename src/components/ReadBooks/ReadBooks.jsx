import CommonCard from "@/components/CommonCard/CommonCard";
import ReadListContext from "@/contexts/ReadListContext";
import { useContext } from "react";

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
