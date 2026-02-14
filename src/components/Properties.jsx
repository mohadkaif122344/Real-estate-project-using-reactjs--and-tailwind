import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else if (window.innerWidth >= 640) setCardsToShow(2);
      else setCardsToShow(1);
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-[90px] md:py-[10px] bg-neutral-200 dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="max-w-[1400px] mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32  w-full overflow-hidden"
        id="Properties"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center duration-300 hover:scale-110 ">
          Popular{" "}
          <span className="underline underline-offset-4 decoration-1 under">
            properties
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
          Crafting Spaces, Building Legacies – Explore Our Portfolio
        </p>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={false}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full pb-24 [&_.swiper-pagination]:!bottom-1"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
                onClick={() => toggleDescription(index)}
              >
                <div className="h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h2>

                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {project.price} <span className="px-1">|</span>
                    {project.location}
                  </p>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(activeIndex === index ? null : index);
                    }}
                    className="mt-6 text-blue-600 text-sm font-medium"
                  >
                    {activeIndex === index ? "Hide Details" : "View Details"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center items-center mt-24 gap-6">
          <button className="bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors h-12 w-12 prev-btn">
            <img src={assets.left_arrow} alt="Previous" className="invert" />
          </button>

          <button className="bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors h-12 w-12 next-btn">
            <img src={assets.right_arrow} alt="Next" className="invert" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Properties;
