import { Box, Typography, Chip } from "@mui/material";
import mapImage from "../assets/map-locations.png";

const fontFamily = "Poppins, sans-serif";

export default function LocationsMap() {
  return (
    <Box
      id="location"
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        aspectRatio: "2 / 1",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={mapImage}
        alt="Locations we cover"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      {/* Centered text overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: { xs: 1, sm: 1, md: 2 },
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 1, sm: 1.5, md: 2 },
        }}
      >
        <Chip
          label="Where We Deliver"
          sx={{
            fontFamily,
            fontSize: { xs: "10px", sm: "12px",  },
            height: { xs: 10, sm: 26, md: 20 },
            bgcolor: "#3358D3",
            color: "#fff",
            fontWeight: 500,
          }}
        />

        <Typography
          sx={{
            fontFamily,
            fontWeight: 700,
            lineHeight: 1.15,
            fontSize: { xs: "10px", sm: "22px", md: "30px", lg: "42px" },
          }}
        >
          Locations we cover across Chennai
        </Typography>

        <Typography
          sx={{
            fontFamily,
            fontWeight: 300,
            color: "#5a5a5d",
            fontSize: { xs: "7px", sm: "15px", md: "17px", lg: "18px" },
            maxWidth: { xs: 100, sm: 240, md: 360, lg: 460 },
          }}
        >
          From Sriperumbudur to Manali — our kitchens reach every major
          industrial corridor in and around the city.
        </Typography>
      </Box>
    </Box>
  );
}