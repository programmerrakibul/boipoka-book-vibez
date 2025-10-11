import { StarIcon } from "lucide-react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const { id, name, imageUrl, tags, author, category, rating } = book;

  return (
    <Link to={`book-details/${id}`} state={book}>
      <div className="p-5 border border-[#13131319] rounded-lg space-y-4 hover:scale-105 duration-300">
        <figure className="bg-[#F3F3F3] p-7 rounded-lg flex items-center justify-center">
          <img
            src={imageUrl}
            alt={name}
            className="aspect-3/2 object-contain"
          />
        </figure>
        <div className="space-y-2.5">
          <div className="space-x-3.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="font-medium font-['work_sans'] py-0.5 px-1.5 rounded-full text-[#23BE0A] bg-[#22be0a10]"
              >
                {tag}
              </span>
            ))}
          </div>
          <h4 className="text-2xl font-bold">{name}</h4>
          <h5 className="font-['work_sans'] font-medium opacity-80">
            By: {author}
          </h5>
          <div className="border-t border-[#13131319] flex justify-between items-center pt-2 mt-3 font-['work_sans'] font-medium opacity-80">
            <span>{category}</span>
            <div className="flex items-center gap-1">
              <span>{rating} </span>{" "}
              <span>
                <StarIcon size={16} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
