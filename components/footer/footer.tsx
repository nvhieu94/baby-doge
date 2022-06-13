import React from "react";
import { Box, Container } from "@mui/system";
import { Grid, Typography, FormHelperText, Button } from "@mui/material";
import Image from "next/image";
import styles from "@/styles/Footer.module.scss";
import floKiFooter from "@/assets/images/floki-footer.png";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useForm } from "react-hook-form";
import icon from "@/assets/icons/bx-paper-plane.svg";
import facebookImg from "@/assets/images/facebook.svg";
import instargramImg from "@/assets/images/instargram.svg";
import telegramImg from "@/assets/images/telegram.svg";
import twitterImg from "@/assets/images/twitter.svg";
import socialMedia2 from "@/assets/images/social-media-2.svg";
import socialMedia1 from "@/assets/images/social-media-1.svg";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: { email: "" },
  });

  const onSubmit = () => {};

  return (
    <Box className={styles.footer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4} xs={12} className={styles.left_col}>
            <Typography component="p" className={styles.footer_title}>
              SUBSCRIBE TO OUR NEWSLETTER{" "}
            </Typography>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl
                  variant="outlined"
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      background: "#1A0E31",
                      color: "#ffffff",
                    },
                  }}
                >
                  <OutlinedInput
                    id="email"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required!",
                    })}
                    error={Boolean(errors?.email)}
                    endAdornment={
                      <Button type="submit">
                        <Image src={icon.src} alt="" width={24} height={24} />
                      </Button>
                    }
                  />
                  <FormHelperText error id="outlined-email-helper-text">
                    {errors?.email?.message}
                  </FormHelperText>
                </FormControl>
              </form>
            </Box>
            <Box className={styles.join_the_pack}>
              <Typography component="p" className={styles.footer_title}>
                JOIN THE PACK
              </Typography>
              <Box className={styles.social_media}>
                <Box className={styles.media}>
                  <Image src={telegramImg.src} width={23} height={23} alt="" />
                </Box>
                <Box className={styles.media}>
                  <Image src={twitterImg.src} width={23} height={23} alt="" />
                </Box>
                <Box className={styles.media}>
                  <Image src={socialMedia2.src} width={23} height={23} alt="" />
                </Box>
                <Box className={styles.media}>
                  <Image src={socialMedia1.src} width={23} height={23} alt="" />
                </Box>
                <Box className={styles.media}>
                  <Image src={facebookImg.src} width={23} height={23} alt="" />
                </Box>
                <Box className={styles.media}>
                  <Image
                    src={instargramImg.src}
                    width={23}
                    height={23}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Typography className={styles.footer_title}>
                OTHER LINKS
              </Typography>
              <Typography component="p" className={styles.footer_subtitle}>
                Friends of Baby Doge Charuty As seen in
              </Typography>
            </Box>
            <Box py={4}>
              <Typography className={styles.footer_title}>
                CONTACT US
              </Typography>
              <Typography component="p" className={styles.footer_subtitle}>
                Press@@babydogecoin.com
              </Typography>
              <Typography component="p" className={styles.footer_subtitle}>
                Partnerships@babydogecoin.com
              </Typography>
            </Box>
            <Box>
              <Typography className={styles.footer_title}>
                WORK WITH US
              </Typography>
              <Typography component="p" className={styles.footer_subtitle}>
                Jobs@@babydogecoin.com
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box className={styles.footer_icon}>
              <Image src={floKiFooter.src} alt="" width={86} height={86} />
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{ marginBottom: "8px" }}
                className={styles.footer_subtitle}
              >
                Copyright ® 2022 Lucky Floki. All Rights Reserved Privacy Policy -
                Terms & Conditions
              </Typography>
              <Typography component="p" className={styles.footer_subtitle}>
              Lucky Floki is not an investment and created as a meme parody like
                doge. Lucky Floki makes no promises and is not responsible for any
                losses or errors use at your own risk. Lucky Floki is not
                affiliated with DogeCoin.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
