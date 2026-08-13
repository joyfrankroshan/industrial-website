import { Box } from "@mui/material";

// IMPORTANT: put the screenshot file in your project's `public` folder as:
//   public/map-locations.png
const MAP_IMAGE_SRC = "/map-locations.png";

export default function LocationsMap() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "16px",
        overflow: "hidden",
        bgcolor: "#eef2f6", // fills any letterbox space from "contain"

        // This image's natural ratio is ~1584x672 (~2.36:1) — wider and
        // flatter than the previous one, so it reads as more rectangular
        // by default without needing much cropping.
        aspectRatio: { xs: "16 / 9", sm: "2.1 / 1", md: "2.36 / 1" },

        maxHeight: { xs: 220, sm: 300, md: 380 },
      }}
    >
      <Box
        component="img"
        src={MAP_IMAGE_SRC}
        alt="Locations covered map"
        sx={{
          width: "100%",
          height: "105%",
          display: "block",
          // "contain" shows the full image — every pin (Krishnagiri to
          // Mamandur, Way to Nellore arrow) stays visible, no cropping
          // objectFit: "contain",
        }}
      />
    </Box>
  );
}