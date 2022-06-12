import React from "react";
import { Box, Container } from "@mui/system";
import { Typography,Button } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import styles from "@/styles/Home.module.scss";

import Image from "next/image";
import facebookImg from "@/assets/images/facebook.svg";
import instargramImg from "@/assets/images/instargram.svg";
import telegramImg from "@/assets/images/telegram.svg";
import twitterImg from "@/assets/images/twitter.svg";
import socialMedia2 from "@/assets/images/social-media-2.svg";
import socialMedia1 from "@/assets/images/social-media-1.svg";
import tokendoge from '@/assets/images/tokendog.png';
import imageDoge from '@/assets/images/baby-doge.png';

const Community = () => {
  return (
    <Box className={styles.community}>
      <Container>
        <Box className={styles.community_content}>
          <Typography className={styles.community_title} component="p">
            World&apos;s Best Community Coin
          </Typography>
          <Typography className={styles.subtitle} component="p">
          {`LuckyFloki ("Lfloki") is a dog-themed coin meme. However, it names "a new trend" instead of a coin meme .This is a cryptocurrency that was born by fans and members of the Shiba Inu (SHIB) community. The coin is named after Elon Musk&apos;s Shiba Inu.`}
          </Typography>
          <Box className={styles.community_actions}>
              <Button className={`  ${styles.btn_primary} `}>Buy On Pancake Swap</Button>
              <Button className={`  ${styles.btn_primary} `}>Buy On Uniswap</Button>
          </Box>
        </Box>
        
      </Container>
      <Box className={styles.crypto_section_container}>
          <Container className={styles.position_relative}>
              <Box className={styles.crypto_section}>
                  <Box className={styles.crypto_wrapper}>
                      <Box className={styles.crypto_address_container}>
                          <Box className={styles.crypto_input_select}>
                              <Select
                                className={styles.select_address}
                                displayEmpty
                                value={1}
                                input={<OutlinedInput sx={{ color: "#fff", width: 150 }} />}
                                inputProps={{ "aria-label": "Without label" }}
                              >
                                <MenuItem disabled value={1}>
                                  BSC ADDRESS
                                </MenuItem>
                              </Select>
                              <input type="text" value="0xc748673057861a797275CD8A068AbB95A902e8de" id="CryptoAddress" disabled />
                          </Box>
                          <Button className={`  ${styles.btn_primary} `}>Copy Address</Button>
                      </Box>
                      <Box className={styles.crypto_section_header}>Follow Us</Box>
                      <Box className={styles.socmed_wrapper}>
                      <Box className={styles.media}>
                         <a  href="https://t.me/luckyflokiglobal"><Image src={telegramImg.src} width={50} height={50} alt="" /></a>
                        </Box>
                        <Box className={styles.media}>
                          <a href="https://twitter.com/luckyflokicoins">    <Image src={twitterImg.src} width={50} height={50} alt="" /></a>
                      
                        </Box>
                        <Box className={styles.media}>
                        <a href="https://solidproof.io/"><Image src={socialMedia2.src} width={50} height={50} alt="" /></a>
                        </Box>
                        <Box className={styles.media}>
                        <a href="#"><Image src={socialMedia1.src} width={50} height={50} alt="" /></a>
                        </Box>
                        <Box className={styles.media}>
                        <a href="#"><Image src={facebookImg.src} width={50} height={50} alt="" /></a>
                        </Box>
                        <Box className={styles.media}>
                        <a href="#"><Image src={instargramImg.src} width={50} height={50} alt="" /></a>
                        </Box>
                        
                      </Box>
                      <Box className={styles.crypto_btn_group}>
                          <Button className={styles.btn_primary}>View Chart</Button>
                          <Button className={styles.btn_primary}>Check BSC SCAN</Button>
                          <Button className={styles.btn_primary}>ETH/BSC Bridge</Button>
                          <Button className={styles.btn_primary}>How ToTo Buy Baby Doge</Button>
                         
                      </Box>
                  </Box>
              </Box>
          </Container>
      </Box>
    </Box>
  );
};
export default Community;
