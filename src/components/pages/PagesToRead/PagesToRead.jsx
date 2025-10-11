import { useContext } from "react";
import WishlistContext from "../../../contexts/WishlistContext";
import Container from "../../Container";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PagesToRead = () => {
  const { wishlist } = useContext(WishlistContext);

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
   Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const CustomTooltip = ({ payload, active }) => {
    if (active) {
      const { payload: book } = payload[0];

      return (
        <div className="p-2.5 rounded-lg bg-[#dddddd23] backdrop-blur-2xl text-xs sm:text-sm md:text-base max-w-48 sm:max-w-max">
          <p className="font-semibold text-sm sm:text-base md:text-lg">
            {book.name}
          </p>
          <p className="">
            <strong>Pages to Read: </strong>
            {book.pages}
          </p>
          <p className="">
            <strong>Writer: </strong>
            {book.author}
          </p>
          <p className="">
            <strong>Rating: </strong>
            {book.rating}
          </p>
        </div>
      );
    }
  };

  return (
    <section className="my-8 py-5">
      <Container>
        <div className="h-[230px] sm:h-[320px] md:h-[450px] bg-[#13131314] p-6 rounded-lg font-['work_sans'] font-medium capitalize">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={wishlist} margin={10}>
              <CartesianGrid stroke="#13131310" strokeDasharray="5 5" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="pages" fill="#00C29C" shape={<TriangleBar />} />
              <XAxis dataKey="name" fontSize={12} />
              <YAxis fontSize={12} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </section>
  );
};

export default PagesToRead;
