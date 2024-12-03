function Singlelocation() {
  return (
    <div className="w-full h-full pt-20 pb-14 px-20">
      <div className="flex flex-col w-full h-full bg-[#202020] py-8 px-40 gap-5">
        <div className="w-full text-sm text-white flex justify-between">
          <h2 className="text-4xl font-semibold">J&K</h2>
          <p className="w-2/3 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            doloremque quasi enim itaque laborum. Voluptatibus magnam vero
            obcaecati possimus labore modi esse debitis, sit dolores tempora nam
            perspiciatis animi rem ad quae quisquam magni facilis.
          </p>
        </div>
        <div className="w-full h-5/6 flex gap-1">
          <div className="w-1/3 h-full">
            <img
              src="src\assets\Image\indiagate.jpg"
              alt="location"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-2/3 h-full flex flex-col gap-1">
            <div className="w-full h-1/2">
              <img
                src="src\assets\Image\j&k.jpg"
                alt="location"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-1/2 flex gap-1">
              <div className="w-1/2 h-full">
                <img
                  src="src\assets\Image\shimla.jpg"
                  alt="location"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 h-full">
                <img
                  src="src\assets\Image\jammu.jpg"
                  alt="location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Singlelocation;
