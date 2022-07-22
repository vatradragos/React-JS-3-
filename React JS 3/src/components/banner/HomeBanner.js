import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";

export default function HomeBanner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/home-banner.jpg" />
      <BannerContent>
        <Typography variant="h6">Wellcome to the unic</Typography>
        <BannerTitle variant="h4">
          ILLUSION's STORE
        </BannerTitle>

        <BannerDescription variant="subtitle">
        The Illusion Store allows you to buy all kinds of illusions for yourself or your friends.
         The store is divided into four segments of illusions:
          illusions related to life, love, work and social relationships.
        </BannerDescription>

        <BannerShopButton color="primary">
          <Link to='/Life' style={{color: "#fff", textDecoration: "none"}}>
          Shop Now
          </Link>
        </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}