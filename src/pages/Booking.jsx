function Booking() {
  return (
    <div className="w-full h-full pt-20 pb-14 px-20">
      <div className="flex flex-col gap-8 w-full h-full bg-[#202020] py-16 px-40 text-white">
        <h2 className="text-4xl font-semibold">Booking</h2>
        <p className="w-5/6 font-light text-base">
          We make booking your travel tickets hassle-free, ensuring you have the
          best options at your fingertips. Whether you're flying domestically
          within India or embarking on an international journey, our
          comprehensive ticketing service ensures that your travel plans are
          smooth, seamless, and stress-free.
        </p>
        <div className="w-5/6">
          <form action="" className="flex">
            <div className="w-1/2 h-full flex flex-col gap-8">
              <div className="w-full flex gap-4 items-center">
                <label htmlFor="from">
                  <img
                    src="src/assets/Icon/from.svg"
                    className="w-5"
                    alt="icons"
                  />
                </label>
                <div className="w-4/5 flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="From"
                    className="bg-transparent text-sm font-normal"
                    id="from"
                    name="from"
                  />
                  <hr />
                </div>
              </div>
              <div className="w-full flex gap-4 items-center">
                <label htmlFor="to">
                  <img
                    src="src/assets/Icon/to.svg"
                    className="w-5"
                    alt="icons"
                  />
                </label>
                <div className="w-4/5 flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="To"
                    className="bg-transparent text-sm font-normal"
                    id="to"
                    name="to"
                  />
                  <hr />
                </div>
              </div>
              <div className="w-full flex gap-4 items-center">
                <label htmlFor="date">
                  <img
                    src="src/assets/Icon/calender.svg"
                    className="w-5"
                    alt="icons"
                  />
                </label>
                <div className="w-4/5 flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Date"
                    className="bg-transparent text-sm font-normal"
                    id="date"
                    name="date"
                  />
                  <hr />
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col gap-8">
              <div className="w-full flex gap-4 items-center">
                <label htmlFor="mobile">
                  <img
                    src="src/assets/Icon/mobile.svg"
                    className="w-5"
                    alt="icons"
                  />
                </label>
                <div className="w-4/5 flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="bg-transparent text-sm font-normal"
                    id="mobile"
                    name="mobile"
                  />
                  <hr />
                </div>
              </div>
              <div className="w-full flex gap-4 items-center">
                <label htmlFor="email">
                  <img
                    src="src/assets/Icon/email.svg"
                    className="w-5"
                    alt="icons"
                  />
                </label>
                <div className="w-4/5 flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Email"
                    className="bg-transparent text-sm font-normal"
                    id="email"
                    name="email"
                  />
                  <hr />
                </div>
              </div>
              <div>
                <a
                  className="px-4 pt-1.5 pb-2 rounded-full border-2 border-[#FF6333] inline font-medium text-[#FF6333]"
                  href="#"
                >
                  <span>Book Your Ticket Now</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
