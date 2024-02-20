import Button from "../components/Button";
import Subtitle from "../components/Subtitle";

const Subscribe = () => {
  return (
    <section className="padding flex justify-between items-center flex-col lg:flex-row text-center md:text-left max-container">
      <Subtitle
        text={
          <>
            Sign Up for <span className="text-coral-red">Updates</span>{" "}
            <span className="lg:block">& Newsletter</span>
          </>
        }
      />

      <div className="flex max-sm:flex-col justify-between sm:border sm:border-slate-gray rounded-full p-2.5 gap-5 w-full lg:max-w-[40%]">
        <input
          type="email"
          name="subscriberEmail"
          id="subscriberEmail"
          className="max-sm:border max-sm:border-slate-gary max-sm:p-2.5 rounded-full bg-transparent border-non outline-none"
          placeholder="Enter your email"
        />
        <Button label={"sign up"} />
      </div>
    </section>
  );
};

export default Subscribe;
