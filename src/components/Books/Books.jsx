import BookCard from "@/components/BookCard/BookCard";
import { useLoaderData } from "react-router";

const Books = () => {
  const { data: booksData = [] } = useLoaderData();

  const bookElements = booksData.map((book) => (
    <BookCard key={book.id} book={book} />
  ));

  return (
    <section className="my-7 py-4">
      <h1 className="text-center text-4xl font-bold mb-8">Books</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {bookElements}
      </div>
    </section>
  );
};

export default Books;
