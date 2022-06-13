import React, { useState,useEffect } from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import MediaCard from "./media-card";
import { useMediaQuery } from 'react-responsive'
import styles from "@/styles/Home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flokiMedia from "@/assets/images/flokiMedia.png";
import image2 from "@/assets/images/image2.png";
import speedyFloki from "@/assets/images/speedy-floki.png";

const data = [
  {
    title: "TWEETED BY ELON MUSK",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: flokiMedia.src,
  },
 
  {
    title: "OUR BIGGEST DONATION YET!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image2.src,
  },
  {
    title: "BABY DOGE IS FAST!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: speedyFloki.src,
  },
  
  {
    title: "TWEETED BY ELON MUSK",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: flokiMedia.src,
  },
 
  {
    title: "OUR BIGGEST DONATION YET!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image2.src,
  },
  {
    title: "BABY DOGE IS FAST!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: speedyFloki.src,
  },
  {
    title: "TWEETED BY ELON MUSK",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: flokiMedia.src,
  },
 
  {
    title: "OUR BIGGEST DONATION YET!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image2.src,
  },
  {
    title: "BABY DOGE IS FAST!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: speedyFloki.src,
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
};
const BabyDogMediaSection = () => {
  const [settingSlide, setSettingSlide] = useState(settings)

  const isDesktop = useMediaQuery({ minWidth: 1025 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
  const isMobile = useMediaQuery({ maxWidth: 767 })
  useEffect(() => {
  
   if(isMobile){
    setSettingSlide({
      dots: false,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
     })
   }else if(isTablet){
    setSettingSlide({
      dots: false,
      infinite: true,
      speed: 5000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
     })
   }else {
    setSettingSlide({
      dots: false,
      infinite: true,
      speed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
     })
   }
  

  }, [isDesktop, isTablet, isMobile])
  
  return (
    <Box className={styles.baby_dog_media_section}>
      <Container>
        <Box className={styles.media_header}>BABY DOGE ON MEDIA</Box>
        <Box sx={{}} py={4}>
          <Slider {...settingSlide}>
            {data.map((item: any, index: number) => (
              <Box key={index}>
                <MediaCard item={item} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default BabyDogMediaSection;
