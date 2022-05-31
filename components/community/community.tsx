import React from "react";
import { Box, Container } from "@mui/system";
import { Typography,Button } from "@mui/material";
import styles from "@/styles/Home.module.scss";
const Community = () => {
  return (
    <Box className={styles.community}>
      <Container>
        <Box className={styles.community_content}>
          <Typography className={styles.title} component="p">
            World&apos;s Best Community Coin
          </Typography>
          <Typography className={styles.subtitle} component="p">
            A new crypto birthed by fans of the doge meme community. Simply
            Love, pet, and hold as 5% from each transaction is automatically
            redistributed to baby doge holders. Baby Doge primary utility is
            building a fun meme community to spread awareness of animal
            adoption.
          </Typography>
          <Box className={styles.community_actions}>
              <Button className={styles.action}>Buy On Pancake Swap</Button>
              <Button className={styles.action}>Buy On Uniswap</Button>
          </Box>
        </Box>
        
      </Container>
    </Box>
  );
};
export default Community;
