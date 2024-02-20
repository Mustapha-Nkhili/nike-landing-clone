const Button = ({ label, iconUrl, styles }) => {
  return (
    <button
      className={`flex items-center justify-center gap-4 font-montserrat text-white text-lg capitalize bg-coral-red py-4 px-7 rounded-full border border-coral-red leading-none hover:bg-primary hover:text-black transition duration-300 ${styles}`}
    >
      {label}{" "}
      {iconUrl && <img src={iconUrl} alt={`this is an icon of ${iconUrl}`} />}
    </button>
  );
};

export default Button;
