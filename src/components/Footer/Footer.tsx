/* eslint-disable jsx-a11y/anchor-is-valid */
import apexLogo from "../../resources/img/Apex_logo_horizontal_white.png";
import "../../App.css";
import { Link } from "react-router-dom";
import { getRandomNumber } from "../../utils/utils";
function Footer() {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
      <div className="md:flex md:justify-between justify-between items-center">
        <div className="w-auto flex items-center justify-between mx-14 mb-6 md:mb-0">
          <Link to="/" className="flex flex-col justify-center items-center">
            <img src={apexLogo} className="h-8 mr-3" alt="FlowBite Logo" />
          </Link>
        </div>
        <h1 className="text-xl text-gray-400">
          <div className="waviy">
            {" "}
            {Array.from("APEX CINEMA ESCAPE ROOM ADVENTURE").map(
              (char, index) => (
                <span
                  key={getRandomNumber(99999999)}
                  style={{ ["--i" as any]: index + 1 }}
                  dangerouslySetInnerHTML={{
                    __html: char === " " ? "&nbsp;" : char,
                  }}
                />
              )
            )}{" "}
          </div>
        </h1>

        <div className="grid mx-8 gap-8">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Apex Systems™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </footer>
  );
}

export default Footer;
