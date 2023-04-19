import React from "react";
import logo from "./logo.svg";
// import './App.css';
import "./styles/App.css";
import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AddNewMovie, Movie, Movies,  PageNotFound } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<div className='container'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/addMovie'
							element={<AddNewMovie />}
						/>
						<Route
							path='/movie'
							element={<Movie />}
						/>
						<Route
							path='/movies'
							element={<Movies />}
						/>
						<Route
							path='*'
							element={<PageNotFound />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
