"use client"

//CSS Do SwipperJs
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import {Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

import TextDinamic from '../Text/TextDinamic';
import Slides from './Slides';

import { MeusProjetos } from '@/app/data/MeusProjetos'

export default function Projetos() {
    return (
        <section id='projetos' className="
            px-4 py-4 flex flex-col text-center gap-5 
            md:p-10 md:gap-8 
            lg:px-32 lg:py-16 lg:gap-10"
        >
            <TextDinamic className="text-3xl font-extrabold" classNameDinamic="text-sky-700 uppercase" text="Meus" textDinamic1="_Projects" textDinamic2="_Projetos"  />
            <div className=''>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1000 * 3,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        keyboard
                        spaceBetween={120}
                        slidesPerView={2}
                        breakpoints={{
                            320: {
                            slidesPerView: 1,
                            },
                            650: {
                            slidesPerView: 2,
                            },
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="xl:w-[70%]"
                        >
                            {MeusProjetos.map((slides) => (
                                <SwiperSlide key={slides.id}>
                                    <Slides 
                                        imageSrc={slides.imageSrc}
                                        title={slides.title}
                                        description={slides.description}
                                        gitLink={slides.gitLink}
                                        hostedLink={slides.hostedLink}
                                        technologies={slides.technologies}
                                    />
                                </SwiperSlide>
                            ))}
                        <div className="flex">
                            <div className="swiper-button-prev slider-arrow"></div>
                            <div className="swiper-button-next slider-arrow"></div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </Swiper>
                </div>
        </section>
    )
}