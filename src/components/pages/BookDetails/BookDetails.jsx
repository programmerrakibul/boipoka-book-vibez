import { useLocation } from "react-router";
import Container from "../../Container";
import { useContext } from "react";
import ReadListContext from "../../../contexts/ReadListContext";

const BookDetails = () => {
  const { handleAddToStorage } = useContext(ReadListContext);
  const { state: book } = useLocation();
  const {
    name,
    imageUrl,
    tags,
    author,
    category,
    rating,
    review,
    pages,
    publisher,
    publishYear,
  } = book;

  return (
    <section className="my-7 py-5">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10 font-['Work_Sans']">
          <figure className="flex-1/2 flex justify-center items-center bg-[#F3F3F3] p-14 rounded-lg">
            <img
              src={imageUrl}
              alt={name}
              className="aspect-3/2 object-contain"
            />
          </figure>

          <div className="flex-1/2 space-y-3.5">
            <h1 className="text-4xl font-bold font-['Playfair_Display']">
              {name}
            </h1>
            <h5 className="text-xl font-medium opacity-80">By: {author}</h5>

            <hr className="text-[#1313132e]" />

            <p className="text-xl font-medium opacity-80">{category}</p>

            <hr className="text-[#1313132e]" />

            <p>
              <strong>Review: </strong>
              <span className="opacity-70">{review}</span>
            </p>

            <div className="space-x-3.5">
              <strong>Tag: </strong>
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-medium py-0.5 px-1.5 rounded-full text-[#23BE0A] bg-[#22be0a10]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <hr className="text-[#1313132e]" />

            <table className="table">
              <tbody className="text-sm md:text-base">
                <tr className="border-none">
                  <td>Number of Pages:</td>
                  <th>{pages}</th>
                </tr>
                <tr className="border-none">
                  <td>Publisher:</td>
                  <th>{publisher}</th>
                </tr>
                <tr className="border-none">
                  <td>Year of Publishing:</td>
                  <th>{publishYear}</th>
                </tr>
                <tr className="border-none">
                  <td>Rating:</td>
                  <th>{rating}</th>
                </tr>
              </tbody>
            </table>

            <div className="space-x-3">
              <button
                onClick={() => handleAddToStorage("read-list", book)}
                className="btn btn-outline"
              >
                Read
              </button>
              <button
                onClick={() => handleAddToStorage("wishlist", book)}
                className="btn btn-info"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookDetails;
