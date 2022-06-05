import React from "react";
import { LayoutProps } from "@/models/index";
import { Stack, Box } from "@mui/material";
import Header from "../../header";
import Footer from '../../footer';

const MainLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Stack
      minHeight="100vh"
      sx={{
        position: "relative",
      }}
    >
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </Stack>
  );
};

export default MainLayout;
