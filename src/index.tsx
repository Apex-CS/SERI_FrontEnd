import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  Home,
  AddNewMovie,
  Movie,
  Movies,
  SignIn,
  PageNotFound,
  SignUp,
} from "./pages";
import "./styles/App.css";
import {
  Navbar,
  Footer,
} from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faRocket } from "@fortawesome/free-solid-svg-icons";

const AppLayout = () => {
  library.add(fas, faMoon, faRocket);
  return (
    <div className="background-color-main">
      <div className="header-container">
        <Navbar />
      </div>

      <div className="flex flex-col min-h-screen text-base font-sans children-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addMovie",
        element: <AddNewMovie />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/movie/:movieId",
        element: <Movie />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
