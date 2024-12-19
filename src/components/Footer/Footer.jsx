import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-24 bg-[#3A643B2E]">
      <footer className="flex flex-col text-black">
        <div className="flex flex-col items-start justify-evenly gap-5 px-5 md:px-10 md:flex-row md:gap-0 md:items-center">
          <aside className="text-xl space-y-4 md:px-5 ">
            <h2 className="text-[#3A643B] font-semibold">Get in touch</h2>
            <p className="text-sm">
              support@amrutam.co.in <br /> <br />
              Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
              Lashkar, Gwalior - 474001
              <br /> <br />
              +91 123456789
            </p>
            <div className="flex flex-wrap gap-1 md:gap-2">
              <div className="p-2 md:p-3 bg-[#3A643B] rounded-full">
                <FaFacebookF className="text-white text-sm md:text-lg" />
              </div>
              <div className="p-2 md:p-3 bg-[#3A643B] rounded-full">
                <FaInstagram className="text-white text-sm md:text-lg" />
              </div>
              <div className="p-2 md:p-3 bg-[#3A643B] rounded-full">
                <FaYoutube className="text-white text-sm md:text-lg" />
              </div>
              <div className="p-2 md:p-3 bg-[#3A643B] rounded-full">
                <FaTwitter className="text-white text-sm md:text-lg" />
              </div>
              <div className="p-2 md:p-3 bg-[#3A643B] rounded-full">
                <FaLinkedinIn className="text-white text-sm md:text-lg" />
              </div>
              <div className="p-2 md:p-3 bg-[#3A643B] rounded-full">
                <FaPinterestP className="text-white text-sm md:text-lg" />
              </div>
            </div>
          </aside>
          <nav className="text-lg md:px-5 pb-10 md:pb-0">
            <h2 className="text-[#3A643B] font-semibold">Information</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a className="cursor-pointer hover:underline text-[#474747]">
                  About Us
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline text-[#474747]">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline text-[#474747]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline text-[#474747]">
                  Privacy Policy for Mobile Apps
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline text-[#474747]">
                  Shipping and Returns Policy
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline text-[#474747]">
                  International Delivery
                </a>
              </li>
              <li>
                <a className="cursor-pointer hover:underline text-[#474747]">
                  For Businesses, Hotels and Resorts
                </a>
              </li>
            </ul>
          </nav>
          <nav className="md:text-lg text-left md:px-5 space-y-5">
            <h2 className="text-[#3A643B] font-semibold">
              Subscribe to our Newsletter and join Amrutam Family today!
            </h2>
            <div className="flex flex-wrap w-full rounded-lg">
              <div className="flex gap-0">
                <input
                  className=" rounded-l-full border border-r-0 border-[#3A643B] w-[60%] px-4 py-2 text-[#3A643B] focus:outline-none"
                  type="text"
                  placeholder="Your Email Address"
                />
                <input
                  className="rounded-r-full border border-[#3A643B] w-[40%] bg-black px-2 md:px-4 py-2 text-white cursor-pointer"
                  type="submit"
                  value="Subscribe"
                />
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
