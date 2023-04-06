
// Swiper
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from 'react-bootstrap';
import Link from "next/link";

// icon
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const Slider = () => {

    const swiperRef = useRef();

  return (

    <div>

        
        <section>

            <Container>

                <div className='SliderH2div'><h2>Categories</h2></div>

                <div className='SliderSliderdiv'>

                    <Swiper

                        slidesPerView={6}
                        spaceBetween={10}
                        loop={true}

                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                            }}
                        breakpoints={{
                        640: {
                            slidesPerView: 2,
                            slidesPerGroup:2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            slidesPerGroup:4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            slidesPerGroup:6,
                            spaceBetween: 20,
                        },
                        }}

                        className="mySwiper"

                        >

                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                            <SwiperSlide>
                                <Link href=""><img src="/images/home/img.png" alt="" /> </Link>
                            </SwiperSlide>
                       
                       
                       
                        
                    </Swiper>

                    <div className="ButtonDiv">
                        <button className="Button1" onClick={() => swiperRef.current?.slidePrev()}><IoIosArrowBack/></button>
                        <button className="Button2" onClick={() => swiperRef.current?.slideNext()}><IoIosArrowForward/></button>
                    </div>
                </div>

            </Container>

        </section>
        
    </div>

  )
}

export default Slider