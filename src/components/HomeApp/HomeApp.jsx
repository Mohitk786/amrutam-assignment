import iPhone from "../../assets/iPhone 13.png";
import playstore from "../../assets/image 67.png";
import appstore from "../../assets/image 68.png";

const HomeApp = () => {
  return (
    <div className="bg-[#FFF7E2] py-16">
     <div className="flex flex-col md:flex-row-reverse w-[95%] md:w-[85%] mx-auto items-center md:relative">
  <img src={iPhone} className="w-[56%] hidden md:block z-50" alt="" />
  <div className="hidden md:block">
  <div className="absolute w-48 h-48 rounded-full bg-[#DFDFC7] top-3 right-72 z-10" ></div>
  <div className="absolute w-48 h-48 rounded-full bg-[#DFDFC7] bottom-3 right-20 z-10" ></div></div>
        <div className="flex flex-col md:items-start items-center space-y-5 px-1 py-5">
          <h1 className="text-[#3A643B]  font-bold text-xl md:text-2xl">
            Amrutam Home App
          </h1>
          <p className="text-[#666666] text-center md:text-left  text-xs md:text-sm">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
          <div className="hidden md:block">
          <h1 className=" font-bold text-xl pt-10 pb-5">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe{" "}
          </h1>
          <div className="space-y-6">
            <h1 className="font-bold text-2xl">Get the App now</h1>
            <div className="flex flex-col md:flex-row gap-4  items-center md:items-start justify-center md:justify-start text-center  px-1">
              <img
                src={playstore}
                className="md:w-3/6 md:h-3/6 w-4/5 h-4/5"
                alt=""
              />
              <img
                src={appstore}
                className="md:w-3/6 md:h-3/6 w-4/5 h-4/5"
                alt=""
              />
            </div>
          </div>
          </div>
        </div>
        <img src={iPhone} className=" md:hidden block" alt="" />
        <div className="flex flex-col md:items-start items-center justify-center text-center space-y-5 px-1">
            <div className="md:hidden block">
          <h1 className=" font-bold text-lg pt-10 pb-8">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe{" "}
          </h1>
          <div className="space-y-5">
            <h1 className="font-bold text-2xl">Get the App now</h1>
            <div className="flex flex-col md:flex-row gap-4 md:items-start items-center justify-center text-center  px-1">
              <img
                src={playstore}
                className="md:w-1/3 md:h-1/3 w-4/5 h-4/5"
                alt=""
              />
              <img
                src={appstore}
                className="md:w-1/3 md:h-1/3 w-4/5 h-4/5"
                alt=""
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApp;
