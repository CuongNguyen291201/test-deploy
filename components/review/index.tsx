import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid } from '@mui/material'
import 'swiper/swiper.min.css'
import ContainerWeb from '../common/container/Container'
import review from './review.json'
import './style.scss'

const Review = () => {
  return (
    <div id="review">
      <ContainerWeb>
        <img src="/assets/image/title-review.png" className="title-review" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* <Swiper
              key={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={0}
              pagination={{}}
              className="swiper-achievement"
              breakpoints={{
                "0": {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                "576": {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                "768": {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                "992": {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                "1200": {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                "1400": {
                  slidesPerView: 1,
                  spaceBetween: 20
                }
              }}
            >
              {review.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="ac-item">
                    <img src={`/assets/image/${item.name}.png`} alt="" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </Grid>
        </Grid>
      </ContainerWeb>
    </div>
  )
}

export default Review