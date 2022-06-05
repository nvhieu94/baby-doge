import React from "react";
import { Box, Container } from "@mui/system";
import { Typography, Button, Grid } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
///image
import facebookImg from "@/assets/images/facebook.svg";
import instargramImg from "@/assets/images/instargram.svg";
import telegramImg from "@/assets/images/telegram.svg";
import twitterImg from "@/assets/images/twitter.svg";
import socialMedia2 from "@/assets/images/social-media-2.svg";
import socialMedia1 from "@/assets/images/social-media-1.svg";
import tokendoge from '@/assets/images/tokendog.png';
import imageDoge from '@/assets/images/baby-doge.png';

const Token = () => {
  return (
    <Box className={styles.token}>
      

      <Grid container sx={{ height: "100%" }}>
        <Grid item md={6}  xs={12} className={styles.token_left_col}>
          <Box className={styles.buy_doge_swap}>
              <Box className={styles.image_token}>
                  <Image src={tokendoge.src} alt='' width={ 278} height={214} />
                  <Box className={styles.token_title}>Baby Doge Swap</Box>
                  <Box className={styles.token_sutitle}>
                    <p>We plan to offer offer projects & their community as low as 0% </p>
                    <p>swap fees for providing liquidity</p>
                  </Box>
                  <Box className={styles.token_action}> <Button className={styles.btn_primary}>Early Sign Up</Button></Box>
              </Box>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} className={styles.token_right_col} sx={{ height: "100%",backgroundColor:'#141245' }}>
          <Box className={styles.buy_doge_nft}>
          
            <Box className={styles.image_token}>
                <Image src={imageDoge.src} alt='' width={ 180.62} height={214}  />
                <Box className={styles.token_title}>Baby Doge NFT is here</Box>
                <Box className={styles.token_sutitle}><p>Baby Doge NFT SOLD OUT and is LIVE</p></Box>
                <Box className={styles.token_action}> <Button className={styles.btn_primary}>Meet Baby Doge NFT</Button></Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Token;
