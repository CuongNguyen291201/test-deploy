import { Container, Grid } from '@mui/material'
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import "./style.scss";


const Review = () => {
  return (
    <div id="review">
      <Container maxWidth="xl">
        <img src="/assets/image/title-review.png" className="title-review" />
        <Grid container spacing={2} gap="15px">
          <Grid item xs={12} lg={8}>
            <Swiper
              key={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={15}
              className="swiper-achievement"
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + "</span>";
                }
              }}
              // pagination={true}
            >
              {[1, 2].map(item => (
                <SwiperSlide key={item}>
                  <div className="ac-item">
                    <img src={`/assets/image/review-${item}.png`} alt="" className="img-review" />
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Review