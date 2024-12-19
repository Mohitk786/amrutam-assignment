/* eslint-disable react/no-unescaped-entities */
import image1 from "../../assets/Rectangle 4144.png";
import image2 from "../../assets/Rectangle 4146.png";
import image3 from "../../assets/Rectangle 4148.png";
const Consultations = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#FFF7E2]  to-[#FFFAEE] ">
      <div className="flex flex-col items-center space-y-5 mx-1">
        <h1 className="text-[#3A643B] text-center font-bold text-xl md:text-3xl md:border-b-4  md:border-[#C3D0C4]">
          What sets Ayurvedic consultations apart?
        </h1>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 mx-1 md:mx-20 ">
          <div className="md:col-span-5 md:h-60 w-full  bg-white rounded-2xl pt-8 md:pt-14 shadow pb-8 md:pb-0 border-t-4  border-[#3A643B]">
            <h1 className="text-[#3A643B] text-xl md:text-2xl text-center font-bold">
              स्वस्थस्य स्वास्थ्य रक्षणं, <br /> आतुरस्य विकार प्रशमनं ।"
            </h1>
            <p className="text-[#3A643B] text-center text-sm pt-5 px-2 md:px-16">
              [ Meaning: The Goal of Ayurveda is to maintain the  health
              of a healthy person and to cure the disease of a 
              diseased person. ]
            </p>
          </div>
          <div className="md:col-span-4 md:h-60 rounded-2xl">
            {" "}
            <img src={image1} className="md:h-60 w-full" />
          </div>

          <div className="md:col-span-3 md:h-60 bg-white rounded-2xl pt-8 md:pt-14 pb-8 md:pb-0 shadow  px-10 border-t-4  border-[#3A643B]">
            <h1 className="text-[#3A643B] text-xl text-left font-bold">
              precise diagnosis
            </h1>
            <p className="text-[#3A643B] text-left text-sm pt-5">
              Ayurveda's core principles revolve around Vata, Pitta, and Kapha
              doshas, guiding you with precise diagnosis <br />
              and treatment.
            </p>
          </div>
          <div className="md:col-span-3 md:h-60 bg-white rounded-2xl pt-8 md:pt-14 pb-8 md:pb-0 shadow  px-10 border-t-4  border-[#3A643B]">
            <h1 className="text-[#3A643B] text-xl text-left font-bold">
              Zero side-effects
            </h1>
            <p className="text-[#3A643B] text-left text-sm pt-5">
              Ayurvedic treatments are devoid of chemicals, and <br /> are based
              completely on natural herbs
            </p>
          </div>
          <div className=" md:col-span-3 md:h-60 rounded-2xl">
            <img src={image2} className="md:h-60 w-full" />
          </div>
          <div className="md:col-span-3 md:h-60 bg-white rounded-2xl pt-8 md:pt-14 pb-8 md:pb-0 shadow  px-8 border-t-4  border-[#3A643B]">
            <h1 className="text-[#3A643B] text-xl text-left font-bold">
              Individual Treatment
            </h1>
            <p className="text-[#3A643B] text-left text-sm pt-5">
              all Treatments are <br />
              personalized based on a <br /> person's unique constitution <br />{" "}
              and health concerns.
            </p>
          </div>
          <div className=" md:col-span-3 md:h-60 rounded-2xl">
            <img src={image3} className="md:h-60 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultations;
