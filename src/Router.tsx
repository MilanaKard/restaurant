import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Main/Main";
import NotFound from "./components/pages/NotFound/NotFound";
import { FormPage } from "./components/pages/FormPage/FormPage";
import { MenuPage } from "./components/pages/MenuPage/MenuPage";
import { ReviewPage } from "./components/pages/ReviewPage/ReviewPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "form",
    element: <FormPage></FormPage>,
  },
  {
    path: "menu",
    element: <MenuPage></MenuPage>,
  },
  {
    path: "reviews",
    element: <ReviewPage></ReviewPage>,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
