import { headerLogo } from "../../assets/imgs.index";

const Logo = () => {
  return (
    <div>
    <a
      href="/"
      className="flex jusify-center items-center text-coral-red text-2xl font-semibold m-0"
    >
      <img
        src={headerLogo}
        alt="this is the header logo"
        width="129"
        height="29"
      />
    </a>
  </div>
  )
}

export default Logo