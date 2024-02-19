import { navLinks } from "../../constants";

const Nav = () => {
  return (
    <ul
      className="flex gap-2 lg:gap-16 max-lg:flex-col max-lg:self-center max-lg:mb-[60px]"
      id="navbar-sticky"
    >
      {navLinks.map((item) => {
        return (
          <li key={item.href + item.label}>
            <a
              href={item.href}
              className="font-montserrat text-slate-gray leading-normal text-lg capitalize hover:text-coral-red"
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
