import React from 'react';
import { Container, Typography, Box, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import LifeProducts from "../../components/products/LifeProducts";
import { UIProvider } from "../../context/ui";
import AppDrawer from "../../components/drawer";

function Life() {
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
              <Typography variant="h1" textAlign="center">Life's Illusions</Typography>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ p: 2 }}>
              <Typography variant="h5" textAlign="center">
              Illusions about life are those illusions that make our lives less pleasant and that,
               if not fulfilled, make our life a nightmare.
              </Typography>
            </Box>
            <LifeProducts />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
    )
}

export default Life;