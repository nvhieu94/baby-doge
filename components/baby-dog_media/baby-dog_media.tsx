import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import MediaCard from "./media-card";
import styles from "@/styles/Home.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";

const data = [
  {
    title: "TWEETED BY ELON MUSK",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image1.src,
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
    image: image3.src,
  },
  
  {
    title: "TWEETED BY ELON MUSK",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image1.src,
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
    image: image3.src,
  },
  {
    title: "TWEETED BY ELON MUSK",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: image1.src,
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
    image: image3.src,
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
  return (
    <Box className={styles.baby_dog_media_section}>
      <Container>
        <Box className={styles.media_header}>BABY DOGE ON MEDIA</Box>
        <Box sx={{}} py={4}>
          <Slider {...settings}>
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
