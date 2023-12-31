import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo1 from "../assets/1.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    // setIsLoggedIn(false);
    sessionStorage.clear();
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  if(location.pathname==="/login")
  {
    return null
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src={Logo1} className="h-8 w-full mr-3" alt="Due Diligence Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Due Diligence</span> */}
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {location.pathname!=="/" ?
        (
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/home">
                <p
                  className={`block py-2 pl-3 pr-4 ${
                    isActive("/home")
                      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                  aria-current="page"
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <p
                  className={`block py-2 pl-3 pr-4 ${
                    isActive("/dashboard")
                      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                >
                  Dashboard
                </p>
              </Link>
              </li>
            <button
              onClick={handleSignOut}
              className={`block py-2 pl-3 pr-4 ${
                isActive("/login")
                  ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  : "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              }`}
            >
              Sign out
            </button>
          </ul>
        </div>
        ):(
          <div>
            <Link to="/registration"> 
            <button className='font-medium text-xl'>Signup</button>
            </Link>
          </div>
        )
       }
        
      </div>
    </nav>
  );
};

export default Navbar;
