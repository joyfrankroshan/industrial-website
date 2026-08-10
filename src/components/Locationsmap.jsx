import { Box } from "@mui/material";

// IMPORTANT: put the screenshot file in your project's `public` folder as:
//   public/map-locations.png
// Then it's served at the root URL "/map-locations.png" automatically —
// no import statement needed, no bundler path issues, works the same in
// CRA, Vite, and Next.js (Next: keep it in /public too).
const MAP_IMAGE_SRC = "/map-locations.png";

export default function LocationsMap() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        borderRadius: "16px",
        overflow: "hidden",
        
        // Image's natural ratio is 1940x890 (~2.18:1). Locking the box to
        // this ratio keeps it from ever looking squashed or over-tall as
        // the width changes across breakpoints.
        aspectRatio: "1990 / 890",
       
       
      }}
    >
      <Box
        component="img"
        src={MAP_IMAGE_SRC}
        alt="Locations covered map"
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}