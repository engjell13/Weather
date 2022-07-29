const Footer = (): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="text-2xl font-bold flex items-center">
          <h2>Connect With Us </h2>
        </div>
        <div className="w-16 flex items-end ml-80 gap-5">
          <img
            src="https://download.logo.wine/logo/The_Weather_Company/The_Weather_Company-Logo.wine.png"
            alt="test"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Weather_Channel_logo_2005-present.svg/1200px-The_Weather_Channel_logo_2005-present.svg.png"
            alt="test"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/0f/Weath_undergr_logo14.png"
            alt="test"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 text-sm ">
        <ul className="flex gap-5">
          <li>
            <a href="/">Feedback</a>
          </li>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Press Room</a>
          </li>
          <li>
            <a href="/">Advertise With Us</a>
          </li>
          <li>
            <a href="/">TV</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-5 font-bold text-sm">
        <ul className="flex gap-7">
          <li>
            <a href="/">Terms of Use</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">AdChoices</a>
          </li>
          <li>
            <a href="/">Accessibility Statement</a>
          </li>
          <li>
            <a href="/">Data Vendors</a>
          </li>
        </ul>
      </div>
      <p className="text-center mt-5 text-sm">
        We recognize our responsibility to use data and technology for good.
        Take control of your data.
      </p>
      <p className="text-center mt-5 text-sm">
        © Copyright TWC Product and Technology LLC 2014, 2022
      </p>
    </>
  );
};

export default Footer;
