const ShoeCard = ({ shoeImgSrc, setBigshoeImg, bigshoeImg }) => {
  return (
    <li
      key={shoeImgSrc}
      className={`flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4 hover:cursor-pointer ${
        bigshoeImg === shoeImgSrc && "border-2 boder-solid border-coral-red"
      }`}
      onClick={() => setBigshoeImg(shoeImgSrc)}
    >
      <img
        src={shoeImgSrc}
        alt="this is an image of a nike shoe"
        className="object-contain"
        width={127}
        height={103.34}
      />
    </li>
  );
};

export default ShoeCard;
