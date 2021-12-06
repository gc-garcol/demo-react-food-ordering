import React, { useState } from "react";
import { Style } from "./index.component.swiper.style";
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Controller } from "swiper";
import "./index.component.swiper.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight as rightArrow } from '@fortawesome/free-solid-svg-icons'

interface OnboardingSwiperItem {
  img: any,
  title: string,
  content: string
}

interface OnboardingSwiperProps {
  items: Array<OnboardingSwiperItem>
}

const OnboardingSwiper = (props: OnboardingSwiperProps) => {

  const [firstSwiper, setFirstSwiper] = useState();
  const [secondSwiper, setSecondSwiper] = useState();

  return (
    <Style.Container>
      <Style.Container className="logo-container">
        <Swiper
          modules={ [Pagination, Controller] }
          slidesPerView={1}
          pagination={ Style.paginationProps }
          onSlideChange={ onSlideChange }
          controller={{ control: firstSwiper }}
          onSwiper={ (swiper:any = undefined) => { setSecondSwiper(swiper) } }
        >
          {
            props.items.map((item, index) => {
              return (
                <SwiperSlide key={ index }>
                  <Style.ImageWrapper>
                    <Style.LogoIcon
                      src={ item.img }
                    />
                  </Style.ImageWrapper>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
        <Style.Pagination />
      </Style.Container>
      <Style.Container className="content-container">
        <Swiper
          slidesPerView={1}
          modules={ [Controller, Navigation] }
          navigation={ Style.navigationProps }
          controller={ { control: secondSwiper } }
          onSwiper={ (swiper:any = undefined) => { setFirstSwiper(swiper) } }
        >
          {
            props.items.map((item, index) => {
              return (
                <SwiperSlide key={ index }>
                  <Style.Title>{ item.title }</Style.Title>
                  <Style.Content>{ item.content }</Style.Content>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
        <Style.Navigation>
          <FontAwesomeIcon
            icon={ rightArrow }
            style={ Style.rightIconStyle }
            className="icon-right"
          />
        </Style.Navigation>
      </Style.Container>
    </Style.Container>
  );
}

const onSlideChange = (swiper: any) => {
}

export default OnboardingSwiper;
