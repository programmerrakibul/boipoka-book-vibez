import { createBrowserRouter } from "react-router";
import RootLayout from "../components/pages/Layouts/RootLayout";
import HomeLayout from "../components/pages/Layouts/HomeLayout";
import ListedBooks from "../components/pages/ListedBooks/ListedBooks";
import PagesToRead from "../components/pages/PagesToRead/PagesToRead";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import BookDetails from "../components/pages/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
        loader: async () => await axios("./booksData.json"),
      },
      {
        path: "book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "listed-books",
        element: <ListedBooks />,
      },
      {
        path: "pages-to-read",
        element: <PagesToRead />,
      },
    ],
  },
]);

export default router;
