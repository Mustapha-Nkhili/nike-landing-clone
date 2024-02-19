const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex items-center justify-center gap-4 font-montserrat text-white text-xl capitalize bg-coral-red py-4 px-7 rounded-full border border-coral-red leading-none">
      {label}{" "}
      {iconUrl && <img src={iconUrl} alt={`this is an icon of ${iconUrl}`} />}
    </button>
  );
};

export default Button;
