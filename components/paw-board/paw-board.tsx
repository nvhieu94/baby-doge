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
      "Marketing push to spread awareness",
      "Website launch",
      "5000 telegram members",
      "Meme development",
      "Baby Doge is Born!",
    ],
  },
  {
    title: "PHASE 2",
    description: [
      "Influencer marketing push",
      "Listing on coin gecko",
      "Listing on coin market cap",
      "25,000 telegram members",
      "25,000 holders",
      "Third party audit",
      "Voluntary donation for community + charity partnership",
    ],
  },
  {
    title: "PHASE 3",
    description: [
      "100,000 holders",
      "100,000 telegram members",
      "Air drop",
      "Large influencer marketing push",
      "More memes from community",
      "Baby Doge Swap Credit Card For Crypto Integration.",
    ],
  },
  {
    title: "PHASE 4",
    description: [
      "150,000 holders",
      "increase marketing",
      "Baby Doge Swap",
      "Add way more memes",
      "Website Redesign",
      "Baby Doge Paw (Paw wallet tracker )",
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
