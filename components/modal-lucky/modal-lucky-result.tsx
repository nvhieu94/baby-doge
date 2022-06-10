import React from "react";
import { Stack, Container, Grid, Button, Typography } from "@mui/material";
import { Box, style } from "@mui/system";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import WheelComponent from "./weel";
import bgImage from "@/assets/images/modal-result-bg.png";
import styles from "./modal-lucky.module.scss";
import DialogActions from "@mui/material/DialogActions";
// import "react-wheel-of-prizes/dist/index.css";
export interface IModalLucky {
  open: boolean;
  onClose: () => void;
  text:string;
}
export const ModalLuckyResult = (props: IModalLucky) => {
  const { open, onClose,text } = props;

  return (
    <Dialog
      open={open}
      sx={{
        maxWidth: "xl",
        "& .MuiPaper-root": {
          borderRadius: "32px",
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "545px",
          width: "915px",
        },
      }}
    >
      <Box py={1}>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              backgroundColor:'#fff',
              color:'#1A43E9',
              // color: (theme) => theme.palette.grey[500],
              '&::hover': {
                color:'#1A43E9'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </Box>
      <DialogContent
        className={styles.modalResultContent}
        sx={{
         width: 600,
          // color: '#1A43E9',
          fontWeight: "500, Medium",
          fontSize: "40px",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "40px", color: "#ffffff" }}>
            XIN CHÚC MỪNG
          </Typography>
          <Typography sx={{ fontSize: "40px", color: "#ffffff" }}>
            bạn đã trúng thưởng
          </Typography>
        </Box>

        <Box
          className={styles.textContent}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography>{text}</Typography>
          {/* <Typography>500.000K</Typography> */}
        </Box>
      </DialogContent>
      <DialogActions className={styles.dialogModalResultAction}>
        <Button onClick={onClose} variant="contained">Xác nhận</Button>
      </DialogActions>
    </Dialog>
  );
};
