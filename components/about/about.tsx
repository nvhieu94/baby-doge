import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Image from 'next/image'

import homeHeartIcon from '@/assets/icons/bx-home-heart.svg'
import lockIcon from '@/assets/icons/bx-lock.svg'
import spaIcon from '@/assets/icons/bx-spa.svg'
import transferIcon from '@/assets/icons/bx-transfer.svg'

const AboutComponent = () => {
  return (
    <Box className={styles.about_section}>
      <Container>
        <Grid container>
          <Grid item md={6}>
            <Box className={styles.box_wrapper}>
              <Typography className={styles.about_title}>ABOUT LUCKY FLOKI</Typography>
              <Typography className={styles.subtitle}>
               $LFloki is a deflationary token designed to become more scarce over time. All holders of Lucky Floki will earn more lucky floki that is automatically sent to your wallet by simply holding Lucky Floki coins in your wallet. Watch the amount of lucky floki grow in your wallet as lucky floki coin holders automatically receive a 2% fee from every on chain transaction that happens on the Lucky Floki ecosystem. The community receives more lucky floki coins from the fees generated each transaction.
              </Typography>
              <Typography sx={{marginTop: 2}} className={styles.subtitle}>
              1% of each transaction is used for charity
              </Typography>
              <Typography  sx={{marginTop: 2}} className={styles.subtitle}>
              2% of each transaction redistributed to holders
              </Typography>
              <Box py={4}>
                <Button className={styles.btn_primary}>Buy Uniswap</Button>
              </Box>
              <Box>
                <Button className={styles.btn_primary}>
                  Buy On Pancake Swap
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box py={2}>
              <List sx={{ width: "100%", bgcolor: "#141245" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar><Image src={spaIcon.src} width={40} height={40} alt='' /></ListItemAvatar>
                  <ListItemText
                    sx={{fontSize:" 16px"}}
                    primary="AUTO BURN"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="#FCFCFC"
                          className={styles.subtitle}
                        >
                          The dead wallet holds 9%+ of the supply. That means out of the 2% of the reflections 9% of them will be distributed to the dead wallet each transaction. Thus, coins are burned with each on chain transaction.
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                <ListItemAvatar><Image src={transferIcon.src} width={40} height={40} alt='' /></ListItemAvatar>
                  <ListItemText
                    primary="AUTO-REFLECTIONS"
                    sx={{fontSize:" 16px"}}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="#FCFCFC"
                          className={styles.subtitle}
                        >
                       2% fee of each transaction is redistributed to token holders. That means you can earn more Lucky Floki Coins by holding them in your wallet. (centralized exchanges/wallets may not apply tokenomics)
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                <ListItemAvatar><Image src={lockIcon.src} width={40} height={40} alt='' /></ListItemAvatar>
                  <ListItemText
                    primary="LOCKED LIQUIDITY"
                    sx={{fontSize:" 16px"}}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="#FCFCFC"
                          className={styles.subtitle}
                        >
                          {
                            "Majority of initial LP tokens locked & some burned. (Newly generated LP tokens from the 5% LP fees are not)"
                          }
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <ListItem alignItems="flex-start">
                <ListItemAvatar><Image src={homeHeartIcon.src} width={40} height={40} alt='' /></ListItemAvatar>
                  <ListItemText
                    primary="CHARITY WALLET"
                    sx={{fontSize:" 16px"}}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="#FCFCFC"
                          className={styles.subtitle}
                        >
                        We have a designated charity wallet that receives redistributions that are used to support our charity partners.
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutComponent;
