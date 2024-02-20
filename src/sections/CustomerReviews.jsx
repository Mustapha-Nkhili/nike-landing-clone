import Subtitle from "../components/Subtitle";
import CutomerReviewsCard from "../components/CustomerReviews/CutomerReviewsCard";
import { customerReviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="padding-y max-container px-5 sm:px-0">
      <div className="sm:max-w-lg text-center m-auto w-fit mb-24">
        <Subtitle
          text={
            <>
              what our <span className="text-coral-red">customers</span> say?
            </>
          }
        />
        <p className="info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div>
        <ul className="flex justify-evenly items-center text-center max-lg:flex-col gap-14">
          {customerReviews.map((customer, index) => {
            return (
              <li
                key={customer + index}
                className="flex flex-col items-center justify-center"
              >
                <CutomerReviewsCard customer={customer} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CustomerReviews;
