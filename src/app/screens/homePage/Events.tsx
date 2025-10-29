import { Box, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { plans } from "../../../libs/data/plans";

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Events() {
  return (
    <div className={"events-frame"}>
      <Stack className={"events-main"}>
        <Box className={"events-text"}>
          <span className={"category-title"}>Events</span>
        </Box>

        <Swiper
          className={"events-info swiper-wrapper"}
          slidesPerView={4}
          slidesPerGroup={2}
          spaceBetween={30}
          loop={true}
          speed={800}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 2,
              spaceBetween: 30,
            },
          }}
        >
          {plans.map((value, number) => {
            return (
              <SwiperSlide key={number} className={"events-info-frame"}>
                <Box className={"modern-event-card"}>
                  <Box className={"event-image-wrapper"}>
                    <img
                      src={value.img}
                      alt={value.title}
                      className={"event-image"}
                    />
                    <Box className={"image-overlay"}></Box>
                  </Box>

                  <Box className={"event-content"}>
                    <Box className={"event-header"}>
                      <h3 className={"event-title"}>{value.title}</h3>
                      <Box className={"event-author"}>
                        <img src={"/icons/writter_icon.ico"} alt="author" />
                        <span>{value.author}</span>
                      </Box>
                    </Box>

                    <p className={"event-description"}>{value.desc}</p>

                    <Box className={"event-footer"}>
                      <Box className={"event-meta"}>
                        <img src={"/icons/calendar.svg"} alt="date" />
                        <span>{value.date}</span>
                      </Box>
                      <Box className={"event-meta"}>
                        <img src={"/icons/location.svg"} alt="location" />
                        <span>{value.location}</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box className={"prev-next-frame"}>
          <img
            src={"/icons/arrow-right.svg"}
            className={"swiper-button-prev"}
          />
          <div className={"dot-frame-pagination swiper-pagination"}></div>
          <img
            src={"/icons/arrow-right.svg"}
            className={"swiper-button-next"}
            style={{ transform: "rotate(-180deg)" }}
          />
        </Box>
      </Stack>
    </div>
  );
}
