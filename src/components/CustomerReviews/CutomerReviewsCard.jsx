import { star } from "../../assets/icons.index";

const CutomerReviewsCard = ({customer}) => {
  return (
    <>
      <img
        src={customer.imgUrl}
        alt="this is a customer photo"
        className="rounded-full w-[120px] aspect-square object-cover"
      />

      <p className="info-text sm:max-w-sm mt-6">{customer.text}</p>
      <div className="flex items-center mt-3 gap-2.5">
        <img src={star} alt="rating icon" width={24} />
        <span className="font-montserrat text-xl leading-normal text-slate-gray">
          ({customer.rating})
        </span>
      </div>
      <h3 className="text-3xl text-center font-bold font-palanquin mt-1">
        {customer.name}
      </h3>
    </>
  );
};

export default CutomerReviewsCard;
