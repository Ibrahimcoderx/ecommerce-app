// Swiper
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Container } from 'react-bootstrap';

const Carosel = () => {

  return (

    <div>
            <section>

                <Container>

                    <div className='CaroselDiv'>

                            <Swiper
                                pagination={{
                                dynamicBullets: true,
                                }}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[ Pagination, Autoplay]}
                                className="mySwiper"
                                >
                                        
                                <SwiperSlide><img src="/images/home/img2.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/home/img2.png" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="/images/home/img2.png" alt="" /></SwiperSlide>

                            </Swiper>

                    </div>

                </Container>

                </section>

    </div>

  )
}

export default Carosel