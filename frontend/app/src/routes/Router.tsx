import Layout from "../components/Layout";
import Home from "../pages/Home";
import ProfessionalProjects from "../pages/ProfessionalProjects";
import PersonalProjects from "../pages/PersonalProjects";
import AcademicProjects from "../pages/AcademicProjects";
import Error from "../pages/Error";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Base path pour GitHub Pages (utilisez '/portfolio' si votre repo s'appelle 'portfolio')
const basename = import.meta.env.PROD ? '/portfolio' : '';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects-professional", element: <ProfessionalProjects /> },
      { path: "projects-personal", element: <PersonalProjects /> },
      { path: "projects-academic", element: <AcademicProjects /> },
    ],
  },
], {
  basename: basename,
});

export default function AppRouter() {
  return <RouterProvider router={router} />;
}