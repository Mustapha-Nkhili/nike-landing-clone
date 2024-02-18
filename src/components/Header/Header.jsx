import Logo from "./Logo";
import Nav from "./Nav";
import { hamburger, star } from "../../assets/icons.index";
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
          isNavClicked ? "max-lg:right-0" : "max-lg:-right-full"
        } max-lg:top-0 transition-all`}
      >
        <div
          className="max-lg:flex hidden self-end w-[30px] aspect-square bg-black  items-center justify-center rounded-[6px] cursor-pointer transition"
          onClick={handleMenuCLicked}
        >
          <img
            src={star}
            alt=""
            className="w-[15px] hover:text-red-600 mb-[2px]"
          />
        </div>
        <Nav isNavClicked={isNavClicked} />
      </nav>
    </header>
  );
}
