import Logo from "./Logo";
import Nav from "./Nav";
import { hamburger, xIcon } from "../../assets/icons.index";
import { useState } from "react";

export default function Header() {
  const [isNavClicked, setIsNavClicked] = useState(false);

  const handleMenuCLicked = () => {
    setIsNavClicked((prev) => !prev);
  };

  return (
    <header className="flex flex-wrap items-center justify-between padding-x py-8">
      <Logo />
      <div className="flex md:order-2 space-x-3 md:space-x-0 ">
        <button
          type="button"
          className="text-white bg-coral-red focus:ring-4 focus:bg-coral-red/55 font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          Get started
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 !ml-3 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-20"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={handleMenuCLicked}
        >
          <span className="sr-only">Open main menu</span>
          <img src={hamburger} alt="this is the menu icon" />
        </button>
      </div>

      <nav
        className={`flex flex-col justify-evenly gap-8 max-lg:absolute max-lg:bg-primary max-lg:p-4 max-lg:w-[300px] max-lg:max-w-full max-lg:h-screen max-lg:right-full ${
          isNavClicked ? "max-lg:right-px" : "max-lg:-right-[600px]"
        } max-lg:top-0 transition-all`}
      >
        <div
          className="max-lg:flex hidden self-end w-[30px] aspect-square bg-red-500 active:scale-50 items-center justify-center rounded-[6px] cursor-pointer transition"
          onClick={handleMenuCLicked}
        >
          <svg
            className="w-[15px] aspect-square text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </div>
        <Nav isNavClicked={isNavClicked} />
      </nav>
    </header>
  );
}
