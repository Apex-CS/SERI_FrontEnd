import apexLogo from "../../resources/img/Apex_logo_horizontal_white.png";
import { useState } from "react";
import Button from "../Inputs/Button/Button";

function Navbar() {
    const dataHeader = [
        {title: 'Home', href: '/'},
        {title: 'Movies', href: '/movies'},
        {title: 'Add New Movie', href: '/addMovie'},
    ];


    const headerLogoButon = {title: 'Apex Systems', href: '/', logo: apexLogo};

    const [flagActionSignIn, setFlagActionSignIn] = useState(false);
    /**
     * Funcion que envia informacion al servidor
     * para validar el usuario y constraseña y establecer informacion
     * del usaurio en el sistema
     */
    const signIn = () => {
      if (!flagActionSignIn) {
          window.location.href = '/signin';
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
          window.location.href = '/signup';
      }
      setFlagActionSignIn((prevState) => !prevState);
    };
    
  return (
    <>
      <div id="navbar-container">
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href={headerLogoButon.href} className="flex items-center">
              <img
                src={headerLogoButon.logo}
                className="h-6 mr-3 sm:h-9"
                alt={headerLogoButon.title}
              />
            </a>
            <div
              className="items-start justify-between hidden w-full md:flex md:w-auto grow"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 border ml-10 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
               {dataHeader.map(data => (
                <li>
                    <a
                    key={Math.round(Math.random())}
                    href={data.href}
                    className="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                    aria-current="page"
                    >
                    {data.title}
                    </a>
                </li>
               ))}
              </ul>
            </div>
            <div className="flex justify-between ">
              <Button label="Sign In" onClickHandler={signIn} customClass={`w-40 bg-yellow-500 mx-2 `} />
              <Button label="Sign Up" onClickHandler={signUp} customClass={`w-40 bg-yellow-500 mx-2 `}/>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
