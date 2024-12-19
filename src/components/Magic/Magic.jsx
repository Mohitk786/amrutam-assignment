/* eslint-disable react/no-unescaped-entities */
import heartbeat from "../../assets/heartbeat (1) 1.png";
import bgimage from "../../assets/image 54.png";
import image57 from "../../assets/image 57.png";
import ribbon  from "../../assets/ribbon 1.png"
import protection  from "../../assets/protection 1.png"
import lotusposition  from "../../assets/lotus-position 1.png"
import ayurveda  from "../../assets/ayurveda 1.png"
import strong  from "../../assets/strong 1.png"

const Magic = () => {
  return (
    <div className="py-12 bg-white">
      <div className="flex flex-col items-center space-y-5 px-1">
        <h1 className="text-[#3A643B] text-center font-bold text-xl md:text-3xl md:border-b-4 max-w-[536px] md:border-[#C3D0C4]">
          Discover Ayurveda’s Magic With Us
        </h1>
        <p className="text-[#666666] text-center max-w-[536px]">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.{" "}
        </p>
      </div>
      <div className="md:flex items-center justify-center text-center relative mt-10 hidden">
        <div className=" flex flex-col gap-16 ">
        <div className="flex items-center gap-4 absolute top-10 left-28">
          <div className="text-right w-56 ">
            <h2 className="text-lg font-bold">Personalized Wellness</h2>
            <p className="text-sm text-[#515151]">
              Get treatments made just for you based on your individual doshas
              (body type)
            </p>
          </div>
          <div className="bg-[#EDF5FA] rounded-full  py-5 px-4 ">
            {" "}
            <img className="w-12" src={heartbeat} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-4 absolute top-[205px] left-12">
          <div className="text-right w-56">
            <h2 className="text-lg font-bold">Focus on prevention</h2>
            <p className="text-sm text-[#515151]">
            Stop problems even <br /> before they start.
            </p>
          </div>
          <div className="pr-10">
          <div className="bg-[#EAF2EA] rounded-full  p-4    ">
            {" "}
            <img className="w-12 " src={ribbon} alt="" />
          </div>
          </div>
        </div>
        <div className="flex items-center gap-4 absolute top-[360px] left-[100px]">
          <div className="text-right w-56">
            <h2 className="text-lg font-bold">Mind-Body Connection</h2>
            <p className="text-sm text-[#515151]">
            Keep your mind and body in sync <br /> for a happy life.
            </p>
          </div>
          <div className="bg-[#EDF5FA] rounded-full  p-4 ">
            {" "}
            <img className="w-12" src={lotusposition} alt="" />
          </div>
        </div>
        </div>
        <div
          className="relative"
          style={{
            backgroundImage: `url(${bgimage})`,
          }}
        >
          <img className="pt-10" src={image57} alt="" />
        </div>
        <div className=" flex flex-col gap-16 ">
        <div className="flex items-center gap-4 absolute top-8 right-28">
        <div className="bg-[#EDF5FA] rounded-full  p-4 ">
            {" "}
            <img className="w-12" src={protection} alt="" />
          </div>
          <div className="text-left w-56 ">
            <h2 className="text-lg font-bold">Holistic Healing</h2>
            <p className="text-sm text-[#515151]">
            Fix the root problem for <br /> long-lasting health.
            </p>
          </div>
         
        </div>
        <div className="flex items-center gap-4 absolute top-[205px] right-12">
        <div className="bg-[#EAF2EA] rounded-full  p-4    ">
            {" "}
            <img className="w-12 " src={ayurveda} alt="" />
          </div>
          <div className="text-left w-56">
            <h2 className="text-lg font-bold">Natural Remedies</h2>
            <p className="text-sm text-[#515151]">
            Using herbs and natural <br /> therapies for healing.
            </p>
          </div>
         
        </div>
        <div className="flex items-center gap-4 absolute top-[360px] right-[100px]">
        <div className="bg-[#EDF5FA] rounded-full  p-4 ">
            {" "}
            <img className="w-12" src={strong} alt="" />
          </div>
          <div className="text-left w-56">
            <h2 className="text-lg font-bold">Boosting immunity</h2>
            <p className="text-sm text-[#515151]">
            Stay strong and healthy for life, <br /> not just for today.
            </p>
          </div>
          
        </div>
        </div>
      </div>
      <div className="flex flex-col md:hidden">
      <div
          className="object-cover bg-center bg-cover px-6 mt-6"
          style={{
            backgroundImage: `url(${bgimage})`,
          }}
        >
          <img className="pt-10" src={image57} alt="" />
        </div>
        <div className=" grid grid-cols-2 gap-2 mx-2">
        <div className="flex flex-col border rounded-lg items-center gap-1 ">
        <div className="bg-[#EDF5FA] rounded-full  p-2 mt-1">
            {" "}
            <img className="w-8" src={heartbeat} alt="" />
          </div>
          <div className="text-center  px-2 pb-3">
            <h2 className="text-[12px] font-bold">Personalized Wellness</h2>
            <p className="text-[10px] text-[#515151]">
              Get treatments made just for you based on your individual doshas
              (body type)
            </p>
          </div>
         
        </div>
        <div className="flex flex-col border rounded-lg items-center gap-1 ">
        <div className="bg-[#EDF5FA] rounded-full  p-2 mt-1">
            {" "}
            <img className="w-8" src={ribbon} alt="" />
          </div>
          <div className="text-center  px-2 pb-3">
            <h2 className="text-[12px] font-bold">Focus on prevention</h2>
            <p className="text-[10px] text-[#515151]">
            Stop problems even before they start.
            </p>
          </div>
         
        </div>
        <div className="flex flex-col border rounded-lg items-center gap-1 ">
        <div className="bg-[#EDF5FA] rounded-full  p-2 mt-1">
            {" "}
            <img className="w-8" src={lotusposition} alt="" />
          </div>
          <div className="text-center  px-2 pb-3">
            <h2 className="text-[12px] font-bold">Mind-Body Connection</h2>
            <p className="text-[10px] text-[#515151]">
            Keep your mind and body in sync for a happy life.
            </p>
          </div>
         
        </div>
        <div className="flex flex-col border rounded-lg items-center gap-1 ">
        <div className="bg-[#EDF5FA] rounded-full  p-2 mt-1">
            {" "}
            <img className="w-8" src={protection} alt="" />
          </div>
          <div className="text-center  px-2 pb-3">
            <h2 className="text-[12px] font-bold">Holistic Healing</h2>
            <p className="text-[10px] text-[#515151]">
            Fix the root problem for long-lasting health.
            </p>
          </div>
         
        </div>
        <div className="flex flex-col border rounded-lg items-center gap-1 ">
        <div className="bg-[#EDF5FA] rounded-full  p-2 mt-1">
            {" "}
            <img className="w-8" src={ayurveda} alt="" />
          </div>
          <div className="text-center  px-2 pb-3">
            <h2 className="text-[12px] font-bold">Natural Remedies</h2>
            <p className="text-[10px] text-[#515151]">
            Using herbs and natural therapies for healing.
            </p>
          </div>
         
        </div>
        <div className="flex flex-col border rounded-lg items-center gap-1 ">
        <div className="bg-[#EDF5FA] rounded-full  p-2 mt-1">
            {" "}
            <img className="w-8" src={strong} alt="" />
          </div>
          <div className="text-center  px-2 pb-3">
            <h2 className="text-[12px] font-bold">Boosting immunity</h2>
            <p className="text-[10px] text-[#515151]">
            Stay strong and healthy for life, not just for today.
            </p>
          </div>
         
        </div>
       
        </div>
       
      </div>
    </div>
  );
};

export default Magic;
