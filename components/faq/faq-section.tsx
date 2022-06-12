import React from "react";
import { Box, Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import styles from "@/styles/Home.module.scss";

import Image from "next/image";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummaryCustom = styled((props: AccordionSummaryProps) => (
  <AccordionSummary
    expandIcon={
      <ExpandMoreIcon sx={{ fontSize: "0.9rem", color: "#ffffff" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#141245" : "#141245",
  //   flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //   padding: theme.spacing(2),
  borderTop: "none",
  borderBottom: "1px solid #FCFCFC",
  backgroundColor: "#141245",
  padding: "10px 40px 20px 40px",
}));

const data = [
  {
    question: "How to fix insufficient output on pancake swap?",
    answer: "Increase slippage to 10",
  },
  {
    question: "How can I help?",
    answer: "Tell your friends & family, about lucky floki. Social media is a wonderful place. You can also email your proposal to ….",
  },
  {
    question: "What is Lucky Floki Coin?",
    answer: "Despite the name Lucky Floki Coin is actually a fun collectible token built on Binance smart chain with the purpose to spread awareness of animal adoption. Originally created as a meme joke with 1 billion supply and deflationary mechanics as oppose to traditional inflationary/fixed supply. Lucky Floki supply is decreased with each transaction 10% of the supply has been burned so far. Why print when you can burn?",
  },
  {
    question: "What are the fees?",
    answer: "Every transaction has a 9% fee with 2% going to the holders,3% for marketing, 3% for develop and 1% for charity . The generated LP tokens are used for burns & powering the project.",
  },
  {
    question: "What do you mean by decentralized?",
    answer: "It means you don't have to trust any central organization or person the way you would a bank. The developers nor team can seize your funds, but they also can't return them if you send them to the wrong address.",
  },
];

const FaqSctionComponent = () => {
  const [expanded, setExpanded] = React.useState<number | false>(false);
  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Box className={styles.faq_section}>
      <Container>
        <Box className={styles.title}>FAQ</Box>
        <Box className={styles.faq_list}>
          {data.map((item: any, index: number) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummaryCustom
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography
                  sx={{
                    color: expanded === index ? "#8D88FF" : "#ffffff",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummaryCustom>
              <AccordionDetails>
                {item.answer && (
                  <ul>
                    <li style={{ color: "#ffffff" }}>
                      {" "}
                      <Typography
                        sx={{
                          color: "#ffffff",
                        }}
                      >
                        {item.answer}
                      </Typography>
                    </li>
                  </ul>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSctionComponent;
