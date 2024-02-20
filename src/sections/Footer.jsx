import {
  copyrightSign,
  facebook,
  instagram,
  twitter,
} from "../assets/icons.index";
import { footerLogo } from "../assets/imgs.index";

const Footer = () => {
  return (
    <footer className="bg-black padding-x padding-t pb-8 text-white flex gap-20 flex-wrap justify-between text-center md:text-left w-full">
      <div>
        <img
          src={footerLogo}
          alt="this is a nike logo"
          width={150}
          height={46}
          className="m-0"
        />
        <p className="text-white-400 text-base leading-7 font-montserrat mt-6 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <ul className="flex items-center gap-5 mt-8">
          <li className="w-12 aspect-square rounded-full flex justify-center items-center bg-white">
            <img
              src={facebook}
              alt="this is the facebook logo"
              className="mr-0.5"
            />
          </li>
          <li className="w-12 aspect-square rounded-full flex justify-center items-center bg-white">
            <img
              src={twitter}
              alt="this is the facebook logo"
              className="mr-0.5"
            />
          </li>
          <li className="w-12 aspect-square rounded-full flex justify-center items-center bg-white">
            <img
              src={instagram}
              alt="this is the facebook logo"
              className="mr-0.5"
            />
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-2xl font-medium font-montserrat capitalize leading-none">
          products
        </h4>
        <ul className="mt-6">
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">Air Force 1</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">Air Max 1</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">Air Jordan 1</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">air force 2</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">Nike Waffle Racer</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">Nike Cortez</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-2xl font-medium font-montserrat capitalize leading-none">
          help
        </h4>
        <ul className="mt-6">
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="#aboutUs">about us</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">faQs</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">how it works</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">privavy policy</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">payment policy</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-2xl font-medium font-montserrat capitalize leading-none">
          get in touch
        </h4>
        <ul className="mt-6">
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">customer@nike.com</a>
          </li>
          <li className="text-primary text-base font-montserrat leading-normal hover:text-slate-gray mb-3 capitalize">
            <a href="/">+212637661807</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full ">
        <span className="flex justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            className="inline-block"
            width={20}
            height={20}
          />{" "}
          Copyright. All rights reserved.
        </span>
        <span className="font-montserrat cursor-pointer">
          Terms &amp; Conditions
        </span>
      </div>
    </footer>
  );
};

export default Footer;
