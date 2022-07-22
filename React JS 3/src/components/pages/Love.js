import React from 'react';
import { Container, Typography, Box, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import LoveProducts from "../../components/products/LoveProducts";
import { UIProvider } from "../../context/ui";
import AppDrawer from "../../components/drawer";

function Love() {
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
              <Typography variant="h1" textAlign="center">Love's Illusions</Typography>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ p: 2 }}>
              <Typography variant="h5" textAlign="center">Illusions about love are the most painful and hardest to bear.
               That is why they are the most expensive illusions in our store.</Typography>
            </Box>
            <LoveProducts />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
    )
}

export default Love;