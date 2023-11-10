// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Reviews } from "../Reviews";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CustomerReviews = () => {
  const reviews = Reviews();
  return (
    <div className="customerReviews-section">
      <div className="section-header">
        <h1>Customer Reviews</h1>
      </div>
      <div className="customerReviews-section-reviews"></div>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        navigation={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          220: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
        className="customerReviews-section-reviews-swiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.name}>
            <div className="review">
              <p>⭐⭐⭐⭐⭐</p>
              <p>{review.review}</p>
              <div className="review-person">
                <img src={review.image} alt="" />
                <div className="review-person-text">
                  <b>
                    <p>{review.name}</p>
                  </b>
                  <p>{review.job}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
