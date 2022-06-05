import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import styles from "./paw-board-card.module.scss";

export interface IPawBoardCardProps {
  item: any;
}

const PawBoardCardComponent = (props: IPawBoardCardProps) => {
  const { item } = props;

  return (
    <Box className={styles.card_container}>
      <Box className={styles.title}>{item.title}</Box>
      <Box className={styles.description}>
        <ul>
          {item.description &&
            item.description.map((a: string, index: number) => (
              <li key={index}>{a}</li>
            ))}
        </ul>
      </Box>
    </Box>
  );
};

export default PawBoardCardComponent;
