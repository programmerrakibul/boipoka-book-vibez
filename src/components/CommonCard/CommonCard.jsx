import { MapPin, NotebookText, Trash2, Users } from "lucide-react";
import { Link } from "react-router";

const CommonCard = ({ book, handleRemove }) => {
  const {
    id,
    name,
    imageUrl,
    tags,
    author,
    category,
    rating,
    pages,
    publisher,
    publishYear,
  } = book;

  return (
    <div className="flex gap-7 p-5 rounded-lg border border-[#1313131d] relative">
      <figure className="flex justify-center items-center p-7 rounded-lg bg-[#1313131d] max-w-60">
        <img src={imageUrl} alt={name} className="aspect-3/2 object-contain" />
      </figure>

      <div className="font-['work_sans'] space-y-3.5">
        <h3 className="font-bold text-2xl font-['Playfair_Display']">{name}</h3>
        <p className="font-medium opacity-80">By: {author}</p>

        <div className="flex items-center gap-3.5">
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
          <p className="flex items-center gap-3.5 opacity-60">
            <span>
              <MapPin />
            </span>
            <span>Year of Publishing: {publishYear}</span>
          </p>
        </div>

        <div className="flex items-center gap-3.5 opacity-60">
          <p className="flex items-center gap-3.5">
            <span>
              <Users />
            </span>
            <span>Publisher: {publisher}</span>
          </p>
          <p className="flex items-center gap-3.5">
            <span>
              <NotebookText />
            </span>
            <span>Pages: {pages}</span>
          </p>
        </div>

        <hr />

        <div className="flex items-center gap-4">
          <span className="text-[#328EFF] py-1 px-2 rounded-full bg-[#328eff15]">
            Category: {category}
          </span>
          <span className="text-[#FFAC33] py-1 px-2 rounded-full bg-[#FFAC3315]">
            Rating: {rating}
          </span>
          <Link
            to={`/book-details/${id}`}
            state={book}
            className="btn btn-success rounded-full text-white"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="absolute top-[50%] -translate-y-[50%] right-0">
        <button
          onClick={() => handleRemove(id)}
          className="btn bg-transparent border-none shadow-none"
        >
          <Trash2 color="#ff0a0a" />
        </button>
      </div>
    </div>
  );
};

export default CommonCard;
