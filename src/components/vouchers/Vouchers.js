import React from "react";
import "../vouchers/Vouchers.scss";
import voucher1 from "../../images/voucher1.svg";
import voucher2 from '../../images/voucher2.svg';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";

const Vouchers = () => {
  return (
    <section id="vouchers" className="vouchers">
      <h2>What people say about me</h2>

      <div className="vouchers__container">
        <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        fadeEffect
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          425: {
            width: 415,
            slidesPerView: 1,
          },
          768: {
            width: 730,
            slidesPerView: 2,
          },
          1024: {
            width: 1000,
            slidesPerView: 2,
          },
          1440: {
            width: 1400,
            slidesPerView: 3,
          }
        }}
        >
          <SwiperSlide>
            <article className="voucher">
              <h1>"</h1>
              <div className="voucher__details">
                <img src={voucher2} alt="voucher 1"></img>
                <h2>Victory</h2>
                <p>
                  <span className="fade-dark">Anozie Joel</span> built{" "}
                  <span className="fade-dark">MetaVote </span>
                  which we used to conclude the 2024 executive elections, where we saw the <span className="fade-dark">first female president </span> in the department.{" "}
                </p>
                <article className="name">
                  <h2>ISEC Member</h2>
                  <p className="fade-dark">NiMECHe (FUTO)</p>
                </article>
              </div>
              <h1>"</h1>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="voucher">
              <h1>"</h1>
              <div className="voucher__details">
                <img src={voucher1} alt="voucher 1"></img>
                <h2>Solomon Alogaga</h2>
                <p>
                  Getting Developers in the diverse pool of Techies can be exhausting, but{" "}<span className="fade-dark">Joel</span>
                  {" "}made me confident in {" "}<span className="fade-dark">his tone and actions{" "}</span>
                  and <span className="fade-dark">delivered before deadline</span> while <span className="fade-dark">implementing
                  our company's guidelines</span>.
                </p>
                <article className="name">
                  <h2>CEO</h2>
                  <p className="fade-dark">Oyaxity</p>
                </article>
              </div>
              <h1>"</h1>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Vouchers;
