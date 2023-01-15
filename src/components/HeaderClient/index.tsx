import { Link } from 'react-router-dom';

import LogoIconImg from '../../assets/logo-icon.svg';
import { NavBar } from '../NavBar';

function HeaderClient() {
  return (
    <>
      <header className="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900 shadow-md">

        <div className="flex flex-wrap items-center max-w-screen-xl mx-auto">
          <Link to={"/"} className="flex items-center">
            <img src={LogoIconImg} alt="" />
          </Link>
          <div className="flex items-center ml-auto md:order-2">
            <Link to={"/login"}>
              <button className="text-gray-800 dark:text-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                Login
              </button>
            </Link>
            <Link to={"/createAccount"}>
              <button>
                <a
                  className="text-white-50 transition duration-200 bg-fun-blue-900 hover:bg-fun-orange-400
                 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign up
                </a>
              </button>
            </Link>

            <button
              data-collapse-toggle="dropdown relative"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="dropdown relative"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <NavBar />
        </div>
      </header>
    </>
  );
}

export default HeaderClient;
