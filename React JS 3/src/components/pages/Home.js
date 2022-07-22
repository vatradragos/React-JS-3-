import React from 'react';
import { Container, Typography, Box, Stack} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
import HomeBanner from "../../components/banner/HomeBanner";
import HomeProducts1 from "../../components/products/HomeProducts1";
import HomeProducts2 from "../../components/products/HomeProducts2";
import HomeProducts3 from "../../components/products/HomeProducts3";
import HomeProducts4 from "../../components/products/HomeProducts4";
import { UIProvider } from "../../context/ui";
import AppDrawer from "../../components/drawer";
import Promotions from "../../components/promotions";

function Home() {
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
            <HomeBanner />
            <Promotions />

            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Life's Illusions</Typography>
            </Box>
            <HomeProducts1 />

            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Love's Illusions</Typography>
            </Box>
            <HomeProducts2 />

            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Work's Illusions</Typography>
            </Box>
            <HomeProducts3 />

            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Social's Illusions</Typography>
            </Box>
            <HomeProducts4 />

            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
    )
}

export default Home;