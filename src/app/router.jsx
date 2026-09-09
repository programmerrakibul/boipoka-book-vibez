import Loader from "@/components/Loader/Loader";
import HomeLayout from "@/layouts/HomeLayout";
import RootLayout from "@/layouts/RootLayout";
import BookDetails from "@/pages/BookDetails/BookDetails";
import ListedBooks from "@/pages/ListedBooks/ListedBooks";
import PagesToRead from "@/pages/PagesToRead/PagesToRead";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
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
