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
          <Box className={styles.rewards_subdesc}>$LFloki is a deflationary token designed to become more scarce over time. All holders of Lucky Floki will earn more lucky floki that is automatically sent to your wallet by simply holding Lucky Floki coins in your wallet. Watch the amount of lucky floki grow in your wallet as lucky floki coin holders automatically receive a 2% fee from every on chain transaction that happens on the Lucky Floki ecosystem. The community receives more lucky floki coins from the fees generated each transaction.
</Box>
        <Grid container>
          <Grid item md={6}>
              <Box className={styles.left_col}>
              <List sx={{ width: "100%", bgcolor: "#141245" }}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar><Image src={boneIcon.src} width={42} height={42} alt='' /></ListItemAvatar>
                  <ListItemText
                    sx={{fontSize:" 16px"}}
                    primary="1%"
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
                            "of each transaction is used for charity"
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
                    primary="2%"
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
