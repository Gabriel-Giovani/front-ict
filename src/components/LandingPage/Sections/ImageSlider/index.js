import React from 'react';
import {
    Container,
} from './styles';
import SwiperImageExample1 from '../../../../assets/images/swiper-image-example-1.png';
import SwiperImageExample2 from '../../../../assets/images/swiper-image-example-2.png';
import SwiperImageExample3 from '../../../../assets/images/swiper-image-example-3.png';

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default () => {
    return (
        <Container>
            <Swiper
                slidesPerView={3}
                spaceBetween={-20}
                navigation
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    595: {
                        slidesPerView: 2,
                        spaceBetween: -20,
                    },
                    799: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: -20,
                    },
                }}
                modules={[Navigation]}
                className="swiper"
            >
                <SwiperSlide>
                    <img src={SwiperImageExample1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SwiperImageExample2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SwiperImageExample3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SwiperImageExample1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SwiperImageExample2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SwiperImageExample3} />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};