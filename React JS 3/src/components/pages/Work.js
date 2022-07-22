import React from 'react';
import { Container, Typography, Box, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import WorkProducts from "../../components/products/WorkProducts";
import { UIProvider } from "../../context/ui";
import AppDrawer from "../../components/drawer";

function Work() {
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
              <Typography variant="h1" textAlign="center">Work's Illusions</Typography>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ p: 2 }}>
              <Typography variant="h5" textAlign="center">Illusions about work and everything that everyday work entails are sometimes funny,
               but other times they can lead to real tragedies.</Typography>
            </Box>
            <WorkProducts />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
    )
}

export default Work;