import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.scss";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import facebookImg from "@/assets/images/facebook.svg";
import instargramImg from "@/assets/images/instargram.svg";
import telegramImg from "@/assets/images/telegram.svg";
import twitterImg from "@/assets/images/twitter.svg";
import socialMedia2 from "@/assets/images/social-media-2.svg";
import socialMedia1 from "@/assets/images/social-media-1.svg";

const JoinOurCommunitySection = () => {
  return (
    <Box className={styles.joi_our_community}>
      <Container>
        <Box className={styles.title}>JOIN OUR COMMUNITY</Box>
        <Box py={4}>
          <Grid
            container
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid item md={4} xs={12} sx={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "#6C66FC", fontSize: "32px", fontWeight: "700" }}
              >
                +1,300,000
              </Typography>
              <Typography>TWITTER FOLLOWERS</Typography>
            </Grid>
            <Grid item md={4}  xs={12} sx={{ textAlign: "center" }}>
              <Typography
                sx={{ color: "#6C66FC", fontSize: "32px", fontWeight: "700" }}
              >
                +300,000
              </Typography>
              <Typography>TELEGRAM MEMBERS</Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className={styles.follow_icon}>
       
            <Box className={styles.media}>
              <Image src={telegramImg.src} width={50} height={50} alt="" />
            </Box>
            <Box className={styles.media}>
              <Image src={twitterImg.src} width={50} height={50} alt="" />
            </Box>
            <Box className={styles.media}>
              <Image src={socialMedia2.src} width={50} height={50} alt="" />
            </Box>
            <Box className={styles.media}>
              <Image src={socialMedia1.src} width={50} height={50} alt="" />
            </Box>
            <Box className={styles.media}>
              <Image src={facebookImg.src} width={50} height={50} alt="" />
            </Box>
            <Box className={styles.media}>
              <Image src={instargramImg.src} width={50} height={50} alt="" />
            </Box>
        
        </Box>
      </Container>
    </Box>
  );
};

export default JoinOurCommunitySection;
