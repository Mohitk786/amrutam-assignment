// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "./slider.css"

const Approach = () => {
 
  return (
    <div className="py-16 bg-white mx-1">
      <div className="flex flex-col items-center space-y-5 px-1">
        <h1 className="text-[#3A643B] text-center font-bold text-3xl md:border-b-4 max-w-[536px] md:border-[#C3D0C4]">
          Our Ayurvedic Approach
        </h1>
        <p className="text-[#666666] text-center max-w-[536px]">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={4}
        spaceBetween={20}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          1024: {
            slidesPerView: 4,
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
          {demo.map((item) => (
            <SwiperSlide  key={item?.id}>
            <div
              key={item?.id}
              className="border-t-[6px]  border-[#3A643B]  rounded-[28px] bg-[#FFF7E2] p-6  text-white md:p-8 text-2xl font-bold "
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative mx-auto h-fit w-fit rounded-full bg-[#3a643bb7] py-5 px-8">
                  {item?.id}
                </div>
                <h2 className="text-xl text-[#3A643B] font-bold">
                  {item?.name}
                </h2>
                <h6 className="text-center font-medium text-lg text-[#2E2E2E]">
                  {item?.text}
                </h6>
              </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Approach;

const demo = [
  {
    id: 1,
    name: "Make Appointment",
    text: "You must make an appointment in advance, to choose the service and date.",
  },
  {
    id: 2,
    name: "Consultations",
    text: "The next stage involves a thorough consultation with an Ayurveda practitioner.",
  },
  {
    id: 3,
    name: "Treatment Planning",
    text: "The Ayurvedic practitioner creates a personalized treatment plan for you",
  },
  {
    id: 4,
    name: "Maintenance",
    text: "These visits allow for assessment of progress, adjustments to the treatment.",
  },
];
