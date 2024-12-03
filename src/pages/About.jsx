function About() {
let admin = "src/assets/Image/suraj.jpg"

  return (
    <div className="w-full h-full pt-20 pb-14 px-20">
      <div className="flex w-full h-full bg-[#202020] py-16 px-40 gap-5">
        <div className="w-2/3 h-full text-sm text-white flex flex-col gap-8">
          <h2 className="text-4xl font-semibold">About</h2>
          <p className="text-base">
            Welcome here, where your travel dreams become reality. Our mission
            is to provide you with unforgettable experiences and personalized
            service every step of the way. Whether you're planning a relaxing
            beach holiday, an adventurous trek, or a cultural city getaway, we
            are here to make it happen!
          </p>
          <p className="w-3/5 text-base">
            <span className="text-5xl">"</span>With years of experience in the
            travel industry, we understand that every traveler is unique, and
            that's why we specialize in creating customized itineraries to suit
            your individual needs and desires. From budget-friendly trips to
            luxury getaways, we offer a variety of options that cater to all
            tastes and preferences.
          </p>
          <div className="flex flex-col items-end">
            <p className="font-medium">SURAJ VERMA</p>
            <p className="opacity-60">FULL STACK DEVELOPER</p>
          </div>
        </div>
        <div className="w-1/3 h-full flex justify-center items-center">
          <img
            src={admin}
            className="rounded-full"
            alt="My Picture"
          />
        </div>
      </div>
    </div>
  );
}
export default About;
