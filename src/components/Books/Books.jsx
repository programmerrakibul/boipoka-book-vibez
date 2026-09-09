import BookCard from "@/components/BookCard/BookCard";
import Loader from "@/components/Loader/Loader";
import { useGetBooksQuery } from "@/redux/books/booksAPI";

const Books = () => {
  const { data = [], isLoading } = useGetBooksQuery();

  return (
    <section className="my-7 py-4">
      <h1 className="text-center text-4xl font-bold mb-8">Books</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {isLoading ? (
          <Loader className={"col-span-full"} />
        ) : (
          data.map((book) => <BookCard key={book.id} book={book} />)
        )}
      </div>
    </section>
  );
};

export default Books;
