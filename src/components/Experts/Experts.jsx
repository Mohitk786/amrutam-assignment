// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { useRef } from "react"; // Import useRef hook
import { FaArrowLeft, FaArrowRight, FaLink, FaStar } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import image from "../../assets/Ellipse 725.png";
import "./Experts.css";

const Experts = () => {
  const swiperRef = useRef(null); // Create a ref for Swiper

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev(); // Slide to the previous slide
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext(); // Slide to the next slide
    }
  };
  return (
    <div className="py-16 bg-white mx-1 md:px-20 relative">
      <div className="flex flex-col items-center space-y-5 px-1">
        <h1 className="text-[#3A643B] text-center font-bold text-2xl md:text-3xl md:border-b-4  md:border-[#C3D0C4]">
          Meet Our Ayurveda Experts
        </h1>
      </div>
      {/* arrow left */}
      <div
        className="absolute hidden top-1/2 left-10 z-50 md:flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8 border border-[#A5A5A5] p-6"
        onClick={handlePrev}
      >
        <button className="">
          <FaArrowLeft className="text-[#A5A5A5] text-2xl" />
        </button>
      </div>
      {/* arrow right */}
      <div
        className="border border-[#A5A5A5] hidden absolute top-1/2 z-50 right-10  md:flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8 p-6"
        onClick={handleNext}
      >
        <button className="">
          <FaArrowRight className="text-[#A5A5A5] text-2xl" />
        </button>
      </div>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={3}
        spaceBetween={30}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-[80%]"
        breakpoints={{
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 3,
          },
          // when window width is <= 640px
          0: {
            slidesPerView: 1,
          },
        }}
        autoplay={{ delay: 5000 }}
      >
        {posts?.map((item) => (
          <SwiperSlide key={item?._id} className="h-[400px] md:h-[390px]">
            <div
              key={item?._id}
              className="bg-[#FFF7E2] rounded-[40px]  mb-10 md:mb-20"
            >
              <div className="py-6">
                <div className="flex items-center flex-wrap justify-around">
                  <div className="relative group">
                    <img
                      className="size-[120px] bg-slate-500 object-cover rounded-full"
                      src={image}
                      alt="avatar navigate ui"
                    />
                    <p className="flex absolute items-center justify-center left-7 gap-1 -bottom-2 text-xs bg-[#0B0B0B] text-white py-1 px-3 rounded-3xl">
                      4.5 <FaStar className="text-[#EEDE4D]" />
                    </p>
                  </div>
                </div>
                <div className="px-3 text-center space-y-2 pt-8">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <h3 className="text-[#555555] text-sm">
                    {item.reviewSubtitle}
                  </h3>
                  <h3 className=" text-sm">{item.exprience}</h3>
                  <div className="relative mx-auto h-fit w-fit rounded-full  p-2 hover:bg-gray-200">
                    <h3 className="text-[#3A643B] flex items-center gap-1 bg-[#3A643B1F] text-sm rounded-full px-3 py-1">
                      {" "}
                      <FaLink /> Skin Specialist
                    </h3>
                  </div>
                </div>
              </div>
              <button className="bg-[#3A643B] text-white text-center block w-full rounded-b-[40px] py-3 hover:bg-[#3a643be5]">
                Book a session
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden md:flex justify-center items-center text-center mt-8 rounded-full">
        <button className="rounded-lg flex items-center justify-center px-8 py-3 text-xl bg-[#F1F5F2] text-[#3a643b] border border-[#3a643b] duration-300 gap-2 active:scale-95">
          Find more experts
          <svg
            className="w-4 h-4 icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#3a643b"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Experts;

const posts = [
  {
    id: 1,
    title: "Dr. Vaishali sharma",
    name: "Sophie Moore",
    location: "Chennai",
    date: "17/02/24",
    rating: 5,
    reviewTitle: "One of a kind service",
    reviewSubtitle: "Ayurveda Practitioner (BAMS, MD)",
    exprience: "   25 years of experience",
  },
  {
    id: 2,
    title: "Dr. Vaishali sharma",
    name: "Sophie Moore",
    location: "Chennai",
    date: "17/02/24",
    rating: 5,
    reviewTitle: "One of a kind service",
    reviewSubtitle: "Ayurveda Practitioner (BAMS, MD)",
    exprience: "   25 years of experience",
  },
  {
    id: 3,
    title: "Dr. Vaishali sharma",
    name: "Sophie Moore",
    location: "Chennai",
    date: "17/02/24",
    rating: 5,
    reviewTitle: "One of a kind service",
    reviewSubtitle: "Ayurveda Practitioner (BAMS, MD)",
    exprience: "   25 years of experience",
  },
  {
    id: 4,
    title: "Dr. Vaishali sharma",
    name: "Sophie Moore",
    location: "Chennai",
    date: "17/02/24",
    rating: 5,
    reviewTitle: "One of a kind service",
    reviewSubtitle: "Ayurveda Practitioner (BAMS, MD)",
    exprience: "   25 years of experience",
  },
  {
    id: 5,
    title: "Dr. Vaishali sharma",
    name: "Sophie Moore",
    location: "Chennai",
    date: "17/02/24",
    rating: 5,
    reviewTitle: "One of a kind service",
    reviewSubtitle: "Ayurveda Practitioner (BAMS, MD)",
    exprience: "   25 years of experience",
  },
];
