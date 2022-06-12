import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.scss";

import Image from "next/image";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import boneIcon from '@/assets/icons/bx-bone.svg'
import homeCircleIcon from '@/assets/icons/bx-home-circle.svg'

const RewardsSectionComponent = () => {
  return (
    <Box className={styles.rewards_section}>
      <Container>
          <Box className={styles.rewards_header}>REWARDS IN YOUR WALLET</Box>
          <Box className={styles.rewards_subdesc}>Lucky Floki is cute but with a lot of BITE! $Lucky Floki is a deflationary token designed to become more scarce over time. All holders of Baby Doge will earn more baby doge that is automatically sent to your wallet by simply holding Baby Doge coins in your wallet. Watch the amount of baby doge grow in your wallet as baby doge coin holders automatically receive a 5% fee from every transaction that happens on the Baby Doge network. The community receives more baby doge coins from the fees generated each transaction.</Box>
        <Grid container>
          <Grid item md={6}>
              <Box className={styles.left_col}>
              <List sx={{ width: "100%", bgcolor: "#141245" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar><Image src={boneIcon.src} width={42} height={42} alt='' /></ListItemAvatar>
                  <ListItemText
                    sx={{fontSize:" 16px"}}
                    primary="5%"
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
                            "of each transaction added to liquidity pool"
                          }
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  </ListItem>
                  </List>
              </Box>
          </Grid>
          <Grid item md={6}>
          <Box>
              <List sx={{ width: "100%", bgcolor: "#141245" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar><Image src={homeCircleIcon.src} width={42} height={42} alt='' /></ListItemAvatar>
                  <ListItemText
                    sx={{fontSize:" 16px"}}
                    primary="5%"
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
                            "of each transaction redistributed to holders"
                          }
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

export default RewardsSectionComponent;
