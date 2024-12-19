import image from "../../assets/Rectangle 4167.png";

const Harmony = () => {
  return (
    // <div className='object-cover bg-center bg-cover h-full md:min-h-[500px] w-full relative' style={{
    //     backgroundImage: `url(${image})`,
    //   }}>
    //     <div className="text-center py-10">
    //         <h1 className='text-[#FFF7E2] text-2xl md:text-5xl'>
    //             Ready to restore harmony in <br /> your mind, body and spirit?
    //         </h1>
    //         <button className=" mt-5 bg-[#3A643B] hover:bg-[#4e754f] px-5 py-2 rounded-lg  text-[#FFFFFF]">
    //             Book an Appointment
    //         </button>
    //     </div>
    // </div>
    <div className="min-h-[500px] max-h-[500px] relative">
      <img className="min-h-[500px] max-h-[500px] w-full" src={image} alt="" />
      <div className="absolute flex items-center justify-center min-h-[500px] max-h-[500px] w-full left-0 top-0 bg-gradient-to-t from-[#18181880] text-center to-[#22222257] text-white max-w-[1340px]">
        <div className="text-center py-10">
          <h1 className="text-[#FFF7E2] text-xl md:text-5xl">
            Ready to restore harmony in <br /> your mind, body and spirit?
          </h1>
          <button className=" mt-5 bg-[#3A643B] hover:bg-[#4e754f] px-5 py-4 rounded-xl  text-[#FFFFFF]">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Harmony;
