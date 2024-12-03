import CardComponent from "../components/CardComponent";

function Location() {
  let Images = [
    "src/assets/Image/jammu.jpg",
    "src/assets/Image/sea.jpg",
    "src/assets/Image/indiagate.jpg",
  ];
  return (
    <div className="w-full h-full pt-20 pb-10 px-20">
      <div className="flex w-full h-full bg-[#202020] py-12 pl-40 gap-5">
        <div className="w-full h-full text-sm text-white flex flex-col gap-8">
          <h2 className="text-4xl font-semibold">Locations</h2>
          <p className="w-2/3 text-base">
            India at its best, we’ve created an exclusive Travel Guide to India.
            Packed with valuable insights, our guide will help you navigate
            India’s diverse regions, cultures, and experiences, ensuring your
            journey is smooth, rewarding, and unforgettable.
          </p>
          <div className="w-full flex gap-4">
            <div className="w-6/7 h-full flex gap-6 overflow-hidden">
              {Images.map((item, idx)=>{
                return(
                  <CardComponent key={idx} image={item} />
                )
              })}
            </div>
            <div className="w-1/7 h-full flex justify-center items-center">
              <img
                src="src\assets\Icon\right.svg"
                className="rotate-90 w-16"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Location;
