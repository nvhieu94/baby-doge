import React from "react";
import { Box, Container } from "@mui/system";
import { Grid, Typography, FormHelperText, Button } from "@mui/material";
import Image from "next/image";
import styles from "@/styles/Footer.module.scss";
import dogImage from "@/assets/images/dog.png";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useForm } from "react-hook-form";
import icon from "@/assets/icons/bx-paper-plane.svg";
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
          <Grid item md={4} xs={12}>
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
              <Image src={dogImage.src} alt="" width={86} height={86} />
            </Box>
            <Box>
              <Typography
                component="p"
                sx={{ marginBottom: "8px" }}
                className={styles.footer_subtitle}
              >
                Copyright ® 2022 Baby Doge. All Rights Reserved Privacy Policy -
                Terms & Conditions
              </Typography>
              <Typography component="p" className={styles.footer_subtitle}>
                Baby Doge is not an investment and created as a meme parody like
                doge. Baby Doge makes no promises and is not responsible for any
                losses or errors use at your own risk. Baby Doge is not
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