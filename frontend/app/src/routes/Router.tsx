import Layout from "../components/Layout";
import Home from "../pages/Home";
import Error from "../pages/Error";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}