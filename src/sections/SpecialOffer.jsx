import { arrowRight } from "../assets/icons.index";
import { offer } from "../assets/imgs.index";
import Button from "../components/Button";
import Subtitle from "../components/Subtitle";

const SpecialOffer = () => {
  return (
    <section className="padding flex justify-center flex-col-reverse xl:flex-row items-center gap-9">
      <div className="flex-1">
        <img
          src={offer}
          alt="shoe promotion"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex-1">
        <Subtitle
          text={
            <>
              <span className="text-coral-red">Special</span> Offer
            </>
          }
        />
        <p className="info-text mb-6">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="info-text mb-11">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="flex gap-3 flex-col sm:flex-row items-center">
          <Button label={"shop now"} iconUrl={arrowRight} />
          <Button
            label={"learn more"}
            styles="!bg-transparent !border-slate-gray !text-slate-gray hover:!bg-coral-red hover:!text-white-400 hover:!border-white-400"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
