import React from 'react';
import { Container, Typography, Box, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import SocialProducts from "../../components/products/SocialProducts";
import { UIProvider } from "../../context/ui";
import AppDrawer from "../../components/drawer";

function Social() {
    return (
        <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h1" textAlign="center">Social's Illusions</Typography>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h5" textAlign="center">Illusions about social relationships often come with depression and anxiety
               and are more common in people with a certain social status.</Typography>
            </Box>
            <SocialProducts />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
    )
}

export default Social;