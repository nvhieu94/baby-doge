import React from "react";
import { Box, Container } from "@mui/system";
import {
  Button,
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import styles from "@/styles/Home.module.scss";
import { useForm } from "react-hook-form";
import TextareaAutosize from '@mui/base/TextareaAutosize';
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = () => {

  }
  return (
    <Box className={styles.contact_us}>
      <Container>
        <Typography className={styles.title}>CONTACT US</Typography>
        <Box className={styles.contact_form} py={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            sx={{
              justifyContent: "center",
            }}
             spacing={2}
          >
            <Grid item md={4} xs={12}>
              <FormControl
                className={styles.formControl}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background:'#1A0E31',
                    color: '#ffffff',
                  },
                }}
              >
                <OutlinedInput
                  id="name"
                    placeholder="Name"
                  {...register("name", {
                    required: "Name is required!",
                  })}
                  error={Boolean(errors?.name)}
                />
                <FormHelperText error id="outlined-email-helper-text">
                  {errors?.name?.message}
                </FormHelperText>
              </FormControl>
              <FormControl
                className={styles.formControl}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background:'#1A0E31',
                    color: '#ffffff',
                  },
                }}
              >

                <OutlinedInput
                  id="email"
                  placeholder="Email"
                  sx={{color: '#ffffff'}}
                  {...register("email", {
                    required: "Email is required",
                  })}
                  error={Boolean(errors?.email)}
                />
                <FormHelperText error id="outlined-email-helper-text">
                  {errors?.email?.message}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12}>
              <FormControl
                className={styles.formControl}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    background:'#1A0E31',
                    color: '#ffffff',
                    "& > fieldset": {
                        height: '146px',
                    },
                    "& > textarea": {
                        height:'108px'
                    }
                  },
                }}
              >
                <OutlinedInput
                  id="content"
                  {...register("message", {})}
                  placeholder="Message"
                  inputComponent="textarea"
                  inputProps={{ rows: "12" }}
                  sx={{color: '#ffffff'}}
                  error={Boolean(errors?.message)}
                /> 
                <FormHelperText error id="outlined-email-helper-text">
                  {errors?.message?.message}
                </FormHelperText>
              </FormControl>
              <Box sx={{textAlign:'end'}}><Button type="submit" className={styles.btn_primary}>Send</Button></Box>
            </Grid>
          </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
