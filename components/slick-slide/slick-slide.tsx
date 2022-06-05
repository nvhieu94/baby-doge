import { Box } from "@mui/system";
import React from "react";
import styles from "./slick-slide.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";

export interface ISlickSlideProps {
  dataSource: any[];
}

const SlickSlide = (props: ISlickSlideProps) => {
  const { dataSource } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    arrows: false,
   
  };
  return (
    <Box className={styles.slick}>
      <Slider {...settings}>
        {dataSource &&
          dataSource.map((item: any, index: number) => (
            <Box key={index} className={styles.slick_item}>
              <Image
              
                src={item.image}
                alt=""
                width={item.width}
                height={item.height}
              />
            </Box>
          ))}
      </Slider>
    </Box>
  );
};

export default SlickSlide;
