"use client"


import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import styles from './carousel.module.css'

import { projectsData } from '@/lib/data'

interface CarouselProps {
    path: string;
  }

const Carousel: React.FC<CarouselProps> = ({path}) => {

    const slider = projectsData.filter(p => p.path === path)[0].slider;

    return (
        <div className={styles.carousel}>
            <Swiper
                className={styles.myswiper}
                modules={[Pagination, EffectCoverflow, Autoplay]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true
                }}
                loop={true}
                pagination={{ clickable: true }}

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 2
                    },
                    1560: {
                        slidesPerView: 3
                    },
                }}

            >
                {
                    slider?.map(data => (
                        <SwiperSlide key={data.title} style={{ backgroundImage: `url(${data.url})` }} className={styles['myswiper-slider']}>
                            <div>
                                <h2>{data.title}</h2>
                                <p className='text-white font-semibold text-md text-shadow-md'>{data.description}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}

export default Carousel