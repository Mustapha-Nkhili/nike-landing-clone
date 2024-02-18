export default function Nav() {
  return (
    <ul
      className="flex gap-2 lg:gap-16 max-lg:flex-col max-lg:self-center max-lg:mb-[60px]"
      id="navbar-sticky"
    >
      <li>
        <a
          href="/"
          className="font-montserrat text-slate-gray leading-normal text-lg capitalize hover:text-coral-red"
        >
          home
        </a>
      </li>
      <li>
        <a
          href="#about-us"
          className="font-montserrat text-slate-gray leading-normal text-lg capitalize hover:text-coral-red"
        >
          about us
        </a>
      </li>
      <li>
        <a
          href="#products"
          className="font-montserrat text-slate-gray leading-normal text-lg capitalize hover:text-coral-red"
        >
          products
        </a>
      </li>
      <li>
        <a
          href="#contact-us"
          className="font-montserrat text-slate-gray leading-normal text-lg capitalize hover:text-coral-red"
        >
          contact us
        </a>
      </li>
    </ul>
  );
}
