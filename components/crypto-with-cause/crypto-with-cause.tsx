import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.scss";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import SlickSlide from "@/components/slick-slide";
const data = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/human-society_300x100.png?v=1646419597",
    height: 86,
    width: 121,
    link: "https://www.humanesociety.org/",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/aspca_300x100.png?v=1646419634",
    height: 86,
    width: 121,
    link: "https://www.aspca.org/",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/BF_Secondary_Square_RGB_1_300x100.png?v=1631740130",

    height: 86,
    width: 89,
    link: "https://bestfriends.org/",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/NSALA-VERTICAL_300x100.png?v=1640105992",
    height: 86,
    width: 115,
    link: "https://www.animalleague.org/",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/furkids_300x100_1_300x100.png?v=1646839104",
    height: 86,
    width: 121,
    link: "https://furkids.org/",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/baby-doge-coin_300x100_bb4718f1-0272-4bb5-8715-b61ff77b1c22_300x100.png?v=1646839376",
    height: 86,
    width: 86,
    link: "",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/feature_row_card_300x100_6451949a-42f4-4633-b75f-f422fdbf70c8_300x100.png?v=1646839064",
    height: 86,
    width: 121,
    link: "https://pawswithcause.org/",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/human-society_300x100.png?v=1646419597",
    link: "https://www.humanesociety.org/",
    height: 86,
    width: 121,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/aspca_300x100.png?v=1646419634",
    link: "https://www.aspca.org/",
    height: 86,
    width: 121,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/BF_Secondary_Square_RGB_1_300x100.png?v=1631740130",
    link: "https://bestfriends.org/",
    height: 86,
    width: 89,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/NSALA-VERTICAL_300x100.png?v=1640105992",
    lnk: "https://www.animalleague.org/",
    height: 86,
    width: 115,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/furkids_300x100_1_300x100.png?v=1646839104",
    link: "https://furkids.org/",
    height: 86,
    width: 121,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/baby-doge-coin_300x100_bb4718f1-0272-4bb5-8715-b61ff77b1c22_300x100.png?v=1646839376",
    link: "",
    height: 86,
    width: 86,
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/feature_row_card_300x100_6451949a-42f4-4633-b75f-f422fdbf70c8_300x100.png?v=1646839064",
    link: "https://pawswithcause.org/",
    height: 86,
    width: 121,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/human-society_300x100.png?v=1646419597",
    link: "https://www.humanesociety.org/",
    height: 86,
    width: 121,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/aspca_300x100.png?v=1646419634",
    link: "https://www.aspca.org/",
    height: 86,
    width: 121,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/BF_Secondary_Square_RGB_1_300x100.png?v=1631740130",
    link: "https://bestfriends.org/",
    height: 86,
    width: 89,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/NSALA-VERTICAL_300x100.png?v=1640105992",
    link: "https://www.animalleague.org/",
    height: 86,
    width: 115,
  },

  {
    image:
      "	https://cdn.shopify.com/s/files/1/0388/4833/1916/files/furkids_300x100_1_300x100.png?v=1646839104",
    link: "https://furkids.org/",
    height: 86,
    width: 121,
  },

  {
    image:
      "https://cdn.shopify.com/s/files/1/0388/4833/1916/files/baby-doge-coin_300x100_bb4718f1-0272-4bb5-8715-b61ff77b1c22_300x100.png?v=1646839376",
    link: "",
    height: 86,
    width: 86,
  },
];

const CryptoWithCause = () => {
  return (
    <Box className={styles.crypto_cause}>
      <Typography className={styles.title}>CRYPTO WITH A CAUSE</Typography>
      <Typography
        sx={{
          color: "#AAAAAA",
          fontSize: "20px",
          fontWeight: "500",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        LUCKY FLOKI HAS DONATED +$750,000 TO HELP SAVE THE DOGS. AND MORE TO GO!
      </Typography>
      <Box sx={{ marginTop: "30px" }} className="custom-slick-slide">
        <SlickSlide dataSource={data} />
      </Box>
    </Box>
  );
};

export default CryptoWithCause;
