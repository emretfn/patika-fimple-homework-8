import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BookDetail from "../pages/BookDetail";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:bookId",
    element: <BookDetail />,
  },
]);
