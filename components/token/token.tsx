import React from "react";
import { Box, Container } from "@mui/system";
import { Typography, Button, Grid } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "@/styles/Home.module.scss";
import Image from 'next/image'
///image
import facebookImg from '@/assets/images/facebook.svg';
import instargramImg from '@/assets/images/instargram.svg';
import telegramImg from '@/assets/images/telegram.svg';
import twitterImg from '@/assets/images/twitter.svg';
import socialMedia2 from '@/assets/images/social-media-2.svg';
import socialMedia1 from '@/assets/images/social-media-1.svg';
const Token = () => {
  return (
    <Box className={styles.token}>
      <Container className={styles.follow_container}>
        <Box className={styles.follow_us}>
          <Box className={styles.bsc_address_wrapper}>
            <Box className={styles.input_wrapper}>
              <Select
                className={styles.select_address}
                displayEmpty
                value={1}
                input={<OutlinedInput sx={{ color: "#fff", width: 150 }} />}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value={1}>
                  <em>BSC ADDRESS</em>
                </MenuItem>
              </Select>
              <Typography component={"p"}>
                xc748673057861a797275CD8A068AbB95A902e8de
              </Typography>
            </Box>
            <Box className={styles.address_coppy}>
              <Button className={styles.btn_address_coppy}>Copy Address</Button>
            </Box>
          </Box>
          <Box className={styles.token_header}>Follow Us</Box>
          <Box className={styles.social_medias}>
              <Box className={styles.media}><Image src={telegramImg.src} width={50} height={50} alt="" /></Box>
              <Box className={styles.media}><Image src={twitterImg.src} width={50} height={50} alt="" /></Box>
              <Box className={styles.media}><Image src={socialMedia2.src} width={50} height={50} alt="" /></Box>
              <Box className={styles.media}><Image src={socialMedia1.src} width={50} height={50} alt="" /></Box>
              <Box className={styles.media}><Image src={facebookImg.src} width={50} height={50} alt="" /></Box>
              <Box className={styles.media}><Image src={instargramImg.src} width={50} height={50} alt="" /></Box>
          </Box>
          <Box className={styles.token_actions}>
            <Button className={styles.action}>View Chart</Button>
            <Button className={styles.action}>Check BSC SCAN</Button>
            <Button className={styles.action}>ETH/BSC Bridge</Button>
            <Button className={styles.action}>How ToTo Buy Baby Doge</Button>
          </Box>
        </Box>
      </Container>

      <Grid container sx={{ height: "100%" }}>
        <Grid item md={6} sx={{ height: "100%" }}>
          <Box className={styles.buy_doge_swap}></Box>
        </Grid>
        <Grid item md={6} sx={{ height: "100%" }}>
          <Box className={styles.buy_doge_nft}>
         
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Token;
