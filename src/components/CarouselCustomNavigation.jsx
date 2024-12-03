import { Carousel } from "@material-tailwind/react";

function CarouselCustomNavigation() {
  let heroImages = [
    "src/assets/Image/jammu.jpg",
    "src/assets/Image/sea.jpg",
    "src/assets/Image/indiagate.jpg",
    "src/assets/Image/agralalqila.jpg",
    "src/assets/Image/j&k.jpg",
  ];

  return (
    <Carousel
      className="w-[100vw] h-screen fixed top-0 left-0"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-12 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {heroImages.map((item, idx) => {
        return (
          <img
            key={idx}
            src={item}
            alt="image 1"
            className="h-full w-full object-cover opacity-90"
          />
        );
      })}
    </Carousel>
  );
}
export default CarouselCustomNavigation;
