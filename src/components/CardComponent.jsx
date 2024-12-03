function CardComponent({image}) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
      <img src={image} alt="location" className="w-[330px] h-[355px] rounded-xl object-cover" />
      <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          Jammu
        </h3>
      </div>
    </div>
  );
}
export default CardComponent;
