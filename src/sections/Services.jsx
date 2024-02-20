import { services } from "../constants";

const Services = () => {
  return (
    <section className="padding max-container">
      <ul className="flex justify-center flex-wrap gap-9">
        {services.map((service, index) => (
          <li className="shadow-3xl px-10 py-16 rounded-[20px] flex-1 sm:w-[305px] sm:min-w-[350px]" key={service + index}>
            <div className="w-11 aspect-square flex items-center justify-center bg-coral-red p-2 rounded-full">
              <img
                src={service.iconUrl}
                alt="this is an icon"
                width={24}
                height={24}
              />
            </div>
            <h2 className="text-3xl mt-5 mb-3 font-palanquin leading-normal font-bold capitalize">
              {service.label}
            </h2>
            <p className="info-text">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
