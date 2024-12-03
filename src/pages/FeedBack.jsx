function FeedBack() {
  return (
    <div className="w-full h-full pt-20 pb-14 px-20">
      <div className="flex flex-col gap-8 w-full h-full bg-[#202020] py-16 px-40 text-white">
        <h2 className="text-4xl font-semibold">FeedBack</h2>
        <p className="w-5/6 font-light text-base">
          We'd love to hear from you! Whether you have questions about your
          upcoming trip, need assistance with booking, or simply want to share
          your travel experience with us, our team is here to help. Feel free to
          reach out through our contact form, or get in touch directly via email
          or phone.
        </p>
        <div className="w-5/6">
          <form action="" className="flex">
            <div className="w-1/2 h-full flex flex-col gap-8">
              <div className="w-full flex gap-4 items-center">
                <label htmlFor="name">
                  <img
                    src="src/assets/Icon/name.svg"
                    className="w-5"
                    alt="icons"
                  />
                </label>
                <div className="w-4/5 flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-transparent text-sm font-normal"
                    id="name"
                    name="name"
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
                    placeholder="Your Email"
                    className="bg-transparent text-sm font-normal"
                    id="email"
                    name="email"
                  />
                  <hr />
                </div>
              </div>
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
                    placeholder="Your Phone Number"
                    className="bg-transparent text-sm font-normal"
                    id="mobile"
                    name="mobile"
                  />
                  <hr />
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col gap-8">
              <div className="w-full flex items-center">
                <div className="w-4/5 flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Your Message For me"
                    className="bg-transparent text-sm font-normal"
                    id="message"
                    name="message"
                  />
                  <hr />
                </div>
              </div>
              <div>
                <a
                  className="px-4 pt-1.5 pb-2 rounded-full border-2 border-[#FF6333] inline font-medium text-[#FF6333]"
                  href="#"
                >
                  <span>Send</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
