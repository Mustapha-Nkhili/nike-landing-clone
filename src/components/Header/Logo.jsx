import { headerLogo } from "../../assets/imgs.index";

export default function Logo() {
  return (
    <div>
      <a
        href="/"
        className="flex jusify-center items-center text-coral-red text-2xl font-semibold"
      >
        <img
          src={headerLogo}
          alt="this is the header logo"
          width="129"
          height="29"
        />
      </a>
    </div>
  );
}
