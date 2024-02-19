import { shoe8 } from "../assets/imgs.index";
import Button from "../components/Button";
import Subtitle from "../components/Subtitle";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="padding flex items-center justify-center gap-10 max-xl:flex-col max-container w-full"
    >
      <div>
        <Subtitle
          text={
            <>
              We Provide You{" "}
              <span className="text-coral-red">Super Quality</span> Shoes
            </>
          }
        />

        <p className="mb-6 info-text xl:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="info-text mb-11 xl:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <Button label={"view details"} />
      </div>
      <img src={shoe8} alt="this is an image of a nike shoes" />
    </section>
  );
};

export default AboutUs;
