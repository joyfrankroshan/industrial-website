import { Box } from "@mui/material";

// Wrap the map image responsively.
// - Scales fluidly with the container (SVG viewBox already handles this)
// - On small screens, labels can get cramped, so we scale up min-height
//   and let it scroll-zoom slightly, OR hide labels below sm and rely on tap/hover.

export default function ResponsiveLocationsMap() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        mx: "auto",
        position: "relative",
        aspectRatio: "1200 / 800", // keeps proportions on all screens
        "& img, & svg": {
          width: "100%",
          height: "100%",
          display: "block",
        },
        // On small screens, zoom slightly + allow horizontal scroll
        // so pins/labels don't overlap or get unreadably small
        [theme => theme.breakpoints.down("sm")]: {
          overflowX: "auto",
          "& img, & svg": {
            minWidth: "700px", // never shrink below this so labels stay legible
            width: "auto",
            height: "100%",
          },
        },
      }}
    >
      <img src="/assets/dummy-map-bg-with-places.svg" alt="Locations covered map" />
    </Box>
  );
}