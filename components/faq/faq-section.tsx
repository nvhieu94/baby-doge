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
    answer: "Increase slippage to 12%",
  },
  {
    question: "How can I help?",
    answer: "",
  },
  {
    question: "What is Baby Doge Coin?",
    answer: "",
  },
  {
    question: "What are the fees?",
    answer: "",
  },
  {
    question: "What do you mean by decentralized?",
    answer: "",
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
