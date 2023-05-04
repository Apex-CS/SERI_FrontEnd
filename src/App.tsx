import { Routes, Route } from "react-router-dom";
import { Home, AddNewMovie, Movie, Movies, PageNotFound, EditMovie, } from "./pages";
import { Navbar, Footer } from "./components";
import { PATH_HOME, PATH_MOVIE,	PATH_ERROR_PAGE, PATH_ADD_MOVIE, PATH_MOVIES, PATH_EDIT_MOVIE } from "./resources/data/RootPath";

function App() {
	return (
		<div className='background-color-main'>
			<div className='header-container'>
				<Navbar />
			</div>
			<div className='flex flex-col min-h-screen text-base font-sans children-container'>
				<Routes>
					<Route path={PATH_HOME} element={<Home />} />
					<Route path={PATH_ADD_MOVIE} element={<AddNewMovie />} />
					<Route path={PATH_EDIT_MOVIE} element={<EditMovie />} />
					<Route path={PATH_MOVIE} element={<Movie />} />
					<Route path={PATH_MOVIES} element={<Movies />} />
					<Route path={PATH_ERROR_PAGE} element={<PageNotFound />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
