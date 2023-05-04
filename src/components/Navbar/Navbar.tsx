import apexLogo from "../../resources/img/Apex_logo_horizontal_white.png";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from "../Inputs/Button/Button";
import { PATH_ADD_MOVIE, PATH_HOME, PATH_MOVIES, PATH_SIGN_IN } from "../../resources/data/RootPath";

function Navbar() {
	const dataHeader = [
		{ title: "Home", href: PATH_HOME },
		{ title: "Movies", href: PATH_MOVIES },
		{ title: "Add New Movie", href: PATH_ADD_MOVIE },
	];

	const headerLogoButon = { title: "Apex Systems", href: PATH_HOME, logo: apexLogo };

	const [flagActionSignIn, setFlagActionSignIn] = useState(false);
	/**
	 * Funcion que envia informacion al servidor
	 * para validar el usuario y constraseña y establecer informacion
	 * del usaurio en el sistema
	 */
	const signIn = () => {
		if (!flagActionSignIn) {
			window.location.href = PATH_SIGN_IN;
		}
		setFlagActionSignIn((prevState) => !prevState);
	};

	/**
	 * Funcion que envia informacion al servidor
	 * para validar el usuario y constraseña y establecer informacion
	 * del usaurio en el sistema
	 */
	const signUp = () => {
		if (!flagActionSignIn) {
			window.location.href = "/signup";
		}
		setFlagActionSignIn((prevState) => !prevState);
	};

	return (
		<nav
			id='navbar-container'
			className='bg-white pt-4 px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
			<div className='container flex flex-wrap items-center justify-between mx-auto'>
				<Link to={headerLogoButon.href} className='flex items-center'>
					<img
						src={headerLogoButon.logo}
						className='h-6 mr-3 sm:h-9'
						alt={headerLogoButon.title}
					/>
				</Link>
				<div
					className='items-start justify-between hidden w-full md:flex md:w-auto grow'
					id='navbar-sticky'>
					<ul className='flex flex-col p-4 mt-4 border ml-10 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
						{dataHeader.map((data) => (
							<li>
								<Link key={Math.round(Math.random())} to={data.href} className='block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white'>
									{data.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='flex justify-between items-center pr-24'>
					<Button
						label='Sign In'
						onClickHandler={signIn}
						customClass={`w-40 bg-yellow-500 mx-2 `}
					/>
					<Button
						label='Sign Up'
						onClickHandler={signUp}
						customClass={`w-40 bg-yellow-500 mx-2 `}
					/>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
