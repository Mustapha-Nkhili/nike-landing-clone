import { star } from "../../assets/icons.index";
import { shoe4 } from "../../assets/imgs.index";

const ProductCard = ({ product }) => {
  return (
    <div className="w-fit">
      <img
        src={product.imgUrl}
        alt="this is an img of a nike shoe"
        className="w-[282px] aspect-square"
      />
      <div className="flex items-center mt-8 gap-2.5">
        <img src={star} alt="rating icon" width={24} />
        <span className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </span>
      </div>
      <h3 className="text-2xl font-semibold mt-2 mb-2 font-palanquin">
        Nike jordan Air jordan-01
      </h3>
      <span className="text-2xl text-coral-red font-semibold leading-normal font-montserrat">
        $200.20
      </span>
    </div>
  );
};

export default ProductCard;
