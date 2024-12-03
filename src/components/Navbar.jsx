import { Link, NavLink } from "react-router-dom";
import "./nav.css";

function Navbar() {
  return (
    <header className="back-trans fixed w-full p-auto top-0 left-0 flex flex-wrap sm:justify-start sm:flex-nowrap text-sm py-3">
      <nav className="max-w-[80rem] w-full mx-auto flex flex-wrap basis-full items-center justify-between">
        <div
          id="hs-navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block"
          aria-labelledby="hs-navbar-alignment-collapse"
        >
          <div className="flex flex-col gap-8 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <NavLink
              to="/"
              className="font-medium text-white hover:text-[#FF6333] focus:outline-none"
              activeStyle={{ color: "#FF6333" }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="font-medium text-white hover:text-[#FF6333] focus:outline-none"
              activeStyle={{ color: "#FF6333" }}
            >
              About
            </NavLink>
            <NavLink
              to="/locations"
              className="font-medium text-white hover:text-[#FF6333] focus:outline-none"
              activeStyle={{ color: "#FF6333" }}
            >
              Locations
            </NavLink>
            <NavLink
              to="/booking"
              className="font-medium text-white hover:text-[#FF6333] focus:outline-none"
              activeStyle={{ color: "#FF6333" }}
            >
              Booking
            </NavLink>
            <NavLink
              to="/contact"
              className="font-medium text-white hover:text-[#FF6333] focus:outline-none"
              activeStyle={{ color: "#FF6333" }}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <Link to="/" className="flex-none font-medium text-white">
          TRAVEL GUIDE
        </Link>
        <div className="flex items-center gap-x-3">
          <button
            type="button"
            className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            id="hs-navbar-alignment-collapse"
            aria-expanded="false"
            aria-controls="hs-navbar-alignment"
            aria-label="Toggle navigation"
            data-hs-collapse="#hs-navbar-alignment"
          >
            <svg
              className="hs-collapse-open:hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className="hs-collapse-open:block hidden shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Toggle</span>
          </button>
          <Link className="font-medium text-white" to="tel:+919540218696">
            +91 9540218696
          </Link>
          <div className="flex gap-3 w-auto border-2 border-[#FF6333] px-4 pt-1.5 pb-2 rounded-full">
            <Link
              className="font-medium text-[#FF6333]"
              to="https://instagram.com/suraj.verma02?igshid=ZDdkNTZiNTM="
            >
              Instagram
            </Link>
            <img
              src="src\assets\Icon\heart.svg"
              className="w-5"
              alt="linkedin"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
