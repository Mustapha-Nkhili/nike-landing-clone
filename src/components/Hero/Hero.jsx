import { useState } from "react";
import { arrowRight } from "../../assets/icons.index";
import { bigShoe2 } from "../../assets/imgs.index";
import { mainShoes, statistics } from "../../constants";
import Button from "../Button";
import ShoeCard from "./ShoeCard";

const Hero = () => {
  const [bigshoeImg, setBigshoeImg] = useState(bigShoe2);
  return (
    <section className="flex flex-col gap-10 w-full m-h-screen xl:flex-row max-container">
      <div className="relative flex flex-col justify-center items-start max-xl:padding-x mt-28 xl:w-2/5 padding-l">
        <span className="text-xl font-montserrat text-coral-red capitalize">
          our summer collections
        </span>
        <h1 className="font-palanquin text-8xl mt-10 capitalize font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative xl:whitespace-nowrap pr-10 xl:bg-white xl:z-10">
            the new arrival
          </span>
          <br />
          <span className="inline-block mt-3 text-coral-red">Nike</span> shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg mt-6 leading-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="shop now" iconUrl={arrowRight} />
        <ul className="flex justify-center items-center xl:justify-start xl:items-start gap-16 mt-20 flex-wrap">
          {statistics.map(({ label, value }) => {
            return (
              <li key={label + value}>
                <h2 className="text-4xl font-palanquin font-bold">{value}+</h2>
                <span className="font-montserrat capitalize leading-7 text-slate-gray">
                  {label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative flex justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigshoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain"
        />
        <ul className="flex absolute -bottom-[5%] gap-4 sm:gap-6 max-sm:px-6">
          {mainShoes.map((shoe) => (
            <ShoeCard
              key={shoe}
              shoeImgSrc={shoe}
              setBigshoeImg={setBigshoeImg}
              bigshoeImg={bigshoeImg}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
