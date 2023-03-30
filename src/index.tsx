import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home, AddNewMovie, Movie, Movies, SignIn, PageNotFound, SignUp } from "./pages";
import "./styles/App.css";
import { Navbar, Footer } from "./components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faRocket } from "@fortawesome/free-solid-svg-icons";
import {
	PATH_HOME,
	PATH_MOVIE,
	PATH_ERROR_PAGE,
	PATH_ADD_MOVIE,
	PATH_SIGN_IN,
	PATH_SIGN_UP,
  PATH_MOVIES,
} from "./resources/data/RootPath";

const AppLayout = () => {
	library.add(fas, faMoon, faRocket);
	return (
		<div className='background-color-main'>
			<div className='header-container'>
				<Navbar />
			</div>

			<div className='flex flex-col min-h-screen text-base font-sans children-container'>
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
				path: PATH_HOME,
				element: <Home />,
			},
			{
				path: PATH_ADD_MOVIE,
				element: <AddNewMovie />,
			},
			{
				path: PATH_SIGN_IN,
				element: <SignIn />,
			},
			{
				path: PATH_SIGN_UP,
				element: <SignUp />,
			},
			{
				path: PATH_MOVIE,
				element: <Movie />,
			},
			{
				path: PATH_MOVIES,
				element: <Movies />,
			},
			{
				path: PATH_ERROR_PAGE,
				element: <PageNotFound />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
