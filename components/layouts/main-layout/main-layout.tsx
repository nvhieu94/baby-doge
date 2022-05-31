import React from "react";
import { LayoutProps } from "@/models/index";
import { Stack, Box } from "@mui/material";
import Header from "../../header";

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
    </Stack>
  );
};

export default MainLayout;
