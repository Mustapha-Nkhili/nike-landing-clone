import ProductCard from "../components/PopularProducts/ProductCard";
import Subtitle from "../components/Subtitle";
import { popularProducts } from "../constants";

function PopularProducts() {
  return (
    <section className="padding max-container max-sm:mt-12">
      <Subtitle
        text={
          <>
            our <span className="text-coral-red">popular</span> products
          </>
        }
      />
      <p className="text-slate-gray lg:max-w-lg font-montserrat ">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <ul className="!mt-16 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] max-[537px]:m-auto max-[537px]:w-fit sm:gap-6 gap-14">
        {popularProducts.map((product, index) => {
          return (
            <li key={product + index}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default PopularProducts;
