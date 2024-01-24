import { createBrowserRouter } from "react-router-dom";
import RootPage from "./RootPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Register from "../Pages/Register";
import Detail from "../Pages/Detail";
import CreatePost from "../Pages/CreatePost";
import MyBlogs from "../Pages/MyBlogs";

export const PageRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/myblog",
        element: <MyBlogs />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
