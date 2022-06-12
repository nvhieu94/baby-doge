import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.scss";

import Image from "next/image";
import PawBoardCardComponent from "./paw-board-card";

const data = [
  {
    title: "PHASE 1",
    description: [
      "Design Logo",
      "Telegram + Twitter + Website",
      "Contract creation by Unicrypt",
      "Audited + Whitelist Contest",
    ],
  },
  {
    title: "PHASE 2",
    description: [
      "Presale on Unicrypt",
      "Marketing Campaign + Call session",
      "Listing on Pancakeswap",
      "First 1000 holders",
    ],
  },
  {
    title: "PHASE 3",
    description: [
      "Influencers marketing push",
      "Reach 1500 holders",
      "Apply for Coinmarketcap and Coingecko listing",
      "5000 Telegram members",
    ],
  },
  {
    title: "PHASE 4",
    description: [
      "Reach 2500 holders",
      "Pushing marketing",
      "Add ways more memes",
      "Add way more memes",
      "NFT collections",
    ],
  },
  {
    title: "PHASE 5",
    description: [
      "300,000 Holders",
      "Release Baby Doge Swap.",
      "Release NFT market place, NFT collection.",
      "Give away Tesla to community",
      "Memes. Everywhere.",
      "$750k total donations to dog shelters",
    ],
  },
];

const PawBoardSectionComponent = () => {
  return (
    <Box className={styles.paw_board}>
      <Container>
        <Box className={styles.title}>PAW BOARD</Box>
        <Box className={styles.paw_board_card}>
            <Grid container spacing={4} sx={{justifyContent:'center'}}>
                {data.map((item:any,index:number) => (
                    <Grid item md={4} key={index} sx={{height:'auto', width:'100%'}}>
                        <PawBoardCardComponent item={item} />
                    </Grid>
                ))}

            </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PawBoardSectionComponent;
