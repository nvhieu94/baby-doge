import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.scss";

import Image from 'next/image'

import flokiCard from '@/assets/images/floki-card.png'

const BabyDogCardComponent = () => {

  return (
    <Box className={styles.baby_dog_card_section}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Box className={styles.box_wrapper}>
                <Image src={flokiCard.src} alt='' width={480} height={304} /> 
             
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box py={2} className={styles.box_wrapper}>
              <Typography className={styles.baby_doge_title}>SPIN TO EARN
</Typography>
              <Typography className={styles.subtitle}>
                    Baby Doge Coin application that will be available on iOS and Android. The application will have the following features:
              </Typography>
              <ul>
                  <li>Ability to load the Fiat balances with bank transfer</li>
                  <li>Ability to Buy Cryptocurrencies</li>
                  <li>Ability to send Cryptocurrencies</li>
                  <li>Ability to exchange crypto currencies for fiat</li>
                  <li>Will have new TextBit technology meaning the users can text BabyDoge to anyone anywhere in the world using a telephone number (restrictions apply). *Card is Currently Pending Completion By Third Party Provider*</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BabyDogCardComponent;
